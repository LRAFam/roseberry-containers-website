import { depots, SITE_URL } from './depots'

export type SitemapEntry = {
  loc: string
  changefreq: 'weekly' | 'monthly'
  priority: number
}

export const sitemapEntries: SitemapEntry[] = [
  { loc: '/', changefreq: 'weekly', priority: 1.0 },
  { loc: '/container-sales', changefreq: 'weekly', priority: 1.0 },
  { loc: '/container-sales/20ft-containers', changefreq: 'weekly', priority: 0.95 },
  { loc: '/container-sales/10ft-containers', changefreq: 'weekly', priority: 0.95 },
  { loc: '/container-sales/40ft-containers', changefreq: 'weekly', priority: 0.95 },
  { loc: '/guides/shipping-container-prices-uk', changefreq: 'monthly', priority: 0.9 },
  { loc: '/container-sales/nationwide', changefreq: 'weekly', priority: 0.85 },
  ...depots.map(d => ({
    loc: `/container-sales/${d.slug}`,
    changefreq: 'weekly' as const,
    priority: 0.85,
  })),
  { loc: '/container-hire', changefreq: 'weekly', priority: 0.8 },
  { loc: '/self-storage', changefreq: 'weekly', priority: 0.7 },
  { loc: '/container-conversions', changefreq: 'weekly', priority: 0.7 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
]

export function buildSitemapXml() {
  const urls = sitemapEntries.map(entry => `  <url>
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
