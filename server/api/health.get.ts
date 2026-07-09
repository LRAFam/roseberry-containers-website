import { getResendConfig, isEmailConfigured } from '../services/emailService'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const resend = getResendConfig()
  return {
    ok: true,
    databaseConfigured: !!(config.databaseUrl || process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL),
    jwtConfigured: !!config.siteJwtSecret,
    clientIdConfigured: !!config.public.clientId,
    emailConfigured: isEmailConfigured(),
    resendFromEmail: resend.fromEmail || null,
    notificationEmail: (process.env.NOTIFICATION_EMAIL ?? config.notificationEmail ?? 'james@roseberrycontainers.com').trim() || null,
    contactReady: !!(
      (config.databaseUrl || process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL)
      && config.public.clientId
    ),
  }
})
