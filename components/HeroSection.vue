<template>
  <section class="relative bg-gradient-to-br from-primary-950 via-gray-900 to-gray-900 text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%)">
    <!-- Background: real container yard photo with dark overlay -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/hero-bg.jpg')">
      <div class="absolute inset-0 bg-primary-950/75"></div>
    </div>
    <!-- Subtle dot pattern -->
    <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16 md:pt-24 pb-24 md:pb-32 lg:min-h-[680px]">

        <!-- Content -->
        <div class="space-y-7">
          <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold">
            <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
            Nationwide Container Specialists
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            The UK's Leading
            <span class="hero-gold-text"> Shipping Container</span>
            Supplier
          </h1>

          <p class="body-lg text-gray-300 max-w-lg">
            Sales, hire, bespoke conversions and self storage — with 8 depots across the UK, Roseberry Containers delivers direct to your door at prices that can't be beaten.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/container-sales" class="btn-primary text-base px-8 py-3.5">
              Get a Quote Today
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 hover:bg-white/10 text-base">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 07793 251550
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-amber-500/20">
            <div class="text-center">
              <div class="text-3xl font-bold hero-gold-text">8</div>
              <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">UK Depots</div>
            </div>
            <div class="text-center border-x border-white/10">
              <div class="text-3xl font-bold hero-gold-text">500+</div>
              <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Containers Sold</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold hero-gold-text">4.3★</div>
              <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Trustpilot</div>
            </div>
          </div>
        </div>

        <!-- Video / Image panel -->
        <div class="relative lg:h-[520px] h-[280px]">
          <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-amber-500/15 via-primary-500/10 to-transparent blur-2xl pointer-events-none"></div>
          <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400/60 rounded-tl-2xl pointer-events-none z-20"></div>
          <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400/60 rounded-tr-2xl pointer-events-none z-20"></div>
          <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400/60 rounded-bl-2xl pointer-events-none z-20"></div>
          <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400/60 rounded-br-2xl pointer-events-none z-20"></div>
          <div class="absolute inset-0 rounded-2xl border border-amber-500/30 shadow-2xl overflow-hidden">
            <div class="absolute inset-0 pointer-events-none z-10" style="background: radial-gradient(ellipse at center, transparent 50%, rgba(3,22,14,0.65) 100%)"></div>
            <video
              class="w-full h-full object-cover"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              src="/videos/hero.mp4"
            ></video>
          </div>
          <!-- Floating badge -->
          <div class="absolute -bottom-4 -left-4 z-30 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100">
            <div class="w-9 h-9 bg-[#00b67a] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-500 font-medium">Trustpilot Rated</p>
              <p class="text-sm font-bold text-gray-900">Excellent · 4.3/5</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Depot ticker -->
    <div class="relative z-10 border-t border-white/10 bg-primary-950/60 backdrop-blur-sm">
      <div class="container-custom py-3 flex items-center gap-4 overflow-hidden">
        <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider whitespace-nowrap flex-shrink-0">8 Depots:</span>
        <div class="flex gap-6 text-xs text-gray-400 overflow-x-auto" style="scrollbar-width:none">
          <span v-for="depot in depots" :key="depot" class="whitespace-nowrap flex items-center gap-1.5">
            <span class="w-1 h-1 bg-amber-400/60 rounded-full"></span>
            {{ depot }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const depots = [
  'Teesside', 'Newcastle', 'Leeds', 'Manchester',
  'Birmingham', 'Bristol', 'London', 'Glasgow',
]
</script>
