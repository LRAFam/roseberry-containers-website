<template>
  <div class="bg-white rounded-2xl shadow-lg p-8">
    <h3 class="text-2xl font-bold text-gray-900 mb-2">Get an Instant Delivery Quote</h3>
    <p class="text-gray-500 mb-6">Enter your postcode and we'll calculate delivery from our Middlesbrough depot.</p>

    <form @submit.prevent="getQuote" class="space-y-4">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1">
          <label for="postcode" class="block text-sm font-medium text-gray-700 mb-1">Your Postcode *</label>
          <input
            id="postcode"
            v-model="postcode"
            type="text"
            required
            placeholder="e.g. YO1 9QU"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all uppercase"
            :disabled="loading"
          />
        </div>
        <div class="sm:w-48">
          <label for="containerType" class="block text-sm font-medium text-gray-700 mb-1">Container Size</label>
          <select
            id="containerType"
            v-model="containerType"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
            :disabled="loading"
          >
            <option value="20ft">20ft</option>
            <option value="40ft">40ft</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        :disabled="loading || !postcode"
        class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="!loading">Calculate Delivery Cost</span>
        <span v-else class="flex items-center justify-center gap-2">
          <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          Calculating...
        </span>
      </button>
    </form>

    <!-- Result -->
    <div v-if="result" class="mt-6 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p class="text-sm text-emerald-700 font-medium uppercase tracking-wide mb-1">Estimated Delivery Cost</p>
          <p class="text-4xl font-bold text-emerald-700">{{ result.formattedPrice }}</p>
          <p class="text-sm text-gray-500 mt-1">{{ result.distanceKm }} km from our depot · {{ containerType }} container</p>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-400 mb-2">This is an estimate. Final price confirmed on order.</p>
          <a href="/contact" class="btn-primary text-sm inline-block">Enquire Now</a>
        </div>
      </div>
    </div>

    <!-- Error -->
    <p v-if="error" class="mt-4 text-sm text-red-600 text-center">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const postcode = ref('')
const containerType = ref('20ft')
const loading = ref(false)
const error = ref('')
const result = ref<{ formattedPrice: string; distanceKm: number } | null>(null)

const config = useRuntimeConfig()

const getQuote = async () => {
  loading.value = true
  error.value = ''
  result.value = null

  try {
    const params = new URLSearchParams({ postcode: postcode.value.trim() })
    const res = await fetch(`${config.public.apiBase}/api/delivery/estimate?${params}`)

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error ?? 'Unable to calculate delivery. Please check your postcode.')
    }

    const data = await res.json()
    result.value = {
      formattedPrice: data.formattedPrice ?? `£${(data.totalPricePence / 100).toFixed(2)}`,
      distanceKm: Math.round(data.distanceKm ?? 0),
    }
  } catch (err: any) {
    error.value = err.message ?? 'Something went wrong. Please call us for a quote.'
  } finally {
    loading.value = false
  }
}
</script>
