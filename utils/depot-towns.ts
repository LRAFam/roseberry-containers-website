import { SITE_URL } from './depots'

export type DepotTownFaq = {
  question: string
  answer: string
}

export type DepotTown = {
  slug: string
  name: string
  parentDepotSlug: string
  parentDepotName: string
  heroText: string
  areaDescription: string
  deliveryInfo: string
  extraFaqs?: DepotTownFaq[]
}

export const birminghamTowns: DepotTown[] = [
  {
    slug: 'coventry',
    name: 'Coventry',
    parentDepotSlug: 'birmingham',
    parentDepotName: 'Birmingham',
    heroText: 'Buy shipping containers in Coventry with delivery from our Birmingham depot. 10ft, 20ft and 40ft new and used stock with clear Midlands pricing.',
    areaDescription: 'Coventry sits east of Birmingham on the A45 and M6 corridor, so it is a natural delivery area for our West Midlands depot. We supply shipping containers for sale to homes, farms, yards and construction sites across Coventry and nearby Warwickshire without needing a separate Coventry depot.',
    deliveryInfo: 'Most Coventry postcodes can be reached within 24–48 hours of order confirmation from Birmingham, depending on stock and site access. We quote delivery upfront with no hidden costs.',
    extraFaqs: [
      {
        question: 'Do you have a depot in Coventry?',
        answer: 'Stock is held at our Birmingham depot. We deliver shipping containers for sale throughout Coventry and surrounding areas from there, which keeps pricing competitive on the short Midlands haul.',
      },
      {
        question: 'Can I buy a 20ft shipping container for delivery to Coventry?',
        answer: 'Yes. 20ft is our most popular size for Coventry customers. Low-grade used units start from £950 + VAT, with new 1-trip options available. Call 07793 251550 for current stock and a delivery quote.',
      },
    ],
  },
  {
    slug: 'wolverhampton',
    name: 'Wolverhampton',
    parentDepotSlug: 'birmingham',
    parentDepotName: 'Birmingham',
    heroText: 'Shipping containers for sale in Wolverhampton, delivered from our Birmingham depot across the Black Country and wider West Midlands.',
    areaDescription: 'Wolverhampton and the Black Country are a short run from our Birmingham depot via the M6 and local A-roads. We supply 10ft, 20ft and 40ft containers for site storage, business yards and conversions to customers in Wolverhampton, Walsall and nearby towns.',
    deliveryInfo: 'Wolverhampton deliveries are typically arranged within 24–48 hours from Birmingham once stock and access are confirmed. Low-loaders can position containers on suitable sites.',
    extraFaqs: [
      {
        question: 'Do you deliver shipping containers to Wolverhampton?',
        answer: 'Yes. Containers are supplied from our Birmingham depot and delivered across Wolverhampton and the Black Country. Call 07793 251550 for a quote to your postcode.',
      },
      {
        question: 'What container sizes can I get in Wolverhampton?',
        answer: 'We supply 10ft, 20ft and 40ft shipping containers in new 1-trip and quality used grades, delivered from Birmingham to your Wolverhampton site.',
      },
    ],
  },
  {
    slug: 'oldbury',
    name: 'Oldbury',
    parentDepotSlug: 'birmingham',
    parentDepotName: 'Birmingham',
    heroText: 'Container sales for Oldbury and the Sandwell area, supplied from our Birmingham Midlands depot with fast local delivery.',
    areaDescription: 'Oldbury sits in the heart of the Black Country, close to our Birmingham depot. That short distance makes container delivery straightforward for industrial yards, builders and storage customers around Sandwell and Oldbury.',
    deliveryInfo: 'Oldbury and nearby Sandwell postcodes are usually reachable within 24–48 hours from Birmingham. We confirm access requirements when you enquire.',
    extraFaqs: [
      {
        question: 'Can I buy a shipping container for an Oldbury site?',
        answer: 'Yes. We sell 10ft, 20ft and 40ft containers from our Birmingham depot and deliver them to Oldbury and surrounding Sandwell locations.',
      },
      {
        question: 'How much does delivery to Oldbury cost?',
        answer: 'UK delivery typically adds £250–£700 + VAT depending on access and whether a crane lift is needed. Oldbury is a short haul from Birmingham, so we can often keep delivery competitive. Ask for a clear quote on 07793 251550.',
      },
    ],
  },
  {
    slug: 'tamworth',
    name: 'Tamworth',
    parentDepotSlug: 'birmingham',
    parentDepotName: 'Birmingham',
    heroText: 'Buy shipping containers in Tamworth with delivery from Birmingham. Ideal for Staffordshire sites needing secure 10ft, 20ft or 40ft storage.',
    areaDescription: 'Tamworth sits north-east of Birmingham on the A5 / M42 corridor. Our Birmingham depot covers Tamworth for container sales so local businesses and homeowners get Midlands stock without a long-distance delivery from further afield.',
    deliveryInfo: 'Tamworth deliveries are commonly completed within 24–48 hours of order confirmation from Birmingham, subject to stock and site access.',
    extraFaqs: [
      {
        question: 'Do you sell shipping containers in Tamworth?',
        answer: 'Yes. Containers ship from our Birmingham depot to Tamworth and nearby Staffordshire addresses. New and used 10ft, 20ft and 40ft units are available.',
      },
      {
        question: 'Is Tamworth covered by your Birmingham depot?',
        answer: 'Yes. Tamworth is inside our West Midlands delivery area from Birmingham. Call 07793 251550 for availability and pricing.',
      },
    ],
  },
  {
    slug: 'solihull',
    name: 'Solihull',
    parentDepotSlug: 'birmingham',
    parentDepotName: 'Birmingham',
    heroText: 'Shipping containers for sale in Solihull, delivered from our Birmingham depot for residential, commercial and site storage.',
    areaDescription: 'Solihull is on Birmingham’s south-eastern edge, so delivery from our West Midlands depot is straightforward via local routes and the M42. We supply containers for garden storage, business yards and temporary site use across Solihull and nearby villages.',
    deliveryInfo: 'Most Solihull postcodes can be served within 24–48 hours from Birmingham. We will check access, parking and lift requirements before confirming the delivery slot.',
    extraFaqs: [
      {
        question: 'Can you deliver a shipping container to a Solihull driveway or yard?',
        answer: 'Often yes, if access is suitable for a low-loader. Tell us about gates, trees and overhead cables when you enquire and we will advise. Stock comes from our Birmingham depot.',
      },
      {
        question: 'What sizes are available for Solihull customers?',
        answer: '10ft, 20ft and 40ft shipping containers in new 1-trip and used grades, delivered from Birmingham.',
      },
    ],
  },
  {
    slug: 'leicester',
    name: 'Leicester',
    parentDepotSlug: 'birmingham',
    parentDepotName: 'Birmingham',
    heroText: 'Shipping containers for sale in Leicester and Leicestershire, supplied from our Birmingham depot across the East Midlands corridor.',
    areaDescription: 'Leicester is a key East Midlands city within practical delivery range of our Birmingham depot via the M69 and M1. We supply 10ft, 20ft and 40ft shipping containers for sale to Leicester businesses, farms and construction sites.',
    deliveryInfo: 'Leicester deliveries typically land within 2–4 working days from Birmingham depending on stock and route. We provide a clear delivery quote before you order.',
    extraFaqs: [
      {
        question: 'Do you deliver shipping containers to Leicester?',
        answer: 'Yes. Stock is based at our Birmingham depot and we deliver throughout Leicester and Leicestershire. Call 07793 251550 for a tailored quote.',
      },
      {
        question: 'How much does a shipping container cost in Leicester?',
        answer: 'Prices depend on size and condition. 20ft low-grade used containers start from £950 + VAT, with new 1-trip options from £1,900 + VAT. Delivery from Birmingham is quoted separately based on your postcode.',
      },
    ],
  },
  {
    slug: 'derby',
    name: 'Derby',
    parentDepotSlug: 'birmingham',
    parentDepotName: 'Birmingham',
    heroText: 'Buy shipping containers in Derby with delivery from Birmingham. Secure 10ft, 20ft and 40ft units for Derbyshire sites and yards.',
    areaDescription: 'Derby sits on the A38 / M1 corridor north-east of Birmingham. Our West Midlands depot supplies container sales into Derby so customers get competitive haul distances compared with coast-based suppliers further away.',
    deliveryInfo: 'Derby and nearby Derbyshire postcodes are usually quoted for delivery within 2–4 working days from Birmingham, subject to stock and access.',
    extraFaqs: [
      {
        question: 'Can I get a shipping container delivered to Derby?',
        answer: 'Yes. We deliver from our Birmingham depot across Derby and surrounding Derbyshire areas. Enquire on 07793 251550 with your postcode and required size.',
      },
      {
        question: 'Do you sell used shipping containers in Derby?',
        answer: 'Yes. Quality used and new 1-trip containers are available, including popular 20ft sizes from £950 + VAT for low-grade used stock, delivered from Birmingham.',
      },
    ],
  },
  {
    slug: 'nottingham',
    name: 'Nottingham',
    parentDepotSlug: 'birmingham',
    parentDepotName: 'Birmingham',
    heroText: 'Shipping containers for sale in Nottingham, delivered from our Birmingham depot across Nottinghamshire and the East Midlands.',
    areaDescription: 'Nottingham is well connected to Birmingham via the M42 and A42 / M1 routes. We supply container sales into Nottingham for commercial storage, construction compounds and private buyers who need a reliable Midlands delivery point.',
    deliveryInfo: 'Nottingham deliveries are typically arranged within 2–4 working days from Birmingham once stock and site access are confirmed.',
    extraFaqs: [
      {
        question: 'Do you cover Nottingham from Birmingham?',
        answer: 'Yes. Our Birmingham depot delivers 10ft, 20ft and 40ft shipping containers for sale throughout Nottingham and nearby Nottinghamshire locations.',
      },
      {
        question: 'How do I get a container quote for Nottingham?',
        answer: 'Call 07793 251550 or send an enquiry online. We respond the same day with container price, delivery to your Nottingham postcode and VAT.',
      },
    ],
  },
]

const townsByDepot: Record<string, DepotTown[]> = {
  birmingham: birminghamTowns,
}

export function townsForDepot(depotSlug: string): DepotTown[] {
  return townsByDepot[depotSlug] ?? []
}

export function getTownBySlugs(depotSlug: string, townSlug: string): DepotTown | undefined {
  return townsForDepot(depotSlug).find(t => t.slug === townSlug)
}

export function townPagePath(depotSlug: string, townSlug: string): string {
  return `/depots/${depotSlug}/${townSlug}`
}

export function townPageUrl(depotSlug: string, townSlug: string): string {
  return `${SITE_URL}${townPagePath(depotSlug, townSlug)}`
}

export function allDepotTowns(): DepotTown[] {
  return Object.values(townsByDepot).flat()
}
