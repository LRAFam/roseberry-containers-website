<template>
  <section class="relative bg-gradient-to-br from-primary-950 via-gray-900 to-gray-900 text-white overflow-hidden">
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 48px 48px;"></div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 md:py-20 lg:min-h-[680px]">
        <!-- Content -->
        <div class="space-y-7">
          <div class="inline-flex items-center gap-2 bg-primary-500/15 text-primary-300 border border-primary-500/25 px-4 py-1.5 rounded-full text-sm font-semibold">
            <span class="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse"></span>
            Trusted Storage Solutions
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Secure Container Storage at
            <span class="text-primary-400"> Roseberry Containers</span>
          </h1>

          <p class="body-lg text-gray-300">
            We take care of your stuff with 24/7 CCTV monitoring, secure access, and affordable rates in Middlesbrough.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="btn-primary">
              Let's Chat!
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
              <div class="text-3xl font-bold text-primary-400">24/7</div>
              <div class="text-xs text-gray-400 mt-1 uppercase tracking-wide">CCTV Security</div>
            </div>
            <div class="text-center border-x border-white/10">
              <div class="text-3xl font-bold text-primary-400">100%</div>
              <div class="text-xs text-gray-400 mt-1 uppercase tracking-wide">Weatherproof</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">Best</div>
              <div class="text-xs text-gray-400 mt-1 uppercase tracking-wide">Local Prices</div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative lg:h-[520px] h-[320px] group">
          <!-- Branded card — visible even with a small source image -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-950 border border-white/10 shadow-2xl overflow-hidden">
            <!-- Ambient glow blobs -->
            <div class="absolute -top-20 -right-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-16 -left-16 w-56 h-56 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
            <!-- Subtle grid overlay -->
            <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 40px 40px;"></div>
            <!-- Isometric 3D container illustration -->
            <div class="relative z-10 flex items-center justify-center h-full p-4 lg:p-8">
              <IsometricContainer class="w-full max-w-[420px] drop-shadow-2xl" />
            </div>
          </div>
          <!-- Location badge -->
          <div class="absolute bottom-4 left-4 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-sm font-medium">
            📦 Middlesbrough, TS1
          </div>
          <!-- Price tag -->
          <div class="absolute top-4 right-4 z-20 bg-amber-500 text-white text-sm font-bold px-3 py-1.5 rounded-xl shadow-lg">
            From £999
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
