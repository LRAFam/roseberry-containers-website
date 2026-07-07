/**
 * Admin navigation boundaries
 *
 * AI & Sales  → assistant-backed CRM (leads, calls, follow-ups, invoices…)
 * Website     → Nitro CMS only (blog, SEO analytics) — never calls roseberry-assistant
 */

export type CrmTabId = 'leads' | 'customers' | 'stock' | 'followups' | 'haulage' | 'invoices' | 'calls'
export type AdminArea = 'operations' | 'website' | 'account'

export interface AdminNavLink {
  to: string
  label: string
  icon: string
  description: string
}

export interface CrmTabLink {
  id: CrmTabId
  label: string
  icon: string
  description: string
}

export const crmTabs: CrmTabLink[] = [
  { id: 'leads', label: 'Leads', icon: '👥', description: 'Enquiries and pipeline' },
  { id: 'customers', label: 'Customers', icon: '🏢', description: 'Customer records' },
  { id: 'stock', label: 'Depot Stock', icon: '📦', description: 'Container availability' },
  { id: 'followups', label: 'Follow-ups', icon: '⏰', description: 'AI-scheduled messages' },
  { id: 'haulage', label: 'Haulage', icon: '🚛', description: 'Delivery quotes' },
  { id: 'invoices', label: 'Invoices', icon: '🧾', description: 'Billing and payments' },
  { id: 'calls', label: 'AI Calls', icon: '📞', description: 'James voice transcripts' },
]

/** Sidebar: AI assistant + sales CRM */
export const operationsNavGroup = {
  label: 'AI & Sales',
  links: [
    {
      to: '/admin',
      label: 'Sales Dashboard',
      icon: '📊',
      description: 'Leads, stock, invoices & AI calls',
    },
  ] satisfies AdminNavLink[],
  crmTabs: true,
}

/** Sidebar: website platform only (Nitro /api/admin/*) */
export const websiteNavGroup = {
  label: 'Website',
  links: [
    {
      to: '/admin/website',
      label: 'Analytics & SEO',
      icon: '📈',
      description: 'Traffic, Search Console & leads',
    },
    {
      to: '/admin/blog',
      label: 'Blog',
      icon: '📝',
      description: 'Posts, SEO & publishing',
    },
  ] satisfies AdminNavLink[],
}

export const accountNavGroup = {
  label: 'Account',
  links: [
    {
      to: '/admin/settings',
      label: 'Settings',
      icon: '⚙️',
      description: 'Password & account',
    },
  ] satisfies AdminNavLink[],
}

export const adminNavGroups = [operationsNavGroup, websiteNavGroup, accountNavGroup]

export function adminAreaForPath(path: string): AdminArea {
  if (path.startsWith('/admin/website') || path.startsWith('/admin/blog')) return 'website'
  if (path.startsWith('/admin/settings')) return 'account'
  return 'operations'
}

export function adminAreaLabel(area: AdminArea): string {
  if (area === 'website') return 'Website CMS'
  if (area === 'account') return 'Account'
  return 'AI & Sales'
}

export function adminPageTitle(path: string): string {
  if (path === '/admin') return 'Sales Dashboard'
  if (path.startsWith('/admin/website')) return 'Analytics & SEO'
  if (path.startsWith('/admin/blog')) return 'Blog Management'
  if (path.startsWith('/admin/settings')) return 'Account Settings'
  return 'Admin'
}
