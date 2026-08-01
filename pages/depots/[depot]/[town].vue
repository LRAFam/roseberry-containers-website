<template>
  <div>
    <Header />
    <main v-if="town && parentDepot">
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"></div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="container-custom relative z-10 pt-24 md:pt-32 pb-28 md:pb-36">
          <div class="flex flex-wrap items-center gap-2 text-sm text-amber-400/80 mb-4">
            <NuxtLink to="/container-sales/nationwide" class="hover:text-white transition-colors">All Depots</NuxtLink>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <NuxtLink :to="depotPagePath(town.parentDepotSlug)" class="hover:text-white transition-colors">{{ town.parentDepotName }}</NuxtLink>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <span class="text-white">{{ town.name }}</span>
          </div>
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Delivered from our {{ town.parentDepotName }} depot
            </div>
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Shipping Containers for Sale in <span class="hero-gold-text">{{ town.name }}</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">{{ town.heroText }}</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:07793251550" class="btn-primary inline-flex items-center gap-2">
                Get a Quote
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">Call 07793 251550</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                <span class="w-8 h-px bg-amber-500"></span>
                Local Delivery
                <span class="w-8 h-px bg-amber-500"></span>
              </div>
              <h2 class="heading-lg text-gray-900 mb-6">Container Sales Near {{ town.name }}</h2>
              <div class="prose prose-gray max-w-none">
                <p class="body-lg mb-4">{{ town.areaDescription }}</p>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Stock is held at our
                  <NuxtLink :to="depotPagePath(town.parentDepotSlug)" class="text-amber-700 font-medium hover:text-amber-800">{{ town.parentDepotName }} depot</NuxtLink>,
                  not a separate {{ town.name }} yard. That keeps delivery distances short across the Midlands and pricing clear.
                </p>
                <p class="text-gray-600 leading-relaxed">{{ town.deliveryInfo }}</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-primary-50 rounded-2xl p-6 border-2 border-amber-500/30">
                <h3 class="font-bold text-gray-900 mb-3">Quick Enquiry</h3>
                <p class="text-gray-600 text-sm mb-4">Ask about stock and delivery to {{ town.name }} from our {{ town.parentDepotName }} depot.</p>
                <a href="tel:07793251550" class="btn-primary w-full justify-center mb-3">07793 251550</a>
                <NuxtLink to="/contact" class="block text-center text-amber-600 hover:text-amber-700 text-sm font-medium">Send an enquiry &rarr;</NuxtLink>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6">
                <h3 class="font-bold text-gray-900 mb-3">Parent Depot</h3>
                <NuxtLink
                  :to="depotPagePath(town.parentDepotSlug)"
                  class="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1"
                >
                  {{ town.parentDepotName }} depot
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <h2 class="heading-lg text-gray-900 mb-6 text-center">Also Covered from {{ town.parentDepotName }}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <NuxtLink
              v-for="sibling in siblingTowns"
              :key="sibling.slug"
              :to="townPagePath(sibling.parentDepotSlug, sibling.slug)"
              class="bg-white border border-gray-200 hover:border-amber-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 hover:shadow-card transition-all"
            >
              {{ sibling.name }}
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white border-t border-gray-100">
        <div class="container-custom max-w-3xl">
          <h2 class="heading-lg text-gray-900 mb-8 text-center">Container Sales in {{ town.name }}: Common Questions</h2>
          <div class="space-y-4">
            <details
              v-for="faq in townFaqItems"
              :key="faq.question"
              class="group bg-gray-50 rounded-xl border border-gray-200 open:border-amber-300 open:bg-amber-50/30 transition-colors"
            >
              <summary class="cursor-pointer list-none px-6 py-4 font-semibold text-gray-900 flex items-center justify-between gap-4">
                {{ faq.question }}
                <svg class="w-5 h-5 text-amber-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p class="px-6 pb-4 text-gray-600 leading-relaxed">{{ faq.answer }}</p>
            </details>
          </div>
        </div>
      </section>

      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center">
          <h2 class="heading-lg mb-4">Buy a Container Near {{ town.name }}</h2>
          <p class="body-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Get a fast quote for stock and delivery from our {{ town.parentDepotName }} depot.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07793251550" class="btn-primary">Call 07793 251550</a>
            <NuxtLink
              :to="depotPagePath(town.parentDepotSlug)"
              class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all hover:bg-white/10"
            >
              {{ town.parentDepotName }} Depot
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <div v-else class="section-padding text-center">
      <h1 class="heading-lg text-gray-900 mb-4">Area not found</h1>
      <NuxtLink to="/container-sales/nationwide" class="btn-primary">View All Depots</NuxtLink>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { depotPagePath, getDepotBySlug, SITE_URL } from '~/utils/depots'
import { getTownBySlugs, townPagePath, townPageUrl, townsForDepot } from '~/utils/depot-towns'
import { faqPageSchema, townBreadcrumbSchema, townFaqs, townServiceSchema } from '~/utils/container-sales-seo'

const route = useRoute()
const depotSlug = computed(() => String(route.params.depot))
const townSlug = computed(() => String(route.params.town))

const parentDepot = computed(() => getDepotBySlug(depotSlug.value))
const town = computed(() => getTownBySlugs(depotSlug.value, townSlug.value))

const siblingTowns = computed(() =>
  townsForDepot(depotSlug.value).filter(t => t.slug !== townSlug.value),
)

const townFaqItems = computed(() => {
  if (!town.value) return []
  return [...townFaqs(town.value), ...(town.value.extraFaqs ?? [])]
})

useHead(() => {
  if (!town.value || !parentDepot.value) {
    return {
      title: 'Area | Roseberry Containers',
      meta: [{ name: 'description', content: 'Roseberry Containers nationwide depot network.' }],
      link: [{ rel: 'canonical', href: `${SITE_URL}/container-sales/nationwide` }],
    }
  }

  const t = town.value
  const canonical = townPageUrl(t.parentDepotSlug, t.slug)
  const description = `Buy shipping containers in ${t.name}. 10ft, 20ft and 40ft new and used containers from £950 + VAT, delivered from our ${t.parentDepotName} depot. Call 07793 251550.`
  const keywords = [
    `shipping containers ${t.name}`,
    `shipping containers for sale ${t.name}`,
    `buy shipping container ${t.name}`,
    `container delivery ${t.name}`,
    `shipping containers ${t.parentDepotName}`,
  ].join(', ')
  const faqs = townFaqItems.value

  return {
    title: `Shipping Containers for Sale ${t.name} | Roseberry Containers`,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: `Shipping Containers for Sale ${t.name} | Roseberry Containers` },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: `${SITE_URL}/logo.jpg` },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_GB' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `Shipping Containers for Sale ${t.name} | Roseberry Containers` },
      { name: 'twitter:description', content: description },
    ],
    link: [{ rel: 'canonical', href: canonical }],
    script: [
      { type: 'application/ld+json', innerHTML: JSON.stringify(townServiceSchema(t)) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(townBreadcrumbSchema(t)) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(faqPageSchema(faqs)) },
    ],
  }
})
</script>
