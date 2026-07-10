<template>
  <div class="admin-card px-5 py-4 flex items-center gap-4 h-full">
    <div class="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ring-1 ring-inset" :class="iconWrapClass">
      <component :is="iconSvg" class="w-5 h-5" :class="iconClass" />
    </div>
    <div class="min-w-0 flex-1">
      <p class="text-[11px] font-semibold uppercase tracking-wider text-slate-500 truncate">{{ label }}</p>
      <p class="text-2xl font-bold text-slate-900 leading-none mt-1.5 tracking-tight tabular-nums">{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'

const props = defineProps<{
  label: string
  value: string | number
  color: 'emerald' | 'blue' | 'purple' | 'yellow' | 'green' | 'red'
  icon: 'bolt' | 'users' | 'star' | 'document' | 'check' | 'pound'
}>()

const palette = {
  emerald: { wrap: 'bg-emerald-50 ring-emerald-100', icon: 'text-emerald-600' },
  blue:    { wrap: 'bg-sky-50 ring-sky-100', icon: 'text-sky-600' },
  purple:  { wrap: 'bg-violet-50 ring-violet-100', icon: 'text-violet-600' },
  yellow:  { wrap: 'bg-amber-50 ring-amber-100', icon: 'text-amber-600' },
  green:   { wrap: 'bg-green-50 ring-green-100', icon: 'text-green-600' },
  red:     { wrap: 'bg-red-50 ring-red-100', icon: 'text-red-600' },
} as const

const iconWrapClass = computed(() => palette[props.color].wrap)
const iconClass = computed(() => palette[props.color].icon)

const paths: Record<string, string> = {
  bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
  users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  document: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  check: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  pound: 'M9 8h6m-5 0a3 3 0 110 6H9l-1 4h8M9 8V6a3 3 0 016 0',
}

const iconSvg = computed(() => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: paths[props.icon],
  }),
]))
</script>
