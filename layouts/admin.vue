<template>
  <div class="min-h-screen bg-gray-100 flex">
    <aside
      class="sticky top-0 h-screen flex-shrink-0 flex flex-col bg-white border-r border-gray-200 transition-all duration-300 z-40"
      :class="collapsed ? 'w-16' : 'w-56'"
    >
      <div class="flex items-center h-16 px-3 border-b border-gray-200 flex-shrink-0">
        <NuxtLink to="/admin" class="flex items-center gap-2.5 min-w-0">
          <img src="/logo-nav.png" alt="Roseberry" class="h-8 w-auto flex-shrink-0" />
          <span v-if="!collapsed" class="text-sm font-bold text-gray-900 truncate">Admin</span>
        </NuxtLink>
        <button
          class="ml-auto flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
          @click="collapsed = !collapsed"
        >
          <svg class="w-4 h-4" :class="collapsed ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto py-3 space-y-4">
        <div v-for="group in navGroups" :key="group.label">
          <div v-if="!collapsed" class="px-4 mb-1">
            <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">{{ group.label }}</span>
          </div>
          <div v-else class="mx-auto w-6 h-px bg-gray-200 mb-2" />
          <div class="space-y-0.5 px-2">
            <NuxtLink
              v-for="link in group.links"
              :key="link.to"
              :to="link.to"
              class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors border"
              :class="isActive(link.to)
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent'"
              :title="collapsed ? link.label : undefined"
            >
              <span class="text-base flex-shrink-0">{{ link.icon }}</span>
              <span v-if="!collapsed" class="truncate">{{ link.label }}</span>
            </NuxtLink>
          </div>
        </div>
      </nav>

      <div class="flex-shrink-0 px-2 py-3 border-t border-gray-200 space-y-1">
        <NuxtLink
          to="/"
          class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors"
          :class="collapsed ? 'justify-center' : ''"
          :title="collapsed ? 'View website' : undefined"
        >
          <span>🌐</span>
          <span v-if="!collapsed">View Website</span>
        </NuxtLink>
        <button
          class="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors"
          :class="collapsed ? 'justify-center' : ''"
          @click="logout"
        >
          <span>↩</span>
          <span v-if="!collapsed">Sign out</span>
        </button>
      </div>
    </aside>

    <div class="flex-1 min-w-0 flex flex-col">
      <header class="bg-white border-b border-gray-200 h-14 flex items-center justify-between px-4 sm:px-6 flex-shrink-0">
        <p class="text-sm text-gray-500">{{ pageTitle }}</p>
        <span class="text-xs text-gray-400 hidden sm:block">{{ currentTime }}</span>
      </header>
      <main class="flex-1 overflow-auto">
        <slot />
      </main>
    </div>

    <AdminToast />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const apiBase = config.public.apiBase || 'http://localhost:3001'
const collapsed = ref(false)
const currentTime = ref('')

const navGroups = [
  {
    label: 'Sales',
    links: [
      { to: '/admin', label: 'Sales Dashboard', icon: '📊' },
    ],
  },
  {
    label: 'Website',
    links: [
      { to: '/admin/website', label: 'Analytics', icon: '📈' },
      { to: '/admin/blog', label: 'Blog', icon: '📝' },
    ],
  },
  {
    label: 'Account',
    links: [
      { to: '/admin/settings', label: 'Settings', icon: '⚙️' },
    ],
  },
]

const pageTitle = computed(() => {
  if (route.path === '/admin') return 'Sales Overview'
  if (route.path.startsWith('/admin/sales')) return 'Leads & CRM'
  if (route.path.startsWith('/admin/website')) return 'Website Analytics'
  if (route.path.startsWith('/admin/blog')) return 'Blog Management'
  if (route.path.startsWith('/admin/settings')) return 'Account Settings'
  return 'Admin'
})

function isActive(path: string) {
  if (path === '/admin') return route.path === '/admin'
  return route.path.startsWith(path)
}

async function logout() {
  await fetch(`${apiBase}/admin/logout`, { method: 'POST', credentials: 'include' })
  await router.push('/admin/login')
}

onMounted(() => {
  const tick = () => {
    currentTime.value = new Date().toLocaleString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
    })
  }
  tick()
  setInterval(tick, 60_000)
})
</script>
