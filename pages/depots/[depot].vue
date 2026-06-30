<template>
  <div>
    <Header />
    <main v-if="depot">
      <!-- Hero -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"></div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-burgundy/8 rounded-full blur-3xl pointer-events-none"></div>
        <div class="container-custom relative z-10 pt-24 md:pt-32 pb-28 md:pb-36">
          <div class="flex items-center gap-2 text-sm text-amber-400/80 mb-4">
            <NuxtLink to="/container-sales/nationwide" class="hover:text-white transition-colors">All Depots</NuxtLink>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <span class="text-white">{{ depot.name }}</span>
          </div>
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ depot.region }}
            </div>
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Shipping Containers for Sale &mdash; <span class="hero-gold-text">{{ depot.name }}</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">{{ depot.heroText }}</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:07793251550" class="btn-primary inline-flex items-center gap-2">
                Get a Quote
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">Call 07793 251550</a>
            </div>
            <div class="grid grid-cols-4 gap-4 max-w-lg mt-12 border-t border-amber-500/20 pt-8">
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">10ft</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Compact</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-2xl font-bold hero-gold-text">20ft</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Standard</div>
              </div>
              <div class="text-center border-r border-white/10">
                <div class="text-2xl font-bold hero-gold-text">40ft</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Large</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">Fast</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About the area -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                <span class="w-8 h-px bg-amber-500"></span>
                Local Availability
                <span class="w-8 h-px bg-amber-500"></span>
              </div>
              <h2 class="heading-lg text-gray-900 mb-6">Container Sales Near {{ depot.name }}</h2>
              <div class="prose prose-gray max-w-none">
                <p class="body-lg mb-4">{{ depot.areaDescription }}</p>
                <p class="text-gray-600 leading-relaxed mb-4">{{ depot.containerInfo }}</p>
                <p class="text-gray-600 leading-relaxed">{{ depot.deliveryInfo }}</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-primary-50 rounded-2xl p-6 border-2 border-amber-500/30">
                <div class="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-3">Quick Enquiry</h3>
                <p class="text-gray-600 text-sm mb-4">Call us for availability and pricing at our {{ depot.name }} depot.</p>
                <a href="tel:07793251550" class="btn-primary w-full justify-center mb-3">
                  07793 251550
                </a>
                <NuxtLink to="/contact" class="block text-center text-amber-600 hover:text-amber-700 text-sm font-medium">Send an enquiry &rarr;</NuxtLink>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6">
                <h3 class="font-bold text-gray-900 mb-3">Other Nearby Depots</h3>
                <ul class="space-y-2">
                  <li v-for="nearby in depot.nearbyDepots" :key="nearby.slug">
                    <NuxtLink :to="depotPagePath(nearby.slug)" class="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                      {{ nearby.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What we sell -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              Available Stock
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-gray-900">Containers Available at {{ depot.name }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(container, index) in containerTypes" :key="container.size" class="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-lg transition-all group" :class="index === 1 ? 'ring-2 ring-amber-400' : ''">
              <div class="relative h-52 overflow-hidden">
                <img :src="container.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" :alt="`${container.size} shipping container`">
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <div class="flex items-end justify-between">
                    <div class="text-4xl font-black text-white">{{ container.size }}</div>
                    <span v-if="index === 1" class="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">Most Popular</span>
                    <span v-else class="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">New or Used</span>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="text-gray-500 text-sm mb-1">{{ container.dimensions }}</div>
                <h3 class="font-bold text-gray-900 mb-4">{{ container.name }}</h3>
                <ul class="space-y-2 text-sm text-gray-600 mb-6">
                  <li v-for="use in container.uses" :key="use" class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ use }}
                  </li>
                </ul>
                <a href="tel:07793251550" class="btn-primary w-full justify-center text-sm">Enquire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section-padding bg-white border-t border-gray-100">
        <div class="container-custom max-w-3xl">
          <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              FAQs
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-gray-900">Container Sales in {{ depot.name }} — Common Questions</h2>
          </div>
          <div class="space-y-4">
            <details v-for="faq in depotFaqItems" :key="faq.question" class="group bg-gray-50 rounded-xl border border-gray-200 open:border-amber-300 open:bg-amber-50/30 transition-colors">
              <summary class="cursor-pointer list-none px-6 py-4 font-semibold text-gray-900 flex items-center justify-between gap-4">
                {{ faq.question }}
                <svg class="w-5 h-5 text-amber-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p class="px-6 pb-4 text-gray-600 leading-relaxed">{{ faq.answer }}</p>
            </details>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center">
          <div class="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <h2 class="heading-lg mb-4">Buy a Container Near {{ depot.name }}</h2>
          <p class="body-lg text-gray-300 mb-8 max-w-xl mx-auto">Get in touch for a fast, no-obligation quote. We will confirm stock, pricing and delivery from our {{ depot.name }} depot.</p>
          <div class="border-t border-amber-500/20 pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07793251550" class="btn-primary">Call 07793 251550</a>
            <NuxtLink to="/container-sales/nationwide" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all hover:bg-white/10">All Depots</NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <!-- 404 fallback if depot not found -->
    <div v-else class="section-padding text-center">
      <h1 class="heading-lg text-gray-900 mb-4">Depot not found</h1>
      <NuxtLink to="/container-sales/nationwide" class="btn-primary">View All Depots</NuxtLink>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { getDepotBySlug, depotPagePath, depotPageUrl } from '~/utils/depots'
import { depotLocalBusinessSchema, depotBreadcrumbSchema, depotFaqs, faqPageSchema } from '~/utils/container-sales-seo'

const route = useRoute()

const depot = computed(() => getDepotBySlug(String(route.params.depot)))

const depotFaqItems = computed(() => depot.value ? depotFaqs(depot.value) : [])

useHead(() => {
  if (!depot.value) {
    return {
      title: 'Depot | Roseberry Containers',
      meta: [{ name: 'description', content: 'Roseberry Containers — nationwide depot network.' }],
      link: [{ rel: 'canonical', href: 'https://roseberrycontainers.com/container-sales/nationwide' }],
    }
  }

  const canonical = depotPageUrl(depot.value.slug)
  const description = `Buy shipping containers in ${depot.value.name}, ${depot.value.region}. 10ft, 20ft and 40ft new & used containers from £950 + VAT. Fast local delivery from our ${depot.value.name} depot. Call 07793 251550 for a quote.`
  const keywords = [
    `shipping containers ${depot.value.name}`,
    `container sales ${depot.value.name}`,
    `buy shipping container ${depot.value.addressLocality}`,
    `20ft container ${depot.value.name}`,
    `used shipping containers ${depot.value.region}`,
  ].join(', ')

  const faqs = depotFaqs(depot.value)

  return {
    title: `Shipping Containers for Sale ${depot.value.name} | Roseberry Containers`,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: `Shipping Containers for Sale ${depot.value.name} | Roseberry Containers` },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: 'https://roseberrycontainers.com/logo.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_GB' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `Shipping Containers for Sale ${depot.value.name} | Roseberry Containers` },
      { name: 'twitter:description', content: description },
    ],
    link: [{ rel: 'canonical', href: canonical }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(depotLocalBusinessSchema(depot.value)),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(depotBreadcrumbSchema(depot.value)),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(faqPageSchema(faqs)),
      },
    ],
  }
})

const containerTypes = [
  {
    size: '10ft',
    dimensions: '3.0m × 2.4m × 2.6m',
    name: 'Compact Container',
    image: '/container-10ft.jpg',
    uses: ['Garden storage', 'Small site storage', 'Security cabins', 'Workshop use'],
  },
  {
    size: '20ft',
    dimensions: '6.1m × 2.4m × 2.6m',
    name: 'Standard Container',
    image: '/container-20ft.jpg',
    uses: ['Business storage', 'Construction sites', 'Container conversions', 'General storage'],
  },
  {
    size: '40ft',
    dimensions: '12.2m × 2.4m × 2.6m',
    name: 'Large Container',
    image: '/container-40ft.jpg',
    uses: ['Bulk storage', 'Export', 'Large conversions', 'Warehousing overflow'],
  },
]
</script>
