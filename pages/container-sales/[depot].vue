<template>
  <div>
    <Header />
    <main v-if="depot">
      <!-- Hero -->
      <section class="relative text-white overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"></div>
        <div class="container-custom relative z-10 py-20 md:py-24">
          <div class="flex items-center gap-2 text-sm text-primary-300 mb-4">
            <NuxtLink to="/container-sales/nationwide" class="hover:text-white transition-colors">All Depots</NuxtLink>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <span class="text-white">{{ depot.name }}</span>
          </div>
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-primary-500/15 text-primary-300 border border-primary-500/25 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ depot.region }}
            </div>
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Shipping Containers for Sale — <span class="text-burgundy-light">{{ depot.name }}</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">{{ depot.heroText }}</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:07793251550" class="btn-primary">Get a Quote</a>
              <NuxtLink to="/container-sales" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">Browse All Containers</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- About the area -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <h2 class="heading-lg text-gray-900 mb-6">Container Sales Near {{ depot.name }}</h2>
              <div class="prose prose-gray max-w-none">
                <p class="body-lg mb-4">{{ depot.areaDescription }}</p>
                <p class="text-gray-600 leading-relaxed mb-4">{{ depot.containerInfo }}</p>
                <p class="text-gray-600 leading-relaxed">{{ depot.deliveryInfo }}</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <h3 class="font-bold text-gray-900 mb-3">Quick Enquiry</h3>
                <p class="text-gray-600 text-sm mb-4">Call us for availability and pricing at our {{ depot.name }} depot.</p>
                <a href="tel:07793251550" class="btn-primary w-full justify-center mb-3">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07793 251550
                </a>
                <NuxtLink to="/contact" class="block text-center text-primary-700 hover:text-primary-900 text-sm font-medium">Send an enquiry →</NuxtLink>
              </div>
              <div class="bg-gray-50 rounded-2xl p-6">
                <h3 class="font-bold text-gray-900 mb-3">Other Nearby Depots</h3>
                <ul class="space-y-2">
                  <li v-for="nearby in depot.nearbyDepots" :key="nearby.slug">
                    <NuxtLink :to="`/container-sales/${nearby.slug}`" class="text-primary-700 hover:text-primary-900 text-sm font-medium flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                      {{ nearby.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What we sell -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <h2 class="heading-lg text-gray-900 mb-8 text-center">Containers Available at {{ depot.name }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="container in containerTypes" :key="container.size" class="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-lg transition-all">
              <div class="text-4xl font-black text-primary-700 mb-1">{{ container.size }}</div>
              <div class="text-gray-500 text-sm mb-4">{{ container.dimensions }}</div>
              <h3 class="font-bold text-gray-900 mb-3">{{ container.name }}</h3>
              <ul class="space-y-2 text-sm text-gray-600 mb-6">
                <li v-for="use in container.uses" :key="use" class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  {{ use }}
                </li>
              </ul>
              <a href="tel:07793251550" class="btn-primary w-full justify-center text-sm">Enquire</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center">
          <h2 class="heading-lg mb-4">Buy a Container Near {{ depot.name }}</h2>
          <p class="body-lg text-gray-300 mb-8 max-w-xl mx-auto">Get in touch for a fast, no-obligation quote. We'll confirm stock, pricing and delivery from our {{ depot.name }} depot.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07793251550" class="btn-primary">Call 07793 251550</a>
            <NuxtLink to="/container-sales/nationwide" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all hover:bg-white/10">All Depots</NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <!-- 404 fallback if depot not found -->
    <div v-else class="section-padding text-center">
      <h1 class="heading-lg text-gray-900 mb-4">Depot not found</h1>
      <NuxtLink to="/container-sales/nationwide" class="btn-primary">View All Depots</NuxtLink>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const allDepots = [
  {
    slug: 'teesside',
    name: 'Teesside',
    region: 'North East England',
    heroText: 'Roseberry Containers is based in Teesside — our home depot with the largest stock and fastest delivery times in the North East.',
    areaDescription: 'Teesside is our home and headquarters, serving Middlesbrough, Stockton-on-Tees, Hartlepool, Darlington and the wider North East region.',
    containerInfo: 'With direct access to our main yard on Westerby Rd, Middlesbrough, we hold a wide range of new and used 10ft, 20ft and 40ft shipping containers in stock. Whether you need a standard dry container, an open-top, or a specialist unit, we can usually supply from stock or source quickly.',
    deliveryInfo: 'We deliver across the whole North East, including County Durham, North Yorkshire and Northumberland. Our fleet of low-loaders can position containers precisely on your site.',
    nearbyDepots: [{ slug: 'leeds', name: 'Leeds' }, { slug: 'liverpool', name: 'Liverpool' }],
  },
  {
    slug: 'felixstowe',
    name: 'Felixstowe',
    region: 'Suffolk, East Anglia',
    heroText: 'Felixstowe is the UK\'s busiest container port — giving us access to an enormous range of new and one-trip containers at unbeatable prices.',
    areaDescription: 'Felixstowe in Suffolk is home to the UK\'s largest container port, handling around 40% of Britain\'s container trade. This makes it one of the best locations in the country to source shipping containers.',
    containerInfo: 'Our Felixstowe depot has direct access to containers arriving from major shipping lines, meaning excellent stock availability of new, one-trip and grade A used containers. We regularly have 10ft, 20ft and 40ft units available, including high-cube variants.',
    deliveryInfo: 'We deliver from Felixstowe across East Anglia, the South East and Greater London. Postcode areas covered include Suffolk, Norfolk, Essex, Cambridgeshire and surrounding counties.',
    nearbyDepots: [{ slug: 'tilbury', name: 'Tilbury' }, { slug: 'southampton', name: 'Southampton' }],
  },
  {
    slug: 'tilbury',
    name: 'Tilbury',
    region: 'Essex, Thames Estuary',
    heroText: 'Our Tilbury depot on the Thames Estuary serves Greater London and the South East with fast delivery of quality shipping containers.',
    areaDescription: 'Tilbury sits on the north bank of the Thames in Essex, just 25 miles from central London. It is one of the UK\'s major port complexes and a key hub for shipping container supply in the South East.',
    containerInfo: 'From Tilbury we supply containers throughout Greater London, Kent, Essex, Surrey and Hertfordshire. Stock includes standard dry containers, open-tops and refrigerated units in 20ft and 40ft sizes. New and used grades available.',
    deliveryInfo: 'Delivery is available across Greater London and all surrounding Home Counties. We can navigate urban environments including congestion charge zones and restricted access areas — just let us know your site requirements.',
    nearbyDepots: [{ slug: 'felixstowe', name: 'Felixstowe' }, { slug: 'southampton', name: 'Southampton' }],
  },
  {
    slug: 'southampton',
    name: 'Southampton',
    region: 'Hampshire, South Coast',
    heroText: 'Southampton is one of the UK\'s busiest cruise and container ports. Our South Coast depot serves Hampshire, Dorset, Wiltshire and beyond.',
    areaDescription: 'Southampton is a major port city on England\'s South Coast and an important hub for container logistics. Our depot here provides excellent coverage across southern England, making delivery fast and cost-effective.',
    containerInfo: 'We supply 10ft, 20ft and 40ft shipping containers from Southampton to customers across Hampshire, Dorset, Wiltshire, Somerset, Berkshire and the Isle of Wight. Both new one-trip containers and quality grade-A used stock are available.',
    deliveryInfo: 'Delivery from our Southampton depot typically reaches your site within 3–5 working days. We cover all of the South Coast, up through the M3 and M27 corridors and into the South West.',
    nearbyDepots: [{ slug: 'tilbury', name: 'Tilbury' }, { slug: 'birmingham', name: 'Birmingham' }],
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    heroText: 'At the heart of the UK\'s road network, our Birmingham depot delivers containers throughout the Midlands faster and cheaper than anywhere else.',
    areaDescription: "Birmingham is the UK's second largest city and sits at the centre of the country's motorway network — making it the ideal hub for container deliveries across the Midlands.",
    containerInfo: 'Our West Midlands depot stocks 10ft, 20ft and 40ft shipping containers in a range of grades and conditions. New, one-trip and good quality used containers are all available. We serve Birmingham, Coventry, Wolverhampton, Leicester, Nottingham, Oxford and the whole of the Midlands.',
    deliveryInfo: 'With direct access to the M5, M6, M40 and M42 motorway corridors, our Birmingham depot can reach most Midlands postcodes within 24–48 hours of dispatch.',
    nearbyDepots: [{ slug: 'liverpool', name: 'Liverpool' }, { slug: 'southampton', name: 'Southampton' }],
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside, North West',
    heroText: 'Liverpool\'s historic port heritage continues today. Our North West depot serves Merseyside, Greater Manchester, Cheshire and beyond.',
    areaDescription: "Liverpool's port on the River Mersey has been a centre of UK trade for centuries. Today it remains a key entry point for container traffic, and our depot here gives us strong stock levels and fast delivery across the North West.",
    containerInfo: 'From Liverpool we supply shipping containers to customers across Merseyside, Greater Manchester, Lancashire, Cheshire, North Wales and the wider North West. We stock 10ft, 20ft and 40ft units in new and used conditions.',
    deliveryInfo: 'Delivery across the North West is quick and competitive from our Liverpool depot. We regularly supply to Manchester, Preston, Chester, Wigan, Warrington and all surrounding areas.',
    nearbyDepots: [{ slug: 'leeds', name: 'Leeds' }, { slug: 'birmingham', name: 'Birmingham' }],
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    heroText: 'Our Leeds depot serves Yorkshire and the wider North with fast, affordable container delivery across one of England\'s largest regions.',
    areaDescription: 'Leeds is the largest city in Yorkshire and a major commercial centre for the North of England. Our depot here provides excellent coverage of West Yorkshire, North Yorkshire, South Yorkshire and the surrounding areas.',
    containerInfo: 'We supply 10ft, 20ft and 40ft shipping containers from Leeds to customers across Yorkshire, including Sheffield, Bradford, Harrogate, Hull, York and surrounding areas. New, one-trip and quality used containers are regularly in stock.',
    deliveryInfo: 'Yorkshire\'s excellent road network via the M1, M62 and A1(M) means we can deliver containers to most Yorkshire postcodes within 2–3 working days of order confirmation.',
    nearbyDepots: [{ slug: 'teesside', name: 'Teesside' }, { slug: 'liverpool', name: 'Liverpool' }],
  },
  {
    slug: 'bathgate',
    name: 'Bathgate',
    region: 'West Lothian, Scotland',
    heroText: 'Our Scottish depot in Bathgate, West Lothian, serves Edinburgh, Glasgow and the whole of central Scotland with quality shipping containers.',
    areaDescription: 'Bathgate in West Lothian sits between Edinburgh and Glasgow — perfectly positioned to serve all of central Scotland. Our Scottish depot gives customers north of the border access to the same quality containers and service we provide across the rest of the UK.',
    containerInfo: 'From Bathgate we supply 10ft, 20ft and 40ft shipping containers to customers across Scotland, including Edinburgh, Glasgow, Stirling, Perth, Falkirk and the Highlands. We hold both new and used stock at this location.',
    deliveryInfo: 'We deliver throughout Scotland via the M8 and M9 corridors and northward. For remote Highland or island deliveries, please call us to discuss logistics and pricing — we do our best to serve all of Scotland.',
    nearbyDepots: [{ slug: 'leeds', name: 'Leeds' }, { slug: 'teesside', name: 'Teesside' }],
  },
]

const depot = computed(() => allDepots.find(d => d.slug === route.params.depot))

useHead(() => ({
  title: depot.value ? `Container Sales ${depot.value.name} | Roseberry Containers` : 'Depot | Roseberry Containers',
  meta: [
    {
      name: 'description',
      content: depot.value
        ? `Buy shipping containers near ${depot.value.name}, ${depot.value.region}. Roseberry Containers supply 10ft, 20ft and 40ft containers with fast delivery. Call for a quote today.`
        : 'Roseberry Containers — nationwide depot network.'
    }
  ]
}))

const containerTypes = [
  {
    size: '10ft',
    dimensions: '3.0m × 2.4m × 2.6m',
    name: 'Compact Container',
    uses: ['Garden storage', 'Small site storage', 'Security cabins', 'Workshop use'],
  },
  {
    size: '20ft',
    dimensions: '6.1m × 2.4m × 2.6m',
    name: 'Standard Container',
    uses: ['Business storage', 'Construction sites', 'Container conversions', 'General storage'],
  },
  {
    size: '40ft',
    dimensions: '12.2m × 2.4m × 2.6m',
    name: 'Large Container',
    uses: ['Bulk storage', 'Export', 'Large conversions', 'Warehousing overflow'],
  },
]
</script>
