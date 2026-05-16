<template>
  <section class="section-padding bg-primary-950 relative overflow-hidden">
    <!-- Subtle background texture -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 bg-[#00b67a]/15 text-[#00e08a] border border-[#00b67a]/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
          </svg>
          Verified Trustpilot Reviews
        </div>
        <h2 class="heading-lg text-white mb-3">What Our Customers Say</h2>
        <div class="flex items-center justify-center gap-2 mb-2">
          <div class="flex gap-0.5">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-white bg-[#00b67a] p-0.5 rounded-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
            </svg>
          </div>
          <span class="text-white font-bold">4.3 Excellent</span>
          <span class="text-gray-400 text-sm">· 10 reviews on Trustpilot</span>
        </div>
      </div>

      <!-- 3 featured quotes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div v-for="review in featured" :key="review.name" class="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300 flex flex-col gap-4">
          <!-- Stars -->
          <div class="flex gap-0.5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-white bg-[#00b67a] p-0.5 rounded-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
            </svg>
          </div>
          <!-- Quote -->
          <p class="text-gray-200 text-base leading-relaxed italic flex-1">"{{ review.body }}"</p>
          <!-- Author -->
          <div class="flex items-center gap-3 pt-3 border-t border-white/10">
            <div class="w-9 h-9 rounded-full bg-[#00b67a] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {{ review.name.charAt(0) }}
            </div>
            <div>
              <p class="text-white text-sm font-semibold">{{ review.name }}</p>
              <p class="text-gray-400 text-xs">{{ review.date }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <a
          href="https://uk.trustpilot.com/review/roseberrycontainers.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-[#00b67a] hover:bg-[#00a368] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          Read all 10 reviews on Trustpilot
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const featured = [
  {
    name: 'Michelle Jones',
    body: 'James was helpful at every step. The containers were exactly as he had described. Delivery was prompt with a lovely driver who was very considerate. Would highly recommend using Roseberry again.',
    date: 'May 2026',
  },
  {
    name: 'Rubberduck Bathrooms',
    body: 'James was very quick to source the right size containers at a competitive price. Delivery and placement were arranged efficiently. Communication was easy and all questions answered. Would happily deal again.',
    date: 'February 2026',
  },
  {
    name: 'Angus Fletcher',
    body: '20ft container delivered with efficiency, great communication, great product as described — PERFECT. Would recommend and use again.',
    date: 'May 2026',
  },
]
</script>
