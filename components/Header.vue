<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <img src="/logo.avif" alt="Roseberry Self Storage" class="h-12 w-auto" />
          <span class="text-xl font-bold text-gray-900">Roseberry Self Storage</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            active-class="text-emerald-600"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/container-sales" 
            class="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            active-class="text-emerald-600"
          >
            Container Sales
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            active-class="text-emerald-600"
          >
            Contact
          </NuxtLink>
          <a 
            href="tel:07793251550" 
            class="btn-primary"
          >
            Call Us
          </a>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pb-4">
          <div class="flex flex-col space-y-3">
            <NuxtLink 
              to="/" 
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
              active-class="text-emerald-600"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/container-sales" 
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
              active-class="text-emerald-600"
            >
              Container Sales
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              @click="mobileMenuOpen = false"
              class="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
              active-class="text-emerald-600"
            >
              Contact
            </NuxtLink>
            <a 
              href="tel:07793251550" 
              class="btn-primary text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
