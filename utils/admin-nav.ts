/**
 * Admin navigation boundaries
 *
 * AI & Sales  → assistant-backed CRM (leads, calls, follow-ups, invoices…)
 * Website     → Nitro CMS only (blog, SEO analytics) — never calls roseberry-assistant
 */

import type { AdminIconName } from './admin-icons'

export type CrmTabId = 'leads' | 'customers' | 'stock' | 'followups' | 'haulage' | 'invoices' | 'calls'
export type AdminArea = 'operations' | 'website' | 'account'

export interface AdminNavLink {
  to: string
  label: string
  icon: AdminIconName
  description: string
}

export interface CrmTabLink {
  id: CrmTabId
  label: string
  icon: AdminIconName
  description: string
}

export const crmTabs: CrmTabLink[] = [
  { id: 'leads', label: 'Leads', icon: 'users', description: 'Enquiries and pipeline' },
  { id: 'customers', label: 'Customers', icon: 'building', description: 'Customer records' },
  { id: 'stock', label: 'Depot Stock', icon: 'cube', description: 'Container availability' },
  { id: 'followups', label: 'Follow-ups', icon: 'clock', description: 'AI-scheduled messages' },
  { id: 'haulage', label: 'Haulage', icon: 'truck', description: 'Delivery quotes' },
  { id: 'invoices', label: 'Invoices', icon: 'document', description: 'Billing and payments' },
  { id: 'calls', label: 'AI Calls', icon: 'phone', description: 'James voice transcripts' },
]

export const operationsNavGroup = {
  label: 'AI & Sales',
  links: [
    {
      to: '/admin',
      label: 'Sales Dashboard',
      icon: 'chart-bar',
      description: 'Leads, stock, invoices & AI calls',
    },
  ] satisfies AdminNavLink[],
  crmTabs: true,
}

export const websiteNavGroup = {
  label: 'Website',
  links: [
    {
      to: '/admin/website',
      label: 'Analytics & SEO',
      icon: 'chart-pie',
      description: 'Traffic, Search Console & leads',
    },
    {
      to: '/admin/blog',
      label: 'Blog',
      icon: 'newspaper',
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
      icon: 'cog',
      description: 'Password & account',
    },
  ] satisfies AdminNavLink[],
}

export const adminNavGroups = [operationsNavGroup, websiteNavGroup, accountNavGroup]

export const mobileNavItems = [
  { to: '/admin', label: 'Sales', icon: 'chart-bar' as AdminIconName, match: (path: string) => path === '/admin' },
  { to: '/admin/website', label: 'Analytics', icon: 'chart-pie' as AdminIconName, match: (path: string) => path.startsWith('/admin/website') },
  { to: '/admin/blog', label: 'Blog', icon: 'newspaper' as AdminIconName, match: (path: string) => path.startsWith('/admin/blog') },
  { to: '/admin/settings', label: 'Account', icon: 'cog' as AdminIconName, match: (path: string) => path.startsWith('/admin/settings') },
]

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
