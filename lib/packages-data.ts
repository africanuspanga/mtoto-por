export interface PackageData {
  slug: string
  title: string
  duration: string
  nights: string
  cardImage: string
  summary: string
  overview: string
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
    cardImage: "/images/packages/dhow-palace.webp",
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
      "/images/packages/dhow-palace.webp",
      "/images/packages/2days1night-a.webp",
      "/images/packages/2days1night-b.webp",
    ],
  },
  {
    slug: "3-days-2-nights",
    title: "Zanzibar 3 Days 2 Nights Package",
    duration: "3 Days",
    nights: "2 Nights",
    cardImage: "/images/packages/mizingani-hotel.webp",
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
      "/images/packages/mizingani-hotel.webp",
      "/images/packages/2days1night-a.webp",
      "/images/packages/dhow-palace.webp",
    ],
  },
  {
    slug: "4-days-3-nights",
    title: "Zanzibar 4 Days 3 Nights Package",
    duration: "4 Days",
    nights: "3 Nights",
    cardImage: "/images/packages/2days1night-b.webp",
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
      "/images/packages/2days1night-b.webp",
      "/images/packages/white-sands.webp",
      "/images/packages/mizingani-hotel.webp",
    ],
  },
  {
    slug: "5-days-4-nights",
    title: "Zanzibar 5 Days 4 Nights Package",
    duration: "5 Days",
    nights: "4 Nights",
    cardImage: "/images/packages/white-sands.webp",
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
      "/images/packages/white-sands.webp",
      "/images/packages/2days1night-a.webp",
      "/images/packages/dhow-palace.webp",
    ],
  },
]
