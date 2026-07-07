// https://nuxt.com/docs/api/configuration/nuxt-config
import { DEPOT_COUNT, depotNamesList, depots } from './utils/depots'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL ?? '',
    siteJwtSecret: process.env.SITE_JWT_SECRET ?? '',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? 'http://localhost:3001',
      clientId: process.env.NUXT_PUBLIC_CLIENT_ID ?? '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://www.roseberrycontainers.com',
      plausibleDomain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN ?? '',
      trustpilotBusinessUnitId: process.env.NUXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID ?? '',
      trustpilotDomain: process.env.NUXT_PUBLIC_TRUSTPILOT_DOMAIN ?? 'roseberrycontainers.com',
    }
  },

  routeRules: {
    '/admin/**': { ssr: false },
    ...Object.fromEntries(
      depots.map(d => [
        `/container-sales/${d.slug}`,
        { redirect: { to: `/depots/${d.slug}`, statusCode: 301 } },
      ]),
    ),
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

  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml',
        '/container-sales',
        '/container-sales/10ft-containers',
        '/container-sales/20ft-containers',
        '/container-sales/40ft-containers',
        '/container-sales/nationwide',
        '/container-hire',
        '/container-conversions',
        '/self-storage',
        '/contact',
        '/guides/shipping-container-prices-uk',
        '/blog',
        ...depots.map(d => `/depots/${d.slug}`),
      ],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
      title: 'Buy Shipping Containers | New & Used | UK Wide Delivery | Roseberry Containers',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: `Buy shipping containers from Roseberry Containers. New 1-trip & quality used 10ft, 20ft, 40ft containers. ${DEPOT_COUNT} UK depots, 20ft from £950 + VAT, nationwide delivery. Container hire & conversions also available.` },
        { property: 'og:title', content: 'Buy Shipping Containers | New & Used | Roseberry Containers' },
        { property: 'og:description', content: `Buy shipping containers from Roseberry Containers. New 1-trip and quality used containers with ${DEPOT_COUNT} UK depots and nationwide delivery.` },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.roseberrycontainers.com' },
        { property: 'og:image', content: 'https://www.roseberrycontainers.com/logo.jpg' },
        { property: 'og:image:alt', content: 'Roseberry Containers - Shipping Containers for Sale' },
        { property: 'og:locale', content: 'en_GB' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Buy Shipping Containers | Roseberry Containers' },
        { name: 'twitter:description', content: `New 1-trip and quality used shipping containers. 10ft, 20ft, 40ft sizes. Nationwide delivery from ${DEPOT_COUNT} UK depots including ${depotNamesList()}.` },
        { name: 'twitter:image', content: 'https://www.roseberrycontainers.com/logo.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' }
      ]
    }
  }
})
