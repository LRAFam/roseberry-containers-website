import { listBlogPosts, getBlogStats } from '../../../db/repositories/blog'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const q = getQuery(event)
  const page = q.page ? Number(q.page) : 1
  const perPage = q.per_page ? Number(q.per_page) : 20

  const [result, stats] = await Promise.all([
    listBlogPosts(clientId, {
      status: q.status ? String(q.status) : undefined,
      search: q.search ? String(q.search) : undefined,
      page,
      perPage,
    }),
    getBlogStats(clientId),
  ])

  return {
    posts: result.posts,
    stats,
    pagination: {
      total: result.total,
      current_page: result.page,
      per_page: perPage,
      last_page: result.lastPage,
    },
  }
})
