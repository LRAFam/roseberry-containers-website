<template>
  <ContainerSizeSalesPage
    size-label="10ft"
    slug="10ft-containers"
    h1="10ft Shipping Containers For Sale"
    hero-description="Compact 10ft shipping containers for sale — ideal for gardens, driveways and tight spaces. New 1-trip and quality used stock with nationwide delivery."
    hero-image="/container-10ft-new.jpg"
    :body-paragraphs="bodyParagraphs"
    :specs="specs"
    :use-cases="useCases"
    :faqs="faqs"
    :other-sizes="otherSizes"
  />
</template>

<script setup lang="ts">
import { containerSalesFaqs, faqPageSchema, localBusinessProvider } from '~/utils/container-sales-seo'

const canonical = 'https://roseberrycontainers.com/container-sales/10ft-containers'

const bodyParagraphs = [
  'A 10ft shipping container is the most compact standard size — perfect where space is limited on driveways, in gardens or small commercial yards. Despite its smaller footprint it offers secure, weatherproof storage equivalent to a large garden shed.',
  'Roseberry Containers supply 10ft containers in new 1-trip condition and quality used grades. They are popular for tool storage, garden equipment, small workshop conversions and residential use where a 20ft container would be too large.',
  'We deliver 10ft containers across the UK. Contact us for a quote tailored to your location and access requirements.',
]

const specs = [
  { label: 'External Length', value: "10' (3.0m)" },
  { label: 'Width × Height', value: "8' × 8'6\"" },
  { label: 'Capacity', value: '~560 ft³' },
]

const useCases = [
  'Garden and driveway storage',
  'Tool and equipment storage',
  'Small workshop or hobby room conversions',
  'Residential overflow storage',
  'Small business stock storage',
  'Site storage where space is tight',
]

const faqs = [
  {
    question: 'How much does a 10ft shipping container cost in the UK?',
    answer: '10ft containers are typically priced from around £1,200–£2,500 + VAT depending on condition (used vs 1-trip new) and delivery location. Contact Roseberry Containers for an accurate quote.',
  },
  containerSalesFaqs[1],
  containerSalesFaqs[2],
  containerSalesFaqs[4],
  containerSalesFaqs[5],
  containerSalesFaqs[7],
]

const otherSizes = [
  { slug: '20ft-containers', label: '20ft', subtitle: 'Most popular' },
  { slug: '40ft-containers', label: '40ft', subtitle: 'Maximum capacity' },
]

useHead({
  title: 'Buy 10ft Shipping Containers UK | New & Used For Sale | Roseberry',
  meta: [
    { name: 'description', content: 'Buy 10ft shipping containers in the UK. Compact new 1-trip and used containers for gardens, driveways and small yards. Nationwide delivery. Get a free quote today.' },
    { property: 'og:title', content: 'Buy 10ft Shipping Containers UK | Roseberry Containers' },
    { property: 'og:description', content: 'Buy compact 10ft shipping containers — new 1-trip and quality used with nationwide UK delivery.' },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: 'https://roseberrycontainers.com/container-10ft-new.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_GB' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Buy 10ft Shipping Containers UK | Roseberry Containers' },
    { name: 'twitter:description', content: 'Compact 10ft shipping containers for sale with nationwide UK delivery.' },
    { name: 'twitter:image', content: 'https://roseberrycontainers.com/container-10ft-new.jpg' },
  ],
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: '10ft Shipping Container',
        description: 'Buy new 1-trip and quality used 10ft shipping containers with nationwide UK delivery.',
        image: 'https://roseberrycontainers.com/container-10ft-new.jpg',
        brand: { '@type': 'Brand', name: 'Roseberry Containers' },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'GBP',
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
