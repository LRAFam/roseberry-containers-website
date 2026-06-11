<template>
  <ContainerSizeSalesPage
    size-label="20ft"
    slug="20ft-containers"
    h1="20ft Shipping Containers For Sale"
    hero-description="The UK's most popular container size — buy new 1-trip or quality used 20ft shipping containers with nationwide delivery and same-day response."
    hero-image="/container-20ft-new.jpg"
    :body-paragraphs="bodyParagraphs"
    :specs="specs"
    :use-cases="useCases"
    :faqs="faqs"
    :other-sizes="otherSizes"
  />
</template>

<script setup lang="ts">
import { containerSalesFaqs, faqPageSchema, localBusinessProvider } from '~/utils/container-sales-seo'

const canonical = 'https://roseberrycontainers.com/container-sales/20ft-containers'

const bodyParagraphs = [
  'The 20ft shipping container is the industry standard — holding roughly the equivalent of a 3-bedroom home in volume. It is the most popular size for secure on-site storage, construction projects, business stock and container conversions across the UK.',
  'Roseberry Containers supply both new 1-trip and quality used 20ft containers. Every unit is inspected to be wind and watertight before despatch. Hi-cube and side-opening 20ft variants are also available on request.',
  'We deliver 20ft containers nationwide. Contact us for a clear quote covering the container, delivery and VAT — no hidden costs.',
]

const specs = [
  { label: 'External Length', value: "20' (6.06m)" },
  { label: 'Width × Height', value: "8' × 8'6\"" },
  { label: 'Capacity', value: '~1,360 ft³' },
]

const useCases = [
  'Construction site tool and material storage',
  'Business and warehouse overflow storage',
  'Farm and agricultural equipment storage',
  'Garden offices and workshop conversions',
  'Retail pop-ups and event storage',
  'Residential storage during renovations',
]

const faqs = [
  containerSalesFaqs[0],
  {
    question: 'How much does a 20ft shipping container cost in the UK?',
    answer: 'Low-grade used 20ft containers start from £950 + VAT. New 1-trip 20ft containers start from £1,900 + VAT. Delivery is additional. Contact us for an exact quote for your location.',
  },
  containerSalesFaqs[1],
  containerSalesFaqs[2],
  containerSalesFaqs[4],
  containerSalesFaqs[5],
  containerSalesFaqs[7],
]

const otherSizes = [
  { slug: '10ft-containers', label: '10ft', subtitle: 'Compact storage' },
  { slug: '40ft-containers', label: '40ft', subtitle: 'Maximum capacity' },
]

useHead({
  title: 'Buy 20ft Shipping Containers UK | New & Used For Sale | Roseberry',
  meta: [
    { name: 'description', content: 'Buy 20ft shipping containers in the UK. Low grade used from £950 + VAT, new 1-trip from £1,900 + VAT. Nationwide delivery from 9 UK depots. Get a free quote today.' },
    { property: 'og:title', content: 'Buy 20ft Shipping Containers UK | Roseberry Containers' },
    { property: 'og:description', content: 'Buy new 1-trip and used 20ft shipping containers with nationwide UK delivery. Same-day response, transparent pricing.' },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: 'https://roseberrycontainers.com/container-20ft-new.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_GB' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Buy 20ft Shipping Containers UK | Roseberry Containers' },
    { name: 'twitter:description', content: 'New 1-trip and quality used 20ft shipping containers with nationwide UK delivery.' },
    { name: 'twitter:image', content: 'https://roseberrycontainers.com/container-20ft-new.jpg' },
  ],
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: '20ft Shipping Container',
        description: 'Buy new 1-trip and quality used 20ft shipping containers with nationwide UK delivery.',
        image: 'https://roseberrycontainers.com/container-20ft-new.jpg',
        brand: { '@type': 'Brand', name: 'Roseberry Containers' },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'GBP',
          price: '950',
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
