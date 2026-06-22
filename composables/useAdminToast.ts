type ToastType = 'success' | 'error'

interface Toast {
  id: number
  message: string
  type: ToastType
}

export function useAdminToast() {
  const toasts = useState<Toast[]>('admin-toasts', () => [])
  let nextId = 0

  function showToast(message: string, type: ToastType = 'success') {
    const id = ++nextId
    toasts.value.push({ id, message, type })
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id)
    }, 4000)
  }

  return { toasts, showToast }
}
