export function fmtDate(iso?: string) {
  return iso ? new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'
}

export function fmtDatetime(iso?: string) {
  return iso ? new Date(iso).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) : '—'
}

export function statusColour(s: string) {
  return ({ new: 'text-blue-600', qualified: 'text-purple-600', quoted: 'text-yellow-600', won: 'text-emerald-700', lost: 'text-red-500' } as Record<string, string>)[s] ?? ''
}

export function sourceChip(s: string) {
  return ({ website: 'chip-blue', whatsapp: 'chip-green', instagram: 'chip-pink', facebook: 'chip-indigo' } as Record<string, string>)[s] ?? 'chip-gray'
}

export function followupStatusChip(s: string) {
  return ({ pending: 'chip-yellow', sent: 'chip-green', cancelled: 'chip-gray' } as Record<string, string>)[s] ?? ''
}

export function invoiceStatusChip(s: string) {
  return ({ draft: 'chip-gray', sent: 'chip-blue', paid: 'chip-green' } as Record<string, string>)[s] ?? ''
}

export const sourceLabels: Record<string, string> = {
  website: 'Website',
  whatsapp: 'WhatsApp',
  instagram: 'Instagram',
  facebook: 'Facebook',
}

export const sourceColours: Record<string, string> = {
  website: 'bg-blue-400',
  whatsapp: 'bg-green-500',
  instagram: 'bg-pink-500',
  facebook: 'bg-indigo-500',
}
