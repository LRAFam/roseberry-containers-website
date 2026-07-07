import { queryOne } from '../../db/pool'
import { verifyPassword } from '../../utils/password'
import { setSiteToken } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const apiKey = String(body?.api_key ?? '').trim()
  const password = String(body?.password ?? '').trim()

  if (!apiKey || !password) {
    throw createError({ statusCode: 401, message: 'API key and password are required.' })
  }

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
})
