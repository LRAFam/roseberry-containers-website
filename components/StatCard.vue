<template>
  <div class="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 flex items-center gap-4">
    <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" :class="bgColour">
      <!-- bolt -->
      <svg v-if="icon === 'bolt'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :class="iconColour" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      <!-- users -->
      <svg v-else-if="icon === 'users'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :class="iconColour" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <!-- star -->
      <svg v-else-if="icon === 'star'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :class="iconColour" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
      <!-- document -->
      <svg v-else-if="icon === 'document'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :class="iconColour" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      <!-- check -->
      <svg v-else-if="icon === 'check'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :class="iconColour" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <!-- pound -->
      <svg v-else-if="icon === 'pound'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :class="iconColour" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l-1 4h8M9 8V6a3 3 0 016 0" /></svg>
    </div>
    <div class="min-w-0">
      <p class="text-xs text-gray-500 font-medium truncate">{{ label }}</p>
      <p class="text-xl font-bold text-gray-900 leading-tight">{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  value: string | number
  color: 'emerald' | 'blue' | 'purple' | 'yellow' | 'green' | 'red'
  icon: 'bolt' | 'users' | 'star' | 'document' | 'check' | 'pound'
}>()

const bgColour = computed(() => ({
  emerald: 'bg-emerald-100',
  blue:    'bg-blue-100',
  purple:  'bg-purple-100',
  yellow:  'bg-yellow-100',
  green:   'bg-green-100',
  red:     'bg-red-100',
}[props.color]))

const iconColour = computed(() => ({
  emerald: 'text-emerald-600',
  blue:    'text-blue-600',
  purple:  'text-purple-600',
  yellow:  'text-yellow-600',
  green:   'text-green-600',
  red:     'text-red-600',
}[props.color]))
</script>
