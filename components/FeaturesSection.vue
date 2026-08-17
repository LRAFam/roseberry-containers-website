<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <p class="text-primary-700 text-sm font-semibold uppercase tracking-[0.16em] mb-4">What we do</p>
        <h2 class="heading-lg text-gray-900 mb-4">Everything Containers, Nationwide</h2>
        <p class="body-lg max-w-2xl mx-auto">
          From 10ft storage containers to full bespoke conversions — we supply, deliver and build across the entire UK.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Container Sales -->
        <NuxtLink to="/container-sales" class="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors flex flex-col">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img src="/container-20ft.jpg" alt="20ft shipping container for sale" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
        <NuxtLink to="/container-hire" class="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors flex flex-col">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img src="/container-10ft.jpg" alt="Container hire" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
        <NuxtLink to="/container-conversions" class="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors flex flex-col">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img src="/container-conversion-full.jpg" alt="Container conversion - business premises" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
        <NuxtLink to="/self-storage" class="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors flex flex-col">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img src="/container-40ft.jpg" alt="Self storage containers Teesside" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
