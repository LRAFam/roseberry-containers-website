import { getGrowthAnalytics } from '../../../services/growthAnalytics'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  requireSiteAdmin(event)
  const q = getQuery(event)
  const days = q.period === '7d' ? 7 : q.period === '90d' ? 90 : 30
  return getGrowthAnalytics(days)
})
