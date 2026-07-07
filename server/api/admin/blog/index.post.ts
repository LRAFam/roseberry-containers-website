import { createBlogPost } from '../../../db/repositories/blog'
import { requireSiteAdmin } from '../../../utils/auth'
import { parseBlogPostInput } from '../../../utils/blog-schema'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const body = await readBody(event)
  const parsed = parseBlogPostInput(body)
  if (parsed.error || !parsed.data) {
    throw createError({ statusCode: 400, message: parsed.error ?? 'Invalid request body' })
  }

  try {
    const post = await createBlogPost({
      ...parsed.data,
      client_id: clientId,
      status: parsed.data.status ?? 'draft',
      category: parsed.data.category ?? 'guides',
    })
    setResponseStatus(event, 201)
    return post
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to create post'
    console.error('[admin] Failed to create blog post:', message)
    throw createError({ statusCode: 500, message: 'Failed to create post' })
  }
})
