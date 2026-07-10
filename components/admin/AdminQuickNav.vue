<template>
  <section class="admin-card-padded">
    <div class="mb-5">
      <p class="admin-section-label">Navigate</p>
      <h2 class="admin-section-title mt-1">CRM workspace</h2>
      <p class="text-sm text-slate-500 mt-1.5 leading-relaxed">
        AI assistant &amp; sales tools. Blog and SEO live under <strong class="font-semibold text-slate-700">Website</strong> in the sidebar.
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
      <NuxtLink
        v-for="tab in crmTabs"
        :key="tab.id"
        :to="{ path: '/admin', query: { tab: tab.id } }"
        class="group relative flex flex-col gap-2 rounded-2xl border px-4 py-4 text-left transition-all duration-200"
        :class="isActive(tab.id)
          ? 'border-emerald-300 bg-emerald-50/80 shadow-sm ring-1 ring-emerald-200/80'
          : 'border-slate-200/80 bg-slate-50/40 hover:border-slate-300 hover:bg-white hover:shadow-sm'"
      >
        <span class="text-xl leading-none">{{ tab.icon }}</span>
        <span class="text-sm font-semibold text-slate-900 group-hover:text-emerald-900">{{ tab.label }}</span>
        <span class="text-[11px] text-slate-500 line-clamp-2 leading-snug">{{ tab.description }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { crmTabs } from '~/utils/admin-nav'

const route = useRoute()

function isActive(tabId: string) {
  return route.path === '/admin' && route.query.tab === tabId
}
</script>
