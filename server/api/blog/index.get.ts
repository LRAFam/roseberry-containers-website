import { listPublishedBlogPosts } from '../../db/repositories/blog'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const clientId = String(query.clientId ?? '')
  if (!clientId) {
    throw createError({ statusCode: 400, message: 'clientId query parameter is required' })
  }

  const page = query.page ? Number(query.page) : 1
  const perPage = query.per_page ? Number(query.per_page) : 12
  const category = query.category ? String(query.category) : undefined

  const result = await listPublishedBlogPosts(clientId, { category, page, perPage })
  return {
    posts: result.posts,
    pagination: {
      total: result.total,
      page,
      per_page: perPage,
      last_page: Math.max(1, Math.ceil(result.total / perPage)),
    },
  }
})
