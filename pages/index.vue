<template>
  <div>
    <Header />
    <main>
      <HeroSection />

      <!-- Why Choose Roseberry — trust bar -->
      <section class="bg-white border-b border-gray-100">
        <div class="container-custom py-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-gray-100">
            <div class="flex items-start gap-3 md:px-8 first:pl-0 last:pr-0">
              <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Direct from Port</p>
                <p class="text-xs text-gray-500 mt-0.5">Sourced direct — no middlemen, better prices</p>
              </div>
            </div>
            <div class="flex items-start gap-3 md:px-8">
              <div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Same-Day Response</p>
                <p class="text-xs text-gray-500 mt-0.5">We call back fast — no waiting around</p>
              </div>
            </div>
            <div class="flex items-start gap-3 md:px-8">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-sm">9 UK Depots</p>
                <p class="text-xs text-gray-500 mt-0.5">Nationwide stock, fast delivery anywhere</p>
              </div>
            </div>
            <div class="flex items-start gap-3 md:px-8">
              <div class="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
              </div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Rated Excellent</p>
                <p class="text-xs text-gray-500 mt-0.5">4.3★ on Trustpilot · 10 verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <!-- Container Range -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 bg-primary-500/10 text-primary-700 border border-primary-500/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
            </div>
            <h2 class="heading-lg text-gray-900 mb-4">Our Container Range</h2>
            <p class="body-lg max-w-2xl mx-auto">New 1-trip and quality used containers in stock now — available for sale, hire or conversion</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="c in containers" :key="c.size" class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div class="relative h-52 overflow-hidden bg-gray-100">
                <img :src="c.image" :alt="c.size + ' shipping container'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <h3 class="text-white text-xl font-bold">{{ c.size }}</h3>
                  <p class="text-amber-300 text-sm font-medium">{{ c.subtitle }}</p>
                </div>
              </div>
              <div class="p-6">
                <ul class="space-y-2 mb-5">
                  <li v-for="spec in c.specs" :key="spec" class="flex items-center gap-2 text-sm text-gray-600">
                    <svg class="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                    {{ spec }}
                  </li>
                </ul>
                <NuxtLink :to="c.link" class="block text-center bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold py-2.5 rounded-lg transition-colors text-sm">
                  View pricing &amp; availability →
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="text-center mt-10">
            <NuxtLink to="/container-sales" class="btn-primary">
              See All Containers &amp; Depots
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </NuxtLink>
          </div>
        </div>
      </section>

      <DepotLinksSection />

      <!-- CTA strip -->
      <section class="relative bg-primary-950 overflow-hidden">
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="container-custom relative z-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p class="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-2">Ready to get started?</p>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Get a quote today — fast, friendly &amp; no obligation</h2>
            <p class="text-gray-400 max-w-xl">We respond same day. Whether you're buying one container or a fleet — call us or send a message and we'll get back to you straight away.</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <NuxtLink to="/container-sales" class="btn-primary whitespace-nowrap px-8">View Containers</NuxtLink>
            <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-7 rounded-lg transition-all duration-200 hover:bg-white/10 whitespace-nowrap">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Call 07793 251550
            </a>
          </div>
        </div>
      </section>

      <ClientOnly>
        <TrustpilotSection />
      </ClientOnly>
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { aggregateRatingSchema, BUSINESS_ADDRESS } from '~/utils/container-sales-seo'

useHead({
  link: [
    { rel: 'canonical', href: 'https://roseberrycontainers.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'Store'],
        name: 'Roseberry Containers',
        description: 'Buy shipping containers — new 1-trip and quality used containers. Container hire, self storage and bespoke conversions. Nationwide delivery across the UK.',
        url: 'https://roseberrycontainers.com',
        telephone: '+447793251550',
        email: 'james@roseberrycontainers.com',
        image: 'https://roseberrycontainers.com/logo.jpg',
        priceRange: '££',
        aggregateRating: aggregateRatingSchema(),
        address: {
          '@type': 'PostalAddress',
          ...BUSINESS_ADDRESS,
        },
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' }
        ],
        hasMap: 'https://maps.google.com/?q=Roseberry+Containers+Middlesbrough',
        sameAs: [
          'https://roseberrycontainers.com',
          'https://www.trustpilot.com/review/roseberrycontainers.com',
        ],
      })
    }
  ]
})

const containers = [
  {
    size: '10ft Container',
    subtitle: 'Compact & versatile',
    image: '/container-10ft.jpg',
    link: '/container-sales/10ft-containers',
    specs: ['2.99m × 2.44m × 2.59m', 'Perfect for gardens &amp; workshops', 'Available new 1-trip or used', 'Sale &amp; hire available'],
  },
  {
    size: '20ft Container',
    subtitle: 'Most popular size',
    image: '/container-20ft.jpg',
    link: '/container-sales/20ft-containers',
    specs: ['6.06m × 2.44m × 2.59m', 'Ideal for business storage', 'Available new 1-trip or used', 'Sale &amp; hire available'],
  },
  {
    size: '40ft Container',
    subtitle: 'Maximum capacity',
    image: '/container-40ft.jpg',
    link: '/container-sales/40ft-containers',
    specs: ['12.19m × 2.44m × 2.59m', 'Large-scale storage &amp; conversions', 'Available new 1-trip or used', 'Sale &amp; hire available'],
  },
]
</script>
