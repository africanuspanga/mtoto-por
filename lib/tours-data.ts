export interface ZanzibarTour {
  id: string
  slug: string
  title: string
  subtitle: string
  duration: string
  category: "full-day" | "half-day" | "multi-day"
  cardImage: string
  heroImage: string
  galleryImages: string[]
  summary: string
  description: string
  highlights: string[]
  included: string[]
  excluded: string[]
  tags: string[]
}

export const zanzibarTours: ZanzibarTour[] = [
  {
    id: "safari-blue",
    slug: "safari-blue-tour",
    title: "Safari Blue Tour",
    subtitle: "The Ultimate Ocean Adventure",
    duration: "Full Day (8 hours)",
    category: "full-day",
    cardImage: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=800&width=1200",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    summary:
      "Set sail on a traditional wooden dhow and immerse yourself in Zanzibar's most famous sea adventure with sandbanks, coral reefs, and tropical island paradise.",
    description:
      "The Safari Blue Tour is Zanzibar's most famous ocean adventure. Set sail on a traditional wooden dhow and immerse yourself in a day of stunning sandbanks, vibrant coral reefs, and a tropical island paradise. From swimming in crystal-clear waters to dining on freshly grilled seafood under ancient baobab trees, this tour offers the ultimate Zanzibar marine experience.",
    highlights: [
      "Sailing on a traditional dhow across the turquoise Indian Ocean",
      "Sandbank stop to relax, swim, and soak in breathtaking views",
      "Snorkeling experience in crystal-clear waters with colorful coral reefs",
      "Seafood feast with freshly grilled fish, octopus, lobster, and tropical fruits",
      "Visit to Kwale Island with giant baobab trees and tranquil lagoon",
      "Opportunities to spot dolphins along the way",
    ],
    included: [
      "Traditional dhow sailing trip",
      "Professional crew and guide",
      "Snorkeling gear and assistance",
      "Seafood buffet lunch with soft drinks",
      "Bottled water and tropical fruits",
      "Hotel transfers (on request)",
    ],
    excluded: ["Alcoholic beverages", "Tips for crew", "Personal expenses", "Travel insurance"],
    tags: ["Sailing", "Snorkeling", "Seafood", "Sandbank", "Dolphins"],
  },
  {
    id: "turtles-sunset-cruise",
    slug: "swimming-with-turtles-sunset-cruise",
    title: "Swimming With Turtles & Sunset Dhow Cruise",
    subtitle: "An Unforgettable Ocean Experience",
    duration: "Full Day",
    category: "full-day",
    cardImage: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=800&width=1200",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    summary:
      "Discover a full-day excursion to Nungwi Beach combining swimming with sea turtles and a magical private sunset dhow cruise.",
    description:
      "Discover a full-day excursion to the scenic northern region of Zanzibar at Nungwi Beach. This tour seamlessly blends two remarkable activities: an exhilarating visit to a turtle sanctuary where you'll feed and swim alongside magnificent sea turtles, followed by a private sunset dhow cruise as the sun paints the sky with hues of gold and crimson.",
    highlights: [
      "Cruise on a traditional Arabian Dhow from the beach",
      "Scenic views of Nungwi Beach and luxurious resorts",
      "Taste local snacks and soft drinks on board",
      "Visit the turtle sanctuary and swim with the turtles",
      "Enjoy Zanzibar's famous sunset location",
      "Feed the magnificent sea turtles",
    ],
    included: [
      "Professional guiding",
      "Private Dhow Boat",
      "Snacks & Soft drinks",
      "All government fees",
      "Turtle sanctuary entrance",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Alcoholic beverages", "Tips for guide", "Personal expenses", "Lunch"],
    tags: ["Turtles", "Sunset", "Dhow Cruise", "Nungwi", "Wildlife"],
  },
  {
    id: "jozani-spice-stonetown",
    slug: "jozani-spice-farms-stone-town-tour",
    title: "Jozani Forest + Spice Farms & Stone Town",
    subtitle: "Nature, Culture & History Combined",
    duration: "Full Day",
    category: "full-day",
    cardImage: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=800&width=1200",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    summary:
      "Experience three iconic Zanzibar destinations in one day: Jozani Forest with Red Colobus Monkeys, aromatic Spice Farms, and historic Stone Town.",
    description:
      "This full-day combined experience takes you through the best of Zanzibar. Start at Jozani Forest to spot the endemic Red Colobus Monkeys, continue to the aromatic Spice Farms for a sensory journey with a traditional lunch, and end with a historical walking tour of Stone Town visiting iconic sites like Freddie Mercury's birthplace and the House of Wonders.",
    highlights: [
      "Smell and taste spices grown in Zanzibar Islands",
      "Spiced Rice Pilau lunch at the spice farm",
      "Tropical fruits: Mangoes, Bananas, Pineapple, Watermelon",
      "Visit historical sites: House of Wonders, Freddie Mercury House",
      "Explore Red Colobus Monkeys at Jozani Forest",
      "Spice shopping in local village farm",
    ],
    included: [
      "English Speaking Guide",
      "Entrance fees to all attractions",
      "Lunch at the Local Spice Farm",
      "Tropical Fruits",
      "Drinking Water",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Alcoholic beverages", "Tips for guide", "Personal expenses", "Souvenirs"],
    tags: ["Jozani Forest", "Spice Tour", "Stone Town", "Monkeys", "History"],
  },
  {
    id: "jozani-spice-prison",
    slug: "jozani-spice-farms-prison-island-tour",
    title: "Jozani Forest + Spice Farms & Prison Island",
    subtitle: "Wildlife, Spices & Giant Tortoises",
    duration: "Full Day",
    category: "full-day",
    cardImage: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=800&width=1200",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    summary:
      "Combine wildlife adventures at Jozani Forest with Red Colobus Monkeys, aromatic Spice Farms, and the famous Giant Tortoises at Prison Island.",
    description:
      "This full-day combined experience tour takes you to Jozani Forest to see the endemic Red Colobus Monkeys, then to the aromatic Spice Farms for a spice tour and traditional lunch with tropical fruits. End your day at Prison Island where you'll meet and feed the famous Giant Aldabra Tortoises.",
    highlights: [
      "Smell and taste spices grown in Zanzibar",
      "Spiced Rice Pilau lunch at the spice farm",
      "Tropical fruits: Mangoes, Bananas, Pineapple, Watermelon",
      "Feed the Giant Tortoises at Prison Island",
      "Explore Red Colobus Monkeys at Jozani",
      "Spice shopping in local village farm",
    ],
    included: [
      "English Speaking Guide",
      "Entrance fees",
      "Boat to Prison Island",
      "Lunch at the Local Spice Farm",
      "Tropical Fruits",
      "Drinking Water",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Alcoholic beverages", "Tips for guide", "Personal expenses", "Souvenirs"],
    tags: ["Jozani Forest", "Spice Tour", "Prison Island", "Tortoises", "Monkeys"],
  },
  {
    id: "spice-prison-stonetown",
    slug: "spice-farms-prison-island-stone-town-tour",
    title: "Spice Farms + Prison Island & Stone Town",
    subtitle: "The Complete Zanzibar Experience",
    duration: "Full Day",
    category: "full-day",
    cardImage: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=800&width=1200",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    summary:
      "Visit Spice Farms for aromatic discoveries, meet Giant Tortoises at Prison Island, and explore the UNESCO World Heritage Stone Town.",
    description:
      "This full-day combined experience takes you to the aromatic Spice Farms with a traditional spiced lunch, then to Prison Island to meet the Giant Tortoises, and finally to Stone Town for a historical walking tour including Freddie Mercury House, House of Wonders, Sultan's Palace, and Darajani Market.",
    highlights: [
      "Smell and taste spices grown in Zanzibar Islands",
      "Spiced Rice Pilau lunch at the spice farm",
      "Tropical fruits: Mangoes, Bananas, Pineapple, Watermelon",
      "Visit historical sites: House of Wonders, Freddie Mercury House",
      "Swimming, snorkeling, feeding Giant Tortoises at Prison Island",
      "Spice shopping in local village farm",
    ],
    included: [
      "English Speaking Guide",
      "Private Boat",
      "Entrance fees",
      "Swimming Equipment",
      "Lunch at the Local Spice Farm",
      "Tropical Fruits",
      "Drinking Water",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Alcoholic beverages", "Tips for guide", "Personal expenses", "Souvenirs"],
    tags: ["Spice Tour", "Prison Island", "Stone Town", "Tortoises", "History"],
  },
  {
    id: "prison-sandbank-combo",
    slug: "prison-island-sandbank-combo-tour",
    title: "Prison Island & Nakupenda Sandbank",
    subtitle: "History, Nature & Ocean Bliss",
    duration: "Full Day (5-7 hours)",
    category: "full-day",
    cardImage: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=800&width=1200",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    summary:
      "Discover two of Zanzibar's gems: the historical Prison Island with Giant Tortoises and the breathtaking Nakupenda Sandbank for swimming and seafood feasting.",
    description:
      "A full-day adventure combining history, nature, and ocean bliss. Start with Prison Island (Changuu) to explore the old quarantine station and meet Giant Aldabra Tortoises, some over 100 years old. Then sail to the stunning Nakupenda Sandbank for swimming, snorkeling, and a fresh seafood BBQ lunch on the beach.",
    highlights: [
      "Scenic 30-min boat ride from Stone Town",
      "Meet Giant Aldabra Tortoises (some over 100 years old)",
      "Explore the old quarantine station and historical ruins",
      "Swim and snorkel in crystal-clear waters",
      "Relax on powdery white sand at Nakupenda Sandbank",
      "Fresh seafood BBQ lunch served on the beach",
    ],
    included: [
      "Professional guide",
      "Boat transfers (Stone Town – Prison Island – Sandbank – Stone Town)",
      "Snorkeling gear & beach towels",
      "Entrance fees",
      "Seafood BBQ lunch with fruits & drinks",
      "Drinking water",
    ],
    excluded: ["Alcoholic beverages", "Tips for guide", "Personal expenses", "Hotel transfers (can be arranged)"],
    tags: ["Prison Island", "Sandbank", "Tortoises", "Snorkeling", "Seafood"],
  },
  {
    id: "cultural-village-tour",
    slug: "cultural-village-tour",
    title: "Cultural & Village Tour",
    subtitle: "Experience Authentic Zanzibar Life",
    duration: "Half Day or Full Day",
    category: "full-day",
    cardImage: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=800&width=1200",
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    summary:
      "Go beyond the beaches and explore the heart of Zanzibar's culture with our Cultural & Village Tour. Meet local communities and discover the customs that make Zanzibar unique.",
    description:
      "Go beyond the beaches and explore the heart of Zanzibar's culture with our Cultural & Village Tour. This enriching experience takes you into a traditional village, where you'll meet local communities, learn about daily life, and discover the customs that make Zanzibar so unique. It's a genuine connection with the people of Zanzibar, offering a chance to learn, share, and celebrate traditions that are still alive today.",
    highlights: [
      "Village Walk through a traditional Zanzibar village guided by locals",
      "Meet the Community including farmers, fishermen, and artisans",
      "Traditional Cooking experience preparing Swahili dishes",
      "Handcrafts & Skills like weaving, pottery, and coconut rope making",
      "Cultural Exchange with stories, songs, and folklore",
      "Taste homemade local meals prepared by villagers",
    ],
    included: [
      "Professional local guide",
      "Village entry and community contributions",
      "Refreshments",
      "Optional Swahili lunch",
      "Hands-on cultural experiences",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Alcoholic beverages", "Tips for guide", "Personal expenses", "Souvenirs"],
    tags: ["Culture", "Village", "Cooking", "Handcrafts", "Community"],
  },
]

export function getTourBySlug(slug: string): ZanzibarTour | undefined {
  return zanzibarTours.find((tour) => tour.slug === slug)
}

export function getRelatedTours(currentSlug: string, limit = 3): ZanzibarTour[] {
  return zanzibarTours.filter((tour) => tour.slug !== currentSlug).slice(0, limit)
}

export function getToursByCategory(category: ZanzibarTour["category"]): ZanzibarTour[] {
  return zanzibarTours.filter((tour) => tour.category === category)
}
