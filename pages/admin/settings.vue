<template>
  <div class="max-w-lg mx-auto p-4 sm:p-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">Account settings</h1>
    <p class="text-sm text-gray-500 mb-8">Change your dashboard password. This only applies to your client account.</p>

    <form class="bg-white rounded-xl border border-gray-200 p-6 space-y-5" @submit.prevent="changePassword">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Current password</label>
        <input
          v-model="currentPassword"
          type="password"
          required
          autocomplete="current-password"
          class="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1.5">New password</label>
        <input
          v-model="newPassword"
          type="password"
          required
          minlength="8"
          autocomplete="new-password"
          class="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
        />
        <p class="text-xs text-gray-400 mt-1">At least 8 characters.</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1.5">Confirm new password</label>
        <input
          v-model="confirmPassword"
          type="password"
          required
          minlength="8"
          autocomplete="new-password"
          class="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
        />
      </div>

      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
      <p v-if="success" class="text-sm text-emerald-600">Password updated successfully.</p>

      <button
        type="submit"
        :disabled="isLoading"
        class="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
      >
        {{ isLoading ? 'Saving…' : 'Update password' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin-auth' })

const { siteFetch } = useAdminApi()
const { showToast } = useAdminToast()

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref(false)
const isLoading = ref(false)

async function changePassword() {
  error.value = ''
  success.value = false

  if (newPassword.value !== confirmPassword.value) {
    error.value = 'New passwords do not match.'
    return
  }

  isLoading.value = true
  try {
    const res = await siteFetch('/admin/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        current_password: currentPassword.value,
        new_password: newPassword.value,
      }),
    })

    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      error.value = data.error || 'Could not update password.'
      return
    }

    success.value = true
    currentPassword.value = ''
    newPassword.value = ''
    confirmPassword.value = ''
    showToast('Password updated', 'success')
  } catch {
    error.value = 'Could not connect to server.'
  } finally {
    isLoading.value = false
  }
}
</script>
