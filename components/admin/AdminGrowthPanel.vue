<template>
  <section class="space-y-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="font-semibold text-gray-900">Search Console</h2>
        <p class="text-sm text-gray-500">Google search performance — synced from GSC API</p>
      </div>
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="btn-secondary text-sm"
          :disabled="syncing"
          @click="runGscSync"
        >
          {{ syncing ? 'Syncing…' : 'Sync GSC' }}
        </button>
        <button type="button" class="btn-secondary text-sm" :disabled="loading" @click="refresh">
          Refresh
        </button>
      </div>
    </div>

    <p v-if="syncMessage" class="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">{{ syncMessage }}</p>
    <p v-if="syncError" class="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">{{ syncError }}</p>

    <div v-if="!growth?.configured?.gsc" class="card p-6 text-sm text-gray-600 space-y-2">
      <p class="font-medium text-gray-900">GSC not configured yet</p>
      <p>Add these env vars on your website deployment:</p>
      <ul class="list-disc pl-5 space-y-1 text-xs font-mono text-gray-500">
        <li>GOOGLE_SERVICE_ACCOUNT_JSON</li>
        <li>GSC_SITE_URL (e.g. sc-domain:roseberrycontainers.com)</li>
      </ul>
      <p class="text-xs text-gray-400">Grant the service account access in Search Console, then click Sync GSC.</p>
    </div>

    <template v-else-if="growth?.seo">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div class="card p-4">
          <p class="text-xs text-gray-500 uppercase tracking-wide">Clicks</p>
          <p class="text-2xl font-bold text-gray-900 mt-1">{{ growth.seo.totals.clicks.toLocaleString() }}</p>
        </div>
        <div class="card p-4">
          <p class="text-xs text-gray-500 uppercase tracking-wide">Impressions</p>
          <p class="text-2xl font-bold text-gray-900 mt-1">{{ growth.seo.totals.impressions.toLocaleString() }}</p>
        </div>
        <div class="card p-4">
          <p class="text-xs text-gray-500 uppercase tracking-wide">Avg CTR</p>
          <p class="text-2xl font-bold text-gray-900 mt-1">{{ growth.seo.totals.ctr.toFixed(1) }}%</p>
        </div>
        <div class="card p-4">
          <p class="text-xs text-gray-500 uppercase tracking-wide">Avg position</p>
          <p class="text-2xl font-bold text-gray-900 mt-1">{{ growth.seo.totals.position.toFixed(1) }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="card p-5">
          <h3 class="font-semibold text-gray-900 mb-3 text-sm">Top search queries</h3>
          <div v-if="!growth.seo.top_queries.length" class="text-sm text-gray-400">No data yet — run a sync.</div>
          <table v-else class="w-full text-sm">
            <thead>
              <tr class="text-xs text-gray-500 uppercase">
                <th class="text-left pb-2">Query</th>
                <th class="text-right pb-2">Clicks</th>
                <th class="text-right pb-2 hidden sm:table-cell">Impr.</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="row in growth.seo.top_queries" :key="row.dimension_value">
                <td class="py-2 pr-2 text-gray-800 truncate max-w-[200px]">{{ row.dimension_value }}</td>
                <td class="py-2 text-right font-medium">{{ row.clicks }}</td>
                <td class="py-2 text-right text-gray-500 hidden sm:table-cell">{{ row.impressions }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card p-5">
          <h3 class="font-semibold text-gray-900 mb-3 text-sm">Top landing pages</h3>
          <div v-if="!growth.seo.top_pages.length" class="text-sm text-gray-400">No data yet — run a sync.</div>
          <table v-else class="w-full text-sm">
            <thead>
              <tr class="text-xs text-gray-500 uppercase">
                <th class="text-left pb-2">Page</th>
                <th class="text-right pb-2">Clicks</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="row in growth.seo.top_pages" :key="row.dimension_value">
                <td class="py-2 pr-2 text-gray-600 truncate max-w-[260px] text-xs">{{ row.dimension_value }}</td>
                <td class="py-2 text-right font-medium">{{ row.clicks }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p v-if="growth.last_sync" class="text-xs text-gray-400">
        Last sync: {{ fmtDatetime(String(growth.last_sync)) }}
        <span v-if="growth.last_sync_status">({{ growth.last_sync_status }})</span>
      </p>
    </template>
  </section>
</template>

<script setup lang="ts">
import { fmtDatetime } from '~/utils/admin-ui'

const { siteFetch } = useAdminApi()

const loading = ref(false)
const syncing = ref(false)
const growth = ref<any>(null)
const syncMessage = ref('')
const syncError = ref('')

async function refresh() {
  loading.value = true
  syncError.value = ''
  try {
    const res = await siteFetch('/admin/analytics/growth?period=30d')
    if (res.ok) growth.value = await res.json()
  } finally {
    loading.value = false
  }
}

async function runGscSync() {
  syncing.value = true
  syncMessage.value = ''
  syncError.value = ''
  try {
    const res = await siteFetch('/admin/analytics/sync', { method: 'POST' })
    const data = await res.json()
    if (!res.ok || data.status === 'failed') {
      syncError.value = data.message || 'Sync failed'
      return
    }
    if (data.status === 'skipped') {
      syncError.value = data.message || 'GSC not configured'
      return
    }
    syncMessage.value = `Synced ${data.rows} rows from Search Console.`
    await refresh()
  } catch {
    syncError.value = 'Could not reach analytics API.'
  } finally {
    syncing.value = false
  }
}

onMounted(() => refresh())
</script>

<style scoped>
.card { @apply bg-white rounded-xl shadow-sm border border-gray-200; }
.btn-secondary { @apply bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg border border-gray-200 transition-colors disabled:opacity-50; }
</style>
