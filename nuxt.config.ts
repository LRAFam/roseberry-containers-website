// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? 'http://localhost:3001',
      clientId: process.env.NUXT_PUBLIC_CLIENT_ID ?? '',
      trustpilotBusinessUnitId: process.env.NUXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID ?? '',
      trustpilotDomain: process.env.NUXT_PUBLIC_TRUSTPILOT_DOMAIN ?? 'roseberrycontainers.co.uk',
    }
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      }
    }
  },

  app: {
    head: {
      title: 'Roseberry Self Storage - Secure Container Storage in Middlesbrough',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Secure container storage solutions in Middlesbrough. 24hr CCTV, affordable rates, and Luton van hire available.' },
        { property: 'og:title', content: 'Roseberry Self Storage' },
        { property: 'og:description', content: 'Secure container storage solutions in Middlesbrough' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://roseberryselfstorage.com' },
        { property: 'og:image', content: 'https://roseberryselfstorage.com/logo.jpg' },
        { property: 'og:image:alt', content: 'Roseberry Self Storage' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Roseberry Self Storage' },
        { name: 'twitter:description', content: 'Secure container storage solutions in Middlesbrough. 24hr CCTV, affordable rates, and Luton van hire available.' },
        { name: 'twitter:image', content: 'https://roseberryselfstorage.com/logo.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' }
      ]
    }
  }
})
