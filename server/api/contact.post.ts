import { createLeadFromInternal } from '../services/crmAdmin'
import { isEmailConfigured, sendContactNotification } from '../services/emailService'
import { queryOne } from '../db/pool'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default defineEventHandler(async (event) => {
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
    throw createError({ statusCode: 503, message: 'Contact form is not configured.' })
  }

  const client = await queryOne<{ id: string; email: string }>(
    'SELECT id, email FROM clients WHERE id = $1 AND active = TRUE',
    [clientId],
  )
  if (!client) {
    throw createError({ statusCode: 404, message: 'Client not found.' })
  }

  if (!isEmailConfigured()) {
    console.error('[contact] Email not configured — set RESEND_API_KEY and RESEND_FROM_EMAIL on the website deployment.')
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

  const notifyEmail = process.env.NOTIFICATION_EMAIL ?? client.email

  try {
    await sendContactNotification({
      from: { name, email },
      phone,
      subject,
      message,
      notifyEmail,
    })
    setResponseStatus(event, 201)
    return { success: true, leadId: lead?.id, emailDelivered: true }
  } catch (err: unknown) {
    const errMessage = err instanceof Error ? err.message : 'Email delivery failed'
    console.error('[contact] Email notification failed:', errMessage)
    setResponseStatus(event, 201)
    return {
      success: true,
      leadId: lead?.id,
      emailDelivered: false,
      warning: 'Your enquiry was received but we could not send the email notification. We will still follow up.',
    }
  }
})
