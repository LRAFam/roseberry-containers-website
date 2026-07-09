import { Resend } from 'resend'

let resendClient: Resend | null = null

function getResend(): Resend | null {
  const apiKey = (process.env.RESEND_API_KEY ?? '').trim()
  if (!apiKey) return null
  if (!resendClient) resendClient = new Resend(apiKey)
  return resendClient
}

/** Strip accidental "Name <email>" wrappers from env vars pasted into Vercel. */
export function parseEmailAddress(raw: string | undefined): string {
  const trimmed = (raw ?? '').trim()
  if (!trimmed) return ''
  const angle = trimmed.match(/<([^>]+)>/)
  if (angle?.[1]) return angle[1].trim()
  return trimmed
}

export function getResendConfig() {
  const apiKey = (process.env.RESEND_API_KEY ?? '').trim()
  const fromEmail = parseEmailAddress(process.env.RESEND_FROM_EMAIL)
  return { apiKey, fromEmail }
}

export function isEmailConfigured(): boolean {
  const { apiKey, fromEmail } = getResendConfig()
  return !!(apiKey && fromEmail)
}

function getFromAddress(label = 'Roseberry Containers'): string {
  const email = getResendConfig().fromEmail
  return `${label} <${email}>`
}

function formatResendError(error: unknown): string {
  if (!error) return 'Unknown Resend error'
  if (typeof error === 'string') return error
  if (error instanceof Error) return error.message
  if (typeof error === 'object') {
    const err = error as { message?: string; name?: string }
    if (err.message) return err.message
    return JSON.stringify(error)
  }
  return String(error)
}

export async function sendContactNotification(opts: {
  from: { name: string; email: string }
  phone?: string
  subject?: string
  message: string
  notifyEmail: string
}): Promise<string | null> {
  const { apiKey, fromEmail } = getResendConfig()
  if (!apiKey || !fromEmail) {
    throw new Error('Email not configured — set RESEND_API_KEY and RESEND_FROM_EMAIL on Vercel')
  }

  const resend = getResend()
  if (!resend) {
    throw new Error('Could not initialise Resend client')
  }

  const subjectLine = opts.subject ? `New Enquiry: ${opts.subject}` : 'New Website Enquiry'
  const text = [
    `Name: ${opts.from.name}`,
    `Email: ${opts.from.email}`,
    opts.phone ? `Phone: ${opts.phone}` : null,
    opts.subject ? `Subject: ${opts.subject}` : null,
    '',
    opts.message,
  ].filter(Boolean).join('\n')

  const { data, error } = await resend.emails.send({
    from: getFromAddress(),
    to: [opts.notifyEmail],
    replyTo: opts.from.email,
    subject: subjectLine,
    text,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(opts.from.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(opts.from.email)}">${escapeHtml(opts.from.email)}</a></p>
      ${opts.phone ? `<p><strong>Phone:</strong> ${escapeHtml(opts.phone)}</p>` : ''}
      ${opts.subject ? `<p><strong>Subject:</strong> ${escapeHtml(opts.subject)}</p>` : ''}
      <hr />
      <p>${escapeHtml(opts.message).replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    throw new Error(formatResendError(error))
  }

  if (!data?.id) {
    throw new Error('Resend accepted the request but returned no message id')
  }

  return data.id
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
