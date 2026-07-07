import { cancelFollowup } from '../../../../services/crmAdmin'
import { requireSiteAdmin } from '../../../../utils/auth'

export default defineEventHandler(async (event) => {
  requireSiteAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Follow-up id required.' })
  await cancelFollowup(id)
  return { success: true }
})
