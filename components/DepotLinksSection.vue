<template>
  <section :class="variant === 'dark' ? 'section-padding bg-primary-950 text-white' : 'section-padding bg-gray-50'">
    <div class="container-custom">
      <div class="text-center mb-10">
        <div
          class="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-widest mb-3"
          :class="variant === 'dark' ? 'text-amber-400' : 'text-amber-600'"
        >
          <span class="w-8 h-px bg-amber-500"></span>
          Nationwide Coverage
          <span class="w-8 h-px bg-amber-500"></span>
        </div>
        <h2 class="heading-md mb-3" :class="variant === 'dark' ? 'text-white' : 'text-gray-900'">
          {{ title }}
        </h2>
        <p class="max-w-2xl mx-auto" :class="variant === 'dark' ? 'text-gray-300' : 'text-gray-600'">
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
        <NuxtLink
          v-for="depot in depots"
          :key="depot.slug"
          :to="`/container-sales/${depot.slug}`"
          class="rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-between gap-2 group"
          :class="variant === 'dark'
            ? 'bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/10 text-white'
            : 'bg-white border border-gray-200 hover:border-amber-300 hover:shadow-card text-gray-900'"
        >
          <span>
            {{ depot.name }}
            <span v-if="depot.isHQ" class="ml-1 text-xs text-amber-500">HQ</span>
          </span>
          <svg
            class="w-3.5 h-3.5 flex-shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
            :class="variant === 'dark' ? 'text-amber-400' : 'text-amber-600'"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <div class="text-center mt-8">
        <NuxtLink
          to="/container-sales/nationwide"
          class="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
          :class="variant === 'dark' ? 'text-amber-400 hover:text-amber-300' : 'text-primary-700 hover:text-primary-900'"
        >
          View all {{ DEPOT_COUNT }} UK depots
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { depots, DEPOT_COUNT } from '~/utils/depots'

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  variant?: 'light' | 'dark'
}>(), {
  title: 'Buy Containers from Your Nearest Depot',
  subtitle: 'We supply 10ft, 20ft and 40ft shipping containers from 9 locations across the UK — click your nearest depot for local pricing and delivery.',
  variant: 'light',
})
</script>
