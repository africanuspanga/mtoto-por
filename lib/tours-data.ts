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
    cardImage: "/images/tours/safari-blue-sandbank-aerial.webp",
    heroImage: "/images/tours/safari-blue-sandbank-aerial.webp",
    galleryImages: [
      "/images/tours/safari-blue-sandbank-aerial.webp",
      "/images/tours/safari-blue-seafood.webp",
      "/images/tours/safari-blue-rock.webp",
      "/images/tours/safari-blue-arch-couple.webp",
      "/images/tours/dhow-boat-tourists.jpg",
      "/images/tours/beach-buffet.webp",
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
    cardImage: "/images/tours/turtles-floating.webp",
    heroImage: "/images/tours/turtles-floating.webp",
    galleryImages: [
      "/images/tours/turtles-floating.webp",
      "/images/tours/turtles-feeding.webp",
      "/images/tours/sunset-dhow-silhouette.webp",
      "/images/tours/nungwi-beach-aerial.webp",
      "/images/packages/swimming-turtles.webp",
      "/images/tours/dhow-boat-tourists.jpg",
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
    cardImage: "/images/tours/colobus-monkey-family.webp",
    heroImage: "/images/tours/colobus-monkey-family.webp",
    galleryImages: [
      "/images/tours/colobus-monkey-family.webp",
      "/images/tours/jozani-monkey-eating.webp",
      "/images/tours/spice-annatto.webp",
      "/images/tours/stone-town-fort.webp",
      "/images/tours/spice-farm.webp",
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
    cardImage: "/images/tours/prison-island-tortoise.webp",
    heroImage: "/images/tours/prison-island-tortoise.webp",
    galleryImages: [
      "/images/tours/prison-island-tortoise.webp",
      "/images/tours/colobus-monkey-family.webp",
      "/images/tours/spice-annatto.webp",
      "/images/tours/jozani-forest.webp",
      "/images/tours/beach-buffet.webp",
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
    cardImage: "/images/tours/spice-annatto.webp",
    heroImage: "/images/tours/spice-annatto.webp",
    galleryImages: [
      "/images/tours/spice-annatto.webp",
      "/images/tours/prison-island-tortoise.webp",
      "/images/tours/stone-town-fort.webp",
      "/images/tours/spice-farm.webp",
      "/images/tours/beach-buffet.webp",
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
      "Soft Drinks",
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
    cardImage: "/images/tours/nakupenda-sandbank.webp",
    heroImage: "/images/tours/nakupenda-sandbank.webp",
    galleryImages: [
      "/images/tours/nakupenda-sandbank.webp",
      "/images/tours/prison-island-tortoise.webp",
      "/images/tours/beach-buffet.webp",
      "/images/tours/snorkeling-coral-reef.webp",
      "/images/tours/dhow-boat-tourists.jpg",
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
    cardImage: "/images/tours/cultural-cooking.webp",
    heroImage: "/images/tours/cultural-cooking.webp",
    galleryImages: [
      "/images/tours/cultural-cooking.webp",
      "/images/tours/stone-town.webp",
      "/images/tours/spice-farm.webp",
      "/images/tours/stone-town-fort.webp",
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
  {
    id: "honeymoon-experience",
    slug: "honeymoon-experience",
    title: "Zanzibar Honeymoon Experience",
    subtitle: "The Perfect Romantic Getaway",
    duration: "Full Day",
    category: "full-day",
    cardImage: "/images/tours/honeymoon-beach.jpg",
    heroImage: "/images/tours/honeymoon-beach.jpg",
    galleryImages: [
      "/images/tours/honeymoon-beach.jpg",
      "/images/tours/sunset-dhow-silhouette.webp",
      "/images/tours/nungwi-beach-aerial.webp",
      "/images/tours/safari-blue-arch-couple.webp",
      "/images/packages/luxury-villa.webp",
    ],
    summary:
      "Experience the ultimate romantic getaway in Zanzibar. From private beach dinners to sunset dhow cruises, create unforgettable memories with your loved one.",
    description:
      "Imagine waking up to the sound of gentle waves, strolling hand in hand along endless white-sand beaches, and watching the sun dip into the Indian Ocean as a golden glow paints the sky. Welcome to Zanzibar—a paradise where love and romance come alive. This honeymoon experience is crafted to make your special trip truly unforgettable, from idyllic beaches and private escapes to romantic dining experiences under the stars.",
    highlights: [
      "Idyllic Beaches & Private Escapes on secluded coves",
      "Romantic candlelit dinner under the stars by the ocean",
      "Private sunset dhow cruise with champagne",
      "Couples spa treatment at a luxury resort",
      "Island hopping and snorkeling adventures together",
      "Unforgettable Zanzibar sunsets—picture-perfect moments for two",
    ],
    included: [
      "Private romantic beach dinner setup",
      "Sunset dhow cruise for two",
      "Champagne and tropical refreshments",
      "Professional photography session",
      "Couples spa treatment",
      "Private transfers throughout",
      "Dedicated romantic coordinator",
    ],
    excluded: ["Accommodation", "Flights", "Tips for staff", "Personal expenses", "Travel insurance"],
    tags: ["Romance", "Honeymoon", "Couples", "Sunset", "Private"],
  },

  // Half-day tours below
  {
    id: "jozani-forest",
    slug: "jozani-forest-tour",
    title: "Jozani Forest Tour",
    subtitle: "Zanzibar's Natural Treasure",
    duration: "Half Day (3-4 hours)",
    category: "half-day",
    cardImage: "/images/tours/jozani-forest.webp",
    heroImage: "/images/tours/jozani-forest.webp",
    galleryImages: [
      "/images/tours/jozani-forest.webp",
      "/images/tours/colobus-monkey-family.webp",
      "/images/tours/jozani-monkey-eating.webp",
      "/images/tours/cultural-cooking.webp",
    ],
    summary:
      "Step into the lush greenery of Jozani Chwaka Bay National Park, home to the rare red colobus monkeys. Perfect for nature lovers and photographers.",
    description:
      "Step into the lush greenery of Jozani Chwaka Bay National Park, the only national park in Zanzibar and home to the rare red colobus monkeys. This half-day tour is perfect for nature lovers, photographers, and anyone seeking to experience the island's wild side. The Jozani Forest Tour offers a refreshing escape into nature and a chance to see wildlife found nowhere else on Earth.",
    highlights: [
      "Meet the Red Colobus Monkeys unique to Zanzibar",
      "Mangrove Boardwalk discovering Zanzibar's ecosystem",
      "Forest Trails under towering mahogany and eucalyptus trees",
      "Spot butterflies, birds, and other wildlife",
      "Learn about medicinal plants and conservation efforts",
      "Experience the island's natural biodiversity",
    ],
    included: [
      "Professional local guide",
      "Entrance fees to Jozani Forest",
      "Guided nature walks",
      "Mangrove boardwalk tour",
      "Bottled water",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Lunch", "Tips for guide", "Personal expenses", "Souvenirs"],
    tags: ["Wildlife", "Nature", "Monkeys", "Forest", "Eco-Tour"],
  },
  {
    id: "spice-farm",
    slug: "spice-farm-tour",
    title: "Spice Farm Tour",
    subtitle: "Discover the Spice Islands",
    duration: "Half Day (3-4 hours)",
    category: "half-day",
    cardImage: "/images/tours/spice-farm.webp",
    heroImage: "/images/tours/spice-farm.webp",
    galleryImages: [
      "/images/tours/spice-farm.webp",
      "/images/tours/spice-annatto.webp",
      "/images/tours/cultural-cooking.webp",
      "/images/tours/stone-town.webp",
    ],
    summary:
      "Experience why Zanzibar is referred to as 'The Spice Islands'. Explore a well-designed spice farm and learn about spices, tropical fruits, and herbs.",
    description:
      "This half-day tour provides you with a very unique experience which proves why Zanzibar is referred to as 'The Spice Islands'. The Islands of Zanzibar have been growing varieties of spices along with tropical fruits for centuries. We take you to a well-designed spice farm in the countryside of Zanzibar to explore and learn about spices like Cinnamon, Cloves, Vanilla, Cardamom, Nutmeg, and lemon grass.",
    highlights: [
      "Learn full details about spices and herbs grown in Zanzibar",
      "Smell and taste different spices",
      "Drink fresh coconut juice in the farm",
      "Learn about culture and traditions regarding Zanzibar spices",
      "Enjoy delicious spiced Rice (Pilau) lunch with tropical fruits",
      "Take amazing photos and shop for spices at the farm",
    ],
    included: [
      "Tour Guide (English, French, German, Italian)",
      "Entrance fees",
      "Tropical Fruits",
      "Drinking water",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Lunch (available for extra charge)", "Tips for guide", "Personal expenses", "Souvenirs"],
    tags: ["Spices", "Culture", "Farm", "Tasting", "Cooking"],
  },
  {
    id: "nakupenda-sandbank",
    slug: "nakupenda-sandbank-tour",
    title: "Nakupenda Sandbank",
    subtitle: "Paradise in the Indian Ocean",
    duration: "Half Day (4-5 hours)",
    category: "half-day",
    cardImage: "/images/tours/nakupenda-sandbank.webp",
    heroImage: "/images/tours/nakupenda-sandbank.webp",
    galleryImages: [
      "/images/tours/nakupenda-sandbank.webp",
      "/images/tours/mnemba-fish.webp",
      "/images/tours/snorkeling-surface.webp",
      "/images/tours/safari-blue-sandbank-aerial.webp",
    ],
    summary:
      "Visit the stunning Nakupenda Sandbank just off Stone Town. Enjoy snorkeling in spectacular underwater world, sandbank relaxing, and tropical fruits.",
    description:
      "Nakupenda Sandbank is located just off Stone Town, around 20 minutes by local boat. The underwater world at Nakupenda Sandbank is unbelievably spectacular with countless colorful fishes and sea creatures surviving among the coral reefs. You will enjoy sandbank relaxing and tropical fruits like Banana, Pineapple, Mangoes, and Watermelon during or after snorkeling.",
    highlights: [
      "Swimming and sandbank relaxing",
      "Seafood BBQ Lunch with Octopus, Lobsters, Squids, Prawns",
      "Tropical Fruits: Mangoes, Bananas, Pineapple, Watermelon",
      "Traditional wooden boat experience",
      "Sunbathing on pristine white sand",
      "Snorkeling in crystal-clear waters",
    ],
    included: [
      "English Speaking Guide",
      "Boat transfer",
      "Swimming Equipment",
      "Lunch (Seafood BBQ, Chicken, or Vegetarian)",
      "Tropical Fruits",
      "Soft Drinks",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Alcoholic beverages", "Tips for guide", "Personal expenses"],
    tags: ["Sandbank", "Snorkeling", "Seafood", "Beach", "Swimming"],
  },
  {
    id: "kizimkazi-dolphins",
    slug: "kizimkazi-dolphins-tour",
    title: "Kizimkazi Dolphins",
    subtitle: "Swim with Wild Dolphins",
    duration: "Half Day (3 hours)",
    category: "half-day",
    cardImage: "/images/tours/kizimkazi-dolphins.webp",
    heroImage: "/images/tours/kizimkazi-dolphins.webp",
    galleryImages: [
      "/images/tours/kizimkazi-dolphins.webp",
      "/images/tours/dolphins-underwater.webp",
      "/images/tours/dolphins-boat-watching.webp",
      "/images/tours/snorkeling-surface.webp",
    ],
    summary:
      "Join this amazing experience in Kizimkazi to witness schools of dolphins hopping in the clear blue ocean and swim with these beautiful creatures.",
    description:
      "Join this amazing and unique experience in Kizimkazi, Zanzibar. Discover the home to a quaint fishing village, and witness schools of dolphins hopping in the clear blue ocean while on a boat tour. You can also jump and swim with these beautiful creatures. Kizimkazi village is the famous home of Dolphins in Zanzibar, located on the south coast.",
    highlights: [
      "Experience local made wooden boat tour",
      "Swim with dolphins if you're lucky",
      "Tropical Fruits: Mangoes, Bananas, Pineapple, Watermelon",
      "Watch dolphins in their natural habitat",
      "Visit the historic Kizimkazi village",
      "Crystal clear waters of the Indian Ocean",
    ],
    included: [
      "English Speaking Guide",
      "Boat",
      "Swimming Equipment",
      "Tropical Fruits",
      "Drinking water",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Lunch", "Tips for guide", "Personal expenses"],
    tags: ["Dolphins", "Swimming", "Wildlife", "Boat", "Ocean"],
  },
  {
    id: "mnemba-snorkeling",
    slug: "mnemba-island-snorkeling-tour",
    title: "Mnemba Island Snorkeling",
    subtitle: "Underwater Paradise",
    duration: "Half Day (4-5 hours)",
    category: "half-day",
    cardImage: "/images/tours/mnemba-snorkeling.webp",
    heroImage: "/images/tours/mnemba-fish.webp",
    galleryImages: [
      "/images/tours/mnemba-snorkeling.webp",
      "/images/tours/mnemba-fish.webp",
      "/images/tours/mnemba-snorkeling-fish.webp",
      "/images/tours/snorkeling-coral-couple.webp",
    ],
    summary:
      "Mnemba Island offers the best snorkeling in Zanzibar with spectacular underwater world, colorful fish, coral reefs, and marine life.",
    description:
      "Mnemba Island, off the northeast coast of Zanzibar, is one of the best places to go snorkeling. The underwater world is unbelievably spectacular with countless colorful fishes and sea creatures among the coral reefs. Fishing activities are forbidden near Mnemba Island, creating a paradise for variety of sea creatures including Starfishes, Moorish Idols, Snappers, and green turtles.",
    highlights: [
      "Swimming and snorkeling around Mnemba corals",
      "Seafood BBQ Lunch (extra cost) with Octopus, Lobsters, Squids",
      "Tropical Fruits: Mangoes, Bananas, Pineapple, Watermelon",
      "Traditional local boat experience",
      "Chance to spot dolphins",
      "See green turtles and colorful marine life",
    ],
    included: [
      "English Speaking Guide",
      "Local Boat",
      "Snorkeling Equipment",
      "Tropical Fruits",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Lunch (available for extra charge)", "Tips for guide", "Personal expenses"],
    tags: ["Snorkeling", "Marine Life", "Coral Reef", "Turtles", "Island"],
  },
  {
    id: "sunset-dhow-cruise",
    slug: "sunset-dhow-cruise",
    title: "Sunset Dhow Cruise",
    subtitle: "Romance on the Indian Ocean",
    duration: "Half Day (2-3 hours)",
    category: "half-day",
    cardImage: "/images/tours/sunset-dhow-cruise.webp",
    heroImage: "/images/tours/sunset-dhow-silhouette.webp",
    galleryImages: [
      "/images/tours/sunset-dhow-cruise.webp",
      "/images/tours/sunset-dhow-silhouette.webp",
      "/images/tours/sunset-dhow-people.webp",
      "/images/tours/sunset-dhow-golden.webp",
    ],
    summary:
      "Enjoy breathtaking views of Stone Town in the evening by cruising on a traditional Arabian dhow. One of the most romantic tours in Zanzibar.",
    description:
      "Enjoy the breathtaking views of Stone Town in the evening by cruising on one of our traditional Arabian dhow, one of the most romantic tours with your loved ones in Zanzibar. We offer daily sunset dhow cruise trips in Stone Town and also for Nungwi and Kendwa beach. Our trip includes delicious locally made snacks and drinks.",
    highlights: [
      "Cruising with wooden traditional Arabian Dhow",
      "Best way to view the coast of Stone Town, Kendwa & Nungwi",
      "Taste locally prepared snacks & drinks",
      "Sailing with traditional boat",
      "Best way to see the sunset in Zanzibar",
      "Traditional coastal music performance",
    ],
    included: [
      "English Speaking Guide",
      "Sailing Boat",
      "Local Snacks & Drinks",
      "Traditional Music Performance",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Alcoholic beverages", "Tips for guide", "Personal expenses"],
    tags: ["Sunset", "Romance", "Dhow", "Sailing", "Stone Town"],
  },
  {
    id: "stone-town-tour",
    slug: "stone-town-tour",
    title: "Stone Town Walking Tour",
    subtitle: "UNESCO World Heritage Site",
    duration: "Half Day (3-4 hours)",
    category: "half-day",
    cardImage: "/images/tours/stone-town.webp",
    heroImage: "/images/tours/stone-town-fort.webp",
    galleryImages: [
      "/images/tours/stone-town.webp",
      "/images/tours/stone-town-fort.webp",
      "/images/tours/cultural-cooking.webp",
      "/images/tours/spice-farm.webp",
    ],
    summary:
      "Explore the UNESCO World Heritage Site of Stone Town with its narrow streets, historic buildings, and rich Swahili culture.",
    description:
      "Discover the fascinating history and culture of Stone Town, a UNESCO World Heritage Site. Walk through narrow winding streets lined with coral stone buildings, ornate wooden doors, and bustling markets. Visit iconic sites including Freddie Mercury's birthplace, the House of Wonders, Old Fort, Sultan's Palace, and the vibrant Darajani Market.",
    highlights: [
      "Visit Freddie Mercury's birthplace",
      "Explore the House of Wonders museum",
      "See the historic Old Fort (Ngome Kongwe)",
      "Walk through Darajani Market",
      "Admire traditional Zanzibar carved doors",
      "Learn about Swahili culture and history",
    ],
    included: [
      "Professional local guide",
      "Entrance fees to museums",
      "Drinking water",
      "All government fees",
      "Hotel Pick up/Drop-off (extra charge)",
    ],
    excluded: ["Lunch", "Tips for guide", "Personal expenses", "Souvenirs"],
    tags: ["History", "Culture", "UNESCO", "Architecture", "Walking Tour"],
  },
]

export const getFullDayTours = () => zanzibarTours.filter((tour) => tour.category === "full-day")
export const getHalfDayTours = () => zanzibarTours.filter((tour) => tour.category === "half-day")
export const getTourBySlug = (slug: string) => zanzibarTours.find((tour) => tour.slug === slug)

export const getRelatedTours = (currentSlug: string, limit = 3) => {
  const currentTour = getTourBySlug(currentSlug)
  if (!currentTour) return zanzibarTours.slice(0, limit)

  return zanzibarTours
    .filter((tour) => tour.slug !== currentSlug && tour.category === currentTour.category)
    .slice(0, limit)
}

export const allTours = zanzibarTours
