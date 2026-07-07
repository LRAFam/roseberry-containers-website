import { getBlogStats } from '../../db/repositories/blog'
import { getWebsiteLeadStats } from '../../services/crmAdmin'
import { requireSiteAdmin } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const [blog, leads] = await Promise.all([
    getBlogStats(clientId),
    getWebsiteLeadStats(clientId),
  ])
  return { ...leads, blog }
})
