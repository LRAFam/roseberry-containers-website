<template>
  <div>
    <Header />
    <main>
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0">
          <img :src="heroImage" :alt="`${sizeLabel} shipping container for sale UK`" class="w-full h-full object-cover" fetchpriority="high" />
          <div class="absolute inset-0 bg-primary-950/88"></div>
        </div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <nav class="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <NuxtLink to="/container-sales" class="hover:text-white transition-colors">Container Sales</NuxtLink>
            <span class="mx-2">/</span>
            <span class="text-amber-300">{{ sizeLabel }} Containers</span>
          </nav>
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              New 1-Trip &amp; Quality Used · Nationwide Delivery
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              {{ h1 }}
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl">{{ heroDescription }}</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn-primary">
                Get a Free Quote
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </NuxtLink>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                Call 07793 251550
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 class="heading-md text-gray-900 mb-6">About {{ sizeLabel }} Shipping Containers</h2>
              <div class="space-y-4 text-gray-600 leading-relaxed">
                <p v-for="paragraph in bodyParagraphs" :key="paragraph">{{ paragraph }}</p>
              </div>
              <div class="mt-8 grid grid-cols-3 gap-4 p-5 bg-white rounded-2xl shadow-card text-center text-sm">
                <div v-for="spec in specs" :key="spec.label">
                  <div class="font-bold text-gray-900">{{ spec.value }}</div>
                  <div class="text-gray-500 text-xs mt-0.5">{{ spec.label }}</div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl overflow-hidden shadow-card">
              <img :src="heroImage" :alt="`${sizeLabel} shipping container`" class="w-full h-72 object-cover" loading="lazy" />
              <div class="p-8">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Popular Uses</h3>
                <ul class="space-y-3">
                  <li v-for="useCase in useCases" :key="useCase" class="flex items-start gap-2 text-gray-600 text-sm">
                    <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    {{ useCase }}
                  </li>
                </ul>
                <div class="mt-6 flex flex-col gap-3">
                  <NuxtLink to="/container-sales" class="text-primary-700 font-semibold text-sm hover:text-primary-900 transition-colors">
                    View all container sizes →
                  </NuxtLink>
                  <NuxtLink to="/guides/shipping-container-prices-uk" class="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                    UK container price guide →
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="otherSizes.length" class="section-padding bg-white border-t border-gray-100">
        <div class="container-custom">
          <h2 class="heading-md text-gray-900 mb-8 text-center">Other Container Sizes</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <NuxtLink
              v-for="size in otherSizes"
              :key="size.slug"
              :to="`/container-sales/${size.slug}`"
              class="bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-2xl p-6 text-center transition-all duration-200 group"
            >
              <div class="text-2xl font-bold text-gray-900 group-hover:text-primary-700">{{ size.label }}</div>
              <div class="text-sm text-gray-500 mt-1">{{ size.subtitle }}</div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <ContainerSalesFaq
        :faqs="faqs"
        :title="`${sizeLabel} Container FAQs`"
        subtitle="Answers to the most common questions about buying this size."
      />

      <DepotLinksSection
        :title="`Buy ${sizeLabel} Containers from Your Nearest Depot`"
        :subtitle="`We deliver ${sizeLabel} shipping containers nationwide from ${DEPOT_COUNT} UK depot locations.`"
      />

      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center max-w-2xl mx-auto">
          <h2 class="heading-lg text-white mb-4">Ready to Buy a {{ sizeLabel }} Container?</h2>
          <p class="text-gray-300 text-lg mb-8">Get a free, no-obligation quote today. We respond the same day with transparent pricing including delivery.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary">Send an Enquiry</NuxtLink>
            <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
              Call 07793 251550
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import type { ContainerFaq } from '~/utils/container-sales-seo'
import { DEPOT_COUNT } from '~/utils/depots'

defineProps<{
  sizeLabel: string
  slug: string
  h1: string
  heroDescription: string
  heroImage: string
  bodyParagraphs: string[]
  specs: { label: string; value: string }[]
  useCases: string[]
  faqs: ContainerFaq[]
  otherSizes: { slug: string; label: string; subtitle: string }[]
}>()
</script>
