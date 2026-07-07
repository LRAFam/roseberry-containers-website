import { changeDashboardPassword } from '../../services/crmAdmin'
import { requireSiteAdmin } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const body = await readBody(event)
  const current = String(body?.current_password ?? '').trim()
  const next = String(body?.new_password ?? '').trim()
  if (!current || !next) {
    throw createError({ statusCode: 400, message: 'Current and new password are required.' })
  }

  await changeDashboardPassword(clientId, current, next)
  return { success: true }
})
