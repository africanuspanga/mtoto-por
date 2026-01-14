export interface SafariPackage {
  id: string
  slug: string
  title: string
  subtitle: string
  duration: string
  durationDays: number
  location: string
  cardImage: string
  images: string[]
  summary: string
  description: string
  highlights: string[]
  itinerary: {
    day: number
    title: string
    activities: string[]
  }[]
  pricing: {
    type: string
    prices: {
      groupSize: string
      price: string
    }[]
  }[]
  included: string[]
  excluded: string[]
  wildlife: string[]
}

export const safariPackages: SafariPackage[] = [
  {
    id: "1-day-selous",
    slug: "1-day-selous-safari",
    title: "One-Day Selous Safari",
    subtitle: "Africa's Largest Nature Reserve",
    duration: "1 Day",
    durationDays: 1,
    location: "Selous National Park",
    cardImage: "/images/safaris/selous-elephants.webp",
    images: ["/images/safaris/selous-elephants.webp", "/images/safaris/selous-lions.webp"],
    summary:
      "Experience Africa's largest nature reserve just 1 hour flight from Zanzibar. Spot crocodiles, hippos, lions, elephants, giraffes, buffalos, zebras, and antelopes.",
    description:
      "Take advantage of our offer and go on Safari to the Selous National Park - the largest nature reserve in Africa just 1 hour flight from Zanzibar. This incredible day trip offers you the chance to witness some of Africa's most magnificent wildlife in their natural habitat.",
    highlights: [
      "Largest nature reserve in Africa",
      "Just 1 hour flight from Zanzibar",
      "Professional English-speaking guide",
      "Lunch box included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Full Day Safari Adventure",
        activities: [
          "5:30 - Departure from hotel to airport",
          "7:30 - Flight departure from Zanzibar airport",
          "8:30 - Arrival at Selous Park",
          "All-day safari in the park (until 15:30)",
          "12:30 - Break for lunch",
          "16:15 - Return flight to Zanzibar",
          "17:15 - Arrival in Zanzibar",
          "18:30-19:00 - Return to hotel",
        ],
      },
    ],
    pricing: [
      {
        type: "Standard",
        prices: [
          { groupSize: "Adult", price: "$450" },
          { groupSize: "Child (up to 11 years)", price: "$400" },
        ],
      },
    ],
    included: [
      "Transfer from/to the airport",
      "Flight Zanzibar – Selous – Zanzibar",
      "Entry to Selous National Park",
      "Safari car with English-speaking driver and guide",
      "Lunch box",
    ],
    excluded: ["Alcoholic beverages", "Tips for driver/guide", "Personal expenses"],
    wildlife: ["Crocodiles", "Hippos", "Lions", "Elephants", "Giraffes", "Buffalos", "Zebras", "Antelopes"],
  },
  {
    id: "1-day-mikumi",
    slug: "1-day-mikumi-safari",
    title: "One-Day Mikumi Safari",
    subtitle: "Tanzania's Fourth Largest Park",
    duration: "1 Day",
    durationDays: 1,
    location: "Mikumi National Park",
    cardImage: "/images/safaris/mikumi-impalas.webp",
    images: ["/images/safaris/mikumi-impalas.webp", "/images/safaris/mikumi-lion-hunt.webp"],
    summary:
      "Explore Mikumi National Park - Tanzania's fourth largest park with an area of 3,230 km². Just 1 hour flight from Zanzibar.",
    description:
      "1-day Safari in Mikumi National Park – located in Eastern Tanzania, it is the fourth largest National Park in Tanzania with an area of 3,230 km². Take advantage of our offer and go on Safari to Mikumi National Park.",
    highlights: [
      "Fourth largest National Park in Tanzania",
      "3,230 km² of wilderness",
      "Just 1 hour flight from Zanzibar",
      "Professional English-speaking guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Full Day Safari Adventure",
        activities: [
          "5:30 - Departure from hotel to airport",
          "7:15 - Flight departure from Zanzibar airport",
          "8:15 - Arrival at Mikumi Park",
          "All-day safari in the park (until 15:30)",
          "12:30 - Break for lunch",
          "16:00 - Return flight to Zanzibar",
          "17:00 - Arrival in Zanzibar",
          "18:00-18:30 - Return to hotel",
        ],
      },
    ],
    pricing: [
      {
        type: "Standard",
        prices: [
          { groupSize: "Adult", price: "$480" },
          { groupSize: "Child (up to 11 years)", price: "$400" },
        ],
      },
    ],
    included: [
      "Transfer from/to the airport",
      "Flight Zanzibar – Mikumi – Zanzibar",
      "Entry to Mikumi National Park",
      "Safari car with English-speaking driver and guide",
      "Lunch box",
    ],
    excluded: ["Alcoholic beverages", "Tips for driver/guide", "Personal expenses"],
    wildlife: ["Crocodiles", "Hippos", "Lions", "Elephants", "Giraffes", "Buffalos", "Zebras", "Antelopes"],
  },
  {
    id: "2-days-selous",
    slug: "2-days-selous-safari",
    title: "2 Days Selous Fly-In Safari",
    subtitle: "Extended Wildlife Adventure",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    location: "Selous Game Reserve",
    cardImage: "/images/safaris/selous-lions.webp",
    images: ["/images/safaris/selous-lions.webp", "/images/safaris/selous-elephants.webp"],
    summary:
      "An extended safari adventure in one of Africa's largest and most diverse wildlife reserves with overnight accommodation.",
    description:
      "Begin your adventure with a morning flight from Zanzibar to the Selous Game Reserve, one of Africa's largest and most diverse wildlife reserves. This 2-day safari includes game drives, optional boat safari on the Rufiji River, and comfortable overnight accommodation.",
    highlights: [
      "One of Africa's largest wildlife reserves",
      "Overnight safari lodge or tented camp",
      "Optional boat safari on Rufiji River",
      "Sunrise game drive experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Game Drive",
        activities: [
          "Morning flight from Zanzibar to Selous Game Reserve",
          "Meet your experienced safari guide for briefing",
          "Embark on thrilling game drive",
          "Spot elephants, lions, giraffes, and hippos",
          "Packed lunch amidst stunning landscape",
          "Late afternoon transfer to safari lodge/tented camp",
          "Delicious dinner under the African sky",
        ],
      },
      {
        day: 2,
        title: "Sunrise Safari & Departure",
        activities: [
          "Early sunrise game drive",
          "Witness wildlife starting their day",
          "Return to camp for hearty breakfast",
          "Optional boat safari on Rufiji River",
          "Observe crocodiles, hippos, and bird species",
          "Lunch at the camp",
          "Return flight to Zanzibar",
          "Transfer to hotel",
        ],
      },
    ],
    pricing: [
      {
        type: "Standard",
        prices: [
          { groupSize: "Adult", price: "$750" },
          { groupSize: "Child (under 12 with two adults)", price: "$600" },
        ],
      },
    ],
    included: [
      "4X4 Safari Vehicles",
      "All park fees & Service fees",
      "Experienced Professional Tour Guide",
      "Return domestic flights from Zanzibar",
      "All Accommodations as shown",
      "Medical Kit and Thermos with hot Tea/Coffee",
      "VAT (18% charged by Government)",
      "All activities shown in package",
      "All ground transportations",
    ],
    excluded: ["Alcoholic beverages", "Laundry services", "Tips for driver/guide", "Personal expenses"],
    wildlife: ["Crocodiles", "Hippos", "Lions", "Elephants", "Giraffes", "Various bird species"],
  },
  {
    id: "2-days-mikumi",
    slug: "2-days-mikumi-safari",
    title: "2 Days Mikumi Drive-In Safari",
    subtitle: "Compact Wildlife Experience",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    location: "Mikumi National Park",
    cardImage: "/images/safaris/mikumi-lion-hunt.webp",
    images: ["/images/safaris/mikumi-lion-hunt.webp", "/images/safaris/mikumi-impalas.webp"],
    summary: "A compact and exciting 2-day safari option with various accommodation choices from budget to luxury.",
    description:
      "2-Days Safari at Mikumi National Park which starts from Zanzibar is a compact and exciting option for wildlife. This is the second shortest Safari after the Mikumi Day trip. It provides various accommodation options from budget to luxury.",
    highlights: [
      "Compact and exciting option",
      "Various accommodation options",
      "Budget to luxury choices",
      "Scenic drive through Tanzania",
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Mikumi",
        activities: [
          "5:30 - Pick-up from hotel, transfer to Zanzibar ferry",
          "Ferry from Zanzibar to Dar es Salaam (approx. 1 hour)",
          "9:00 - Departure from Dar es Salaam for Mikumi",
          "Stop for lunch in Msolwa",
          "Enter Mikumi National Park (5-6 hours drive)",
          "Start safari in the park until late evening",
          "Dinner and overnight at MIKUMI RESORT or MORIO MOTEL",
        ],
      },
      {
        day: 2,
        title: "Sunrise Safari & Return",
        activities: [
          "Early breakfast at the lodge",
          "Sunrise game drive in Mikumi National Park until 11:30 AM",
          "Return journey to Dar es Salaam",
          "Lunch break in Msolwa",
          "Transfer to Dar es Salaam airport",
          "Evening flight back to Zanzibar",
          "Return to hotel",
        ],
      },
    ],
    pricing: [
      {
        type: "English-Speaking Guide",
        prices: [
          { groupSize: "2 people", price: "$600/person" },
          { groupSize: "3 people", price: "$500/person" },
          { groupSize: "4 people", price: "$450/person" },
          { groupSize: "5 people", price: "$425/person" },
          { groupSize: "6 people", price: "$400/person" },
        ],
      },
      {
        type: "Polish-Speaking Guide",
        prices: [
          { groupSize: "2 people", price: "$700/person" },
          { groupSize: "3 people", price: "$570/person" },
          { groupSize: "4 people", price: "$500/person" },
          { groupSize: "5 people", price: "$475/person" },
          { groupSize: "6 people", price: "$450/person" },
        ],
      },
    ],
    included: [
      "Transfer from/to the airport",
      "Accommodation in the Park",
      "Ferries Zanzibar-Dar es Salaam & return flight",
      "Safari Vehicle Toyota Cruiser",
      "Professional guide",
      "All meals and drinks as outlined",
      "All park fees and government taxes",
    ],
    excluded: [
      "Accommodation in Dar es Salaam before/after safari",
      "Alcoholic beverages",
      "Laundry services",
      "Tips for driver/guide",
    ],
    wildlife: ["Crocodiles", "Hippos", "Lions", "Elephants", "Giraffes", "Buffalos", "Zebras", "Antelopes"],
  },
  {
    id: "2-days-tarangire-ngorongoro",
    slug: "2-days-tarangire-ngorongoro-safari",
    title: "2 Days Tarangire & Ngorongoro",
    subtitle: "UNESCO World Heritage Safari",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    location: "Tarangire & Ngorongoro",
    cardImage: "/images/safaris/tarangire-elephant-jeep.webp",
    images: ["/images/safaris/tarangire-elephant-jeep.webp", "/images/safaris/tarangire-baobab.webp"],
    summary:
      "Experience Tarangire National Park known for elephant herds and the UNESCO World Heritage Ngorongoro Crater.",
    description:
      "A 2-Day, 1-Night Safari from Zanzibar to Tarangire and Ngorongoro. Experience Tarangire National Park, known for its large herds of elephants and acacia trees, then descend into the famous Ngorongoro Crater - a UNESCO World Heritage Site.",
    highlights: [
      "Tarangire's famous elephant herds",
      "Ngorongoro Crater - UNESCO World Heritage",
      "Search for the Big Five",
      "Scenic flights from Zanzibar",
    ],
    itinerary: [
      {
        day: 1,
        title: "Zanzibar to Tarangire",
        activities: [
          "Early morning flight from Zanzibar to Arusha",
          "Transfer to Tarangire National Park",
          "Scenic drive through Tanzanian countryside",
          "Check-in and lunch at lodge",
          "Afternoon game drive in Tarangire",
          "Spot large elephant herds and acacia trees",
          "Dinner and overnight at lodge",
        ],
      },
      {
        day: 2,
        title: "Tarangire to Ngorongoro Crater",
        activities: [
          "Early morning game drive in Tarangire",
          "Transfer to Ngorongoro Conservation Area",
          "Descend into the crater",
          "Full-day game drive searching for Big Five",
          "Picnic lunch in the crater",
          "Ascend the crater rim",
          "Transfer to Arusha for return flight",
          "Flight back to Zanzibar",
        ],
      },
    ],
    pricing: [
      {
        type: "English-Speaking Guide",
        prices: [
          { groupSize: "2 people", price: "$1,300/person" },
          { groupSize: "3 people", price: "$1,100/person" },
          { groupSize: "4 people", price: "$1,050/person" },
          { groupSize: "5 people", price: "$1,000/person" },
          { groupSize: "6 people", price: "$950/person" },
        ],
      },
      {
        type: "Polish-Speaking Guide",
        prices: [
          { groupSize: "2 people", price: "$1,500/person" },
          { groupSize: "3 people", price: "$1,250/person" },
          { groupSize: "4 people", price: "$1,150/person" },
          { groupSize: "5 people", price: "$1,100/person" },
          { groupSize: "6 people", price: "$1,050/person" },
        ],
      },
    ],
    included: [
      "Transfer from/to airport",
      "Local flight Zanzibar-Arusha/Kilimanjaro return",
      "Private Toyota Land Cruiser safari vehicle",
      "Professional guide",
      "Accommodation and full board",
      "All meals and drinks as shown",
      "All park fees/concession fees",
    ],
    excluded: [
      "Accommodation in Arusha before/after safari",
      "Alcoholic beverages",
      "Laundry services",
      "Tips for driver/guide",
    ],
    wildlife: ["Elephants", "Lions", "Leopards", "Rhinos", "Buffalos", "Zebras", "Wildebeest", "Flamingos"],
  },
  {
    id: "3-days-serengeti-combo",
    slug: "3-days-serengeti-tarangire-ngorongoro-safari",
    title: "3 Days Serengeti + Tarangire + Ngorongoro",
    subtitle: "Ultimate Tanzania Safari",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    location: "Serengeti, Tarangire & Ngorongoro",
    cardImage: "/images/safaris/tarangire-baobab.webp",
    images: ["/images/safaris/tarangire-baobab.webp", "/images/safaris/tarangire-elephant-jeep.webp"],
    summary:
      "The ultimate 3-day safari experience covering Serengeti, Tarangire, and Ngorongoro - Tanzania's most iconic wildlife destinations.",
    description:
      "Experience the ultimate Tanzania safari adventure covering three of the country's most iconic wildlife destinations: Tarangire National Park, the legendary Serengeti, and the magnificent Ngorongoro Crater.",
    highlights: [
      "Three iconic parks in one trip",
      "Serengeti - home of the Great Migration",
      "Ngorongoro Crater - natural wonder",
      "Luxury tented camp experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Zanzibar to Tarangire",
        activities: [
          "5:30 - Departure from hotel to Airport",
          "8:30 - Flight ZNZ to ARK airport",
          "9:30 - Pickup from Airport in safari jeep",
          "Transfer to Tarangire National Park",
          "Full-day Safari in Tarangire park",
          "Lunch break in the bush/park",
          "Overnight and dinner at Bougainvillea Safari Lodge or Country Lodge",
        ],
      },
      {
        day: 2,
        title: "Serengeti Safari",
        activities: [
          "Breakfast at the lodge",
          "Departure for Safari in Serengeti park",
          "Full-day Safari in the Serengeti",
          "Lunch break in the bush/park",
          "Dinner and overnight at Embalakai Luxury Tented Camp or Heritage Luxury Tented",
        ],
      },
      {
        day: 3,
        title: "Ngorongoro Crater & Return",
        activities: [
          "Breakfast at the camp",
          "Departure for Safari to Ngorongoro Crater",
          "Safari in the Ngorongoro Park",
          "Picnic lunch next to the lake with hippos",
          "Afternoon transfer to Arusha/Kilimanjaro airport",
          "Return flight to Zanzibar",
          "Return to hotel",
        ],
      },
    ],
    pricing: [
      {
        type: "English-Speaking Guide",
        prices: [
          { groupSize: "2 people", price: "$2,000/person" },
          { groupSize: "3 people", price: "$1,750/person" },
          { groupSize: "4 people", price: "$1,600/person" },
          { groupSize: "5 people", price: "$1,550/person" },
          { groupSize: "6 people", price: "$1,500/person" },
        ],
      },
      {
        type: "Polish-Speaking Guide",
        prices: [
          { groupSize: "2 people", price: "$2,200/person" },
          { groupSize: "3 people", price: "$1,900/person" },
          { groupSize: "4 people", price: "$1,730/person" },
          { groupSize: "5 people", price: "$1,675/person" },
          { groupSize: "6 people", price: "$1,600/person" },
        ],
      },
    ],
    included: [
      "Airport transfer",
      "Local flight Zanzibar-Arusha/Kilimanjaro return",
      "Private Toyota Land Cruiser safari vehicle",
      "Professional guide",
      "Accommodation and full board",
      "All meals and drinks as shown",
      "All park fees/concession fees",
    ],
    excluded: [
      "Accommodation in Arusha before/after safari",
      "Alcoholic beverages",
      "Laundry services",
      "Tips for driver/guide",
    ],
    wildlife: [
      "Lions",
      "Elephants",
      "Leopards",
      "Rhinos",
      "Buffalos",
      "Cheetahs",
      "Wildebeest",
      "Zebras",
      "Hippos",
      "Crocodiles",
    ],
  },
]

export const safarisData = safariPackages

export function getSafariBySlug(slug: string): SafariPackage | undefined {
  return safariPackages.find((safari) => safari.slug === slug)
}

export function getRelatedSafaris(currentSlug: string, limit = 3): SafariPackage[] {
  return safariPackages.filter((safari) => safari.slug !== currentSlug).slice(0, limit)
}
