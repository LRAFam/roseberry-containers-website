<template>
  <section class="relative text-white overflow-hidden">
    <!-- Background: container photo with dark burgundy overlay -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/hero-containers.jpg')">
      <div class="absolute inset-0 bg-primary-950/85"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-24 lg:min-h-[660px]">
        <!-- Content -->
        <div class="space-y-7">
          <div class="inline-flex items-center gap-2 bg-primary-500/15 text-primary-300 border border-primary-500/25 px-4 py-1.5 rounded-full text-sm font-semibold">
            <span class="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse"></span>
            UK Container Specialists
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Buy, Hire &amp; Convert
            <span class="text-primary-400"> Shipping Containers</span>
          </h1>

          <p class="body-lg text-gray-300">
            From nationwide container sales with 8 depots across the UK, to hire, bespoke conversions and self storage — Roseberry Containers has you covered.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/container-sales" class="btn-primary">
              View Containers
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">8</div>
              <div class="text-xs text-gray-400 mt-1 uppercase tracking-wide">UK Depots</div>
            </div>
            <div class="text-center border-x border-white/10">
              <div class="text-3xl font-bold text-primary-400">24/7</div>
              <div class="text-xs text-gray-400 mt-1 uppercase tracking-wide">CCTV Security</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">Best</div>
              <div class="text-xs text-gray-400 mt-1 uppercase tracking-wide">UK Prices</div>
            </div>
          </div>
        </div>

        <!-- Service cards -->
        <div class="grid grid-cols-2 gap-4">
          <NuxtLink to="/container-sales" class="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-5 transition-all duration-200">
            <svg class="w-8 h-8 text-primary-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 class="font-bold text-white mb-1">Container Sales</h3>
            <p class="text-xs text-gray-300">New &amp; used containers, nationwide delivery</p>
          </NuxtLink>
          <NuxtLink to="/container-hire" class="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-5 transition-all duration-200">
            <svg class="w-8 h-8 text-primary-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 class="font-bold text-white mb-1">Container Hire</h3>
            <p class="text-xs text-gray-300">Short &amp; long-term hire to your site</p>
          </NuxtLink>
          <NuxtLink to="/container-conversions" class="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-5 transition-all duration-200">
            <svg class="w-8 h-8 text-primary-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            <h3 class="font-bold text-white mb-1">Conversions</h3>
            <p class="text-xs text-gray-300">Offices, food stalls &amp; bespoke builds</p>
          </NuxtLink>
          <NuxtLink to="/self-storage" class="bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl p-5 transition-all duration-200">
            <svg class="w-8 h-8 text-primary-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 class="font-bold text-white mb-1">Self Storage</h3>
            <p class="text-xs text-gray-300">Secure storage in Teesside, 24/7 CCTV</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
