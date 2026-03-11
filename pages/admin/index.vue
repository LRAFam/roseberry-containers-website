<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Nav bar -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span class="font-bold text-gray-800">Roseberry Dashboard</span>
        </div>
        <button @click="logout" class="text-sm text-gray-500 hover:text-gray-800 transition-colors">Sign out</button>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Tabs -->
      <nav class="flex gap-1 mb-8 bg-white rounded-xl p-1 shadow-sm w-fit border border-gray-200">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-5 py-2 rounded-lg text-sm font-medium transition-colors',
            activeTab === tab.id
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          ]"
        >
          {{ tab.label }}
          <span v-if="tab.id === 'leads' && leads.length" class="ml-2 bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
            {{ leads.length }}
          </span>
        </button>
      </nav>

      <!-- ── LEADS ── -->
      <section v-if="activeTab === 'leads'">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">All Leads</h2>
          <button @click="fetchLeads" class="text-sm text-emerald-600 hover:underline">Refresh</button>
        </div>

        <div v-if="leadsLoading" class="text-gray-400 text-sm py-8 text-center">Loading leads…</div>
        <div v-else-if="leads.length === 0" class="text-gray-400 text-sm py-8 text-center">No leads yet.</div>
        <div v-else class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Name</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Platform</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Message</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Created</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="lead in leads" :key="lead.id" class="hover:bg-gray-50 transition-colors">
                <td class="px-4 py-3 font-medium text-gray-800">{{ lead.customer_name || '—' }}</td>
                <td class="px-4 py-3 text-gray-500 capitalize">{{ lead.source }}</td>
                <td class="px-4 py-3 text-gray-600 max-w-xs truncate">{{ lead.initial_message || '—' }}</td>
                <td class="px-4 py-3 text-gray-400 whitespace-nowrap">{{ formatDate(lead.created_at) }}</td>
                <td class="px-4 py-3">
                  <select
                    :value="lead.status"
                    @change="updateLeadStatus(lead.id, ($event.target as HTMLSelectElement).value)"
                    class="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white outline-none focus:border-emerald-500"
                    :class="statusClass(lead.status)"
                  >
                    <option v-for="s in leadStatuses" :key="s" :value="s">{{ s }}</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── STOCK ── -->
      <section v-if="activeTab === 'stock'">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">Depot Stock</h2>
          <button @click="showAddStock = !showAddStock" class="text-sm bg-emerald-600 text-white px-4 py-1.5 rounded-lg hover:bg-emerald-700 transition-colors">
            {{ showAddStock ? 'Cancel' : '+ Add Stock' }}
          </button>
        </div>

        <!-- Add stock form -->
        <div v-if="showAddStock" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h3 class="font-medium text-gray-800 mb-4">Add / Update Stock</h3>
          <form @submit.prevent="submitStock" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">Depot Name</label>
              <input v-model="newStock.depot_name" required class="input-field" placeholder="Middlesbrough Depot" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">Container Type</label>
              <input v-model="newStock.container_type" required class="input-field" placeholder="20ft Standard" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">Condition</label>
              <select v-model="newStock.condition" class="input-field">
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">Price (£)</label>
              <input v-model.number="newStock.price_gbp" type="number" min="0" required class="input-field" placeholder="2500" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">Quantity</label>
              <input v-model.number="newStock.quantity" type="number" min="0" required class="input-field" placeholder="5" />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-600 mb-1">Postcode</label>
              <input v-model="newStock.postcode" class="input-field" placeholder="TS1 1AA" />
            </div>
            <div class="sm:col-span-2">
              <button type="submit" :disabled="stockSubmitting" class="bg-emerald-600 text-white text-sm px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-50 transition-colors">
                {{ stockSubmitting ? 'Saving…' : 'Save Stock' }}
              </button>
            </div>
          </form>
        </div>

        <div v-if="stockLoading" class="text-gray-400 text-sm py-8 text-center">Loading stock…</div>
        <div v-else-if="stock.length === 0" class="text-gray-400 text-sm py-8 text-center">No stock entries yet.</div>
        <div v-else class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Depot</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Type</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Condition</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Price</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Qty</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Postcode</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="item in stock" :key="item.id" class="hover:bg-gray-50">
                <td class="px-4 py-3 font-medium text-gray-800">{{ item.depot_name }}</td>
                <td class="px-4 py-3 text-gray-600">{{ item.container_type }}</td>
                <td class="px-4 py-3 text-gray-500 capitalize">{{ item.condition || '—' }}</td>
                <td class="px-4 py-3 text-gray-800">£{{ (item.price_pence / 100).toLocaleString() }}</td>
                <td class="px-4 py-3 text-gray-600">{{ item.quantity }}</td>
                <td class="px-4 py-3 text-gray-400">{{ item.postcode || '—' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── INVOICES ── -->
      <section v-if="activeTab === 'invoices'">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold text-gray-800">Invoices</h2>
          <button @click="fetchInvoices" class="text-sm text-emerald-600 hover:underline">Refresh</button>
        </div>

        <div v-if="invoicesLoading" class="text-gray-400 text-sm py-8 text-center">Loading invoices…</div>
        <div v-else-if="invoices.length === 0" class="text-gray-400 text-sm py-8 text-center">No invoices yet.</div>
        <div v-else class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Invoice #</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Total</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">Created</th>
                <th class="text-left px-4 py-3 font-medium text-gray-600">PDF</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="inv in invoices" :key="inv.id" class="hover:bg-gray-50">
                <td class="px-4 py-3 font-mono text-gray-800 text-xs">{{ inv.invoice_number }}</td>
                <td class="px-4 py-3 text-gray-800">£{{ (inv.total_pence / 100).toLocaleString() }}</td>
                <td class="px-4 py-3">
                  <span :class="invoiceStatusClass(inv.status)" class="text-xs px-2 py-1 rounded-full font-medium capitalize">
                    {{ inv.status }}
                  </span>
                </td>
                <td class="px-4 py-3 text-gray-400 whitespace-nowrap">{{ formatDate(inv.created_at) }}</td>
                <td class="px-4 py-3">
                  <a
                    v-if="inv.pdf_path"
                    :href="`${apiBase}/${inv.pdf_path}`"
                    target="_blank"
                    class="text-emerald-600 hover:underline text-xs"
                  >Download</a>
                  <span v-else class="text-gray-300 text-xs">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['admin-auth'],
})

const config = useRuntimeConfig()
const apiBase = config.public.apiBase || 'http://localhost:3001'
const router = useRouter()

const tabs = [
  { id: 'leads', label: 'Leads' },
  { id: 'stock', label: 'Depot Stock' },
  { id: 'invoices', label: 'Invoices' },
]
const activeTab = ref('leads')

// ── Leads ──
const leads = ref<any[]>([])
const leadsLoading = ref(false)
const leadStatuses = ['new', 'qualified', 'quoted', 'won', 'lost']

async function fetchLeads() {
  leadsLoading.value = true
  try {
    const res = await fetch(`${apiBase}/admin/leads`, { credentials: 'include' })
    if (res.status === 401) { await router.push('/admin/login'); return }
    leads.value = await res.json()
  } finally {
    leadsLoading.value = false
  }
}

async function updateLeadStatus(id: string, status: string) {
  await fetch(`${apiBase}/admin/leads/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ status }),
  })
  await fetchLeads()
}

function statusClass(status: string) {
  return {
    new: 'text-blue-700',
    qualified: 'text-purple-700',
    quoted: 'text-yellow-700',
    won: 'text-emerald-700',
    lost: 'text-red-600',
  }[status] ?? ''
}

// ── Stock ──
const stock = ref<any[]>([])
const stockLoading = ref(false)
const showAddStock = ref(false)
const stockSubmitting = ref(false)
const newStock = ref({ depot_name: '', container_type: '', condition: 'used', price_gbp: 0, quantity: 1, postcode: '' })

async function fetchStock() {
  stockLoading.value = true
  try {
    const res = await fetch(`${apiBase}/admin/depot`, { credentials: 'include' })
    stock.value = await res.json()
  } finally {
    stockLoading.value = false
  }
}

async function submitStock() {
  stockSubmitting.value = true
  try {
    await fetch(`${apiBase}/admin/depot`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(newStock.value),
    })
    showAddStock.value = false
    newStock.value = { depot_name: '', container_type: '', condition: 'used', price_gbp: 0, quantity: 1, postcode: '' }
    await fetchStock()
  } finally {
    stockSubmitting.value = false
  }
}

// ── Invoices ──
const invoices = ref<any[]>([])
const invoicesLoading = ref(false)

async function fetchInvoices() {
  invoicesLoading.value = true
  try {
    const res = await fetch(`${apiBase}/admin/invoices`, { credentials: 'include' })
    invoices.value = await res.json()
  } finally {
    invoicesLoading.value = false
  }
}

function invoiceStatusClass(status: string) {
  return {
    draft: 'bg-gray-100 text-gray-600',
    sent: 'bg-blue-100 text-blue-700',
    paid: 'bg-emerald-100 text-emerald-700',
    overdue: 'bg-red-100 text-red-700',
  }[status] ?? 'bg-gray-100 text-gray-600'
}

// ── Helpers ──
function formatDate(iso: string) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

async function logout() {
  await fetch(`${apiBase}/admin/logout`, { method: 'POST', credentials: 'include' })
  await router.push('/admin/login')
}

// Load data on mount
onMounted(async () => {
  await Promise.all([fetchLeads(), fetchStock(), fetchInvoices()])
})

watch(activeTab, (tab) => {
  if (tab === 'leads') fetchLeads()
  if (tab === 'stock') fetchStock()
  if (tab === 'invoices') fetchInvoices()
})
</script>

<style scoped>
.input-field {
  @apply w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 transition-colors;
}
</style>
