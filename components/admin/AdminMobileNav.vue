<template>
  <nav class="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 safe-area-pb">
    <div class="grid grid-cols-4">
      <NuxtLink
        v-for="item in mobileNavItems"
        :key="item.to"
        :to="item.to"
        class="flex flex-col items-center justify-center gap-1 py-2.5 px-1 min-h-[3.5rem] transition-colors"
        :class="item.match(route.path) ? 'text-emerald-700' : 'text-slate-500'"
      >
        <AdminIcon :name="item.icon" size="sm" />
        <span class="text-[10px] font-semibold">{{ item.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { mobileNavItems } from '~/utils/admin-nav'

const route = useRoute()
</script>

<style scoped>
.safe-area-pb {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>
