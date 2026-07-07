import { updateBlogPost } from '../../../db/repositories/blog'
import { requireSiteAdmin } from '../../../utils/auth'
import { parseBlogPostPatch } from '../../../utils/blog-schema'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 404, message: 'Post not found' })

  const body = await readBody(event)
  const parsed = parseBlogPostPatch(body)
  if (parsed.error) {
    throw createError({ statusCode: 400, message: parsed.error })
  }

  const post = await updateBlogPost(clientId, id, parsed.data ?? {})
  if (!post) throw createError({ statusCode: 404, message: 'Post not found' })
  return post
})
