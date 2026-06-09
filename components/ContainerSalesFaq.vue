<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
          <span class="w-8 h-px bg-amber-500"></span>
          Common Questions
          <span class="w-8 h-px bg-amber-500"></span>
        </div>
        <h2 class="heading-lg text-gray-900 mb-4">{{ title }}</h2>
        <p v-if="subtitle" class="text-xl text-gray-500 max-w-2xl mx-auto">{{ subtitle }}</p>
      </div>
      <div class="max-w-3xl mx-auto divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
        <details
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="group bg-white"
          :open="index === 0"
        >
          <summary class="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
            <span>{{ faq.question }}</span>
            <svg class="w-5 h-5 text-amber-500 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div class="px-6 pb-5 text-gray-600 leading-relaxed">
            {{ faq.answer }}
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContainerFaq } from '~/utils/container-sales-seo'

defineProps<{
  faqs: ContainerFaq[]
  title?: string
  subtitle?: string
}>()
</script>
