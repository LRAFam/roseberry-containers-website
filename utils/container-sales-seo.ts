export const TRUSTPILOT_RATING = {
  ratingValue: 4.3,
  reviewCount: 10,
  bestRating: 5,
} as const

export const BUSINESS_ADDRESS = {
  streetAddress: 'Westerby Rd',
  addressLocality: 'Middlesbrough',
  addressRegion: 'Teesside',
  postalCode: 'TS3',
  addressCountry: 'GB',
} as const

export type ContainerFaq = {
  question: string
  answer: string
}

export const containerSalesFaqs: ContainerFaq[] = [
  {
    question: 'How much does a shipping container cost in the UK?',
    answer: 'Prices depend on size, condition and delivery location. 20ft low-grade used containers start from £950 + VAT, 10ft refurbished units from £1,650 + VAT, and 40ft used containers from £1,450 + VAT. New 1-trip containers start from £1,900 + VAT (20ft), £2,750 + VAT (10ft) and £3,050 + VAT (40ft). Contact Roseberry Containers for an accurate quote tailored to your requirements.',
  },
  {
    question: 'What is a 1-trip shipping container?',
    answer: 'A 1-trip container has made a single journey from the manufacturer with cargo inside. It is effectively new — pristine interior, minimal exterior wear — and is the best choice for conversions, offices and long-term premium storage.',
  },
  {
    question: 'What is the difference between Grade A and Grade B used containers?',
    answer: 'Grade A used containers are structurally sound, wind and watertight, with only minor cosmetic wear. Grade B containers are fully functional and watertight but show more visible surface wear such as dents, surface rust or faded paint. Both are inspected before sale.',
  },
  {
    question: 'What sizes of shipping containers can I buy?',
    answer: 'Roseberry Containers supply 10ft, 20ft and 40ft shipping containers for sale. The 20ft is the most popular size for general storage and site use. Hi-cube and side-opening variants are also available — contact us for availability.',
  },
  {
    question: 'How much does container delivery cost?',
    answer: 'UK delivery typically adds £250–£700 + VAT depending on your location, access and whether a crane lift is required. We provide a clear delivery quote upfront with no hidden costs.',
  },
  {
    question: 'Are your containers wind and watertight?',
    answer: 'Yes. Every container we sell — whether 1-trip new or used — is inspected to ensure it is structurally sound, wind and watertight before despatch.',
  },
  {
    question: 'Do I need planning permission for a shipping container?',
    answer: 'In most cases a container used temporarily on private land does not require planning permission, but permanent placement or use in front gardens may need approval. We recommend checking with your local council if unsure.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Call us on 07793 251550 or submit an enquiry through our website. We respond the same day with a clear quote covering the container, delivery and VAT.',
  },
]

export function aggregateRatingSchema() {
  return {
    '@type': 'AggregateRating',
    ratingValue: String(TRUSTPILOT_RATING.ratingValue),
    reviewCount: String(TRUSTPILOT_RATING.reviewCount),
    bestRating: String(TRUSTPILOT_RATING.bestRating),
  }
}

export function faqPageSchema(faqs: ContainerFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function localBusinessProvider() {
  return {
    '@type': 'LocalBusiness',
    name: 'Roseberry Containers',
    url: 'https://roseberrycontainers.com',
    telephone: '+447793251550',
    image: 'https://roseberrycontainers.com/logo.jpg',
    aggregateRating: aggregateRatingSchema(),
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_ADDRESS,
    },
  }
}

export type DepotSchemaInput = {
  slug: string
  name: string
  region: string
  addressLocality: string
  addressRegion: string
  streetAddress?: string
  postalCode?: string
}

export function depotLocalBusinessSchema(depot: DepotSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Roseberry Containers — ${depot.name}`,
    description: `Buy shipping containers near ${depot.name}, ${depot.region}. Roseberry Containers supply 10ft, 20ft and 40ft containers with fast delivery.`,
    url: `https://roseberrycontainers.com/container-sales/${depot.slug}`,
    telephone: '+447793251550',
    image: 'https://roseberrycontainers.com/logo.jpg',
    address: {
      '@type': 'PostalAddress',
      ...(depot.streetAddress ? { streetAddress: depot.streetAddress } : {}),
      addressLocality: depot.addressLocality,
      addressRegion: depot.addressRegion,
      ...(depot.postalCode ? { postalCode: depot.postalCode } : {}),
      addressCountry: 'GB',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Roseberry Containers',
      url: 'https://roseberrycontainers.com',
    },
    aggregateRating: aggregateRatingSchema(),
  }
}
