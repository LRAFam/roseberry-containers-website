import { depots, SITE_URL } from './depots'

export type SitemapEntry = {
  loc: string
  changefreq: 'weekly' | 'monthly'
  priority: number
}

export const staticSitemapEntries: SitemapEntry[] = [
  { loc: '/', changefreq: 'weekly', priority: 1.0 },
  { loc: '/blog', changefreq: 'weekly', priority: 0.85 },
  { loc: '/container-sales', changefreq: 'weekly', priority: 1.0 },
  { loc: '/container-sales/20ft-containers', changefreq: 'weekly', priority: 0.95 },
  { loc: '/container-sales/10ft-containers', changefreq: 'weekly', priority: 0.95 },
  { loc: '/container-sales/40ft-containers', changefreq: 'weekly', priority: 0.95 },
  { loc: '/guides/shipping-container-prices-uk', changefreq: 'monthly', priority: 0.9 },
  { loc: '/container-sales/nationwide', changefreq: 'weekly', priority: 0.85 },
  ...depots.map(d => ({
    loc: `/depots/${d.slug}`,
    changefreq: 'weekly' as const,
    priority: 0.85,
  })),
  { loc: '/container-hire', changefreq: 'weekly', priority: 0.8 },
  { loc: '/self-storage', changefreq: 'weekly', priority: 0.7 },
  { loc: '/container-conversions', changefreq: 'weekly', priority: 0.7 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
]

/** @deprecated use staticSitemapEntries */
export const sitemapEntries = staticSitemapEntries

export function buildSitemapXml(extraEntries: SitemapEntry[] = []) {
  const allEntries = [...staticSitemapEntries, ...extraEntries]
  const urls = allEntries.map(entry => `  <url>
    <loc>${SITE_URL}${entry.loc === '/' ? '' : entry.loc}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export async function fetchBlogSitemapEntries(): Promise<SitemapEntry[]> {
  const apiBase = process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001'
  const clientId = process.env.NUXT_PUBLIC_CLIENT_ID
  if (!clientId) return []

  try {
    const res = await fetch(`${apiBase}/api/blog?clientId=${clientId}&per_page=100`)
    if (!res.ok) return []
    const data = await res.json()
    return (data.posts ?? []).map((post: { slug: string }) => ({
      loc: `/blog/${post.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.75,
    }))
  } catch {
    return []
  }
}
