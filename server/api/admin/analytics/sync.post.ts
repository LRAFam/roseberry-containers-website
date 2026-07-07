import { syncGsc } from '../../../services/growthAnalytics'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  requireSiteAdmin(event)
  const result = await syncGsc(28)
  return { success: result.status === 'success', ...result }
})
