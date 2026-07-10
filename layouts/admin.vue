<template>
  <div class="admin-app admin-shell min-h-screen flex">
    <!-- Desktop sidebar -->
    <aside
      class="hidden lg:flex sticky top-0 h-screen flex-shrink-0 flex-col bg-slate-950 text-slate-300 transition-all duration-300 z-40 border-r border-slate-800/80"
      :class="collapsed ? 'w-[4.25rem]' : 'w-64'"
    >
      <div class="flex items-center h-16 px-3 border-b border-slate-800/80 flex-shrink-0">
        <NuxtLink to="/admin" class="flex items-center gap-3 min-w-0 group">
          <div class="h-9 w-9 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
            <img src="/logo-nav.png" alt="" class="h-5 w-auto brightness-0 invert opacity-90" />
          </div>
          <div v-if="!collapsed" class="min-w-0">
            <p class="text-sm font-bold text-white truncate leading-tight">Roseberry</p>
            <p class="text-[10px] text-slate-500 truncate">Client dashboard</p>
          </div>
        </NuxtLink>
        <button
          class="ml-auto flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
          :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
          @click="collapsed = !collapsed"
        >
          <AdminIcon name="chevron-left" size="sm" :class="collapsed ? 'rotate-180' : ''" />
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto py-4 space-y-5">
        <div v-for="group in adminNavGroups" :key="group.label">
          <div v-if="!collapsed" class="px-4 mb-2">
            <span class="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">{{ group.label }}</span>
          </div>
          <div v-else class="mx-auto w-8 h-px bg-slate-800 mb-3" />

          <div class="space-y-1 px-2">
            <template v-for="link in group.links" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                :class="navClass(link.to, group.label)"
                :title="collapsed ? link.label : undefined"
              >
                <AdminIcon :name="link.icon" size="sm" class="flex-shrink-0" />
                <span v-if="!collapsed" class="min-w-0 flex-1">
                  <span class="block truncate text-[13px]">{{ link.label }}</span>
                  <span class="block text-[11px] font-normal text-slate-500 truncate mt-0.5">{{ link.description }}</span>
                </span>
              </NuxtLink>

              <div
                v-if="'crmTabs' in group && group.crmTabs && !collapsed && route.path === '/admin'"
                class="ml-4 mt-1 space-y-0.5 border-l border-slate-800 pl-3"
              >
                <NuxtLink
                  v-for="tab in crmTabs"
                  :key="tab.id"
                  :to="{ path: '/admin', query: { tab: tab.id } }"
                  class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  :class="route.path === '/admin' && route.query.tab === tab.id
                    ? 'bg-emerald-500/15 text-emerald-300'
                    : 'text-slate-500 hover:text-slate-200 hover:bg-slate-900'"
                >
                  <AdminIcon :name="tab.icon" size="sm" />
                  <span class="truncate">{{ tab.label }}</span>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </nav>

      <div class="flex-shrink-0 px-2 py-3 border-t border-slate-800/80 space-y-1">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          :class="collapsed ? 'justify-center' : ''"
        >
          <AdminIcon name="globe" size="sm" />
          <span v-if="!collapsed">View website</span>
        </NuxtLink>
        <button
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          :class="collapsed ? 'justify-center' : ''"
          @click="logout"
        >
          <AdminIcon name="logout" size="sm" />
          <span v-if="!collapsed">Sign out</span>
        </button>
      </div>
    </aside>

    <div class="flex-1 min-w-0 flex flex-col">
      <header class="bg-white/90 backdrop-blur-md border-b border-slate-200/80 min-h-[3.25rem] flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-2.5 flex-shrink-0 sticky top-0 z-30">
        <div class="min-w-0 flex items-center gap-2 sm:gap-3">
          <img src="/logo-nav.png" alt="" class="h-7 w-auto lg:hidden flex-shrink-0" />
          <span
            class="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded-lg flex-shrink-0"
            :class="areaBadgeClass"
          >
            {{ areaLabel }}
          </span>
          <div class="min-w-0 lg:border-l lg:border-slate-200 lg:pl-3">
            <p class="text-sm font-semibold text-slate-900 truncate">{{ pageTitle }}</p>
            <p v-if="pageSubtitle" class="text-xs text-slate-500 truncate hidden sm:block">{{ pageSubtitle }}</p>
          </div>
        </div>
        <time class="text-xs text-slate-400 hidden md:block tabular-nums flex-shrink-0">{{ currentTime }}</time>
      </header>

      <main class="flex-1 overflow-auto admin-page-mobile-pad">
        <slot />
      </main>
    </div>

    <AdminMobileNav />
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
  if (adminArea.value === 'account') return 'bg-slate-100 text-slate-700'
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
  if (adminArea.value === 'website') return 'Website CMS'
  if (route.path === '/admin') {
    if (route.query.tab) return crmTabs.find((t) => t.id === route.query.tab)?.description
    return 'Leads, stock & billing'
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
      ? 'bg-sky-500/15 text-sky-200 ring-1 ring-sky-500/25'
      : 'bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/25'
  }
  return 'text-slate-400 hover:text-white hover:bg-slate-900'
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

<style src="~/assets/css/admin.css"></style>
