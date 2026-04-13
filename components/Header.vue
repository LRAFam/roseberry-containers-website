<template>
  <header class="bg-primary-950 shadow-md sticky top-0 z-50">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center" aria-label="Roseberry Containers — home">
          <img src="/logo-nav.png" alt="Roseberry Containers" class="h-10 md:h-12 w-auto" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            to="/"
            class="text-amber-200 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
            active-class="!text-white !bg-white/15 font-semibold"
            exact
          >Home</NuxtLink>

          <!-- Container Sales dropdown -->
          <div class="relative group">
            <button class="text-amber-200 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-1">
              Container Sales
              <svg class="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div class="absolute left-0 top-full mt-1 w-52 bg-primary-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <NuxtLink to="/container-sales" class="block px-4 py-2.5 text-sm text-amber-200 hover:text-white hover:bg-white/10 rounded-t-xl transition-all">Buy a Container</NuxtLink>
              <NuxtLink to="/container-sales/nationwide" class="block px-4 py-2.5 text-sm text-amber-200 hover:text-white hover:bg-white/10 rounded-b-xl transition-all">Nationwide Depots</NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/container-hire"
            class="text-amber-200 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
            active-class="!text-white !bg-white/15 font-semibold"
          >Container Hire</NuxtLink>

          <NuxtLink
            to="/container-conversions"
            class="text-amber-200 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
            active-class="!text-white !bg-white/15 font-semibold"
          >Conversions</NuxtLink>

          <NuxtLink
            to="/self-storage"
            class="text-amber-200 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
            active-class="!text-white !bg-white/15 font-semibold"
          >Self Storage</NuxtLink>

          <NuxtLink
            to="/contact"
            class="text-amber-200 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
            active-class="!text-white !bg-white/15 font-semibold"
          >Contact</NuxtLink>

          <a
            href="tel:07793251550"
            class="ml-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-200 shadow flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-primary-800 transition-colors"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pb-4 border-t border-white/10 pt-4">
          <div class="flex flex-col gap-1">
            <NuxtLink to="/" @click="mobileMenuOpen = false" class="text-amber-200 hover:text-white hover:bg-white/10 font-medium py-2 px-3 rounded-lg transition-all" active-class="!text-white !bg-white/15 font-semibold" exact>Home</NuxtLink>
            <NuxtLink to="/container-sales" @click="mobileMenuOpen = false" class="text-amber-200 hover:text-white hover:bg-white/10 font-medium py-2 px-3 rounded-lg transition-all" active-class="!text-white !bg-white/15 font-semibold">Container Sales</NuxtLink>
            <NuxtLink to="/container-sales/nationwide" @click="mobileMenuOpen = false" class="text-amber-200/70 hover:text-white hover:bg-white/10 font-medium py-2 px-6 rounded-lg transition-all text-sm">↳ Nationwide Depots</NuxtLink>
            <NuxtLink to="/container-hire" @click="mobileMenuOpen = false" class="text-amber-200 hover:text-white hover:bg-white/10 font-medium py-2 px-3 rounded-lg transition-all" active-class="!text-white !bg-white/15 font-semibold">Container Hire</NuxtLink>
            <NuxtLink to="/container-conversions" @click="mobileMenuOpen = false" class="text-amber-200 hover:text-white hover:bg-white/10 font-medium py-2 px-3 rounded-lg transition-all" active-class="!text-white !bg-white/15 font-semibold">Conversions</NuxtLink>
            <NuxtLink to="/self-storage" @click="mobileMenuOpen = false" class="text-amber-200 hover:text-white hover:bg-white/10 font-medium py-2 px-3 rounded-lg transition-all" active-class="!text-white !bg-white/15 font-semibold">Self Storage</NuxtLink>
            <NuxtLink to="/contact" @click="mobileMenuOpen = false" class="text-amber-200 hover:text-white hover:bg-white/10 font-medium py-2 px-3 rounded-lg transition-all" active-class="!text-white !bg-white/15 font-semibold">Contact</NuxtLink>
            <a href="tel:07793251550" class="mt-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-200 text-center">Call Us</a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
