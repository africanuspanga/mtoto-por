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
    cardImage: "/mtoto por images/new mtoto pot images/safari/selous.jpg",
    images: ["/mtoto por images/new mtoto pot images/safari/selous.jpg", "/mtoto por images/images/safaris/selous-lions.webp"],
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
          { groupSize: "Adult", price: "$500" },
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
    cardImage: "/mtoto por images/new mtoto pot images/packages/mikumi-safari.jpg",
    images: ["/mtoto por images/new mtoto pot images/packages/mikumi-safari.jpg", "/mtoto por images/images/safaris/mikumi-lion-hunt.webp"],
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
          { groupSize: "Adult", price: "$500" },
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
    cardImage: "/mtoto por images/images/safaris/selous-lions.webp",
    images: ["/mtoto por images/images/safaris/selous-lions.webp", "/mtoto por images/new mtoto pot images/safari/selous.jpg"],
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
          { groupSize: "Adult", price: "$800" },
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
    cardImage: "/mtoto por images/images/safaris/mikumi-lion-hunt.webp",
    images: ["/mtoto por images/images/safaris/mikumi-lion-hunt.webp", "/mtoto por images/new mtoto pot images/packages/mikumi-safari.jpg"],
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
          { groupSize: "2 people", price: "$800/person" },
          { groupSize: "3 people", price: "$800/person" },
          { groupSize: "4 people", price: "$800/person" },
          { groupSize: "5 people", price: "$800/person" },
          { groupSize: "6 people", price: "$800/person" },
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
    cardImage: "/mtoto por images/new mtoto pot images/safari/ngorongoro.jpg",
    images: ["/mtoto por images/new mtoto pot images/safari/ngorongoro.jpg", "/mtoto por images/new mtoto pot images/safari/tarangire.jpg"],
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
          { groupSize: "Per Person", price: "$2,000" },
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
    cardImage: "/mtoto por images/new mtoto pot images/packages/serengeti-safari.jpg",
    images: ["/mtoto por images/new mtoto pot images/packages/serengeti-safari.jpg", "/mtoto por images/new mtoto pot images/safari/serengeti.jpg"],
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

  // 6 Days Safari Package
  {
    id: "6-days-tarangire-serengeti-ngorongoro-manyara",
    slug: "6-days-tarangire-serengeti-ngorongoro-manyara-safari",
    title: "6 Days Tarangire, Serengeti, Ngorongoro & Manyara Safari",
    subtitle: "Ultimate Northern Circuit Safari Experience",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    location: "Tarangire, Serengeti, Ngorongoro & Manyara",
    cardImage: "/mtoto por images/new mtoto pot images/safari/serengeti.jpg",
    images: ["/mtoto por images/new mtoto pot images/safari/serengeti.jpg", "/mtoto por images/new mtoto pot images/safari/ngorongoro.jpg", "/mtoto por images/new mtoto pot images/safari/tarangire.jpg"],
    summary:
      "The ultimate 6-day safari adventure covering all four iconic northern circuit parks: Tarangire, Serengeti, Ngorongoro Crater, and Lake Manyara.",
    description:
      "Experience the best of Tanzania's northern safari circuit on this comprehensive 6-day adventure. From the elephant herds of Tarangire to the endless plains of Serengeti, the wildlife-rich Ngorongoro Crater, and the tree-climbing lions of Lake Manyara, this safari offers unparalleled wildlife viewing opportunities.",
    highlights: [
      "Visit all four iconic northern circuit parks",
      "Witness the Big Five in their natural habitat",
      "Sunrise game drives in Serengeti",
      "Full-day Ngorongoro Crater exploration",
      "Luxury lodge and tented camp accommodation",
      "Professional English-speaking guide throughout",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        activities: [
          "Early morning pickup from Arusha airport",
          "Drive to Tarangire National Park (2 hours)",
          "Full-day game drive with picnic lunch",
          "Spot large elephant herds and baobab trees",
          "Dinner and overnight at Tarangire Safari Lodge",
        ],
      },
      {
        day: 2,
        title: "Tarangire to Serengeti National Park",
        activities: [
          "Early morning game drive in Tarangire",
          "Drive to Serengeti National Park via Ngorongoro",
          "En-route game drive through the plains",
          "Dinner and overnight at Serengeti luxury camp",
        ],
      },
      {
        day: 3,
        title: "Full Day Serengeti Safari",
        activities: [
          "Sunrise game drive in Serengeti",
          "Search for the Big Five and great migration",
          "Picnic lunch in the bush",
          "Afternoon game drive",
          "Dinner and overnight at luxury tented camp",
        ],
      },
      {
        day: 4,
        title: "Serengeti to Ngorongoro Crater",
        activities: [
          "Morning game drive in Serengeti",
          "Drive to Ngorongoro Conservation Area",
          "Scenic views from the crater rim",
          "Dinner and overnight at Ngorongoro lodge",
        ],
      },
      {
        day: 5,
        title: "Ngorongoro Crater Safari",
        activities: [
          "Early descent into Ngorongoro Crater",
          "Full-day game drive on the crater floor",
          "Picnic lunch near the hippo pool",
          "Search for rhinos, lions, and flamingos",
          "Dinner and overnight at Ngorongoro lodge",
        ],
      },
      {
        day: 6,
        title: "Lake Manyara & Return to Arusha",
        activities: [
          "Morning drive to Lake Manyara National Park",
          "Game drive to spot tree-climbing lions",
          "Visit the alkaline lake with flamingos",
          "Lunch at the park",
          "Drive back to Arusha for departure",
        ],
      },
    ],
    pricing: [
      {
        type: "English-Speaking Guide",
        prices: [
          { groupSize: "Per Person", price: "$2,500" },
        ],
      },
    ],
    included: [
      "All park fees and concession fees",
      "Private 4x4 safari vehicle with pop-up roof",
      "Professional English-speaking guide",
      "5 nights accommodation at luxury lodges/camps",
      "All meals during safari",
      "Airport transfers",
      "Bottled water during game drives",
      "All government taxes",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Alcoholic beverages",
      "Tips for guide and staff",
      "Personal expenses",
    ],
    wildlife: ["Lions", "Elephants", "Leopards", "Rhinos", "Buffalos", "Cheetahs", "Wildebeest", "Zebras", "Giraffes", "Hippos", "Flamingos"],
  },

  // Gombe Kigoma Packages - Only 2 Day tour
  {
    id: "gombe-2-days-1-night",
    slug: "gombe-2-days-1-night-chimpanzee-safari",
    title: "Gombe 2 Days Chimpanzee Safari",
    subtitle: "Chimpanzee Tracking in Gombe Stream",
    duration: "2 Days / 1 Night",
    durationDays: 2,
    location: "Gombe Stream National Park, Kigoma",
    cardImage: "/mtoto por images/gombe 1.jpg",
    images: ["/mtoto por images/gombe 1.jpg", "/mtoto por images/gombe 2.jpg"],
    summary:
      "A memorable chimpanzee tracking experience in Gombe Stream National Park, home to the famous chimpanzees studied by Dr. Jane Goodall.",
    description:
      "Experience the magic of Gombe Stream National Park with this 2-day chimpanzee tracking adventure. Track wild chimpanzees through the forest, swim in the crystal-clear waters of Lake Tanganyika, and enjoy comfortable accommodation at either the rest house or luxury tent.",
    highlights: [
      "Two chimpanzee tracking sessions",
      "Choice of Rest House or Luxury accommodation",
      "Swimming in Lake Tanganyika",
      "All meals included",
      "Boat transfers included",
      "Professional guides",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Chimpanzee Tracking",
        activities: [
          "10:30 AM - Pick up from hotel/lodge in Kigoma",
          "Boat journey to Gombe (1 hour)",
          "11:30 AM - Arrival and lunch",
          "Start chimpanzee tracking until 5:00 PM",
          "Swimming and relaxation",
          "Overnight at Rest House or Luxury tent",
        ],
      },
      {
        day: 2,
        title: "Morning Tracking & Departure",
        activities: [
          "Early breakfast",
          "Morning chimpanzee tracking until 12:00 PM",
          "Return for lunch",
          "Swimming and relaxation",
          "Boat back to Kigoma",
        ],
      },
    ],
    pricing: [
      {
        type: "Standard",
        prices: [
          { groupSize: "Per Person", price: "$600" },
        ],
      },
    ],
    included: [
      "Park entry fee",
      "Chimpanzee tracking fee (2 days)",
      "Accommodation (Rest House or Luxury)",
      "All meals and water",
      "Boat return transfers",
      "Waiting charges",
    ],
    excluded: [
      "Meals in Kigoma",
      "Accommodation in Kigoma",
      "Flights to/from Kigoma",
      "Personal expenses",
      "Tips for guides",
    ],
    wildlife: ["Chimpanzees", "Baboons", "Colobus Monkeys", "Over 200 bird species", "Butterflies"],
  },
]

export const safarisData = safariPackages

export function getSafariBySlug(slug: string): SafariPackage | undefined {
  return safariPackages.find((safari) => safari.slug === slug)
}

export function getRelatedSafaris(currentSlug: string, limit = 3): SafariPackage[] {
  return safariPackages.filter((safari) => safari.slug !== currentSlug).slice(0, limit)
}
