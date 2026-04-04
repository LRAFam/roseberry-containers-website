<template>
  <div>
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />

      <!-- CTA strip -->
      <section class="bg-primary-950 py-12">
        <div class="container-custom flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p class="text-primary-300 text-sm font-semibold uppercase tracking-wider mb-1">Ready to get started?</p>
            <h2 class="text-2xl md:text-3xl font-bold text-white">Browse our container range today</h2>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <NuxtLink to="/container-sales" class="btn-primary whitespace-nowrap">View Containers</NuxtLink>
            <a href="#contact" class="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:bg-white/10 whitespace-nowrap">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>
