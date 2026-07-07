import { getBlogPostBySlug, incrementBlogViewCount } from '../../db/repositories/blog'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const clientId = String(getQuery(event).clientId ?? '')
  if (!clientId) {
    throw createError({ statusCode: 400, message: 'clientId query parameter is required' })
  }
  if (!slug) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  const post = await getBlogPostBySlug(clientId, slug, true)
  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  await incrementBlogViewCount(clientId, slug).catch(() => undefined)
  return post
})
