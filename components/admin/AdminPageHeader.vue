<template>
  <header class="admin-page-header">
    <div class="min-w-0">
      <p v-if="eyebrow" class="admin-section-label mb-2">{{ eyebrow }}</p>
      <h1 class="admin-page-title">{{ title }}</h1>
      <p v-if="subtitle" class="admin-page-subtitle">{{ subtitle }}</p>
    </div>
    <div v-if="$slots.actions" class="flex flex-wrap items-center gap-2 flex-shrink-0">
      <slot name="actions" />
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  eyebrow?: string
}>()
</script>
