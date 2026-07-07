const CATEGORIES = ['guides', 'news', 'depot-updates', 'general'] as const
const STATUSES = ['draft', 'published'] as const

export type BlogCategory = typeof CATEGORIES[number]
export type BlogStatus = typeof STATUSES[number]

export interface BlogPostInput {
  title: string
  slug?: string
  excerpt: string
  content: string
  category?: BlogCategory
  status?: BlogStatus
  seo_title?: string | null
  seo_description?: string | null
  featured_image?: string | null
  tags?: string[]
  published_at?: string | null
}

function isNonEmptyString(value: unknown, maxLen: number): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLen
}

export function parseBlogPostInput(body: unknown): { data?: BlogPostInput; error?: string } {
  if (!body || typeof body !== 'object') return { error: 'Invalid request body' }
  const b = body as Record<string, unknown>

  if (!isNonEmptyString(b.title, 300)) return { error: 'Title is required (max 300 characters)' }
  if (!isNonEmptyString(b.excerpt, 1000)) return { error: 'Excerpt is required (max 1000 characters)' }
  if (!isNonEmptyString(b.content, 500_000)) return { error: 'Content is required' }

  if (b.slug !== undefined && b.slug !== null && typeof b.slug === 'string' && b.slug.length > 200) {
    return { error: 'Slug must be 200 characters or fewer' }
  }

  if (b.category !== undefined && (typeof b.category !== 'string' || !CATEGORIES.includes(b.category as BlogCategory))) {
    return { error: 'Invalid category' }
  }

  if (b.status !== undefined && (typeof b.status !== 'string' || !STATUSES.includes(b.status as BlogStatus))) {
    return { error: 'Invalid status' }
  }

  if (b.seo_title !== undefined && b.seo_title !== null && (typeof b.seo_title !== 'string' || b.seo_title.length > 200)) {
    return { error: 'SEO title must be 200 characters or fewer' }
  }

  if (b.seo_description !== undefined && b.seo_description !== null && (typeof b.seo_description !== 'string' || b.seo_description.length > 500)) {
    return { error: 'SEO description must be 500 characters or fewer' }
  }

  if (b.featured_image !== undefined && b.featured_image !== null && (typeof b.featured_image !== 'string' || b.featured_image.length > 500)) {
    return { error: 'Featured image URL must be 500 characters or fewer' }
  }

  if (b.tags !== undefined && (!Array.isArray(b.tags) || b.tags.some(t => typeof t !== 'string'))) {
    return { error: 'Tags must be an array of strings' }
  }

  return {
    data: {
      title: b.title.trim(),
      slug: typeof b.slug === 'string' ? b.slug : undefined,
      excerpt: b.excerpt.trim(),
      content: b.content,
      category: (b.category as BlogCategory | undefined) ?? 'guides',
      status: (b.status as BlogStatus | undefined) ?? 'draft',
      seo_title: b.seo_title === undefined ? undefined : (b.seo_title as string | null),
      seo_description: b.seo_description === undefined ? undefined : (b.seo_description as string | null),
      featured_image: b.featured_image === undefined ? undefined : (b.featured_image as string | null),
      tags: b.tags as string[] | undefined,
      published_at: b.published_at === undefined ? undefined : (b.published_at as string | null),
    },
  }
}

export function parseBlogPostPatch(body: unknown): { data?: Partial<BlogPostInput>; error?: string } {
  if (!body || typeof body !== 'object') return { error: 'Invalid request body' }
  const b = body as Record<string, unknown>
  const patch: Partial<BlogPostInput> = {}

  if (b.title !== undefined) {
    if (!isNonEmptyString(b.title, 300)) return { error: 'Title must be 1–300 characters' }
    patch.title = b.title.trim()
  }
  if (b.slug !== undefined) {
    if (b.slug !== null && (typeof b.slug !== 'string' || b.slug.length > 200)) {
      return { error: 'Slug must be 200 characters or fewer' }
    }
    patch.slug = typeof b.slug === 'string' ? b.slug : undefined
  }
  if (b.excerpt !== undefined) {
    if (!isNonEmptyString(b.excerpt, 1000)) return { error: 'Excerpt must be 1–1000 characters' }
    patch.excerpt = b.excerpt.trim()
  }
  if (b.content !== undefined) {
    if (!isNonEmptyString(b.content, 500_000)) return { error: 'Content is required' }
    patch.content = b.content
  }
  if (b.category !== undefined) {
    if (typeof b.category !== 'string' || !CATEGORIES.includes(b.category as BlogCategory)) {
      return { error: 'Invalid category' }
    }
    patch.category = b.category as BlogCategory
  }
  if (b.status !== undefined) {
    if (typeof b.status !== 'string' || !STATUSES.includes(b.status as BlogStatus)) {
      return { error: 'Invalid status' }
    }
    patch.status = b.status as BlogStatus
  }
  if (b.seo_title !== undefined) {
    if (b.seo_title !== null && (typeof b.seo_title !== 'string' || b.seo_title.length > 200)) {
      return { error: 'SEO title must be 200 characters or fewer' }
    }
    patch.seo_title = b.seo_title as string | null
  }
  if (b.seo_description !== undefined) {
    if (b.seo_description !== null && (typeof b.seo_description !== 'string' || b.seo_description.length > 500)) {
      return { error: 'SEO description must be 500 characters or fewer' }
    }
    patch.seo_description = b.seo_description as string | null
  }
  if (b.featured_image !== undefined) {
    if (b.featured_image !== null && (typeof b.featured_image !== 'string' || b.featured_image.length > 500)) {
      return { error: 'Featured image URL must be 500 characters or fewer' }
    }
    patch.featured_image = b.featured_image as string | null
  }
  if (b.tags !== undefined) {
    if (!Array.isArray(b.tags) || b.tags.some(t => typeof t !== 'string')) {
      return { error: 'Tags must be an array of strings' }
    }
    patch.tags = b.tags as string[]
  }
  if (b.published_at !== undefined) {
    patch.published_at = b.published_at as string | null
  }

  return { data: patch }
}
