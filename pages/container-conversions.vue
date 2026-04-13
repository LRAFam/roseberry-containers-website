<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/conversions.jpg')">
          <div class="absolute inset-0 bg-primary-950/85"></div>
        </div>
        <!-- Dot pattern -->
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <!-- Glow blobs -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-burgundy/8 rounded-full blur-3xl pointer-events-none"></div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Bespoke Container Conversions
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transform a Container <span class="text-burgundy-light">Into Something Extraordinary</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              We convert shipping containers into home offices, business premises, food stalls and more. Full conversions or partial — we handle the structural work, windows and doors.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#enquire" class="btn-primary">Discuss Your Project</a>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
            <div class="grid grid-cols-3 gap-4 max-w-sm mt-12 border-t border-amber-500/20 pt-6">
              <div class="text-center">
                <div class="text-xl font-bold text-burgundy-light">Bespoke</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Every Build</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-xl font-bold text-burgundy-light">Full</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">or Partial</div>
              </div>
              <div class="text-center">
                <div class="text-xl font-bold text-burgundy-light">Teesside</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conversion types -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="heading-lg text-gray-900 mb-4">What Can We Convert?</h2>
            <p class="body-lg max-w-2xl mx-auto">Every conversion is designed and built to your exact specification. Here are some of our most popular projects.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="type in conversionTypes" :key="type.title" class="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-card-lg transition-all duration-300 group">
              <div class="h-48 bg-gradient-to-br from-primary-800 to-primary-950 flex items-center justify-center">
                <div v-html="type.icon" class="text-burgundy-light w-20 h-20"></div>
              </div>
              <div class="p-6">
                <h3 class="heading-sm text-gray-900 mb-3">{{ type.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ type.description }}</p>
                <ul class="space-y-1.5">
                  <li v-for="feature in type.features" :key="feature" class="flex items-center gap-2 text-sm text-gray-600">
                    <svg class="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Full vs Partial conversion -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="heading-lg text-gray-900 mb-4">Full or Partial Conversion?</h2>
            <p class="body-lg max-w-2xl mx-auto">We offer two levels of conversion to suit different budgets and requirements.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Full conversion -->
            <div class="bg-white rounded-2xl shadow-card p-8 border-2 border-primary-200">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 class="heading-sm text-gray-900">Full Conversion</h3>
              </div>
              <p class="text-gray-600 mb-6">We take care of everything from start to finish — a completely finished space ready to use, to your design brief.</p>
              <ul class="space-y-3">
                <li v-for="item in fullConversion" :key="item" class="flex items-start gap-2 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Partial conversion -->
            <div class="bg-white rounded-2xl shadow-card p-8 border-2 border-amber-200">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 class="heading-sm text-gray-900">Partial Conversion</h3>
              </div>
              <p class="text-gray-600 mb-6">We handle the structural work and fit the windows and doors — then hand over to you to finish the interior your way.</p>
              <ul class="space-y-3">
                <li v-for="item in partialConversion" :key="item" class="flex items-start gap-2 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section id="enquire" class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center">
          <h2 class="heading-lg mb-4">Have a Project in Mind?</h2>
          <p class="body-lg text-gray-300 mb-8 max-w-xl mx-auto">Every conversion starts with a conversation. Tell us your idea and we'll tell you how we can make it happen.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07793251550" class="btn-primary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 07793 251550
            </a>
            <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
              Send an Enquiry
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Container Conversions | Roseberry Containers',
  meta: [
    { name: 'description', content: 'Bespoke shipping container conversions including home offices, business premises, food stalls and more. Full and partial conversions available from Roseberry Containers.' }
  ]
})

const containerIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>`

const conversionTypes = [
  {
    title: 'Home Office',
    description: 'Create a quiet, professional workspace in your garden. Fully insulated, electrics fitted, and finished to a high standard.',
    icon: containerIcon,
    features: ['Insulation and cladding', 'Windows and door fitted', 'Electrical installation', 'Ideal for garden placement'],
  },
  {
    title: 'Business Premises',
    description: 'Cost-effective commercial space for retail, workshops, studios or pop-up businesses. Planning-friendly and relocatable.',
    icon: containerIcon,
    features: ['Commercial specification', 'Single or multi-container', 'Shop fronts and signage-ready', 'Stackable for extra floors'],
  },
  {
    title: 'Food Stall / Catering Unit',
    description: 'Fully fitted catering units for street food, markets, festivals and permanent pitches. Built to your menu.',
    icon: containerIcon,
    features: ['Serving hatch and counter', 'Ventilation and extraction', 'Stainless steel interior options', 'Gas and electric installation'],
  },
]

const fullConversion = [
  'Structural modifications and openings',
  'Windows and doors supplied and fitted',
  'Insulation and internal lining',
  'Electrical first and second fix',
  'Plumbing where required',
  'Finished interior to your specification',
  'External cladding and paintwork',
]

const partialConversion = [
  'Structural modifications and cut-outs',
  'Windows and doors supplied and fitted',
  'Weatherproof and structurally sound',
  'Ready for your own interior fit-out',
  'Great way to reduce costs',
  'We advise on best practice for finishing',
]
</script>
