<template>
  <section class="card p-4 sm:p-5">
    <div class="mb-4">
      <h2 class="text-sm font-semibold text-gray-900">CRM sections</h2>
      <p class="text-xs text-gray-500 mt-0.5">AI assistant &amp; sales — blog and SEO are under <strong class="font-medium text-gray-600">Website</strong> in the sidebar</p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2">
      <NuxtLink
        v-for="tab in crmTabs"
        :key="tab.id"
        :to="{ path: '/admin', query: { tab: tab.id } }"
        class="group flex flex-col items-start gap-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-3 text-left transition-colors hover:border-emerald-200 hover:bg-emerald-50/60"
        :class="route.path === '/admin' && route.query.tab === tab.id ? 'border-emerald-300 bg-emerald-50 ring-1 ring-emerald-200' : ''"
      >
        <span class="text-lg leading-none">{{ tab.icon }}</span>
        <span class="text-sm font-medium text-gray-900 group-hover:text-emerald-900">{{ tab.label }}</span>
        <span class="text-[11px] text-gray-500 line-clamp-2 leading-snug">{{ tab.description }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { crmTabs } from '~/utils/admin-nav'

const route = useRoute()
</script>

<style scoped>
.card { @apply bg-white rounded-xl shadow-sm border border-gray-200; }
</style>
