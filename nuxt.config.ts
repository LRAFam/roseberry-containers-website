// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? 'http://localhost:3001',
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
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' }
      ]
    }
  }
})
