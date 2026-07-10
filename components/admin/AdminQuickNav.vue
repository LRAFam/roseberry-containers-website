<template>
  <section class="admin-card-padded">
    <div class="mb-4">
      <p class="admin-section-label">Workspace</p>
      <h2 class="admin-section-title mt-1">Sales & operations</h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2 sm:gap-3">
      <NuxtLink
        v-for="tab in crmTabs"
        :key="tab.id"
        :to="{ path: '/admin', query: { tab: tab.id } }"
        class="group flex flex-col gap-2.5 rounded-xl border px-3 py-3 sm:px-4 sm:py-4 text-left transition-all min-h-[5.5rem]"
        :class="isActive(tab.id)
          ? 'border-emerald-300 bg-emerald-50 shadow-sm ring-1 ring-emerald-200/80'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'"
      >
        <div class="w-9 h-9 rounded-lg flex items-center justify-center" :class="isActive(tab.id) ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700'">
          <AdminIcon :name="tab.icon" size="sm" />
        </div>
        <div>
          <span class="text-sm font-semibold text-slate-900 block">{{ tab.label }}</span>
          <span class="text-[11px] text-slate-500 line-clamp-2 leading-snug mt-0.5 hidden sm:block">{{ tab.description }}</span>
        </div>
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
