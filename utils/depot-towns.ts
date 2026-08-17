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

export const leedsTowns: DepotTown[] = [
  {
    slug: 'sheffield',
    name: 'Sheffield',
    parentDepotSlug: 'leeds',
    parentDepotName: 'Leeds',
    heroText: 'Shipping containers for sale in Sheffield, supplied from our Leeds depot across South Yorkshire. New and used 10ft, 20ft and 40ft units available.',
    areaDescription: 'Sheffield is a major South Yorkshire delivery area for our Leeds depot, connected by the M1 corridor. We supply shipping containers for construction sites, business yards, farms and private storage across Sheffield, Rotherham and nearby South Yorkshire locations.',
    deliveryInfo: 'Most Sheffield and nearby South Yorkshire deliveries can be arranged within 2–4 working days of order confirmation, subject to stock and site access. We quote delivery clearly before you order.',
    extraFaqs: [
      {
        question: 'Do you have a shipping container depot in Sheffield?',
        answer: 'Stock for Sheffield is held at our Leeds depot, not a separate Sheffield yard. We deliver direct to suitable sites across Sheffield and South Yorkshire with a clear quote for your postcode.',
      },
      {
        question: 'Can you deliver a 20ft container to Sheffield?',
        answer: 'Yes. We supply 10ft, 20ft and 40ft containers from Leeds to Sheffield. Tell us about your access, gates and any overhead obstructions so we can recommend the right delivery vehicle.',
      },
    ],
  },
  {
    slug: 'bradford',
    name: 'Bradford',
    parentDepotSlug: 'leeds',
    parentDepotName: 'Leeds',
    heroText: 'Buy shipping containers in Bradford with delivery from our Leeds depot. Secure new and used containers for West Yorkshire homes, yards and sites.',
    areaDescription: 'Bradford is close to our Leeds depot via the M62 and local West Yorkshire routes. We deliver 10ft, 20ft and 40ft containers to commercial premises, building projects, farms and private sites across Bradford, Keighley and the surrounding area.',
    deliveryInfo: 'Bradford deliveries are usually arranged within 2–4 working days from Leeds once stock and access are confirmed. Low-loaders can position containers on suitable hard-standing.',
    extraFaqs: [
      {
        question: 'Do you deliver shipping containers to Bradford?',
        answer: 'Yes. Our Leeds depot supplies shipping containers throughout Bradford and wider West Yorkshire. Call 07793 251550 for current stock and a delivery quote.',
      },
      {
        question: 'What container sizes are available in Bradford?',
        answer: 'We supply 10ft, 20ft and 40ft containers in new 1-trip and quality used grades, delivered from Leeds to your Bradford site.',
      },
    ],
  },
  {
    slug: 'york',
    name: 'York',
    parentDepotSlug: 'leeds',
    parentDepotName: 'Leeds',
    heroText: 'Shipping containers for sale in York, delivered from our Leeds depot across North Yorkshire. Quality 10ft, 20ft and 40ft stock at clear prices.',
    areaDescription: 'York is well placed for container delivery from our Leeds depot via the A64 and A1(M). We supply containers to York businesses, agricultural sites, construction projects and private customers across the city and nearby North Yorkshire villages.',
    deliveryInfo: 'York deliveries typically take 2–4 working days from Leeds, depending on stock, route and site access. We confirm delivery costs upfront so you know exactly what to expect.',
    extraFaqs: [
      {
        question: 'Can I buy a shipping container in York?',
        answer: 'Yes. We sell new and used 10ft, 20ft and 40ft shipping containers delivered from our Leeds depot to York and surrounding North Yorkshire locations.',
      },
      {
        question: 'How much is container delivery to York?',
        answer: 'Delivery depends on your exact postcode, access and whether a crane lift is required. We provide a clear, no-obligation quote from our Leeds depot before you order.',
      },
    ],
  },
  {
    slug: 'hull',
    name: 'Hull',
    parentDepotSlug: 'leeds',
    parentDepotName: 'Leeds',
    heroText: 'Buy shipping containers in Hull with delivery from our Leeds depot. New and used 10ft, 20ft and 40ft containers for East Yorkshire sites.',
    areaDescription: 'Hull and the wider East Yorkshire area are covered from our Leeds depot via the M62 and A63. We supply containers for storage, trade yards, construction compounds and agricultural use across Hull, Beverley and nearby locations.',
    deliveryInfo: 'Most Hull deliveries can be scheduled within 2–4 working days from Leeds once stock and suitable access are confirmed. Ask us for a delivery quote tailored to your site.',
    extraFaqs: [
      {
        question: 'Do you deliver containers to Hull?',
        answer: 'Yes. We deliver 10ft, 20ft and 40ft shipping containers from our Leeds depot to Hull and across East Yorkshire.',
      },
      {
        question: 'Do you sell used containers in Hull?',
        answer: 'Yes. Quality used and new 1-trip containers are available, including popular 20ft units. Contact us for current Leeds stock and delivery pricing to Hull.',
      },
    ],
  },
  {
    slug: 'harrogate',
    name: 'Harrogate',
    parentDepotSlug: 'leeds',
    parentDepotName: 'Leeds',
    heroText: 'Shipping containers for sale in Harrogate, supplied from our Leeds depot for North Yorkshire homes, businesses, farms and construction sites.',
    areaDescription: 'Harrogate is a straightforward North Yorkshire delivery area from our Leeds depot. We provide secure shipping containers for domestic storage, commercial yards, rural properties and building sites across Harrogate, Knaresborough and the surrounding area.',
    deliveryInfo: 'Harrogate deliveries are commonly arranged within 2–4 working days from Leeds, subject to availability and access. We will check site suitability before confirming your delivery.',
    extraFaqs: [
      {
        question: 'Can you deliver a container to Harrogate?',
        answer: 'Yes. Our Leeds depot delivers containers to Harrogate and nearby North Yorkshire addresses. Let us know about your entrance width, ground conditions and overhead cables when you enquire.',
      },
      {
        question: 'What is the best container size for a Harrogate property?',
        answer: 'A 10ft or 20ft container is often suitable for private storage, while businesses and larger sites may prefer 20ft or 40ft units. We can help you choose based on the space available.',
      },
    ],
  },
  {
    slug: 'wakefield',
    name: 'Wakefield',
    parentDepotSlug: 'leeds',
    parentDepotName: 'Leeds',
    heroText: 'Shipping containers for sale in Wakefield, delivered from our Leeds depot with fast, clear West Yorkshire pricing for new and used stock.',
    areaDescription: 'Wakefield sits close to the M1 and M62 network, making it a natural local delivery area for our Leeds depot. We supply containers to Wakefield businesses, construction sites, farms and homeowners who need secure, weatherproof storage.',
    deliveryInfo: 'Wakefield and nearby West Yorkshire postcodes are usually reachable within 2–4 working days from Leeds, depending on stock and access requirements.',
    extraFaqs: [
      {
        question: 'Do you sell containers in Wakefield?',
        answer: 'Yes. We supply new and used 10ft, 20ft and 40ft containers from our Leeds depot and deliver them throughout Wakefield and nearby areas.',
      },
      {
        question: 'Can a container be placed on my Wakefield site?',
        answer: 'Usually, provided the site has suitable access and level hard-standing. We will ask about gates, turning space, slopes and overhead obstructions before arranging delivery.',
      },
    ],
  },
]

const townsByDepot: Record<string, DepotTown[]> = {
  birmingham: birminghamTowns,
  leeds: leedsTowns,
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
