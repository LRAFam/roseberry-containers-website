export const SITE_URL = 'https://roseberrycontainers.com'

export type DepotNearby = {
  slug: string
  name: string
}

export type Depot = {
  slug: string
  name: string
  region: string
  isHQ?: boolean
  highlight?: string
  heroText: string
  areaDescription: string
  containerInfo: string
  deliveryInfo: string
  nearbyDepots: DepotNearby[]
  addressLocality: string
  addressRegion: string
  streetAddress?: string
  postalCode?: string
  /** Towns and counties served — used in JSON-LD areaServed */
  areasServed?: string[]
  /** Optional hero background image path (e.g. /images/depots/newcastle-hero.jpg) */
  heroImage?: string
}

export const depots: Depot[] = [
  {
    slug: 'teesside',
    name: 'Teesside',
    region: 'North East England',
    isHQ: true,
    highlight: 'HQ — largest stock & fastest local delivery',
    heroText: 'Roseberry Containers is based in Teesside — our home depot with the largest stock and fastest delivery times in the North East.',
    areaDescription: 'Teesside is our home and headquarters, serving Middlesbrough, Stockton-on-Tees, Hartlepool, Darlington and the wider North East region.',
    containerInfo: 'With direct access to our main yard on Westerby Rd, Middlesbrough, we hold a wide range of new and used 10ft, 20ft and 40ft shipping containers in stock. Whether you need a standard dry container, an open-top, or a specialist unit, we can usually supply from stock or source quickly.',
    deliveryInfo: 'We deliver across the whole North East, including County Durham, North Yorkshire and Northumberland. Our fleet of low-loaders can position containers precisely on your site.',
    nearbyDepots: [{ slug: 'newcastle', name: 'Newcastle' }, { slug: 'leeds', name: 'Leeds' }, { slug: 'immingham', name: 'Immingham' }],
    streetAddress: 'Westerby Rd',
    addressLocality: 'Middlesbrough',
    addressRegion: 'Teesside',
    postalCode: 'TS3',
  },
  {
    slug: 'felixstowe',
    name: 'Felixstowe',
    region: 'Suffolk, East Anglia',
    highlight: 'Port depot — huge range of new stock',
    heroText: "Felixstowe is the UK's busiest container port — giving us access to an enormous range of new and one-trip containers at unbeatable prices.",
    areaDescription: "Felixstowe in Suffolk is home to the UK's largest container port, handling around 40% of Britain's container trade. This makes it one of the best locations in the country to source shipping containers.",
    containerInfo: 'Our Felixstowe depot has direct access to containers arriving from major shipping lines, meaning excellent stock availability of new, one-trip and grade A used containers. We regularly have 10ft, 20ft and 40ft units available, including high-cube variants.',
    deliveryInfo: 'We deliver from Felixstowe across East Anglia, the South East and Greater London. Postcode areas covered include Suffolk, Norfolk, Essex, Cambridgeshire and surrounding counties.',
    nearbyDepots: [{ slug: 'tilbury', name: 'Tilbury' }, { slug: 'southampton', name: 'Southampton' }],
    addressLocality: 'Felixstowe',
    addressRegion: 'Suffolk',
  },
  {
    slug: 'tilbury',
    name: 'Tilbury',
    region: 'Essex, Thames Estuary',
    highlight: 'Port depot — serves Greater London',
    heroText: 'Our Tilbury depot on the Thames Estuary serves Greater London and the South East with fast delivery of quality shipping containers.',
    areaDescription: "Tilbury sits on the north bank of the Thames in Essex, just 25 miles from central London. It is one of the UK's major port complexes and a key hub for shipping container supply in the South East.",
    containerInfo: 'From Tilbury we supply containers throughout Greater London, Kent, Essex, Surrey and Hertfordshire. Stock includes standard dry containers, open-tops and refrigerated units in 20ft and 40ft sizes. New and used grades available.',
    deliveryInfo: 'Delivery is available across Greater London and all surrounding Home Counties. We can navigate urban environments including congestion charge zones and restricted access areas.',
    nearbyDepots: [{ slug: 'felixstowe', name: 'Felixstowe' }, { slug: 'southampton', name: 'Southampton' }],
    addressLocality: 'Tilbury',
    addressRegion: 'Essex',
  },
  {
    slug: 'southampton',
    name: 'Southampton',
    region: 'Hampshire, South Coast',
    highlight: 'Port depot — South Coast coverage',
    heroText: "Southampton is one of the UK's busiest cruise and container ports. Our South Coast depot serves Hampshire, Dorset, Wiltshire and beyond.",
    areaDescription: "Southampton is a major port city on England's South Coast and an important hub for container logistics. Our depot here provides excellent coverage across southern England, making delivery fast and cost-effective.",
    containerInfo: 'We supply 10ft, 20ft and 40ft shipping containers from Southampton to customers across Hampshire, Dorset, Wiltshire, Somerset, Berkshire and the Isle of Wight. Both new one-trip containers and quality grade-A used stock are available.',
    deliveryInfo: 'Delivery from our Southampton depot typically reaches your site within 3-5 working days. We cover all of the South Coast, up through the M3 and M27 corridors and into the South West.',
    nearbyDepots: [{ slug: 'tilbury', name: 'Tilbury' }, { slug: 'birmingham', name: 'Birmingham' }],
    addressLocality: 'Southampton',
    addressRegion: 'Hampshire',
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    highlight: 'Central location — Midlands hub',
    heroText: "At the heart of the UK's road network, our Birmingham depot delivers containers throughout the Midlands faster and cheaper than anywhere else.",
    areaDescription: "Birmingham is the UK's second largest city and sits at the centre of the country's motorway network — making it the ideal hub for container deliveries across the Midlands.",
    containerInfo: 'Our West Midlands depot stocks 10ft, 20ft and 40ft shipping containers in a range of grades and conditions. New, one-trip and good quality used containers are all available. We serve Birmingham, Coventry, Wolverhampton, Leicester, Nottingham, Oxford and the whole of the Midlands.',
    deliveryInfo: 'With direct access to the M5, M6, M40 and M42 motorway corridors, our Birmingham depot can reach most Midlands postcodes within 24-48 hours of dispatch.',
    nearbyDepots: [{ slug: 'liverpool', name: 'Liverpool' }, { slug: 'southampton', name: 'Southampton' }],
    addressLocality: 'Birmingham',
    addressRegion: 'West Midlands',
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside, North West',
    highlight: 'Port depot — North West coverage',
    heroText: "Liverpool's historic port heritage continues today. Our North West depot serves Merseyside, Greater Manchester, Cheshire and beyond.",
    areaDescription: "Liverpool's port on the River Mersey has been a centre of UK trade for centuries. Today it remains a key entry point for container traffic, and our depot here gives us strong stock levels and fast delivery across the North West.",
    containerInfo: 'From Liverpool we supply shipping containers to customers across Merseyside, Greater Manchester, Lancashire, Cheshire, North Wales and the wider North West. We stock 10ft, 20ft and 40ft units in new and used conditions.',
    deliveryInfo: 'Delivery across the North West is quick and competitive from our Liverpool depot. We regularly supply to Manchester, Preston, Chester, Wigan, Warrington and all surrounding areas.',
    nearbyDepots: [{ slug: 'leeds', name: 'Leeds' }, { slug: 'birmingham', name: 'Birmingham' }],
    addressLocality: 'Liverpool',
    addressRegion: 'Merseyside',
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    highlight: 'Yorkshire hub — fast Northern delivery',
    heroText: "Our Leeds depot serves Yorkshire and the wider North with fast, affordable container delivery across one of England's largest regions.",
    areaDescription: 'Leeds is the largest city in Yorkshire and a major commercial centre for the North of England. Our depot here provides excellent coverage of West Yorkshire, North Yorkshire, South Yorkshire and the surrounding areas.',
    containerInfo: 'We supply 10ft, 20ft and 40ft shipping containers from Leeds to customers across Yorkshire, including Sheffield, Bradford, Harrogate, Hull, York and surrounding areas. New, one-trip and quality used containers are regularly in stock.',
    deliveryInfo: "Yorkshire's excellent road network via the M1, M62 and A1(M) means we can deliver containers to most Yorkshire postcodes within 2-3 working days of order confirmation.",
    nearbyDepots: [{ slug: 'newcastle', name: 'Newcastle' }, { slug: 'teesside', name: 'Teesside' }, { slug: 'immingham', name: 'Immingham' }],
    addressLocality: 'Leeds',
    addressRegion: 'West Yorkshire',
  },
  {
    slug: 'newcastle',
    name: 'Newcastle',
    region: 'Tyne & Wear, North East England',
    highlight: 'Tyneside hub — fast North East delivery',
    heroImage: '/images/depots/newcastle-hero.jpg',
    heroText: 'Our Newcastle depot on Tyneside serves Newcastle upon Tyne, Gateshead, Sunderland and the wider North East with quality shipping containers and competitive delivery.',
    areaDescription: 'Newcastle upon Tyne is the commercial heart of the North East, sitting on the River Tyne alongside Gateshead. Our Tyneside depot provides excellent coverage across Tyne and Wear, Northumberland, County Durham and the wider North East — an ideal location for customers who need containers without travelling to our Teesside HQ.',
    containerInfo: 'From Newcastle we supply 10ft, 20ft and 40ft shipping containers to customers across Tyneside, including Gateshead, Sunderland, South Shields, Durham, Hexham and Morpeth. New 1-trip containers and quality grade-A used stock are regularly available, with low-grade 20ft units from £950 + VAT.',
    deliveryInfo: 'We deliver from our Newcastle depot across Tyne and Wear, Northumberland and into southern Scotland via the A1 and A69 corridors. Most Tyneside and Wearside postcodes can be reached within 2–4 working days of order confirmation.',
    nearbyDepots: [{ slug: 'teesside', name: 'Teesside' }, { slug: 'leeds', name: 'Leeds' }, { slug: 'immingham', name: 'Immingham' }],
    addressLocality: 'Newcastle upon Tyne',
    addressRegion: 'Tyne and Wear',
    areasServed: [
      'Newcastle upon Tyne',
      'Gateshead',
      'Sunderland',
      'South Shields',
      'North Shields',
      'Tyne and Wear',
      'Northumberland',
      'County Durham',
      'Tyneside',
      'Wearside',
    ],
  },
  {
    slug: 'immingham',
    name: 'Immingham',
    region: 'North Lincolnshire, Humber Estuary',
    highlight: 'Port depot — Humber & East Midlands coverage',
    heroText: "Immingham is one of the UK's largest ports by tonnage — our Humber Estuary depot serves Lincolnshire, Yorkshire and the East Midlands with competitive container prices.",
    areaDescription: "Immingham in North Lincolnshire sits on the south bank of the Humber Estuary, alongside the port of Grimsby. It is one of the UK's busiest deep-water ports and a key hub for container supply across the East Midlands and Northern England.",
    containerInfo: 'Our Immingham depot supplies 10ft, 20ft and 40ft shipping containers to customers across Lincolnshire, Humberside, Nottinghamshire, Derbyshire and the wider East Midlands. New 1-trip and quality used containers are regularly available, with low-grade 20ft units from £950 + VAT.',
    deliveryInfo: 'We deliver from Immingham across the Humber region, South Yorkshire, Nottinghamshire and into the East Midlands via the M180 and A1 corridors. Most local postcodes can be reached within 2-4 working days.',
    nearbyDepots: [{ slug: 'newcastle', name: 'Newcastle' }, { slug: 'teesside', name: 'Teesside' }, { slug: 'leeds', name: 'Leeds' }],
    addressLocality: 'Immingham',
    addressRegion: 'North Lincolnshire',
  },
  {
    slug: 'bathgate',
    name: 'Bathgate',
    region: 'West Lothian, Scotland',
    highlight: 'Scotland depot — Edinburgh & Glasgow',
    heroText: 'Our Scottish depot in Bathgate, West Lothian, serves Edinburgh, Glasgow and the whole of central Scotland with quality shipping containers.',
    areaDescription: 'Bathgate in West Lothian sits between Edinburgh and Glasgow — perfectly positioned to serve all of central Scotland. Our Scottish depot gives customers north of the border access to the same quality containers and service we provide across the rest of the UK.',
    containerInfo: 'From Bathgate we supply 10ft, 20ft and 40ft shipping containers to customers across Scotland, including Edinburgh, Glasgow, Stirling, Perth, Falkirk and the Highlands. We hold both new and used stock at this location.',
    deliveryInfo: 'We deliver throughout Scotland via the M8 and M9 corridors and northward. For remote Highland or island deliveries, please call us to discuss logistics and pricing.',
    nearbyDepots: [{ slug: 'leeds', name: 'Leeds' }, { slug: 'teesside', name: 'Teesside' }],
    addressLocality: 'Bathgate',
    addressRegion: 'West Lothian',
  },
]

export const DEPOT_COUNT = depots.length

export const depotNames = depots.map(d => d.name)

/** Comma-separated depot names for meta descriptions and FAQ copy */
export function depotNamesList() {
  return depotNames.join(', ')
}

export function getDepotBySlug(slug: string) {
  return depots.find(d => d.slug === slug)
}

export function depotPagePath(slug: string) {
  return `/depots/${slug}`
}

export function depotPageUrl(slug: string) {
  return `${SITE_URL}/depots/${slug}`
}
