import { createLeadFromInternal } from '../services/crmAdmin'
import { isEmailConfigured, sendContactNotification } from '../services/emailService'
import { queryOne } from '../db/pool'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function apiErrorMessage(err: unknown): string {
  if (err && typeof err === 'object' && 'statusCode' in err) return String((err as { message?: string }).message ?? 'Request failed')
  if (err instanceof Error) return err.message
  return 'Request failed'
}

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig(event)
    const body = await readBody(event)

    const name = String(body?.name ?? '').trim()
    const email = String(body?.email ?? '').trim()
    const phone = body?.phone ? String(body.phone).trim() : undefined
    const subject = body?.subject ? String(body.subject).trim() : undefined
    const message = String(body?.message ?? '').trim()
    const clientId = String(body?.clientId ?? config.public.clientId ?? '').trim()

    if (!name || name.length > 200) {
      throw createError({ statusCode: 400, message: 'Name is required.' })
    }
    if (!email || !isValidEmail(email)) {
      throw createError({ statusCode: 400, message: 'A valid email is required.' })
    }
    if (phone && phone.length > 30) {
      throw createError({ statusCode: 400, message: 'Phone number is too long.' })
    }
    if (subject && subject.length > 200) {
      throw createError({ statusCode: 400, message: 'Subject is too long.' })
    }
    if (!message || message.length > 5000) {
      throw createError({ statusCode: 400, message: 'Message is required.' })
    }
    if (!clientId) {
      throw createError({ statusCode: 503, message: 'Contact form is not configured (NUXT_PUBLIC_CLIENT_ID missing).' })
    }

    const client = await queryOne<{ id: string; email: string }>(
      'SELECT id, email FROM clients WHERE id = $1 AND active = TRUE',
      [clientId],
    )
    if (!client) {
      throw createError({ statusCode: 404, message: 'Client not found. Check NUXT_PUBLIC_CLIENT_ID on Vercel.' })
    }

    if (!isEmailConfigured()) {
      console.error('[contact] Email not configured — set RESEND_API_KEY and RESEND_FROM_EMAIL on Vercel.')
    }

    const leadNotes = [
      `Email: ${email}`,
      subject ? `Subject: ${subject}` : null,
      '',
      message,
    ].filter((line) => line !== null).join('\n')

    const lead = await createLeadFromInternal({
      client_id: clientId,
      customer_name: name,
      email,
      phone: phone ?? null,
      container_type: subject ?? null,
      source: 'website',
      status: 'new',
      notes: leadNotes,
    })

    const notifyEmail = (
      process.env.NOTIFICATION_EMAIL?.trim()
      || config.notificationEmail?.trim()
      || 'james@roseberrycontainers.com'
      || client.email?.trim()
    )

    if (!notifyEmail) {
      throw createError({ statusCode: 503, message: 'No notification email configured.' })
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || config.resendFromEmail?.trim() || ''
    console.info(`[contact] Notifying ${notifyEmail} via Resend from ${fromEmail}`)

    try {
      const resendId = await sendContactNotification({
        from: { name, email },
        phone,
        subject,
        message,
        notifyEmail,
      })
      console.info(`[contact] Resend accepted message ${resendId ?? '(no id)'} to ${notifyEmail}`)
      setResponseStatus(event, 201)
      return { success: true, leadId: lead?.id, emailDelivered: true, emailSentTo: notifyEmail, resendId }
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : 'Email delivery failed'
      console.error(`[contact] Email notification failed (to ${notifyEmail}):`, errMessage)
      setResponseStatus(event, 201)
      return {
        success: true,
        leadId: lead?.id,
        emailDelivered: false,
        emailSentTo: notifyEmail,
        warning: 'Your enquiry was received but we could not send the email notification. We will still follow up.',
        emailError: errMessage,
      }
    }
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'statusCode' in err) throw err

    const message = apiErrorMessage(err)
    console.error('[contact] Unhandled error:', err)
    throw createError({ statusCode: 500, message: `Contact form failed: ${message}` })
  }
})
