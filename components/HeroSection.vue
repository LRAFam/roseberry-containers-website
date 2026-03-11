<template>
  <section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
        <!-- Content -->
        <div class="space-y-8">
          <div class="inline-block">
            <span class="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold">
              Trusted Storage Solutions
            </span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold leading-tight">
            Convenient Storage Solutions at 
            <span class="text-emerald-400">Roseberry Self Storage</span>
          </h1>
          
          <p class="text-xl text-gray-300 leading-relaxed">
            We take care of your stuff with 24/7 CCTV monitoring, secure access, and affordable rates in Middlesbrough.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="btn-primary inline-flex items-center justify-center group">
              Let's Chat!
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="tel:07793251550" class="btn-secondary inline-flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          <!-- Features -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-400">24/7</div>
              <div class="text-sm text-gray-400 mt-1">CCTV</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-400">100%</div>
              <div class="text-sm text-gray-400 mt-1">Secure</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-400">Low</div>
              <div class="text-sm text-gray-400 mt-1">Rates</div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative lg:h-[500px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&h=600&fit=crop" 
            alt="Storage Container" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
