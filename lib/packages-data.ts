export interface PackageData {
  slug: string
  title: string
  duration: string
  nights: string
  cardImage: string
  summary: string
  overview: string
  price?: string
  accommodationTown: string[]
  accommodationBeach: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  included: string[]
  excluded: string[]
  images: string[]
}

export const packagesData: PackageData[] = [
  {
    slug: "2-days-1-night",
    title: "Zanzibar 2 Days 1 Night Package",
    duration: "2 Days",
    nights: "1 Night",
    cardImage: "/mtoto por images/images/packages/dhow-palace.webp",
    summary:
      "Don't have enough time for Zanzibar? This quick package covers Spice Farm Tour, Prison Island with Snorkeling, and Stone Town with Shopping - perfect for a short visit!",
    overview:
      "Don't you have enough time for Zanzibar? We got you covered! This package is for you if you only have 2 days and want to know and explore Zanzibar. Package includes Hotel, round trip Airport transfers, and adventurous activities. We optimized these activities to make sure you get to know Zanzibar even if you will not stay long here.",
    accommodationTown: ["Mizingani Seafront Hotel", "Serena", "Tembo", "Dhow Palace"],
    accommodationBeach: ["Kendwa Rock", "Royal Zanzibar", "White Sands", "Luxury Villa"],
    itinerary: [
      {
        day: 1,
        title: "Spice Farm, Prison Island & Stone Town",
        description:
          "Based on your flight timing, we'll arrange the perfect schedule. Visit the aromatic Spice Farm, snorkel at Prison Island with giant tortoises, and explore the historic Stone Town with shopping opportunities.",
      },
      {
        day: 2,
        title: "Transfer to the Airport, Goodbye!",
        description:
          "Driver will take you from the Hotel based on your flight timings. Hope you end up with a lot of memories and a few souvenirs too!",
      },
    ],
    included: [
      "Accommodation",
      "Return airport to hotel transfers",
      "Full board meals",
      "Transport during excursions",
      "Entrances",
      "Drinking water while on excursions",
      "A professional driver/guide",
      "All Taxes and VAT",
      "Local SIM Cards",
    ],
    excluded: [
      "Visa and Insurances charges",
      "Any other meals than mentioned",
      "Any other tours other than mentioned above",
      "Personal nature like laundry, telephone calls",
      "International Airlines",
    ],
    images: [
      "/mtoto por images/images/packages/dhow-palace.webp",
      "/mtoto por images/images/packages/2days1night-a.webp",
      "/mtoto por images/images/packages/2days1night-b.webp",
    ],
  },
  {
    slug: "3-days-2-nights-stone-town",
    title: "3 Days 2 Nights Stone Town Experience",
    duration: "3 Days",
    nights: "2 Nights",
    cardImage: "/mtoto por images/images/packages/tembo-hotel.webp",
    price: "From $810",
    summary:
      "Immerse yourself in Zanzibar's culture with Stone Town Tour, Sunset Dhow Cruise, aromatic Spice Farm visit, and Prison Island adventure with giant tortoises.",
    overview:
      "Welcome to The Spice Islands Of Zanzibar! This 3-day package offers the perfect introduction to Zanzibar's rich history and natural beauty. Stay in a charming Stone Town hotel while exploring historical sites, cruising at sunset on a traditional dhow, visiting aromatic spice farms, and meeting the famous Aldabra Giant Tortoises at Prison Island.",
    accommodationTown: ["Tembo Hotel", "Dhow Palace", "Zanzibar Serena", "Mizingani Seafront"],
    accommodationBeach: [],
    itinerary: [
      {
        day: 1,
        title: "Arrival, Stone Town Tour & Sunset Dhow Cruise",
        description:
          "Our guide will meet you upon arrival and brief you about your itinerary. After check-in at your Stone Town hotel, explore the historical buildings including The Old Fort, Tippu Tip's House, The Former Slave Market, House of Wonders, and Darajani Market. Later, board a traditional Dhow for a magical Sunset Cruise - watching the sun set over the Indian Ocean is unforgettable!",
      },
      {
        day: 2,
        title: "Spice Farm Tour & Prison Island",
        description:
          "At 09:00hrs, embark on a Spice Tour to explore Zanzibar's famous spice farms. Smell and taste different spices including cloves, nutmeg, cinnamon, and cardamom. Learn about cosmetic plants, herbs, and traditional medicines. After lunch, visit Prison Island to see the Aldabra Giant Tortoises and Prison ruins. Snorkeling available depending on weather conditions.",
      },
      {
        day: 3,
        title: "Departure Day",
        description:
          "Our driver will pick you up at your scheduled time and transfer you to Zanzibar Airport or Seaport for your departure. We wish you a pleasant journey home with beautiful memories of Zanzibar!",
      },
    ],
    included: [
      "Accommodation at 4-star hotel (Tembo, Dhow Palace or similar) - 2 nights B&B",
      "Airport/Seaport transfers",
      "Stone Town Walking Tour",
      "Sunset Dhow Cruise",
      "Spice Farm Tour",
      "Prison Island trip with snorkeling option",
      "All entrance fees & guiding fees",
      "Bottled water during transfers & excursions",
      "Boat rides",
    ],
    excluded: [
      "Items of personal nature",
      "Tips for driver/guides",
      "Government taxes",
      "Meals not mentioned",
      "International flights",
    ],
    images: [
      "/mtoto por images/images/packages/tembo-hotel.webp",
      "/mtoto por images/images/packages/dhow-palace.webp",
      "/mtoto por images/images/packages/2days1night-a.webp",
    ],
  },
  {
    slug: "3-days-2-nights",
    title: "Zanzibar 3 Days 2 Nights Package",
    duration: "3 Days",
    nights: "2 Nights",
    cardImage: "/mtoto por images/images/packages/mizingani-hotel.webp",
    summary:
      "Perfect for a short getaway! Explore Stone Town's rich history, visit aromatic Spice Farms, and meet giant tortoises at Prison Island. Includes hotels, transfers, and all activities.",
    overview:
      "This package suits you if you will visit Zanzibar for 3 days. The package includes Hotels, Airport transfers, adventurous activities. We make sure you are stress-free to plan your Zanzibar vacation in terms of tours and activities for your 3 days. Also, you can contact us on Whatsapp or Email to customize the package to meet your interests!",
    accommodationTown: ["Mizingani Seafront Hotel", "Serena", "Tembo", "Dhow Palace"],
    accommodationBeach: ["Kendwa Rock", "Royal Zanzibar", "White Sands", "Luxury Villa"],
    itinerary: [
      {
        day: 1,
        title: "Transfer to Hotel",
        description:
          'On this day, our driver will meet you at the Airport or Ferry terminal for the transfer to Mizingani Seafront Hotel, in Stone Town. Driver will be showing your name. Example "John Family"',
      },
      {
        day: 2,
        title: "Stone Town, Spice Farms & Prison Island",
        description:
          "Explore by testing, smelling different spices grown and used in Zanzibar cuisines; Cardamom, Cinnamon, Black peppers, Cloves and so on. Learn the History & culture of Zanzibar locals with a local professional tour guide in Stone Town. Enjoy delicious local made Spiced rice lunch in the farm with fresh fishes and fruits. Witness and take photos of the Aldabra giant tortoises in the Prison Island.",
      },
      {
        day: 3,
        title: "Transfer to the Airport, Goodbye!",
        description:
          "Driver will take you from the Hotel based on your flight timings. Hope you end up with a lot of memories and a few souvenirs too!",
      },
    ],
    included: [
      "Accommodation",
      "Return airport to hotel transfers",
      "Full board meals",
      "Transport during excursions",
      "Entrances",
      "Drinking water while on excursions",
      "A professional driver/guide",
      "All Taxes and VAT",
      "Local SIM Cards",
    ],
    excluded: [
      "Visa and Insurances charges",
      "Any other meals than mentioned",
      "Any other tours other than mentioned above",
      "Personal nature like laundry, telephone calls",
      "International Airlines",
    ],
    images: [
      "/mtoto por images/images/packages/mizingani-hotel.webp",
      "/mtoto por images/images/packages/2days1night-a.webp",
      "/mtoto por images/images/packages/dhow-palace.webp",
    ],
  },
  {
    slug: "4-days-3-nights-stone-town",
    title: "4 Days 3 Nights Stone Town Stay",
    duration: "4 Days",
    nights: "3 Nights",
    cardImage: "/mtoto por images/images/packages/safari-blue-sandbank.webp",
    price: "From $1,044",
    summary:
      "Complete Stone Town experience with historical tour, Spice Farm, Prison Island, and exclusive Dolphin Tour with snorkeling at Mnemba Island coral reefs.",
    overview:
      "This comprehensive 4-day package keeps you based in the heart of Stone Town while experiencing the best of Zanzibar. Explore historical sites, visit spice farms, meet giant tortoises, and swim with dolphins near the pristine Mnemba Island. Enjoy authentic Swahili cuisine and the vibrant atmosphere of this UNESCO World Heritage site.",
    accommodationTown: ["Tembo Hotel", "Dhow Palace", "Zanzibar Serena", "Mizingani Seafront"],
    accommodationBeach: [],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town Walking Tour",
        description:
          "Upon arrival, our guide will greet you and brief you on your itinerary. After check-in at your Stone Town hotel, explore the historical buildings including House of Wonders, The Old Fort, Former Slave Market, Tippu Tip's House, and bustling Darajani Market. Return to your hotel for dinner and overnight.",
      },
      {
        day: 2,
        title: "Spice Tour, Swahili Lunch & Prison Island",
        description:
          "At 09:00hrs, visit the famous Spice Farms to see turmeric, cloves, nutmeg, lemon grass, vanilla and more. Taste tropical fruits in season, then enjoy an authentic Swahili lunch at a local house. Afterward, boat to Prison Island to see Aldabra Giant Tortoises and prison ruins, with optional swimming and snorkeling.",
      },
      {
        day: 3,
        title: "Dolphin Tour & Mnemba Snorkeling",
        description:
          "Early 07:00hrs pickup for an exciting trip to the North East coast. Board a boat for the Dolphin Tour where you'll have the chance to view dolphins in their natural habitat. Continue to Mnemba Island area for snorkeling in colorful coral reefs. Fresh fruits and soft drinks provided. Return to Stone Town for dinner.",
      },
      {
        day: 4,
        title: "Departure Day",
        description:
          "Our driver will pick you up at your scheduled time and transfer you to Zanzibar Airport or Seaport. Safe travels and we hope to see you again!",
      },
    ],
    included: [
      "Accommodation at Tembo Hotel or similar (B&B basis) - 3 nights",
      "Airport/Seaport transfers",
      "Stone Town Walking Tour",
      "Spice Farm Tour with Swahili lunch",
      "Prison Island trip",
      "Dolphin Tour with Mnemba snorkeling",
      "All entrance fees & guiding fees",
      "Soft drinks and fruits during Dolphin Tour",
      "Snorkeling gear",
      "Boat rides",
    ],
    excluded: [
      "Items of personal nature",
      "Extra transfers not mentioned",
      "Tips for guide or driver",
      "Meals not mentioned",
      "International flights",
    ],
    images: [
      "/mtoto por images/images/packages/safari-blue-sandbank.webp",
      "/mtoto por images/images/packages/swimming-turtles.webp",
      "/mtoto por images/images/packages/rock-arch.webp",
    ],
  },
  {
    slug: "4-days-3-nights",
    title: "Zanzibar 4 Days 3 Nights Package",
    duration: "4 Days",
    nights: "3 Nights",
    cardImage: "/mtoto por images/images/packages/2days1night-b.webp",
    summary:
      "Experience the best of Zanzibar! Full-day Safari Blue sailing adventure, Stone Town exploration, Spice Farm tour, and Prison Island - all with premium accommodation.",
    overview:
      "This package suits you if you will visit Zanzibar for 4 days. The package includes Hotels, Airport transfers, adventurous activities. We make sure you are stress-free to plan your Zanzibar vacation in terms of tours and activities for your 4 days. Also, you can contact us on Whatsapp or Email to customize the package to meet your interests!",
    accommodationTown: ["Mizingani Seafront Hotel", "Serena", "Tembo", "Dhow Palace"],
    accommodationBeach: ["Kendwa Rock", "Royal Zanzibar", "White Sands", "Luxury Villa"],
    itinerary: [
      {
        day: 1,
        title: "Transfer to Hotel",
        description:
          'On this day, our driver will meet you at the Airport or Ferry terminal for the transfer to Mizingani Seafront Hotel, in Stone Town. Driver will be showing your name. Example "John Family"',
      },
      {
        day: 2,
        title: "Full-Day Safari Blue Trip",
        description:
          "This will be full day sailing around mangroves and snorkeling along Menai bay, which is one of the best coral reefs in Zanzibar. Sailing to Kwale Island, Sandbank relaxing, Swimming & Snorkeling. Enjoy the best fresh seafood barbeque; Octopus, Lobsters, squids, Calamari, Fish and so on. Exotic fresh fruit tasting like Banana, Watermelon, Pineapple, Mangoes.",
      },
      {
        day: 3,
        title: "Stone Town, Spice Farms & Prison Island",
        description:
          "Explore by testing, smelling different spices grown and used in Zanzibar cuisines; Cardamom, Cinnamon, Black peppers, Cloves and so on. Learn the History & culture of Zanzibar locals with a local professional tour guide in Stone Town. Enjoy delicious local made Spiced rice lunch. Witness and take photos of the Aldabra giant tortoises in the Prison Island.",
      },
      {
        day: 4,
        title: "Transfer to the Airport, Goodbye!",
        description:
          "Driver will take you from the Hotel based on your flight timings. Hope you end up with a lot of memories and a few souvenirs too!",
      },
    ],
    included: [
      "Accommodation",
      "Return airport to hotel transfers",
      "Full board meals",
      "Transport during excursions",
      "Entrances",
      "Drinking water while on excursions",
      "A professional driver/guide",
      "All Taxes and VAT",
      "Local SIM Cards",
    ],
    excluded: [
      "Visa and Insurances charges",
      "Any other meals than mentioned",
      "Any other tours other than mentioned above",
      "Personal nature like laundry, telephone calls",
      "International Airlines",
    ],
    images: [
      "/mtoto por images/images/packages/2days1night-b.webp",
      "/mtoto por images/images/packages/white-sands.webp",
      "/mtoto por images/images/packages/mizingani-hotel.webp",
    ],
  },
  {
    slug: "5-days-4-nights",
    title: "Zanzibar 5 Days 4 Nights Package",
    duration: "5 Days",
    nights: "4 Nights",
    cardImage: "/mtoto por images/images/packages/white-sands.webp",
    summary:
      "The ultimate Zanzibar experience! Safari Blue adventure, Stone Town & Spice Farm, plus exclusive lunch at The Rock Restaurant with snorkeling at Blue Lagoon.",
    overview:
      "This package suits you if you will visit Zanzibar for 5 days. The package includes Hotels, Airport transfers, adventurous activities. We make sure you are stress-free to plan your Zanzibar vacation in terms of tours and activities for your 5 days. Also, you can contact us on Whatsapp or Email to customize the package to meet your interests!",
    accommodationTown: ["Mizingani Seafront Hotel", "Serena", "Tembo", "Dhow Palace"],
    accommodationBeach: ["Kendwa Rock", "Royal Zanzibar", "White Sands", "Luxury Villa"],
    itinerary: [
      {
        day: 1,
        title: "Transfer to Hotel",
        description:
          'On this day, our driver will meet you at the Airport or Ferry terminal for the transfer to Smiles Beach Hotel, Nungwi. Driver will be showing your name. Example "John Family"',
      },
      {
        day: 2,
        title: "Full-Day Safari Blue Trip",
        description:
          "This will be full day sailing around mangroves and snorkeling along Menai bay, which is one of the best coral reefs in Zanzibar. Sailing to Kwale Island, Sandbank relaxing, Swimming & Snorkeling. Enjoy the best fresh seafood barbeque; Octopus, Lobsters, squids, Calamari, Fish and so on. Exotic fresh fruit tasting like Banana, Watermelon, Pineapple, Mangoes.",
      },
      {
        day: 3,
        title: "Stone Town, Spice Farm & Prison Island",
        description:
          "Explore by testing, smelling different spices grown and used in Zanzibar cuisines; Cardamom, Cinnamon, Black peppers, Cloves and so on. Learn the History & culture of Zanzibar locals with a local professional tour guide in Stone Town. Enjoy delicious local made Spiced rice lunch. Witness and take photos of the Aldabra giant tortoises in the Prison Island.",
      },
      {
        day: 4,
        title: "Snorkeling & Lunch At The Rock Restaurant",
        description:
          "Explore the south east coast by visiting The Rock Restaurant and snorkeling in Michamvi beach. At 9:00am, once you finish Breakfast, Driver will pick you up from the Hotel to the South coast. You will start with snorkeling at Blue Lagoon near the Rock Restaurant. After snorkeling, spend your time having lunch at the Rock Restaurant. Your seat is already booked. On the way back you may check Paje and Jambiani beach.",
      },
      {
        day: 5,
        title: "Transfer to the Airport, Goodbye!",
        description:
          "Driver will take you from the Hotel based on your flight timings. Hope you end up with a lot of memories and a few souvenirs too!",
      },
    ],
    included: [
      "Accommodation",
      "Return airport to hotel transfers",
      "Full board meals",
      "Transport during excursions",
      "Entrances",
      "Drinking water while on excursions",
      "A professional driver/guide",
      "All Taxes and VAT",
      "Local SIM Cards",
    ],
    excluded: [
      "Visa and Insurances charges",
      "Any other meals than mentioned",
      "Any other tours other than mentioned above",
      "Personal nature like laundry, telephone calls",
      "International Airlines",
    ],
    images: [
      "/mtoto por images/images/packages/white-sands.webp",
      "/mtoto por images/images/packages/2days1night-a.webp",
      "/mtoto por images/images/packages/dhow-palace.webp",
    ],
  },
  {
    slug: "6-days-5-nights",
    title: "6 Days 5 Nights Town & Beach Combo",
    duration: "6 Days",
    nights: "5 Nights",
    cardImage: "/mtoto por images/images/packages/kendwa-rock.webp",
    price: "From $3,175",
    summary:
      "The perfect blend of culture and relaxation! 2 nights in historic Stone Town plus 3 nights at a luxury beach resort with all-inclusive amenities.",
    overview:
      "This comprehensive package combines the best of both worlds - the rich cultural heritage of Stone Town and the pristine beaches of Zanzibar. Start with 2 nights at Zanzibar Serena exploring historical sites and spice farms, then transfer to a 5-star beach resort for 3 nights of pure relaxation with all-inclusive dining.",
    accommodationTown: ["Zanzibar Serena Hotel", "Park Hyatt Zanzibar"],
    accommodationBeach: ["Royal Zanzibar Beach Resort", "Kendwa Rocks", "Riu Palace Zanzibar"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town Walking Tour",
        description:
          "Upon arrival, our guide will greet you and brief you about your itinerary. Transfer to your Stone Town hotel. After freshening up, embark on a historical Stone Town Tour visiting the Former Slave Market, Darajani Market, The Old Fort, House of Wonders, and Tippu Tip's house. Return to hotel for dinner and overnight.",
      },
      {
        day: 2,
        title: "Spice Tour & Prison Island Adventure",
        description:
          "At 09:00hrs, visit the famous Spice Farms to explore varieties of spices - Nutmeg, Cloves, Lemon grass, Cardamom, Ginger and more. See tropical fruits, herbs, and cosmetic plants. Taste seasonal fruits! After lunch, board a boat to Prison Island to see Aldabra Giant Tortoises and Prison Ruins. Snorkeling available based on weather and interest.",
      },
      {
        day: 3,
        title: "Transfer to Beach Resort",
        description:
          "Late morning transfer to your 5-star beach resort. Check-in and enjoy the rest of the day at leisure. Take advantage of the beautiful beach, swimming pool, and resort facilities. All-inclusive meals begin with dinner.",
      },
      {
        day: 4,
        title: "Beach Leisure Day",
        description:
          "Full day at leisure to enjoy the pristine beach, crystal-clear waters, and resort amenities. Optional water sports and activities available (contact us for arrangements). All meals included.",
      },
      {
        day: 5,
        title: "Beach Leisure Day",
        description:
          "Another relaxing day to soak up the sun, swim in the turquoise waters, or explore the local area. Optional excursions can be arranged. Enjoy the resort's spa, restaurants, and entertainment.",
      },
      {
        day: 6,
        title: "Departure Day",
        description:
          "Enjoy a leisurely breakfast before your scheduled transfer to Zanzibar Airport or Seaport. We hope you leave with wonderful memories!",
      },
    ],
    included: [
      "2 nights at 5-star Stone Town hotel (Serena or similar) - B&B",
      "3 nights at 5-star beach resort (Royal Zanzibar or similar) - All Inclusive",
      "All airport/hotel transfers",
      "Stone Town Walking Tour",
      "Spice Tour with Prison Island",
      "All entrance fees & guiding fees",
      "Bottled water during excursions & transfers",
      "Boat rides",
    ],
    excluded: [
      "Extra transfers not listed",
      "Excursions not mentioned",
      "Tips for guide or driver",
      "Items of personal nature",
      "International flights",
      "Travel insurance",
    ],
    images: [
      "/mtoto por images/images/packages/kendwa-rock.webp",
      "/mtoto por images/images/packages/white-sands.webp",
      "/mtoto por images/images/packages/luxury-villa.webp",
    ],
  },
  {
    slug: "7-days-6-nights",
    title: "7 Days 6 Nights Ultimate Zanzibar",
    duration: "7 Days",
    nights: "6 Nights",
    cardImage: "/mtoto por images/images/packages/luxury-villa.webp",
    price: "From $3,715",
    summary:
      "The ultimate luxury Zanzibar experience! 2 nights at 5-star Serena Hotel in Stone Town plus 4 nights at a premium beach resort with comprehensive tours.",
    overview:
      "This is the ultimate Zanzibar experience for those who want it all! Start with 2 nights at the prestigious Zanzibar Serena Hotel in Stone Town, exploring the UNESCO World Heritage site and visiting Prison Island. Then transfer to a luxury 5-star beach resort for 4 nights of pure bliss with a Spice Tour en-route. Perfect for honeymoons, anniversaries, or anyone seeking an unforgettable island escape.",
    accommodationTown: ["Zanzibar Serena Hotel", "Park Hyatt Zanzibar"],
    accommodationBeach: ["Royal Zanzibar Beach Resort", "White Sands Luxury Villas", "Kilindi Zanzibar"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome to Zanzibar",
        description:
          "Upon arrival, our professional guide will meet and greet you at the airport. After briefing you about your exciting week ahead, transfer to the prestigious Zanzibar Serena Hotel (or similar). Check-in and take time to relax and explore the hotel's beautiful grounds. Dinner and overnight at the hotel.",
      },
      {
        day: 2,
        title: "Stone Town Tour & Prison Island",
        description:
          "At 09:00hrs, embark on a historical Stone Town Walking Tour visiting iconic sites including the Former Slave Market, Darajani Market, The Old Fort, and House of Wonders. After lunch, head to the harbor for your Prison Island trip. See the famous Aldabra Giant Tortoises and explore the Prison Ruins. Snorkeling available based on weather. Return to hotel for dinner.",
      },
      {
        day: 3,
        title: "Spice Tour & Beach Resort Transfer",
        description:
          "At 10:00hrs, check out and enjoy a Spice Tour en-route to your beach hotel. Visit the aromatic spice farms to see cloves, nutmeg, ginger, lemon grass, black pepper and more. Taste tropical fruits and learn about herbs and cosmetic plants. Continue to your 5-star beach resort for check-in. Enjoy hotel facilities, dinner and overnight.",
      },
      {
        day: 4,
        title: "Beach Leisure Day",
        description:
          "Full day at leisure to enjoy the stunning white sand beach, crystal-clear turquoise waters, and world-class resort facilities. Relax by the pool, try water sports, or simply unwind. Optional activities can be arranged.",
      },
      {
        day: 5,
        title: "Beach Leisure Day",
        description:
          "Another beautiful day in paradise. Take advantage of the resort's spa services, explore nearby areas, or simply relax on the beach. All meals included at the resort.",
      },
      {
        day: 6,
        title: "Beach Leisure Day",
        description:
          "Your final full day to soak up the Zanzibar sun. Make the most of the beach, pool, and all the resort has to offer. Optional sunset dhow cruise or other activities available upon request.",
      },
      {
        day: 7,
        title: "Departure Day",
        description:
          "Enjoy a final breakfast at the resort before your scheduled transfer to Zanzibar Airport or Seaport. We hope you had an unforgettable week and look forward to welcoming you back to Zanzibar!",
      },
    ],
    included: [
      "2 nights at 5-star Serena Hotel (or similar) - B&B",
      "4 nights at 5-star beach resort (Royal Zanzibar or similar) - All Inclusive",
      "All airport/hotel transfers",
      "Stone Town Walking Tour",
      "Prison Island trip with snorkeling option",
      "Spice Tour",
      "All entrance fees & guiding fees",
      "Bottled water during transfers & excursions",
      "Boat rides",
    ],
    excluded: [
      "Items of personal nature",
      "Tips for driver/guides",
      "Government taxes",
      "Extra activities not mentioned",
      "International flights",
      "Travel insurance",
    ],
    images: [
      "/mtoto por images/images/packages/luxury-villa.webp",
      "/mtoto por images/images/packages/kendwa-rock.webp",
      "/mtoto por images/images/packages/rock-arch.webp",
    ],
  },
]
