<template>
  <div>
    <Header />
    <main>
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0">
          <img src="/container-20ft.jpg" alt="Shipping container prices UK guide" class="w-full h-full object-cover" fetchpriority="high" />
          <div class="absolute inset-0 bg-primary-950/90"></div>
        </div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-20 md:pb-28">
          <nav class="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <NuxtLink to="/container-sales" class="hover:text-white transition-colors">Container Sales</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-amber-300">Price Guide</span>
          </nav>
          <div class="max-w-3xl">
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Shipping Container Prices UK
            </h1>
            <p class="text-xl text-gray-300">
              A straightforward guide to what shipping containers cost in the UK — by size, condition and delivery. Updated for 2026.
            </p>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container-custom max-w-3xl">
          <p class="text-gray-600 leading-relaxed mb-8">
            If you are researching shipping container prices in the UK, the final cost depends on three main factors: <strong>size</strong>, <strong>condition</strong> (used vs new 1-trip) and <strong>delivery</strong> to your site. The figures below are typical UK market ranges — contact Roseberry Containers for an exact quote.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">Typical UK Container Prices by Size</h2>
          <div class="overflow-x-auto mb-10">
            <table class="w-full text-left border border-gray-200 rounded-2xl overflow-hidden text-sm">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-5 py-4 font-semibold text-gray-900">Size</th>
                  <th class="px-5 py-4 font-semibold text-gray-900">Used / Refurb</th>
                  <th class="px-5 py-4 font-semibold text-gray-900">1-Trip New</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="row in priceTable" :key="row.size">
                  <td class="px-5 py-4 font-medium text-gray-900">
                    <NuxtLink :to="row.link" class="text-primary-700 hover:text-primary-900">{{ row.size }}</NuxtLink>
                  </td>
                  <td class="px-5 py-4 text-gray-600">{{ row.used }}</td>
                  <td class="px-5 py-4 text-gray-600">{{ row.new }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-400 mb-10">All prices are starting prices excluding VAT and delivery.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">What Affects the Price?</h2>
          <div class="space-y-6 mb-10">
            <div v-for="factor in priceFactors" :key="factor.title" class="bg-gray-50 rounded-2xl p-6">
              <h3 class="font-bold text-gray-900 mb-2">{{ factor.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ factor.body }}</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">Delivery Costs</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            UK container delivery typically adds <strong>£250–£700 + VAT</strong> depending on distance, access and whether a crane lift is needed. Narrow lanes, sloped ground and tight yards may require specialist placement — always confirm delivery costs upfront before buying.
          </p>
          <p class="text-gray-600 leading-relaxed mb-10">
            Roseberry Containers provide transparent quotes that include the container, delivery and VAT so you know the total cost before committing.
          </p>

          <div class="bg-primary-950 text-white rounded-2xl p-8 text-center">
            <h2 class="text-2xl font-bold mb-3">Get Your Exact Price Today</h2>
            <p class="text-gray-300 mb-6">We respond the same day with a clear, no-obligation quote tailored to your size, condition and location.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary">Request a Quote</NuxtLink>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                Call 07793 251550
              </a>
            </div>
          </div>
        </div>
      </section>

      <DepotLinksSection />

      <ContainerSalesFaq
        :faqs="faqs"
        title="Container Pricing FAQs"
        subtitle="Common questions about buying shipping containers in the UK."
      />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { containerSalesFaqs, faqPageSchema } from '~/utils/container-sales-seo'

const canonical = 'https://roseberrycontainers.com/guides/shipping-container-prices-uk'

const priceTable = [
  { size: '10ft Container', used: 'Refurb from £1,650 + VAT', new: 'From £2,750 + VAT', link: '/container-sales/10ft-containers' },
  { size: '20ft Container', used: 'Low grade from £950 + VAT', new: 'From £1,900 + VAT', link: '/container-sales/20ft-containers' },
  { size: '40ft Container', used: 'Used from £1,450 + VAT', new: 'From £3,050 + VAT', link: '/container-sales/40ft-containers' },
]

const priceFactors = [
  {
    title: 'Condition: Used vs 1-Trip New',
    body: 'Used wind-and-watertight containers are the most affordable option. Grade A used units have minor cosmetic wear; Grade B shows more surface rust and dents but remains fully functional. New 1-trip containers have made a single journey and are effectively brand new — best for conversions and long-term use.',
  },
  {
    title: 'Size',
    body: 'The 20ft container is the most popular and best value per cubic foot. 10ft containers cost more per foot due to their compact size. 40ft containers offer maximum capacity but require more site space and may cost more to deliver.',
  },
  {
    title: 'Specialist Types',
    body: 'Side-opening, hi-cube, open-top and refrigerated containers command a premium over standard units. Contact us for pricing on specialist container types.',
  },
]

const faqs = containerSalesFaqs

useHead({
  title: 'Shipping Container Prices UK (2026) | Cost Guide | Roseberry Containers',
  meta: [
    { name: 'description', content: 'How much does a shipping container cost in the UK? 20ft low grade from £950 + VAT, 10ft refurb from £1,650 + VAT, 40ft used from £1,450 + VAT. 1-trip new from £1,900 + VAT. Get an exact quote from Roseberry Containers.' },
    { property: 'og:title', content: 'Shipping Container Prices UK | Roseberry Containers' },
    { property: 'og:description', content: 'UK shipping container price guide — typical costs for 10ft, 20ft and 40ft containers by condition, plus delivery.' },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: 'https://roseberrycontainers.com/logo.jpg' },
    { property: 'og:type', content: 'article' },
    { property: 'og:locale', content: 'en_GB' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Shipping Container Prices UK | Roseberry Containers' },
    { name: 'twitter:description', content: 'UK shipping container price guide for 10ft, 20ft and 40ft containers.' },
  ],
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqPageSchema(faqs)),
    },
  ],
})
</script>
