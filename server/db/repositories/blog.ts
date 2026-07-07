import { query, queryOne } from '../pool'

export interface BlogPost {
  id?: string
  client_id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  status: 'draft' | 'published'
  seo_title?: string | null
  seo_description?: string | null
  featured_image?: string | null
  tags?: string[]
  view_count?: number
  published_at?: Date | string | null
  created_at?: Date
  updated_at?: Date
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120) || 'post'
}

export async function listBlogPosts(
  clientId: string,
  opts: { status?: string; search?: string; page?: number; perPage?: number } = {},
): Promise<{ posts: BlogPost[]; total: number; page: number; lastPage: number }> {
  const page = Math.max(1, opts.page ?? 1)
  const perPage = Math.min(50, Math.max(1, opts.perPage ?? 20))
  const offset = (page - 1) * perPage
  const params: unknown[] = [clientId]
  const conditions = ['client_id = $1']

  if (opts.status) {
    params.push(opts.status)
    conditions.push(`status = $${params.length}`)
  }

  if (opts.search) {
    params.push(`%${opts.search}%`)
    conditions.push(`(title ILIKE $${params.length} OR excerpt ILIKE $${params.length})`)
  }

  const where = conditions.join(' AND ')
  const countRow = await queryOne<{ count: string }>(
    `SELECT COUNT(*)::TEXT AS count FROM blog_posts WHERE ${where}`,
    params,
  )
  const total = parseInt(countRow?.count ?? '0', 10)

  const posts = await query<BlogPost>(
    `SELECT * FROM blog_posts WHERE ${where}
     ORDER BY COALESCE(published_at, created_at) DESC
     LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
    [...params, perPage, offset],
  )

  return { posts, total, page, lastPage: Math.max(1, Math.ceil(total / perPage)) }
}

export async function listPublishedBlogPosts(
  clientId: string,
  opts: { category?: string; page?: number; perPage?: number } = {},
): Promise<{ posts: BlogPost[]; total: number }> {
  const page = Math.max(1, opts.page ?? 1)
  const perPage = Math.min(50, Math.max(1, opts.perPage ?? 12))
  const offset = (page - 1) * perPage
  const params: unknown[] = [clientId]
  const conditions = ["client_id = $1", "status = 'published'", 'published_at IS NOT NULL', 'published_at <= NOW()']

  if (opts.category) {
    params.push(opts.category)
    conditions.push(`category = $${params.length}`)
  }

  const where = conditions.join(' AND ')
  const countRow = await queryOne<{ count: string }>(
    `SELECT COUNT(*)::TEXT AS count FROM blog_posts WHERE ${where}`,
    params,
  )
  const total = parseInt(countRow?.count ?? '0', 10)

  const posts = await query<BlogPost>(
    `SELECT id, client_id, title, slug, excerpt, category, status, seo_title, seo_description,
            featured_image, tags, view_count, published_at, created_at, updated_at
     FROM blog_posts WHERE ${where}
     ORDER BY published_at DESC
     LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
    [...params, perPage, offset],
  )

  return { posts, total }
}

export async function getBlogPostBySlug(clientId: string, slug: string, publishedOnly = true): Promise<BlogPost | null> {
  const statusClause = publishedOnly
    ? "AND status = 'published' AND published_at IS NOT NULL AND published_at <= NOW()"
    : ''
  return queryOne<BlogPost>(
    `SELECT * FROM blog_posts WHERE client_id = $1 AND slug = $2 ${statusClause}`,
    [clientId, slug],
  )
}

export async function getBlogPostById(clientId: string, id: string): Promise<BlogPost | null> {
  return queryOne<BlogPost>('SELECT * FROM blog_posts WHERE client_id = $1 AND id = $2', [clientId, id])
}

async function ensureUniqueSlug(clientId: string, baseSlug: string, excludeId?: string): Promise<string> {
  let slug = baseSlug
  let n = 1
  while (true) {
    const existing = await queryOne<{ id: string }>(
      `SELECT id FROM blog_posts WHERE client_id = $1 AND slug = $2 ${excludeId ? 'AND id != $3' : ''} LIMIT 1`,
      excludeId ? [clientId, slug, excludeId] : [clientId, slug],
    )
    if (!existing) return slug
    n += 1
    slug = `${baseSlug}-${n}`
  }
}

export async function createBlogPost(
  data: Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'view_count' | 'slug'> & { slug?: string },
): Promise<BlogPost> {
  const baseSlug = data.slug?.trim() || slugify(data.title)
  const slug = await ensureUniqueSlug(data.client_id, baseSlug)
  const publishedAt = data.status === 'published'
    ? (data.published_at ? new Date(data.published_at) : new Date())
    : null

  const row = await queryOne<BlogPost>(
    `INSERT INTO blog_posts
      (client_id, title, slug, excerpt, content, category, status, seo_title, seo_description,
       featured_image, tags, published_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
     RETURNING *`,
    [
      data.client_id,
      data.title,
      slug,
      data.excerpt,
      data.content,
      data.category ?? 'guides',
      data.status ?? 'draft',
      data.seo_title ?? null,
      data.seo_description ?? null,
      data.featured_image ?? null,
      data.tags ?? [],
      publishedAt,
    ],
  )
  return row!
}

export async function updateBlogPost(clientId: string, id: string, data: Partial<BlogPost>): Promise<BlogPost | null> {
  const existing = await getBlogPostById(clientId, id)
  if (!existing) return null

  let slug = existing.slug
  if (data.title && data.title !== existing.title && !data.slug) {
    slug = await ensureUniqueSlug(clientId, slugify(data.title), id)
  } else if (data.slug) {
    slug = await ensureUniqueSlug(clientId, slugify(data.slug), id)
  }

  let publishedAt = existing.published_at ?? null
  const nextStatus = data.status ?? existing.status
  if (nextStatus === 'published' && !publishedAt) {
    publishedAt = data.published_at ? new Date(data.published_at) : new Date()
  } else if (data.published_at) {
    publishedAt = new Date(data.published_at)
  } else if (nextStatus === 'draft') {
    publishedAt = null
  }

  const row = await queryOne<BlogPost>(
    `UPDATE blog_posts SET
      title = $3,
      slug = $4,
      excerpt = $5,
      content = $6,
      category = $7,
      status = $8,
      seo_title = $9,
      seo_description = $10,
      featured_image = $11,
      tags = $12,
      published_at = $13,
      updated_at = NOW()
     WHERE client_id = $1 AND id = $2
     RETURNING *`,
    [
      clientId,
      id,
      data.title ?? existing.title,
      slug,
      data.excerpt ?? existing.excerpt,
      data.content ?? existing.content,
      data.category ?? existing.category,
      nextStatus,
      data.seo_title !== undefined ? data.seo_title : existing.seo_title,
      data.seo_description !== undefined ? data.seo_description : existing.seo_description,
      data.featured_image !== undefined ? data.featured_image : existing.featured_image,
      data.tags ?? existing.tags ?? [],
      publishedAt,
    ],
  )
  return row
}

export async function deleteBlogPost(clientId: string, id: string): Promise<boolean> {
  const row = await queryOne<{ id: string }>(
    'DELETE FROM blog_posts WHERE client_id = $1 AND id = $2 RETURNING id',
    [clientId, id],
  )
  return !!row
}

export async function publishBlogPost(clientId: string, id: string): Promise<BlogPost | null> {
  const row = await queryOne<BlogPost>(
    `UPDATE blog_posts SET
      status = 'published',
      published_at = COALESCE(published_at, NOW()),
      updated_at = NOW()
     WHERE client_id = $1 AND id = $2
     RETURNING *`,
    [clientId, id],
  )
  return row
}

export async function incrementBlogViewCount(clientId: string, slug: string): Promise<void> {
  await query(
    `UPDATE blog_posts SET view_count = view_count + 1
     WHERE client_id = $1 AND slug = $2 AND status = 'published'`,
    [clientId, slug],
  )
}

export async function getBlogStats(clientId: string): Promise<{ total: number; published: number; draft: number }> {
  const row = await queryOne<{ total: string; published: string; draft: string }>(
    `SELECT
      COUNT(*)::TEXT AS total,
      COUNT(*) FILTER (WHERE status = 'published')::TEXT AS published,
      COUNT(*) FILTER (WHERE status = 'draft')::TEXT AS draft
     FROM blog_posts WHERE client_id = $1`,
    [clientId],
  )
  return {
    total: parseInt(row?.total ?? '0', 10),
    published: parseInt(row?.published ?? '0', 10),
    draft: parseInt(row?.draft ?? '0', 10),
  }
}
