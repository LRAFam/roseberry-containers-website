import { Resend } from 'resend'

let resendClient: Resend | null = null

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  if (!resendClient) resendClient = new Resend(apiKey)
  return resendClient
}

export function isEmailConfigured(): boolean {
  return !!(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL)
}

function getFromAddress(label = 'Roseberry Containers'): string {
  const email = process.env.RESEND_FROM_EMAIL!
  return `"${label}" <${email}>`
}

export async function sendContactNotification(opts: {
  from: { name: string; email: string }
  phone?: string
  subject?: string
  message: string
  notifyEmail: string
}): Promise<string | null> {
  const resend = getResend()
  if (!resend) {
    throw new Error('Email not configured — set RESEND_API_KEY and RESEND_FROM_EMAIL')
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
      <p><strong>Name:</strong> ${opts.from.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${opts.from.email}">${opts.from.email}</a></p>
      ${opts.phone ? `<p><strong>Phone:</strong> ${opts.phone}</p>` : ''}
      ${opts.subject ? `<p><strong>Subject:</strong> ${opts.subject}</p>` : ''}
      <hr />
      <p>${opts.message.replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    throw new Error(error.message)
  }

  return data?.id ?? null
}
