<template>
  <ContainerSizeSalesPage
    size-label="40ft"
    slug="40ft-containers"
    h1="40ft Shipping Containers For Sale"
    hero-description="Maximum capacity 40ft shipping containers for sale — standard and hi-cube options. New 1-trip and quality used stock with nationwide UK delivery."
    hero-image="/container-40ft-new.jpg"
    :body-paragraphs="bodyParagraphs"
    :specs="specs"
    :use-cases="useCases"
    :faqs="faqs"
    :other-sizes="otherSizes"
  />
</template>

<script setup lang="ts">
import { containerSalesFaqs, faqPageSchema, localBusinessProvider } from '~/utils/container-sales-seo'
import { DEPOT_COUNT } from '~/utils/depots'

const canonical = 'https://www.roseberrycontainers.com/container-sales/40ft-containers'

const bodyParagraphs = [
  'The 40ft shipping container offers the largest standard capacity — roughly double the storage volume of a 20ft unit. It is the go-to choice for large-scale industrial storage, logistics operations and ambitious container conversion projects.',
  'Roseberry Containers supply 40ft containers in standard height (8\'6") and hi-cube (9\'6") configurations. Both new 1-trip and quality used stock are available, all inspected to be wind and watertight before despatch.',
  'Due to their size, 40ft containers require adequate site access for delivery. Contact us to discuss your location and we will provide a clear quote including delivery and placement.',
]

const specs = [
  { label: 'External Length', value: "40' (12.19m)" },
  { label: 'Width × Height', value: "8' × 8'6\" / 9'6\"" },
  { label: 'Capacity', value: '~2,720 ft³' },
]

const useCases = [
  'Large-scale industrial and warehouse storage',
  'Logistics and transport operations',
  'Construction compound storage',
  'Container conversion projects (offices, retail)',
  'Agricultural machinery and bulk storage',
  'Long-term commercial stock holding',
]

const faqs = [
  {
    question: 'How much does a 40ft shipping container cost in the UK?',
    answer: 'Used 40ft containers start from £1,450 + VAT. New 1-trip 40ft containers start from £3,050 + VAT, with hi-cube variants at a premium. Contact us for an exact quote including delivery.',
  },
  containerSalesFaqs[1],
  {
    question: 'What is a hi-cube 40ft container?',
    answer: 'A hi-cube 40ft container is 9\'6" tall externally — one foot taller than a standard container. This extra headroom makes it ideal for conversions, bulky items and anyone needing more usable interior space.',
  },
  containerSalesFaqs[4],
  containerSalesFaqs[5],
  containerSalesFaqs[7],
]

const otherSizes = [
  { slug: '10ft-containers', label: '10ft', subtitle: 'Compact storage' },
  { slug: '20ft-containers', label: '20ft', subtitle: 'Most popular' },
]

useHead({
  title: 'Buy 40ft Shipping Containers UK | New & Used For Sale | Roseberry',
  meta: [
    { name: 'description', content: `Buy 40ft shipping containers in the UK. Used from £1,450 + VAT, new 1-trip from £3,050 + VAT. Nationwide delivery from ${DEPOT_COUNT} UK depots. Get a free quote today.` },
    { property: 'og:title', content: 'Buy 40ft Shipping Containers UK | Roseberry Containers' },
    { property: 'og:description', content: 'Buy 40ft shipping containers — standard and hi-cube, new 1-trip and quality used with nationwide UK delivery.' },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: 'https://www.roseberrycontainers.com/container-40ft-new.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_GB' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Buy 40ft Shipping Containers UK | Roseberry Containers' },
    { name: 'twitter:description', content: '40ft shipping containers for sale with nationwide UK delivery.' },
    { name: 'twitter:image', content: 'https://www.roseberrycontainers.com/container-40ft-new.jpg' },
  ],
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: '40ft Shipping Container',
        description: 'Buy new 1-trip and quality used 40ft shipping containers with nationwide UK delivery.',
        image: 'https://www.roseberrycontainers.com/container-40ft-new.jpg',
        brand: { '@type': 'Brand', name: 'Roseberry Containers' },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'GBP',
          price: '1450',
          seller: localBusinessProvider(),
          url: canonical,
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqPageSchema(faqs)),
    },
  ],
})
</script>
