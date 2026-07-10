<template>
  <div class="admin-page max-w-lg">
    <AdminPageHeader
      eyebrow="Account"
      title="Settings"
      subtitle="Change your dashboard password. This only applies to your client account."
    />

    <form class="admin-card-padded space-y-5" @submit.prevent="changePassword">
      <div>
        <label class="admin-label">Current password</label>
        <input
          v-model="currentPassword"
          type="password"
          required
          autocomplete="current-password"
          class="admin-input"
        />
      </div>
      <div>
        <label class="admin-label">New password</label>
        <input
          v-model="newPassword"
          type="password"
          required
          minlength="8"
          autocomplete="new-password"
          class="admin-input"
        />
        <p class="text-xs text-slate-400 mt-1.5">At least 8 characters.</p>
      </div>
      <div>
        <label class="admin-label">Confirm new password</label>
        <input
          v-model="confirmPassword"
          type="password"
          required
          minlength="8"
          autocomplete="new-password"
          class="admin-input"
        />
      </div>

      <p v-if="error" class="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">{{ error }}</p>
      <p v-if="success" class="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2">{{ success }}</p>

      <button type="submit" class="admin-btn-primary w-full sm:w-auto" :disabled="saving">
        {{ saving ? 'Updating…' : 'Update password' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin-auth'] })

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref('')
const saving = ref(false)

async function changePassword() {
  error.value = ''
  success.value = ''

  if (newPassword.value !== confirmPassword.value) {
    error.value = 'New passwords do not match.'
    return
  }

  saving.value = true
  try {
    const res = await fetch('/api/admin/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        current_password: currentPassword.value,
        new_password: newPassword.value,
      }),
    })

    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      error.value = data.error || data.message || 'Could not update password.'
      return
    }

    success.value = 'Password updated successfully.'
    currentPassword.value = ''
    newPassword.value = ''
    confirmPassword.value = ''
  } catch {
    error.value = 'Could not connect to server.'
  } finally {
    saving.value = false
  }
}
</script>
