<template>
  <section class="relative bg-gradient-to-br from-primary-950 via-gray-900 to-gray-900 text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%)">
    <!-- Background: container photo with dark overlay -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/hero-containers.jpg')">
      <div class="absolute inset-0 bg-primary-950/80"></div>
    </div>
    <!-- Dot pattern -->
    <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
    <!-- Diagonal lines -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16 md:pt-24 pb-24 md:pb-32 lg:min-h-[660px]">
        <!-- Content -->
        <div class="space-y-7">
          <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold">
            <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
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
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-amber-500/20">
            <div class="text-center">
              <div class="text-3xl font-bold text-burgundy-light">8</div>
              <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">UK Depots</div>
            </div>
            <div class="text-center border-x border-white/10">
              <div class="text-3xl font-bold text-burgundy-light">24/7</div>
              <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">CCTV Security</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-burgundy-light">Best</div>
              <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">UK Prices</div>
            </div>
          </div>
        </div>

        <!-- Container image / placeholder -->
        <div class="relative lg:h-[520px] h-[320px]">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-900 to-gray-900 border border-amber-500/30 shadow-2xl overflow-hidden">
            <!-- Gold corner dots -->
            <div class="w-2 h-2 rounded-full bg-amber-400/60 absolute top-2 left-2"></div>
            <div class="w-2 h-2 rounded-full bg-amber-400/60 absolute top-2 right-2"></div>
            <div class="w-2 h-2 rounded-full bg-amber-400/60 absolute bottom-2 left-2"></div>
            <div class="w-2 h-2 rounded-full bg-amber-400/60 absolute bottom-2 right-2"></div>
            <div class="absolute -top-20 -right-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-16 -left-16 w-56 h-56 bg-primary-400/10 rounded-full blur-2xl pointer-events-none"></div>
            <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 40px 40px;"></div>
            <div class="relative z-10 flex items-center justify-center h-full p-4 lg:p-8">
              <IsometricContainer class="w-full max-w-[420px] drop-shadow-2xl" />
            </div>
          </div>
          </div>
        </div>
      </div>
  </section>
</template>
