<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 bg-primary-500/10 text-primary-700 border border-primary-500/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          Our Services
        </div>
        <h2 class="heading-lg text-gray-900 mb-4">Everything Containers, Nationwide</h2>
        <p class="body-lg max-w-2xl mx-auto">
          Whether you need to buy, hire, convert or store — we've got the container solution for you
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Container Sales -->
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 class="heading-sm text-gray-900 mb-3">Container Sales</h3>
          <p class="body-sm mb-4">New and used shipping containers for sale with 8 UK depots offering nationwide delivery to your door.</p>
          <NuxtLink to="/container-sales" class="text-sm font-semibold text-primary-700 hover:text-primary-900 flex items-center gap-1">
            Browse containers
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>

        <!-- Container Hire -->
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="heading-sm text-gray-900 mb-3">Container Hire</h3>
          <p class="body-sm mb-4">Flexible short and long-term container hire delivered directly to your site. Perfect for construction, events and business use.</p>
          <NuxtLink to="/container-hire" class="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1">
            Hire a container
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>

        <!-- Container Conversions -->
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 class="heading-sm text-gray-900 mb-3">Container Conversions</h3>
          <p class="body-sm mb-4">Home offices, business premises, food stalls and more. Full or partial conversions — we fit the structure, windows &amp; doors.</p>
          <NuxtLink to="/container-conversions" class="text-sm font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1">
            See conversions
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>

        <!-- Self Storage -->
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="heading-sm text-gray-900 mb-3">Self Storage</h3>
          <p class="body-sm mb-4">Secure self storage at our Teesside site. 24/7 CCTV, easy access and flexible rental periods to suit you.</p>
          <NuxtLink to="/self-storage" class="text-sm font-semibold text-rose-700 hover:text-rose-900 flex items-center gap-1">
            Find out more
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
