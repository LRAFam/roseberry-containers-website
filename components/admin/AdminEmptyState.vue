<template>
  <div class="admin-empty">
    <div v-if="icon" class="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl mb-4">
      {{ icon }}
    </div>
    <p class="admin-empty-title">{{ title }}</p>
    <p v-if="description" class="admin-empty-desc">{{ description }}</p>
    <div v-if="$slots.default" class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  icon?: string
}>()
</script>
