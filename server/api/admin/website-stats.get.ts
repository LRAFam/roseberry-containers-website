import { getBlogStats } from '../../db/repositories/blog'
import { getWebsiteLeadStats } from '../../services/crmAdmin'
import { requireSiteAdmin } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)

  try {
    const [blog, leads] = await Promise.all([
      getBlogStats(clientId),
      getWebsiteLeadStats(clientId),
    ])
    return { ...leads, blog }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to load website stats'
    console.error('[admin/website-stats]', message)
    throw createError({ statusCode: 500, message: 'Could not load website stats. Check server logs.' })
  }
})
