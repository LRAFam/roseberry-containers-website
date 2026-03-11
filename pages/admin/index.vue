<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">

    <!-- ── Nav ── -->
    <header class="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <img src="/logo.avif" alt="Roseberry" class="h-9 w-auto" />
          <div>
            <p class="font-bold text-gray-900 leading-tight text-sm">Roseberry Admin</p>
            <p class="text-xs text-gray-400">Dashboard</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="hidden sm:block text-xs text-gray-400">{{ currentTime }}</span>
          <button @click="logout" class="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign out
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6 w-full flex-1 flex flex-col gap-6">

      <!-- ── Stats Overview ── -->
      <section v-if="stats">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <StatCard label="New Today" :value="stats.newToday" color="emerald" icon="bolt" />
          <StatCard label="Total Leads" :value="stats.totalLeads" color="blue" icon="users" />
          <StatCard label="Qualified" :value="stats.byStatus.qualified ?? 0" color="purple" icon="star" />
          <StatCard label="Quoted" :value="stats.byStatus.quoted ?? 0" color="yellow" icon="document" />
          <StatCard label="Won" :value="stats.byStatus.won ?? 0" color="green" icon="check" />
          <StatCard label="Revenue" :value="`£${(stats.totalRevenuePence/100).toLocaleString()}`" color="emerald" icon="pound" />
        </div>

        <!-- Source breakdown -->
        <div class="mt-3 bg-white rounded-xl border border-gray-200 px-5 py-4 shadow-sm">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Leads by Source</p>
          <div class="flex gap-4 items-end h-16">
            <div v-for="(label, key) in sourceLabels" :key="key" class="flex flex-col items-center gap-1 flex-1">
              <span class="text-xs font-bold text-gray-700">{{ stats.bySource[key] ?? 0 }}</span>
              <div class="w-full rounded-t relative" :style="{ height: barHeight(stats.bySource[key] ?? 0) }" :class="sourceColours[key]" />
              <span class="text-[10px] text-gray-500">{{ label }}</span>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-2">Conversion rate: <span class="font-semibold text-gray-700">{{ stats.conversionRate }}%</span></p>
        </div>
      </section>

      <!-- ── Tabs ── -->
      <nav class="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-200 overflow-x-auto flex-shrink-0">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap',
            activeTab === tab.id ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50']"
        >
          {{ tab.label }}
          <span v-if="tabBadge(tab.id)" class="ml-1.5 text-xs px-1.5 py-0.5 rounded-full" :class="activeTab === tab.id ? 'bg-white/25' : 'bg-gray-100 text-gray-600'">
            {{ tabBadge(tab.id) }}
          </span>
        </button>
      </nav>

      <!-- ── LEADS ── -->
      <section v-if="activeTab === 'leads'" class="flex flex-col gap-4">
        <!-- Toolbar -->
        <div class="flex flex-wrap gap-3 items-center justify-between">
          <div class="flex gap-2 flex-wrap">
            <input v-model="leadSearch" placeholder="Search name or phone…" class="input-field w-52" />
            <select v-model="leadStatusFilter" class="input-field">
              <option value="">All statuses</option>
              <option v-for="s in leadStatuses" :key="s" :value="s" class="capitalize">{{ s }}</option>
            </select>
            <select v-model="leadSourceFilter" class="input-field">
              <option value="">All sources</option>
              <option v-for="s in leadSources" :key="s" :value="s" class="capitalize">{{ s }}</option>
            </select>
          </div>
          <button @click="exportLeadsCsv" class="btn-secondary text-sm flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Export CSV
          </button>
        </div>

        <div v-if="leadsLoading" class="card flex items-center justify-center py-16 text-gray-400 text-sm">Loading leads…</div>
        <div v-else-if="filteredLeads.length === 0" class="card flex items-center justify-center py-16 text-gray-400 text-sm">No leads match your filters.</div>
        <div v-else class="card overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="th">Name</th>
                <th class="th hidden sm:table-cell">Source</th>
                <th class="th hidden md:table-cell">Container</th>
                <th class="th hidden lg:table-cell">Phone</th>
                <th class="th hidden lg:table-cell">Created</th>
                <th class="th">Status</th>
                <th class="th w-10"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="lead in filteredLeads" :key="lead.id" class="hover:bg-gray-50 transition-colors cursor-pointer" @click="openLead(lead)">
                <td class="td font-medium text-gray-900">{{ lead.customer_name }}</td>
                <td class="td hidden sm:table-cell">
                  <span :class="sourceChip(lead.source)" class="chip">{{ lead.source }}</span>
                </td>
                <td class="td hidden md:table-cell text-gray-500">{{ lead.container_type || '—' }}</td>
                <td class="td hidden lg:table-cell text-gray-400">{{ lead.phone || '—' }}</td>
                <td class="td hidden lg:table-cell text-gray-400 whitespace-nowrap">{{ fmtDate(lead.created_at) }}</td>
                <td class="td" @click.stop>
                  <select :value="lead.status" @change="patchLeadStatus(lead.id, ($event.target as HTMLSelectElement).value)" class="text-xs border border-gray-200 rounded-lg px-2 py-1 outline-none focus:border-emerald-500" :class="statusColour(lead.status)">
                    <option v-for="s in leadStatuses" :key="s" :value="s" class="capitalize">{{ s }}</option>
                  </select>
                </td>
                <td class="td text-gray-300 hover:text-emerald-600" @click.stop="openLead(lead)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── CUSTOMERS ── -->
      <section v-if="activeTab === 'customers'" class="flex flex-col gap-4">
        <div class="flex justify-end">
          <button @click="showAddCustomer = !showAddCustomer" class="btn-primary text-sm">{{ showAddCustomer ? 'Cancel' : '+ Add Customer' }}</button>
        </div>
        <div v-if="showAddCustomer" class="card p-5">
          <h3 class="font-semibold text-gray-800 mb-4">New Customer</h3>
          <form @submit.prevent="submitCustomer" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label class="form-label">Name *</label><input v-model="newCustomer.name" required class="input-field w-full" /></div>
            <div><label class="form-label">Email</label><input v-model="newCustomer.email" type="email" class="input-field w-full" /></div>
            <div><label class="form-label">Phone</label><input v-model="newCustomer.phone" class="input-field w-full" /></div>
            <div><label class="form-label">Address</label><input v-model="newCustomer.address" class="input-field w-full" /></div>
            <div class="sm:col-span-2"><button type="submit" class="btn-primary text-sm">Save Customer</button></div>
          </form>
        </div>
        <div v-if="customersLoading" class="card py-16 text-center text-gray-400 text-sm">Loading…</div>
        <div v-else-if="customers.length === 0" class="card py-16 text-center text-gray-400 text-sm">No customers yet.</div>
        <div v-else class="card overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200"><tr>
              <th class="th">Name</th><th class="th hidden sm:table-cell">Email</th><th class="th hidden md:table-cell">Phone</th><th class="th">Leads</th><th class="th hidden sm:table-cell">Joined</th>
            </tr></thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="c in customers" :key="c.id" class="hover:bg-gray-50">
                <td class="td font-medium">{{ c.name }}</td>
                <td class="td hidden sm:table-cell text-gray-500">{{ c.email || '—' }}</td>
                <td class="td hidden md:table-cell text-gray-400">{{ c.phone || '—' }}</td>
                <td class="td text-gray-600">{{ c.lead_count ?? 0 }}</td>
                <td class="td hidden sm:table-cell text-gray-400">{{ fmtDate(c.created_at) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── STOCK ── -->
      <section v-if="activeTab === 'stock'" class="flex flex-col gap-4">
        <div class="flex justify-end">
          <button @click="showAddStock = !showAddStock" class="btn-primary text-sm">{{ showAddStock ? 'Cancel' : '+ Add Stock' }}</button>
        </div>
        <div v-if="showAddStock" class="card p-5">
          <h3 class="font-semibold text-gray-800 mb-4">Add / Update Stock</h3>
          <form @submit.prevent="submitStock" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div><label class="form-label">Depot Name *</label><input v-model="newStock.depot_name" required class="input-field w-full" placeholder="Middlesbrough Depot" /></div>
            <div><label class="form-label">Container Type *</label><input v-model="newStock.container_type" required class="input-field w-full" placeholder="20ft Standard" /></div>
            <div><label class="form-label">Condition</label><select v-model="newStock.condition" class="input-field w-full"><option value="new">New</option><option value="used">Used</option><option value="one-trip">One-trip</option><option value="refurbished">Refurbished</option></select></div>
            <div><label class="form-label">Price (£) *</label><input v-model.number="newStock.price_gbp" type="number" min="0" required class="input-field w-full" /></div>
            <div><label class="form-label">Quantity *</label><input v-model.number="newStock.quantity" type="number" min="0" required class="input-field w-full" /></div>
            <div><label class="form-label">Postcode</label><input v-model="newStock.postcode" class="input-field w-full" placeholder="TS1 1AA" /></div>
            <div class="sm:col-span-3"><button type="submit" class="btn-primary text-sm">Save Stock</button></div>
          </form>
        </div>
        <div v-if="stockLoading" class="card py-16 text-center text-gray-400 text-sm">Loading…</div>
        <div v-else-if="stock.length === 0" class="card py-16 text-center text-gray-400 text-sm">No stock yet.</div>
        <div v-else class="card overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200"><tr>
              <th class="th">Depot</th><th class="th">Type</th><th class="th hidden sm:table-cell">Condition</th><th class="th">Price</th><th class="th">Qty</th><th class="th hidden md:table-cell">Postcode</th><th class="th w-10"></th>
            </tr></thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="item in stock" :key="item.id" class="hover:bg-gray-50">
                <td class="td font-medium">{{ item.depot_name }}</td>
                <td class="td text-gray-600">{{ item.container_type }}</td>
                <td class="td hidden sm:table-cell text-gray-500 capitalize">{{ item.condition || '—' }}</td>
                <td class="td text-gray-800 font-medium">£{{ (item.price_pence/100).toLocaleString() }}</td>
                <td class="td"><span :class="item.quantity < 2 ? 'text-red-600 font-bold' : 'text-gray-700'">{{ item.quantity }}</span></td>
                <td class="td hidden md:table-cell text-gray-400">{{ item.postcode || '—' }}</td>
                <td class="td"><button @click="deleteStock(item.id)" class="text-gray-300 hover:text-red-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── FOLLOW-UPS ── -->
      <section v-if="activeTab === 'followups'" class="flex flex-col gap-4">
        <div v-if="followupsLoading" class="card py-16 text-center text-gray-400 text-sm">Loading…</div>
        <div v-else-if="followups.length === 0" class="card py-16 text-center text-gray-400 text-sm">No follow-ups scheduled.</div>
        <div v-else class="card overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200"><tr>
              <th class="th">Lead</th><th class="th">Message</th><th class="th">Scheduled</th><th class="th">Status</th><th class="th w-10"></th>
            </tr></thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="fu in followups" :key="fu.id" class="hover:bg-gray-50">
                <td class="td font-medium">{{ fu.lead_name || '—' }}</td>
                <td class="td text-gray-500 max-w-xs truncate">{{ fu.message }}</td>
                <td class="td whitespace-nowrap" :class="isPast(fu.scheduled_at) && fu.status === 'pending' ? 'text-red-600 font-semibold' : 'text-gray-400'">{{ fmtDatetime(fu.scheduled_at) }}</td>
                <td class="td"><span :class="followupStatusChip(fu.status)" class="chip capitalize">{{ fu.status }}</span></td>
                <td class="td">
                  <button v-if="fu.status === 'pending'" @click="cancelFollowup(fu.id)" class="text-xs text-red-400 hover:text-red-600 font-medium">Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── HAULAGE ── -->
      <section v-if="activeTab === 'haulage'" class="flex flex-col gap-4">
        <div class="flex justify-end">
          <button @click="showAddHaulage = !showAddHaulage" class="btn-primary text-sm">{{ showAddHaulage ? 'Cancel' : '+ Log Quote' }}</button>
        </div>
        <div v-if="showAddHaulage" class="card p-5">
          <h3 class="font-semibold text-gray-800 mb-4">Log Haulage Quote</h3>
          <form @submit.prevent="submitHaulage" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label class="form-label">Haulier Name *</label><input v-model="newHaulage.haulier_name" required class="input-field w-full" /></div>
            <div><label class="form-label">Price (£) *</label><input v-model.number="newHaulage.price_gbp" type="number" min="0" required class="input-field w-full" /></div>
            <div><label class="form-label">Origin Postcode *</label><input v-model="newHaulage.origin_postcode" required class="input-field w-full" placeholder="TS1 1AA" /></div>
            <div><label class="form-label">Destination Postcode *</label><input v-model="newHaulage.destination_postcode" required class="input-field w-full" placeholder="M1 1AA" /></div>
            <div><label class="form-label">Distance (km)</label><input v-model.number="newHaulage.distance_km" type="number" min="0" class="input-field w-full" /></div>
            <div><label class="form-label">Notes</label><input v-model="newHaulage.notes" class="input-field w-full" /></div>
            <div class="sm:col-span-2"><button type="submit" class="btn-primary text-sm">Save Quote</button></div>
          </form>
        </div>
        <div v-if="haulageLoading" class="card py-16 text-center text-gray-400 text-sm">Loading…</div>
        <div v-else-if="haulage.length === 0" class="card py-16 text-center text-gray-400 text-sm">No haulage quotes yet.</div>
        <div v-else class="card overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200"><tr>
              <th class="th">Haulier</th><th class="th hidden sm:table-cell">Origin</th><th class="th hidden sm:table-cell">Destination</th><th class="th hidden md:table-cell">Distance</th><th class="th">Price</th><th class="th hidden lg:table-cell">Lead</th><th class="th hidden lg:table-cell">Date</th>
            </tr></thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="q in haulage" :key="q.id" class="hover:bg-gray-50">
                <td class="td font-medium">{{ q.haulier_name }}</td>
                <td class="td hidden sm:table-cell text-gray-500">{{ q.origin_postcode }}</td>
                <td class="td hidden sm:table-cell text-gray-500">{{ q.destination_postcode }}</td>
                <td class="td hidden md:table-cell text-gray-400">{{ q.distance_km ? `${q.distance_km} km` : '—' }}</td>
                <td class="td font-medium text-gray-800">£{{ (q.price_pence/100).toLocaleString() }}</td>
                <td class="td hidden lg:table-cell text-gray-400">{{ q.lead_name || '—' }}</td>
                <td class="td hidden lg:table-cell text-gray-400 whitespace-nowrap">{{ fmtDate(q.created_at) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── INVOICES ── -->
      <section v-if="activeTab === 'invoices'" class="flex flex-col gap-4">
        <div class="flex justify-end">
          <button @click="showCreateInvoice = !showCreateInvoice" class="btn-primary text-sm">{{ showCreateInvoice ? 'Cancel' : '+ Create Invoice' }}</button>
        </div>
        <!-- Create invoice -->
        <div v-if="showCreateInvoice" class="card p-5">
          <h3 class="font-semibold text-gray-800 mb-4">Create Invoice</h3>
          <form @submit.prevent="submitInvoice" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label class="form-label">Customer ID *</label><input v-model="newInvoice.customer_id" required class="input-field w-full" placeholder="UUID from Customers tab" /></div>
              <div><label class="form-label">Lead ID (optional)</label><input v-model="newInvoice.lead_id" class="input-field w-full" /></div>
            </div>
            <!-- Line items -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <p class="form-label mb-0">Line Items</p>
                <button type="button" @click="addLineItem" class="text-xs text-emerald-600 hover:underline font-medium">+ Add line</button>
              </div>
              <div v-for="(item, i) in newInvoice.items" :key="i" class="flex gap-2 mb-2 items-center">
                <input v-model="item.description" placeholder="Description" class="input-field flex-1" required />
                <input v-model.number="item.quantity" type="number" min="1" placeholder="Qty" class="input-field w-16 text-center" />
                <input v-model.number="item.unit_price" type="number" min="0" placeholder="£ each" class="input-field w-24" />
                <button type="button" @click="removeLineItem(i)" class="text-gray-300 hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            <!-- Totals preview -->
            <div class="bg-gray-50 rounded-lg px-4 py-3 text-sm space-y-1">
              <div class="flex justify-between text-gray-600"><span>Subtotal</span><span>£{{ invoiceSubtotal.toFixed(2) }}</span></div>
              <div class="flex justify-between text-gray-600"><span>VAT (20%)</span><span>£{{ invoiceVat.toFixed(2) }}</span></div>
              <div class="flex justify-between font-bold text-gray-900"><span>Total</span><span>£{{ invoiceTotal.toFixed(2) }}</span></div>
            </div>
            <button type="submit" class="btn-primary text-sm">Create Invoice</button>
          </form>
        </div>

        <div v-if="invoicesLoading" class="card py-16 text-center text-gray-400 text-sm">Loading…</div>
        <div v-else-if="invoices.length === 0" class="card py-16 text-center text-gray-400 text-sm">No invoices yet.</div>
        <div v-else class="card overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200"><tr>
              <th class="th">Invoice #</th><th class="th">Total</th><th class="th">Status</th><th class="th hidden sm:table-cell">Created</th><th class="th">PDF</th><th class="th">Actions</th>
            </tr></thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="inv in invoices" :key="inv.id" class="hover:bg-gray-50">
                <td class="td font-mono text-xs">{{ inv.invoice_number }}</td>
                <td class="td font-medium">£{{ (inv.total_pence/100).toLocaleString() }}</td>
                <td class="td"><span :class="invoiceStatusChip(inv.status)" class="chip capitalize">{{ inv.status }}</span></td>
                <td class="td hidden sm:table-cell text-gray-400 whitespace-nowrap">{{ fmtDate(inv.created_at) }}</td>
                <td class="td">
                  <a v-if="inv.pdf_path" :href="`${apiBase}/${inv.pdf_path}`" target="_blank" class="text-emerald-600 hover:underline text-xs font-medium">Download</a>
                  <span v-else class="text-gray-300 text-xs">—</span>
                </td>
                <td class="td">
                  <select :value="inv.status" @change="patchInvoiceStatus(inv.id, ($event.target as HTMLSelectElement).value)" class="text-xs border border-gray-200 rounded px-1.5 py-1 outline-none focus:border-emerald-500">
                    <option value="draft">Draft</option>
                    <option value="sent">Sent</option>
                    <option value="paid">Paid</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>

    <!-- ── Lead Detail Slide-over ── -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-all duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="selectedLead" class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" @click.self="selectedLead = null" />
    </Transition>
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="translate-x-full" enter-to-class="translate-x-0" leave-active-class="transition-all duration-200" leave-from-class="translate-x-0" leave-to-class="translate-x-full">
      <aside v-if="selectedLead" class="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[480px] bg-white shadow-2xl flex flex-col">
        <!-- Slide-over header -->
        <div class="px-5 py-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
          <div>
            <h2 class="font-bold text-gray-900">{{ selectedLead.customer_name }}</h2>
            <p class="text-xs text-gray-400 mt-0.5">
              <span :class="sourceChip(selectedLead.source)" class="chip mr-1">{{ selectedLead.source }}</span>
              <span :class="statusColour(selectedLead.status)" class="font-medium capitalize">{{ selectedLead.status }}</span>
              · {{ fmtDate(selectedLead.created_at) }}
            </p>
          </div>
          <button @click="selectedLead = null" class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <!-- Meta info -->
        <div class="px-5 py-3 bg-gray-50 border-b border-gray-100 flex-shrink-0 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
          <div><span class="text-gray-400">Phone</span> <span class="font-medium text-gray-700 ml-1">{{ selectedLead.phone || '—' }}</span></div>
          <div><span class="text-gray-400">Container</span> <span class="font-medium text-gray-700 ml-1">{{ selectedLead.container_type || '—' }}</span></div>
          <div><span class="text-gray-400">Location</span> <span class="font-medium text-gray-700 ml-1">{{ selectedLead.location || '—' }}</span></div>
          <div><span class="text-gray-400">Quantity</span> <span class="font-medium text-gray-700 ml-1">{{ selectedLead.quantity || '—' }}</span></div>
        </div>

        <!-- Conversation history -->
        <div class="flex-1 overflow-y-auto px-5 py-4 space-y-3 bg-gray-50">
          <p v-if="!selectedLead.messages?.length" class="text-gray-400 text-sm text-center py-8">No messages recorded for this lead yet.</p>
          <div v-for="(msg, i) in selectedLead.messages" :key="i" :class="msg.direction === 'inbound' ? 'flex justify-start' : 'flex justify-end'">
            <div :class="['max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed',
              msg.direction === 'inbound'
                ? 'bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm'
                : 'bg-emerald-600 text-white rounded-br-md']">
              {{ msg.content }}
              <p :class="['text-[10px] mt-1', msg.direction === 'inbound' ? 'text-gray-400' : 'text-emerald-200']">{{ fmtDatetime(msg.created_at) }}</p>
            </div>
          </div>
        </div>

        <!-- Notes -->
        <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0 space-y-2">
          <label class="form-label">Notes</label>
          <textarea v-model="leadNotes" rows="3" class="input-field w-full resize-none text-sm" placeholder="Internal notes about this lead…" />
          <div class="flex gap-2">
            <button @click="saveNotes" class="btn-primary text-sm">Save Notes</button>
            <select :value="selectedLead.status" @change="patchLeadStatus(selectedLead.id, ($event.target as HTMLSelectElement).value); selectedLead.status = ($event.target as HTMLSelectElement).value" class="input-field text-sm flex-1">
              <option v-for="s in leadStatuses" :key="s" :value="s" class="capitalize">{{ s }}</option>
            </select>
          </div>
        </div>
      </aside>
    </Transition>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false, middleware: ['admin-auth'] })

const config = useRuntimeConfig()
const apiBase = config.public.apiBase || 'http://localhost:3001'
const router = useRouter()

// ── Clock ──────────────────────────────────────────────────────────────────
const currentTime = ref('')
onMounted(() => {
  const tick = () => { currentTime.value = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }
  tick()
  setInterval(tick, 1000)
})

// ── Tabs ───────────────────────────────────────────────────────────────────
const tabs = [
  { id: 'leads', label: 'Leads' },
  { id: 'customers', label: 'Customers' },
  { id: 'stock', label: 'Depot Stock' },
  { id: 'followups', label: 'Follow-ups' },
  { id: 'haulage', label: 'Haulage' },
  { id: 'invoices', label: 'Invoices' },
]
const activeTab = ref('leads')

function tabBadge(id: string): number | null {
  if (id === 'leads') return leads.value.length || null
  if (id === 'followups') return followups.value.filter((f: any) => f.status === 'pending').length || null
  return null
}

// ── Stats ──────────────────────────────────────────────────────────────────
const stats = ref<any>(null)

const sourceLabels: Record<string, string> = { website: 'Website', whatsapp: 'WhatsApp', instagram: 'Instagram', facebook: 'Facebook' }
const sourceColours: Record<string, string> = { website: 'bg-blue-400', whatsapp: 'bg-green-500', instagram: 'bg-pink-500', facebook: 'bg-indigo-500' }

function barHeight(count: number): string {
  const max = Math.max(...Object.values(stats.value?.bySource ?? {}).map(Number), 1)
  return `${Math.max(4, Math.round((count / max) * 56))}px`
}

async function fetchStats() {
  const res = await fetch(`${apiBase}/admin/stats`, { credentials: 'include' })
  if (res.ok) stats.value = await res.json()
}

// ── Leads ──────────────────────────────────────────────────────────────────
const leads = ref<any[]>([])
const leadsLoading = ref(false)
const leadSearch = ref('')
const leadStatusFilter = ref('')
const leadSourceFilter = ref('')
const leadStatuses = ['new', 'qualified', 'quoted', 'won', 'lost']
const leadSources = ['website', 'whatsapp', 'instagram', 'facebook']
const selectedLead = ref<any>(null)
const leadNotes = ref('')

const filteredLeads = computed(() => {
  return leads.value.filter((l) => {
    const q = leadSearch.value.toLowerCase()
    const matchSearch = !q || l.customer_name?.toLowerCase().includes(q) || l.phone?.includes(q)
    const matchStatus = !leadStatusFilter.value || l.status === leadStatusFilter.value
    const matchSource = !leadSourceFilter.value || l.source === leadSourceFilter.value
    return matchSearch && matchStatus && matchSource
  })
})

async function fetchLeads() {
  leadsLoading.value = true
  try {
    const res = await fetch(`${apiBase}/admin/leads`, { credentials: 'include' })
    if (res.status === 401) { await router.push('/admin/login'); return }
    leads.value = await res.json()
  } finally { leadsLoading.value = false }
}

async function openLead(lead: any) {
  const res = await fetch(`${apiBase}/admin/leads/${lead.id}`, { credentials: 'include' })
  selectedLead.value = await res.json()
  leadNotes.value = selectedLead.value.notes ?? ''
}

async function patchLeadStatus(id: string, status: string) {
  await fetch(`${apiBase}/admin/leads/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ status }) })
  await fetchLeads()
  if (selectedLead.value?.id === id) selectedLead.value.status = status
}

async function saveNotes() {
  await fetch(`${apiBase}/admin/leads/${selectedLead.value.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ notes: leadNotes.value }) })
  selectedLead.value.notes = leadNotes.value
}

function exportLeadsCsv() {
  const header = ['Name', 'Source', 'Status', 'Container', 'Phone', 'Location', 'Created']
  const rows = filteredLeads.value.map((l) => [
    l.customer_name, l.source, l.status, l.container_type ?? '', l.phone ?? '', l.location ?? '', fmtDate(l.created_at)
  ])
  const csv = [header, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a'); a.href = url; a.download = 'leads.csv'; a.click()
  URL.revokeObjectURL(url)
}

// ── Customers ──────────────────────────────────────────────────────────────
const customers = ref<any[]>([])
const customersLoading = ref(false)
const showAddCustomer = ref(false)
const newCustomer = ref({ name: '', email: '', phone: '', address: '' })

async function fetchCustomers() {
  customersLoading.value = true
  try { const res = await fetch(`${apiBase}/admin/customers`, { credentials: 'include' }); customers.value = await res.json() }
  finally { customersLoading.value = false }
}

async function submitCustomer() {
  await fetch(`${apiBase}/admin/customers`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify(newCustomer.value) })
  showAddCustomer.value = false; newCustomer.value = { name: '', email: '', phone: '', address: '' }
  await fetchCustomers()
}

// ── Stock ──────────────────────────────────────────────────────────────────
const stock = ref<any[]>([])
const stockLoading = ref(false)
const showAddStock = ref(false)
const newStock = ref({ depot_name: '', container_type: '', condition: 'used', price_gbp: 0, quantity: 1, postcode: '' })

async function fetchStock() {
  stockLoading.value = true
  try { const res = await fetch(`${apiBase}/admin/depot`, { credentials: 'include' }); stock.value = await res.json() }
  finally { stockLoading.value = false }
}

async function submitStock() {
  await fetch(`${apiBase}/admin/depot`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify(newStock.value) })
  showAddStock.value = false; newStock.value = { depot_name: '', container_type: '', condition: 'used', price_gbp: 0, quantity: 1, postcode: '' }
  await fetchStock()
}

async function deleteStock(id: string) {
  if (!confirm('Remove this stock entry?')) return
  await fetch(`${apiBase}/admin/depot/${id}`, { method: 'DELETE', credentials: 'include' })
  await fetchStock()
}

// ── Follow-ups ─────────────────────────────────────────────────────────────
const followups = ref<any[]>([])
const followupsLoading = ref(false)

async function fetchFollowups() {
  followupsLoading.value = true
  try { const res = await fetch(`${apiBase}/admin/followups`, { credentials: 'include' }); followups.value = await res.json() }
  finally { followupsLoading.value = false }
}

async function cancelFollowup(id: string) {
  await fetch(`${apiBase}/admin/followups/${id}/cancel`, { method: 'PATCH', credentials: 'include' })
  await fetchFollowups()
}

function isPast(date: string) { return new Date(date) < new Date() }

// ── Haulage ────────────────────────────────────────────────────────────────
const haulage = ref<any[]>([])
const haulageLoading = ref(false)
const showAddHaulage = ref(false)
const newHaulage = ref({ haulier_name: '', price_gbp: 0, origin_postcode: '', destination_postcode: '', distance_km: null as number | null, notes: '' })

async function fetchHaulage() {
  haulageLoading.value = true
  try { const res = await fetch(`${apiBase}/admin/haulage`, { credentials: 'include' }); haulage.value = await res.json() }
  finally { haulageLoading.value = false }
}

async function submitHaulage() {
  await fetch(`${apiBase}/admin/haulage`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify(newHaulage.value) })
  showAddHaulage.value = false; newHaulage.value = { haulier_name: '', price_gbp: 0, origin_postcode: '', destination_postcode: '', distance_km: null, notes: '' }
  await fetchHaulage()
}

// ── Invoices ───────────────────────────────────────────────────────────────
const invoices = ref<any[]>([])
const invoicesLoading = ref(false)
const showCreateInvoice = ref(false)
const newInvoice = ref({ customer_id: '', lead_id: '', items: [{ description: '', quantity: 1, unit_price: 0 }] })

const invoiceSubtotal = computed(() => newInvoice.value.items.reduce((s, i) => s + (i.quantity * i.unit_price), 0))
const invoiceVat = computed(() => Math.round(invoiceSubtotal.value * 20) / 100)
const invoiceTotal = computed(() => invoiceSubtotal.value + invoiceVat.value)

function addLineItem() { newInvoice.value.items.push({ description: '', quantity: 1, unit_price: 0 }) }
function removeLineItem(i: number) { newInvoice.value.items.splice(i, 1) }

async function fetchInvoices() {
  invoicesLoading.value = true
  try { const res = await fetch(`${apiBase}/admin/invoices`, { credentials: 'include' }); invoices.value = await res.json() }
  finally { invoicesLoading.value = false }
}

async function submitInvoice() {
  await fetch(`${apiBase}/admin/invoices`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify(newInvoice.value) })
  showCreateInvoice.value = false; newInvoice.value = { customer_id: '', lead_id: '', items: [{ description: '', quantity: 1, unit_price: 0 }] }
  await fetchInvoices()
}

async function patchInvoiceStatus(id: string, status: string) {
  await fetch(`${apiBase}/admin/invoices/${id}/status`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ status }) })
  await fetchInvoices()
}

// ── Helpers ────────────────────────────────────────────────────────────────
function fmtDate(iso: string) { return iso ? new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—' }
function fmtDatetime(iso: string) { return iso ? new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) : '—' }

function statusColour(s: string) { return { new: 'text-blue-600', qualified: 'text-purple-600', quoted: 'text-yellow-600', won: 'text-emerald-700', lost: 'text-red-500' }[s] ?? '' }
function sourceChip(s: string) { return { website: 'chip-blue', whatsapp: 'chip-green', instagram: 'chip-pink', facebook: 'chip-indigo' }[s] ?? 'chip-gray' }
function followupStatusChip(s: string) { return { pending: 'chip-yellow', sent: 'chip-green', cancelled: 'chip-gray' }[s] ?? '' }
function invoiceStatusChip(s: string) { return { draft: 'chip-gray', sent: 'chip-blue', paid: 'chip-green' }[s] ?? '' }

async function logout() {
  await fetch(`${apiBase}/admin/logout`, { method: 'POST', credentials: 'include' })
  await router.push('/admin/login')
}

// ── Mount ──────────────────────────────────────────────────────────────────
onMounted(async () => {
  await Promise.all([fetchStats(), fetchLeads(), fetchCustomers(), fetchStock(), fetchFollowups(), fetchHaulage(), fetchInvoices()])
})

watch(activeTab, (tab) => {
  if (tab === 'leads') fetchLeads()
  else if (tab === 'customers') fetchCustomers()
  else if (tab === 'stock') fetchStock()
  else if (tab === 'followups') fetchFollowups()
  else if (tab === 'haulage') fetchHaulage()
  else if (tab === 'invoices') fetchInvoices()
})
</script>

<style scoped>
.card { @apply bg-white rounded-xl shadow-sm border border-gray-200; }
.th  { @apply text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wide; }
.td  { @apply px-4 py-3; }
.chip { @apply text-xs px-2 py-0.5 rounded-full font-medium inline-block; }
.chip-blue   { @apply bg-blue-100 text-blue-700; }
.chip-green  { @apply bg-emerald-100 text-emerald-700; }
.chip-pink   { @apply bg-pink-100 text-pink-700; }
.chip-indigo { @apply bg-indigo-100 text-indigo-700; }
.chip-yellow { @apply bg-yellow-100 text-yellow-700; }
.chip-gray   { @apply bg-gray-100 text-gray-600; }
.input-field { @apply border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100 transition-colors; }
.form-label  { @apply block text-xs font-medium text-gray-600 mb-1; }
.btn-primary { @apply bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50; }
.btn-secondary { @apply bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg border border-gray-200 transition-colors; }
</style>
