import { publishBlogPost } from '../../../../db/repositories/blog'
import { requireSiteAdmin } from '../../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 404, message: 'Post not found' })

  const post = await publishBlogPost(clientId, id)
  if (!post) throw createError({ statusCode: 404, message: 'Post not found' })
  return post
})
