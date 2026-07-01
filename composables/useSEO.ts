interface SEOConfig {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function useSEO() {
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = config.public.siteUrl || 'https://www.roseberrycontainers.com'

  function setPageSEO(seo: SEOConfig) {
    const url = seo.url || `${siteUrl}${route.path}`
    const image = seo.image || `${siteUrl}/logo.jpg`

    useHead({
      title: seo.title,
      meta: [
        { name: 'description', content: seo.description },
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image },
        { property: 'og:type', content: seo.type || 'website' },
        { property: 'og:locale', content: 'en_GB' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: seo.title },
        { name: 'twitter:description', content: seo.description },
        { name: 'twitter:image', content: image },
        ...(seo.publishedTime ? [{ property: 'article:published_time', content: seo.publishedTime }] : []),
        ...(seo.modifiedTime ? [{ property: 'article:modified_time', content: seo.modifiedTime }] : []),
      ],
      link: [{ rel: 'canonical', href: url }],
    })
  }

  function setArticleJsonLd(article: {
    title: string
    description: string
    url: string
    image?: string
    publishedAt?: string
    modifiedAt?: string
  }) {
    useHead({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.description,
          image: article.image || `${siteUrl}/logo.jpg`,
          url: article.url,
          datePublished: article.publishedAt,
          dateModified: article.modifiedAt || article.publishedAt,
          author: { '@type': 'Organization', name: 'Roseberry Containers' },
          publisher: {
            '@type': 'Organization',
            name: 'Roseberry Containers',
            logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.jpg` },
          },
        }),
      }],
    })
  }

  return { setPageSEO, setArticleJsonLd, siteUrl }
}
