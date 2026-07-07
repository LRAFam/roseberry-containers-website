import { buildSitemapXml, fetchBlogSitemapEntries } from '~/utils/sitemap'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl || 'http://localhost:3000'
  const blogEntries = await fetchBlogSitemapEntries(siteUrl)
  return buildSitemapXml(blogEntries)
})
