<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 bg-primary-500/10 text-primary-700 border border-primary-500/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          What We Do
        </div>
        <h2 class="heading-lg text-gray-900 mb-4">Everything Containers, Nationwide</h2>
        <p class="body-lg max-w-2xl mx-auto">
          From 10ft storage containers to full bespoke conversions — we supply, deliver and build across the entire UK.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Container Sales -->
        <NuxtLink to="/container-sales" class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-primary-200 flex flex-col">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img src="/container-20ft.jpg" alt="20ft shipping container for sale" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-primary-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">Sales</span>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="heading-sm text-gray-900 mb-2">Container Sales</h3>
            <p class="body-sm mb-4 flex-1">New 1-trip and quality used containers. {{ DEPOT_COUNT }} UK depot locations with nationwide delivery direct to your door.</p>
            <span class="text-sm font-semibold text-primary-700 group-hover:text-primary-900 flex items-center gap-1">
              Browse containers
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </div>
        </NuxtLink>

        <!-- Container Hire -->
        <NuxtLink to="/container-hire" class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img src="/container-10ft.jpg" alt="Container hire" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">Hire</span>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="heading-sm text-gray-900 mb-2">Container Hire</h3>
            <p class="body-sm mb-4 flex-1">Flexible short and long-term hire. Perfect for construction sites, events and temporary business storage — delivered to you.</p>
            <span class="text-sm font-semibold text-blue-700 group-hover:text-blue-900 flex items-center gap-1">
              Hire a container
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </div>
        </NuxtLink>

        <!-- Container Conversions -->
        <NuxtLink to="/container-conversions" class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-amber-200 flex flex-col">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img src="/container-conversion-full.jpg" alt="Container conversion - business premises" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">Conversions</span>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="heading-sm text-gray-900 mb-2">Container Conversions</h3>
            <p class="body-sm mb-4 flex-1">Home offices, shops, catering units and more. Fully bespoke — we fit windows, doors, electrics and insulation.</p>
            <span class="text-sm font-semibold text-amber-700 group-hover:text-amber-900 flex items-center gap-1">
              See conversions
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </div>
        </NuxtLink>

        <!-- Self Storage -->
        <NuxtLink to="/self-storage" class="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-rose-200 flex flex-col">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img src="/container-40ft.jpg" alt="Self storage containers Teesside" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-3 left-3">
              <span class="bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">Storage</span>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="heading-sm text-gray-900 mb-2">Self Storage</h3>
            <p class="body-sm mb-4 flex-1">Secure self storage at our Teesside site. 24/7 CCTV, easy drive-up access and flexible rental periods.</p>
            <span class="text-sm font-semibold text-rose-700 group-hover:text-rose-900 flex items-center gap-1">
              Find out more
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </div>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DEPOT_COUNT } from '~/utils/depots'
</script>
