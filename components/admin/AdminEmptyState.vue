<template>
  <div class="admin-empty">
    <div v-if="icon" class="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-4 text-slate-600">
      <AdminIcon :name="icon" size="lg" />
    </div>
    <p class="admin-empty-title">{{ title }}</p>
    <p v-if="description" class="admin-empty-desc">{{ description }}</p>
    <div v-if="$slots.default" class="mt-4 w-full flex justify-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AdminIconName } from '~/utils/admin-icons'

defineProps<{
  title: string
  description?: string
  icon?: AdminIconName
}>()
</script>
