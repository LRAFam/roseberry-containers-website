<template>
  <section class="section-padding bg-gray-50 border-y border-gray-100">
    <div class="container-custom">

      <!-- Section header -->
      <div class="text-center mb-10">
        <a
          href="https://uk.trustpilot.com/review/roseberrycontainers.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-[#00b67a]/10 text-[#00793a] border border-[#00b67a]/20 px-3 py-1 rounded-full text-sm font-semibold mb-4 hover:bg-[#00b67a]/20 transition-colors"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
          </svg>
          Trustpilot
        </a>
        <h2 class="heading-lg text-gray-900 mb-3">Rated Excellent by Our Customers</h2>
        <!-- Score summary -->
        <div class="flex items-center justify-center gap-3 mb-2">
          <div class="flex gap-0.5">
            <svg v-for="i in 5" :key="i" class="w-7 h-7 text-white bg-[#00b67a] p-0.5 rounded-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
            </svg>
          </div>
          <span class="text-2xl font-bold text-gray-900">4.3</span>
          <span class="text-gray-500 text-sm">· 10 reviews</span>
        </div>
        <p class="text-gray-500 text-sm">Verified reviews on Trustpilot</p>
      </div>

      <!-- Review cards carousel -->
      <div class="relative">
        <!-- Scroll container -->
        <div
          ref="scrollContainer"
          class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style="scrollbar-width: none; -ms-overflow-style: none;"
        >
          <div
            v-for="review in reviews"
            :key="review.name"
            class="flex-none w-72 sm:w-80 snap-start bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col gap-3"
          >
            <!-- Stars -->
            <div class="flex gap-0.5">
              <svg v-for="i in review.stars" :key="i" class="w-5 h-5 text-white bg-[#00b67a] p-0.5 rounded-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
              </svg>
            </div>
            <!-- Title -->
            <p class="font-semibold text-gray-900 text-sm leading-snug">{{ review.title }}</p>
            <!-- Body -->
            <p class="text-gray-600 text-sm leading-relaxed flex-1">{{ review.body }}</p>
            <!-- Author -->
            <div class="flex items-center gap-2 pt-1 border-t border-gray-100">
              <div class="w-8 h-8 rounded-full bg-[#00b67a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {{ review.name.charAt(0).toUpperCase() }}
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-800">{{ review.name }}</p>
                <p class="text-xs text-gray-400">{{ review.date }}</p>
              </div>
              <!-- Verified badge -->
              <svg class="w-4 h-4 text-[#00b67a] ml-auto flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" title="Verified review">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Prev / Next buttons -->
        <button
          @click="scroll(-1)"
          class="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 shadow items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all z-10"
          aria-label="Previous reviews"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          @click="scroll(1)"
          class="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 shadow items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all z-10"
          aria-label="Next reviews"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- CTA -->
      <div class="text-center mt-8">
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
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)

function scroll(dir: 1 | -1) {
  scrollContainer.value?.scrollBy({ left: dir * 320, behavior: 'smooth' })
}

const reviews = [
  {
    name: 'Matt F',
    stars: 5,
    title: 'Great service',
    body: 'He was straightforward, did exactly what he said he would, and delivered as promised. No messing about, good communication, and everything went smoothly. Would definitely recommend.',
    date: 'May 2026',
  },
  {
    name: 'Nick Searle',
    stars: 5,
    title: 'The team were very responsive',
    body: 'The team were very responsive, delivered exactly as advertised ahead of schedule. Will use them again!',
    date: 'May 2026',
  },
  {
    name: 'Michelle Jones',
    stars: 5,
    title: 'We bought 2 containers from James',
    body: 'James was helpful at every step. The containers were exactly as he had described. Delivery was prompt with a lovely driver who was very considerate. Would highly recommend using Roseberry again.',
    date: 'May 2026',
  },
  {
    name: 'Ben Fisher',
    stars: 5,
    title: 'Great service',
    body: 'Great service, great communication and reliable. Would use them again.',
    date: 'May 2026',
  },
  {
    name: 'John Meakin',
    stars: 5,
    title: 'Very good service',
    body: 'Very good service — no playing about, the price was the price. The haulage was what was quoted, container turned up no fuss. All round great service, will always recommend and use again.',
    date: 'April 2026',
  },
  {
    name: 'Ted Hughes',
    stars: 5,
    title: 'Quick',
    body: 'Quick, concise and organised whilst being reasonably priced. Will use again.',
    date: 'May 2026',
  },
  {
    name: 'Rubberduck Bathrooms',
    stars: 5,
    title: 'Professional from start to finish',
    body: 'James was very quick to source the right size containers at a competitive price. Delivery and placement were arranged efficiently and they arrived on the day as promised. Communication was easy and all questions answered. Would happily deal again.',
    date: 'February 2026',
  },
  {
    name: 'Jacqueline',
    stars: 5,
    title: 'I ordered a container from Roseberry',
    body: 'The whole experience was great. They explained everything and sent me videos of the one I bought, delivered on time.',
    date: 'April 2026',
  },
  {
    name: 'Angus Fletcher',
    stars: 5,
    title: '20ft container delivered with efficiency',
    body: '20ft container delivered with efficiency, great communication, great product as described — PERFECT. Would recommend and use again.',
    date: 'May 2026',
  },
  {
    name: 'Cass',
    stars: 5,
    title: 'Responsive and reliable',
    body: 'Responsive and reliable, would highly recommend.',
    date: 'May 2026',
  },
]
</script>

<style scoped>
/* Hide scrollbar cross-browser */
div[ref="scrollContainer"]::-webkit-scrollbar { display: none; }
</style>
