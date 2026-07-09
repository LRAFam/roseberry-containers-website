import { isEmailConfigured } from '../services/emailService'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  return {
    ok: true,
    databaseConfigured: !!(config.databaseUrl || process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL),
    jwtConfigured: !!config.siteJwtSecret,
    clientIdConfigured: !!config.public.clientId,
    emailConfigured: isEmailConfigured(),
    contactReady: !!(
      (config.databaseUrl || process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL)
      && config.public.clientId
    ),
  }
})
