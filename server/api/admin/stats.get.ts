import { getDashboardStats } from '../../services/crmAdmin'
import { requireSiteAdmin } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  return getDashboardStats(clientId)
})
