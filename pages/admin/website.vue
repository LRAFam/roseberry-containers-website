<template>
  <div class="admin-page space-y-6">
    <AdminPageHeader
      eyebrow="Website CMS"
      title="Analytics & SEO"
      subtitle="Traffic, Search Console performance, and blog stats — separate from the AI assistant."
    />

    <AdminEmptyState v-if="loading" title="Loading analytics…" icon="chart-pie" />

    <template v-else-if="stats">
      <section class="space-y-4">
        <div>
          <p class="admin-section-label">Traffic & content</p>
          <h2 class="admin-section-title mt-1">Website performance</h2>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="admin-card-padded">
            <p class="admin-section-label">This week</p>
            <p class="text-3xl font-bold text-slate-900 mt-2 tabular-nums">{{ stats.leadsThisWeek }}</p>
            <p class="text-sm text-slate-500 mt-1">Leads captured</p>
          </div>
          <div class="admin-card-padded">
            <p class="admin-section-label">This month</p>
            <p class="text-3xl font-bold text-slate-900 mt-2 tabular-nums">{{ stats.leadsThisMonth }}</p>
            <p class="text-sm text-slate-500 mt-1">All sources</p>
          </div>
          <div class="admin-card-padded">
            <p class="admin-section-label">30 days</p>
            <p class="text-3xl font-bold text-emerald-700 mt-2 tabular-nums">{{ stats.websiteLeadsThisMonth }}</p>
            <p class="text-sm text-slate-500 mt-1">Website enquiries</p>
          </div>
          <div class="admin-card-padded">
            <p class="admin-section-label">Blog</p>
            <p class="text-3xl font-bold text-slate-900 mt-2 tabular-nums">{{ stats.blog.published }}</p>
            <p class="text-sm text-slate-500 mt-1">Published posts</p>
          </div>
        </div>
      </section>

      <AdminGrowthPanel />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="admin-card-padded">
          <h2 class="admin-section-title mb-2">Visitor analytics</h2>
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

        <div class="admin-card-padded">
          <h2 class="admin-section-title mb-2">Quick links</h2>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Submit sitemap: <a href="/sitemap.xml" target="_blank" class="text-emerald-600 hover:underline">/sitemap.xml</a></li>
            <li>• <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">Open Search Console</a></li>
            <li v-if="gaId">• <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">Open Google Analytics</a></li>
            <li v-if="plausibleDomain">• <a :href="`https://plausible.io/${plausibleDomain}`" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">Open Plausible</a></li>
          </ul>
        </div>
      </div>

      <div class="admin-card-padded">
        <h2 class="admin-section-title mb-4">Blog content</h2>
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
