<template>
  <section class="relative bg-gradient-to-br from-primary-950 via-gray-900 to-gray-900 text-white overflow-hidden">
    <!-- Background: container photo with dark overlay -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/hero-containers.jpg')">
      <div class="absolute inset-0 bg-primary-950/80"></div>
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
            <span class="text-burgundy-light"> Shipping Containers</span>
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

        <!-- Container image -->
        <div class="relative lg:h-[520px] h-[320px]">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-950 border border-white/10 shadow-2xl overflow-hidden bg-cover bg-center" style="background-image: url('/images/hero-containers.jpg')">
            <div class="absolute inset-0 bg-primary-950/40 rounded-2xl"></div>
            <div class="absolute -top-20 -right-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-16 -left-16 w-56 h-56 bg-primary-400/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
