import { queryOne } from '../../db/pool'
import { verifyPassword } from '../../utils/password'
import { setSiteToken } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  if (!config.databaseUrl && !process.env.DATABASE_URL && !process.env.DATABASE_PUBLIC_URL) {
    throw createError({
      statusCode: 503,
      message: 'Server misconfiguration: DATABASE_URL is not set on the website deployment.',
    })
  }

  if (!config.siteJwtSecret) {
    throw createError({
      statusCode: 503,
      message: 'Server misconfiguration: SITE_JWT_SECRET is not set on the website deployment.',
    })
  }

  const body = await readBody(event)
  const apiKey = String(body?.api_key ?? '').trim()
  const password = String(body?.password ?? '').trim()

  if (!apiKey || !password) {
    throw createError({ statusCode: 401, message: 'API key and password are required.' })
  }

  try {
    const client = await queryOne<{
      id: string
      dashboard_password_hash: string | null
    }>(
      'SELECT id, dashboard_password_hash FROM clients WHERE api_key = $1 AND active = TRUE',
      [apiKey],
    )

    if (!client?.dashboard_password_hash || !verifyPassword(password, client.dashboard_password_hash)) {
      throw createError({ statusCode: 401, message: 'Incorrect password.' })
    }

    setSiteToken(event, client.id)
    return { success: true }
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'statusCode' in err) throw err

    const message = err instanceof Error ? err.message : 'Authentication failed.'
    console.error('[admin/auth]', message)

    if (message.includes('DATABASE_URL')) {
      throw createError({ statusCode: 503, message: 'Server misconfiguration: DATABASE_URL is not set.' })
    }

    throw createError({ statusCode: 500, message: 'Database connection failed. Check DATABASE_URL on Vercel.' })
  }
})
