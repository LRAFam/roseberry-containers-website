<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Website Analytics</h1>
      <p class="text-gray-500 text-sm mt-1">Website CMS — traffic, SEO and blog stats (separate from the AI assistant).</p>
    </div>

    <div v-if="loading" class="card py-16 text-center text-gray-400 text-sm">Loading stats…</div>

    <template v-else-if="stats">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="card p-5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Leads this week</p>
          <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.leadsThisWeek }}</p>
        </div>
        <div class="card p-5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Leads this month</p>
          <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.leadsThisMonth }}</p>
        </div>
        <div class="card p-5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Website enquiries (30d)</p>
          <p class="text-3xl font-bold text-emerald-700 mt-2">{{ stats.websiteLeadsThisMonth }}</p>
        </div>
        <div class="card p-5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Published posts</p>
          <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.blog.published }}</p>
        </div>
      </div>

      <AdminGrowthPanel />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="card p-6">
          <h2 class="font-semibold text-gray-900 mb-2">Visitor Analytics</h2>
          <p class="text-sm text-gray-500 mb-4">
            GA4 tracks public site visits. Admin pages are excluded. View reports in Google Analytics.
          </p>
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <span class="chip" :class="gaId ? 'chip-green' : 'chip-yellow'">
              {{ gaId ? 'GA4 connected' : 'GA4 not configured' }}
            </span>
            <span v-if="plausibleDomain" class="chip chip-green">Plausible connected</span>
          </div>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Create a GA4 property at <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">analytics.google.com</a></li>
            <li>• Set stream URL to <code class="text-xs bg-gray-100 px-1 rounded">https://www.roseberrycontainers.com</code></li>
            <li>• Add to Vercel: <code class="text-xs bg-gray-100 px-1 rounded">NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX</code></li>
            <li>• Redeploy — tracking loads on all public pages (not <code class="text-xs bg-gray-100 px-1 rounded">/admin</code>)</li>
          </ul>
          <a
            v-if="gaId"
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-4 text-sm text-emerald-600 hover:underline font-medium"
          >
            Open Google Analytics →
          </a>
        </div>

        <div class="card p-6">
          <h2 class="font-semibold text-gray-900 mb-2">Quick links</h2>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Submit sitemap: <a href="/sitemap.xml" target="_blank" class="text-emerald-600 hover:underline">/sitemap.xml</a></li>
            <li>• <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">Open Search Console</a></li>
            <li v-if="gaId">• <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">Open Google Analytics</a></li>
            <li v-if="plausibleDomain">• <a :href="`https://plausible.io/${plausibleDomain}`" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">Open Plausible</a></li>
          </ul>
        </div>
      </div>

      <div class="card p-6">
        <h2 class="font-semibold text-gray-900 mb-4">Blog content</h2>
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-600">
            <span class="font-semibold text-gray-900">{{ stats.blog.total }}</span> total posts —
            <span class="text-emerald-700 font-medium">{{ stats.blog.published }} published</span>,
            {{ stats.blog.draft }} drafts
          </div>
          <NuxtLink to="/admin/blog" class="btn-primary text-sm">Manage Blog</NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin-auth'] })

const { siteFetch } = useAdminApi()
const config = useRuntimeConfig()
const plausibleDomain = config.public.plausibleDomain
const gaId = config.public.gaId

const loading = ref(true)
const stats = ref<any>(null)

onMounted(async () => {
  try {
    const res = await siteFetch('/admin/website-stats')
    stats.value = res.ok ? await res.json() : null
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.card { @apply bg-white rounded-xl shadow-sm border border-gray-200; }
.chip { @apply text-xs px-2 py-0.5 rounded-full font-medium inline-block; }
.chip-green { @apply bg-emerald-100 text-emerald-700; }
.chip-yellow { @apply bg-yellow-100 text-yellow-700; }
.btn-primary { @apply bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors; }
</style>
