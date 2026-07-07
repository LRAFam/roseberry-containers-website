import { fmtDate, fmtDatetime } from '~/utils/admin-ui'

export function useAdminOperations() {
  const { siteFetch, apiBase } = useAdminApi()
  const { showToast } = useAdminToast()

  const tabs = [
    { id: 'leads', label: 'Leads' },
    { id: 'customers', label: 'Customers' },
    { id: 'stock', label: 'Depot Stock' },
    { id: 'followups', label: 'Follow-ups' },
    { id: 'haulage', label: 'Haulage' },
    { id: 'invoices', label: 'Invoices' },
    { id: 'calls', label: 'AI Calls' },
  ] as const

  type TabId = typeof tabs[number]['id']
  const route = useRoute()
  const router = useRouter()
  const activeTab = ref<TabId>('leads')

  const validTabIds = tabs.map((t) => t.id)

  function syncTabFromRoute() {
    const q = route.query.tab
    if (typeof q === 'string' && validTabIds.includes(q as TabId)) {
      activeTab.value = q as TabId
    }
  }

  watch(activeTab, (tab) => {
    if (route.path === '/admin' && route.query.tab !== tab) {
      router.replace({ query: { tab } })
    }
  })

  watch(() => route.query.tab, () => syncTabFromRoute())

  const stats = ref<any>(null)

  const leads = ref<any[]>([])
  const leadsLoading = ref(false)
  const leadSearch = ref('')
  const leadStatusFilter = ref('')
  const leadSourceFilter = ref('')
  const leadStatuses = ['new', 'qualified', 'quoted', 'won', 'lost']
  const leadSources = ['website', 'whatsapp', 'instagram', 'facebook']
  const selectedLead = ref<any>(null)
  const leadNotes = ref('')
  const sortBy = ref('created_at')
  const sortDir = ref<'asc' | 'desc'>('desc')

  const customers = ref<any[]>([])
  const customersLoading = ref(false)
  const showAddCustomer = ref(false)
  const newCustomer = ref({ name: '', email: '', phone: '', address: '' })

  const stock = ref<any[]>([])
  const stockLoading = ref(false)
  const showAddStock = ref(false)
  const newStock = ref({ depot_name: '', container_type: '', condition: 'used', price_gbp: 0, quantity: 1, postcode: '' })

  const followups = ref<any[]>([])
  const followupsLoading = ref(false)

  const haulage = ref<any[]>([])
  const haulageLoading = ref(false)
  const showAddHaulage = ref(false)
  const newHaulage = ref({ haulier_name: '', price_gbp: 0, origin_postcode: '', destination_postcode: '', distance_km: null as number | null, notes: '' })

  const invoices = ref<any[]>([])
  const invoicesLoading = ref(false)
  const showCreateInvoice = ref(false)
  const newInvoice = ref({ customer_id: '', lead_id: '', items: [{ description: '', quantity: 1, unit_price: 0 }] })

  const calls = ref<any[]>([])
  const callsLoading = ref(false)
  const expandedCall = ref<string | null>(null)

  const invoiceSubtotal = computed(() => newInvoice.value.items.reduce((s, i) => s + (i.quantity * i.unit_price), 0))
  const invoiceVat = computed(() => Math.round(invoiceSubtotal.value * 20) / 100)
  const invoiceTotal = computed(() => invoiceSubtotal.value + invoiceVat.value)

  function tabBadge(id: string): number | null {
    if (id === 'leads') return leads.value.length || null
    if (id === 'followups') return followups.value.filter((f: any) => f.status === 'pending').length || null
    return null
  }

  function barHeight(count: number): string {
    const max = Math.max(...Object.values(stats.value?.bySource ?? {}).map(Number), 1)
    return `${Math.max(4, Math.round((count / max) * 56))}px`
  }

  function toggleSort(col: string) {
    if (sortBy.value === col) sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
    else { sortBy.value = col; sortDir.value = 'asc' }
  }

  function sortIcon(col: string): string {
    if (sortBy.value !== col) return '↕'
    return sortDir.value === 'asc' ? '↑' : '↓'
  }

  const filteredLeads = computed(() => {
    const q = leadSearch.value.toLowerCase()
    const filtered = leads.value.filter((l) => {
      const matchSearch = !q || l.customer_name?.toLowerCase().includes(q) || l.phone?.includes(q)
      const matchStatus = !leadStatusFilter.value || l.status === leadStatusFilter.value
      const matchSource = !leadSourceFilter.value || l.source === leadSourceFilter.value
      return matchSearch && matchStatus && matchSource
    })
    return [...filtered].sort((a, b) => {
      const av = a[sortBy.value] ?? ''
      const bv = b[sortBy.value] ?? ''
      const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true })
      return sortDir.value === 'asc' ? cmp : -cmp
    })
  })

  async function fetchStats() {
    const res = await siteFetch('/admin/stats')
    if (res.ok) stats.value = await res.json()
  }

  async function fetchLeads() {
    leadsLoading.value = true
    try {
      const res = await siteFetch('/admin/leads')
      leads.value = await res.json()
    } finally { leadsLoading.value = false }
  }

  async function openLead(lead: any) {
    const res = await siteFetch(`/admin/leads/${lead.id}`)
    selectedLead.value = await res.json()
    leadNotes.value = selectedLead.value.notes ?? ''
  }

  async function patchLeadStatus(id: string, status: string) {
    try {
      await siteFetch(`/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      await fetchLeads()
      if (selectedLead.value?.id === id) selectedLead.value.status = status
      showToast('Status updated')
    } catch { showToast('Failed to update status', 'error') }
  }

  async function saveNotes() {
    try {
      await siteFetch(`/admin/leads/${selectedLead.value.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: leadNotes.value }),
      })
      selectedLead.value.notes = leadNotes.value
      showToast('Notes saved')
    } catch { showToast('Failed to save notes', 'error') }
  }

  function exportLeadsCsv() {
    const header = ['Name', 'Source', 'Status', 'Container', 'Phone', 'Location', 'Quantity', 'Created']
    const rows = filteredLeads.value.map((l) => [
      l.customer_name, l.source, l.status, l.container_type ?? '', l.phone ?? '', l.location ?? '', l.quantity ?? '', fmtDate(l.created_at),
    ])
    const csv = [header, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = 'leads.csv'; a.click()
    URL.revokeObjectURL(url)
    showToast(`Exported ${filteredLeads.value.length} leads`)
  }

  async function fetchCustomers() {
    customersLoading.value = true
    try {
      const res = await siteFetch('/admin/customers')
      customers.value = await res.json()
    } finally { customersLoading.value = false }
  }

  async function submitCustomer() {
    try {
      await siteFetch('/admin/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCustomer.value),
      })
      showAddCustomer.value = false
      newCustomer.value = { name: '', email: '', phone: '', address: '' }
      await fetchCustomers()
      showToast('Customer added')
    } catch { showToast('Failed to add customer', 'error') }
  }

  async function fetchStock() {
    stockLoading.value = true
    try {
      const res = await siteFetch('/admin/depot')
      stock.value = await res.json()
    } finally { stockLoading.value = false }
  }

  async function submitStock() {
    try {
      await siteFetch('/admin/depot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStock.value),
      })
      showAddStock.value = false
      newStock.value = { depot_name: '', container_type: '', condition: 'used', price_gbp: 0, quantity: 1, postcode: '' }
      await fetchStock()
      showToast('Stock updated')
    } catch { showToast('Failed to save stock', 'error') }
  }

  async function deleteStock(id: string) {
    if (!confirm('Remove this stock entry?')) return
    try {
      await siteFetch(`/admin/depot/${id}`, { method: 'DELETE' })
      await fetchStock()
      showToast('Stock entry removed')
    } catch { showToast('Failed to delete stock', 'error') }
  }

  async function fetchFollowups() {
    followupsLoading.value = true
    try {
      const res = await siteFetch('/admin/followups')
      followups.value = await res.json()
    } finally { followupsLoading.value = false }
  }

  async function cancelFollowup(id: string) {
    try {
      await siteFetch(`/admin/followups/${id}/cancel`, { method: 'PATCH' })
      await fetchFollowups()
      showToast('Follow-up cancelled')
    } catch { showToast('Failed to cancel follow-up', 'error') }
  }

  function isPast(date: string) { return new Date(date) < new Date() }

  async function fetchHaulage() {
    haulageLoading.value = true
    try {
      const res = await siteFetch('/admin/haulage')
      haulage.value = await res.json()
    } finally { haulageLoading.value = false }
  }

  async function submitHaulage() {
    try {
      await siteFetch('/admin/haulage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newHaulage.value),
      })
      showAddHaulage.value = false
      newHaulage.value = { haulier_name: '', price_gbp: 0, origin_postcode: '', destination_postcode: '', distance_km: null, notes: '' }
      await fetchHaulage()
      showToast('Haulage quote saved')
    } catch { showToast('Failed to save quote', 'error') }
  }

  async function fetchInvoices() {
    invoicesLoading.value = true
    try {
      const res = await siteFetch('/admin/invoices')
      invoices.value = await res.json()
    } finally { invoicesLoading.value = false }
  }

  function addLineItem() { newInvoice.value.items.push({ description: '', quantity: 1, unit_price: 0 }) }
  function removeLineItem(i: number) { newInvoice.value.items.splice(i, 1) }

  async function submitInvoice() {
    try {
      await siteFetch('/admin/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInvoice.value),
      })
      showCreateInvoice.value = false
      newInvoice.value = { customer_id: '', lead_id: '', items: [{ description: '', quantity: 1, unit_price: 0 }] }
      await fetchInvoices()
      showToast('Invoice created')
    } catch { showToast('Failed to create invoice', 'error') }
  }

  async function patchInvoiceStatus(id: string, status: string) {
    try {
      await siteFetch(`/admin/invoices/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      await fetchInvoices()
      showToast('Invoice status updated')
    } catch { showToast('Failed to update invoice', 'error') }
  }

  async function fetchCalls() {
    callsLoading.value = true
    try {
      const res = await siteFetch('/admin/calls')
      calls.value = await res.json()
    } finally { callsLoading.value = false }
  }

  async function loadAll() {
    syncTabFromRoute()
    await Promise.all([
      fetchStats(), fetchLeads(), fetchCustomers(), fetchStock(),
      fetchFollowups(), fetchHaulage(), fetchInvoices(), fetchCalls(),
    ])
  }

  watch(activeTab, (tab) => {
    if (tab === 'leads') fetchLeads()
    else if (tab === 'customers') fetchCustomers()
    else if (tab === 'stock') fetchStock()
    else if (tab === 'followups') fetchFollowups()
    else if (tab === 'haulage') fetchHaulage()
    else if (tab === 'invoices') fetchInvoices()
    else if (tab === 'calls') fetchCalls()
  })

  return {
    apiBase,
    tabs,
    activeTab,
    stats,
    barHeight,
    tabBadge,
    leads,
    leadsLoading,
    leadSearch,
    leadStatusFilter,
    leadSourceFilter,
    leadStatuses,
    leadSources,
    selectedLead,
    leadNotes,
    filteredLeads,
    toggleSort,
    sortIcon,
    openLead,
    patchLeadStatus,
    saveNotes,
    exportLeadsCsv,
    customers,
    customersLoading,
    showAddCustomer,
    newCustomer,
    submitCustomer,
    stock,
    stockLoading,
    showAddStock,
    newStock,
    submitStock,
    deleteStock,
    followups,
    followupsLoading,
    cancelFollowup,
    isPast,
    haulage,
    haulageLoading,
    showAddHaulage,
    newHaulage,
    submitHaulage,
    invoices,
    invoicesLoading,
    showCreateInvoice,
    newInvoice,
    invoiceSubtotal,
    invoiceVat,
    invoiceTotal,
    addLineItem,
    removeLineItem,
    submitInvoice,
    patchInvoiceStatus,
    calls,
    callsLoading,
    expandedCall,
    loadAll,
    fmtDate,
    fmtDatetime,
  }
}
