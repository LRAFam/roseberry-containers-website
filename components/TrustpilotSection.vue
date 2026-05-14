<template>
  <section class="section-padding bg-gray-50 border-y border-gray-100">
    <div class="container-custom">

      <!-- Section header -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 bg-[#00b67a]/10 text-[#00793a] border border-[#00b67a]/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
          <!-- Trustpilot star icon -->
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
          </svg>
          Trustpilot
        </div>
        <h2 class="heading-lg text-gray-900 mb-4">Rated Excellent by Our Customers</h2>
        <p class="body-lg">Real reviews from real customers on Trustpilot</p>
      </div>

      <!-- Trustpilot widgets (shown when businessunitId is set) -->
      <div v-if="businessunitId" class="space-y-6">

        <!-- Mini score widget -->
        <div class="flex justify-center">
          <div
            class="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="53aa8807dec7e10d38f59f32"
            :data-businessunit-id="businessunitId"
            data-style-height="120px"
            data-style-width="100%"
            data-theme="light"
          >
            <a
              :href="`https://uk.trustpilot.com/review/${domain}`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#00b67a] hover:underline"
            >Trustpilot</a>
          </div>
        </div>

        <!-- Review carousel -->
        <div
          class="trustpilot-widget"
          data-locale="en-GB"
          data-template-id="53aa8912dec7e10d38f59f36"
          :data-businessunit-id="businessunitId"
          data-style-height="140px"
          data-style-width="100%"
          data-theme="light"
          data-stars="4,5"
        >
          <a
            :href="`https://uk.trustpilot.com/review/${domain}`"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#00b67a] hover:underline"
          >Read our reviews on Trustpilot</a>
        </div>

        <!-- CTA -->
        <div class="text-center pt-2">
          <a
            :href="`https://uk.trustpilot.com/review/${domain}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-[#00b67a] hover:bg-[#00a368] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
            </svg>
            Leave us a review
          </a>
        </div>
      </div>

      <!-- Placeholder shown until businessunitId is configured -->
      <div v-else class="max-w-2xl mx-auto text-center bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
        <div class="flex justify-center mb-5">
          <!-- Trustpilot logo mark -->
          <svg class="w-16 h-16 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
          </svg>
        </div>
        <div class="flex justify-center gap-1 mb-4">
          <svg v-for="i in 5" :key="i" class="w-7 h-7 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Excellent</h3>
        <p class="text-gray-500 mb-6">
          We're on Trustpilot! Happy with your service?
          Leave us a review — it means the world to us.
        </p>
        <a
          href="https://uk.trustpilot.com/review/roseberrycontainers.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-[#00b67a] hover:bg-[#00a368] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
          </svg>
          Leave us a review on Trustpilot
        </a>
        <p class="text-xs text-gray-400 mt-4">
          Set <code class="bg-gray-100 px-1 rounded">NUXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID</code> to embed live reviews.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const businessunitId = config.public.trustpilotBusinessUnitId as string
const domain = config.public.trustpilotDomain as string || 'roseberrycontainers.co.uk'

// Load the Trustpilot TrustBox bootstrap script once when businessunitId is set
if (businessunitId) {
  useHead({
    script: [
      {
        src: '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js',
        async: true,
        defer: true,
      },
    ],
  })
}
</script>
