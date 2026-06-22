import { buildSitemapXml, fetchBlogSitemapEntries } from '~/utils/sitemap'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  const blogEntries = await fetchBlogSitemapEntries()
  return buildSitemapXml(blogEntries)
})
