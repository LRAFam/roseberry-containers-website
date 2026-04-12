<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"></div>
        <div class="container-custom relative z-10 py-20 md:py-28">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-primary-500/15 text-primary-300 border border-primary-500/25 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
              8 Depots Nationwide
            </div>
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Nationwide Container Sales — <span class="text-primary-400">Find Your Closest Depot</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              With depots strategically located across the UK from Scotland to the South Coast, we can source and deliver your container from the nearest site — keeping costs down and delivery times fast.
            </p>
            <a href="#depots" class="btn-primary">Find Your Depot</a>
          </div>
        </div>
      </section>

      <!-- Depot finder -->
      <section id="depots" class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="heading-lg text-gray-900 mb-4">Our UK Depots</h2>
            <p class="body-lg max-w-2xl mx-auto">Click your nearest depot for local information, pricing and to enquire about containers in your area.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <NuxtLink
              v-for="depot in depots"
              :key="depot.slug"
              :to="`/container-sales/${depot.slug}`"
              class="bg-white rounded-2xl shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 p-6 group"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span v-if="depot.isHQ" class="bg-primary-100 text-primary-700 text-xs font-bold px-2 py-1 rounded-full">HQ</span>
              </div>
              <h3 class="font-bold text-gray-900 text-lg mb-1">{{ depot.name }}</h3>
              <p class="text-gray-500 text-sm mb-4">{{ depot.region }}</p>
              <span class="text-primary-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View depot
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- UK map coverage -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="heading-lg text-gray-900 mb-6">Container Delivery Across the UK</h2>
              <p class="body-lg mb-6">With 8 strategically placed depots, we can deliver shipping containers to virtually anywhere in mainland UK. Whether you need a 10ft, 20ft or 40ft container — new or used — we'll source it from the depot closest to you.</p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700"><strong>Lower delivery costs</strong> — closer depot means shorter haul</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700"><strong>Faster turnaround</strong> — from order to delivery in days</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700"><strong>Large stock</strong> — wide range of grades and sizes available</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700"><strong>One point of contact</strong> — Roseberry handles everything</span>
                </li>
              </ul>
              <a href="tel:07793251550" class="btn-primary">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for a Quote
              </a>
            </div>
            <div class="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h3 class="font-bold text-gray-900 mb-4">Depot Locations</h3>
              <ul class="space-y-3">
                <li v-for="depot in depots" :key="depot.slug" class="flex items-center gap-3">
                  <svg class="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  <NuxtLink :to="`/container-sales/${depot.slug}`" class="text-gray-700 hover:text-primary-700 font-medium transition-colors">
                    {{ depot.name }} <span class="text-gray-400 font-normal">— {{ depot.region }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nationwide Container Sales | Roseberry Containers',
  meta: [
    { name: 'description', content: 'Buy shipping containers nationwide with Roseberry Containers. 8 UK depots at Felixstowe, Tilbury, Southampton, Birmingham, Liverpool, Leeds, Teesside and Bathgate. Fast delivery, competitive prices.' }
  ]
})

const depots = [
  { slug: 'teesside', name: 'Teesside', region: 'North East England', isHQ: true },
  { slug: 'felixstowe', name: 'Felixstowe', region: 'Suffolk, East Anglia', isHQ: false },
  { slug: 'tilbury', name: 'Tilbury', region: 'Essex, Thames Estuary', isHQ: false },
  { slug: 'southampton', name: 'Southampton', region: 'Hampshire, South Coast', isHQ: false },
  { slug: 'birmingham', name: 'Birmingham', region: 'West Midlands', isHQ: false },
  { slug: 'liverpool', name: 'Liverpool', region: 'Merseyside, North West', isHQ: false },
  { slug: 'leeds', name: 'Leeds', region: 'West Yorkshire', isHQ: false },
  { slug: 'bathgate', name: 'Bathgate', region: 'West Lothian, Scotland', isHQ: false },
]
</script>
