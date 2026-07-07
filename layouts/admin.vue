<template>
  <div class="min-h-screen bg-gray-100 flex">
    <aside
      class="sticky top-0 h-screen flex-shrink-0 flex flex-col bg-white border-r border-gray-200 transition-all duration-300 z-40"
      :class="collapsed ? 'w-16' : 'w-60'"
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
        <div v-for="group in adminNavGroups" :key="group.label">
          <div v-if="!collapsed" class="px-4 mb-1">
            <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">{{ group.label }}</span>
          </div>
          <div v-else class="mx-auto w-6 h-px bg-gray-200 mb-2" />

          <div class="space-y-0.5 px-2">
            <template v-for="link in group.links" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors border"
                :class="navClass(link.to, group.label)"
                :title="collapsed ? link.label : undefined"
              >
                <span class="text-base flex-shrink-0">{{ link.icon }}</span>
                <span v-if="!collapsed" class="min-w-0">
                  <span class="block truncate">{{ link.label }}</span>
                  <span class="block text-[10px] font-normal text-gray-400 truncate">{{ link.description }}</span>
                </span>
              </NuxtLink>

              <div
                v-if="'crmTabs' in group && group.crmTabs && !collapsed && route.path === '/admin'"
                class="ml-3 mt-0.5 space-y-0.5 border-l border-gray-200 pl-2"
              >
                <NuxtLink
                  v-for="tab in crmTabs"
                  :key="tab.id"
                  :to="{ path: '/admin', query: { tab: tab.id } }"
                  class="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs font-medium transition-colors"
                  :class="route.path === '/admin' && route.query.tab === tab.id
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'"
                >
                  <span>{{ tab.icon }}</span>
                  <span class="truncate">{{ tab.label }}</span>
                </NuxtLink>
              </div>
            </template>
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
      <header class="bg-white border-b border-gray-200 min-h-14 flex items-center justify-between gap-4 px-4 sm:px-6 py-2 flex-shrink-0">
        <div class="min-w-0 flex items-center gap-3">
          <span
            class="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md flex-shrink-0"
            :class="areaBadgeClass"
          >
            {{ areaLabel }}
          </span>
          <div class="min-w-0">
            <p class="text-sm font-medium text-gray-900">{{ pageTitle }}</p>
            <p v-if="pageSubtitle" class="text-xs text-gray-500 truncate">{{ pageSubtitle }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <NuxtLink
            v-if="adminArea === 'website'"
            to="/admin"
            class="hidden sm:inline-flex text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors"
          >
            ← AI &amp; Sales
          </NuxtLink>
          <span class="text-xs text-gray-400 hidden md:block">{{ currentTime }}</span>
        </div>
      </header>
      <main class="flex-1 overflow-auto">
        <slot />
      </main>
    </div>

    <AdminToast />
  </div>
</template>

<script setup lang="ts">
import {
  adminAreaForPath,
  adminAreaLabel,
  adminNavGroups,
  adminPageTitle,
  crmTabs,
} from '~/utils/admin-nav'

const route = useRoute()
const router = useRouter()
const collapsed = ref(false)
const currentTime = ref('')

const adminArea = computed(() => adminAreaForPath(route.path))

const areaLabel = computed(() => adminAreaLabel(adminArea.value))

const areaBadgeClass = computed(() => {
  if (adminArea.value === 'website') return 'bg-sky-100 text-sky-800'
  if (adminArea.value === 'account') return 'bg-gray-100 text-gray-700'
  return 'bg-emerald-100 text-emerald-800'
})

const pageTitle = computed(() => {
  if (route.path === '/admin' && route.query.tab) {
    const tab = crmTabs.find((t) => t.id === route.query.tab)
    if (tab) return tab.label
  }
  return adminPageTitle(route.path)
})

const pageSubtitle = computed(() => {
  if (adminArea.value === 'website') {
    return 'Website CMS — not connected to the AI assistant'
  }
  if (route.path === '/admin') {
    if (route.query.tab) {
      return crmTabs.find((t) => t.id === route.query.tab)?.description
    }
    return 'James AI, leads, stock & billing'
  }
  for (const group of adminNavGroups) {
    const link = group.links.find((l) => route.path.startsWith(l.to))
    if (link) return link.description
  }
  return ''
})

function navClass(path: string, groupLabel: string) {
  const isWebsite = groupLabel === 'Website'
  const active = path === '/admin'
    ? route.path === '/admin' && !route.query.tab
    : route.path.startsWith(path)

  if (active) {
    return isWebsite
      ? 'bg-sky-50 text-sky-900 border-sky-200'
      : 'bg-emerald-50 text-emerald-800 border-emerald-200'
  }
  return 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent'
}

async function logout() {
  await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' })
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
