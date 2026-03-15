import { Metadata } from "next"

const baseUrl = "https://www.mtotoportours.co.tz"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mtoto Por Tours | Zanzibar Tours, Tanzania Safaris & Car Rental",
    template: "%s | Mtoto Por Tours",
  },
  description:
    "Book unforgettable Zanzibar tours, Tanzania safaris, and car rentals with Mtoto Por Tours. Stone Town, spice tours, Safari Blue, Serengeti, Ngorongoro & more.",
  keywords: [
    "Zanzibar tours",
    "Tanzania safaris",
    "Stone Town tours",
    "spice tours Zanzibar",
    "Safari Blue Zanzibar",
    "Prison Island tour",
    "Jozani Forest tour",
    "Mnemba Island snorkeling",
    "Serengeti safari",
    "Ngorongoro crater safari",
    "car rental Zanzibar",
    "Zanzibar airport transfers",
  ],
}

// Home Page Metadata
export const homeMetadata: Metadata = {
  title: "Mtoto Por Tours | Zanzibar Tours, Tanzania Safaris & Car Rental",
  description:
    "Book unforgettable Zanzibar tours, Tanzania safaris, and car rentals with Mtoto Por Tours. Stone Town, spice tours, Safari Blue, Serengeti, Ngorongoro & more. Trusted local tour operator since 2015.",
  keywords: [
    "Zanzibar tours",
    "Tanzania safaris",
    "Stone Town tours",
    "spice tours Zanzibar",
    "Safari Blue Zanzibar",
    "Prison Island tour",
    "Jozani Forest tour",
    "Mnemba Island snorkeling",
    "Serengeti safari",
    "Ngorongoro crater safari",
    "car rental Zanzibar",
    "Zanzibar airport transfers",
    "Zanzibar beach holidays",
    "Dolphin tour Zanzibar",
    "Mtoto Por Tours",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Mtoto Por Tours | Zanzibar Tours & Tanzania Safaris",
    description: "Your trusted partner for unforgettable Zanzibar tours and Tanzania safaris. Book online today!",
    url: baseUrl,
    type: "website",
  },
}

// About Us Page Metadata
export const aboutMetadata: Metadata = {
  title: "About Us | Zanzibar Tour Operator & Safari Company",
  description:
    "Learn about Mtoto Por Tours, a trusted Zanzibar tour operator with 20+ years of experience. Discover our mission, values, and commitment to unforgettable travel experiences.",
  keywords: [
    "about Mtoto Por Tours",
    "Zanzibar tour operator",
    "Tanzania safari company",
    "Zanzibar travel agency",
    "local tour guide Zanzibar",
    "Zanzibar tourism company",
  ],
  alternates: {
    canonical: `${baseUrl}/about-us`,
  },
  openGraph: {
    title: "About Mtoto Por Tours | Zanzibar Tour Operator",
    description: "Discover the story behind Mtoto Por Tours - your trusted Zanzibar tour operator with 20+ years of experience.",
    url: `${baseUrl}/about-us`,
    type: "website",
  },
}

// Zanzibar Tours Page Metadata
export const toursMetadata: Metadata = {
  title: "Zanzibar Tours | Stone Town, Spice Tours, Safari Blue & More",
  description:
    "Discover the best Zanzibar tours including Stone Town, spice farms, Safari Blue, Prison Island, Jozani Forest, dolphin tours & Mnemba snorkeling. Book online with local experts.",
  keywords: [
    "Zanzibar tours",
    "Stone Town tour",
    "spice farm tour Zanzibar",
    "Safari Blue tour",
    "Prison Island tour",
    "Jozani Forest tour",
    "dolphin tour Zanzibar",
    "Mnemba snorkeling",
    "sunset dhow cruise",
    "turtle sanctuary Zanzibar",
    "Zanzibar day trips",
    "Zanzibar activities",
  ],
  alternates: {
    canonical: `${baseUrl}/zanzibar-tours`,
  },
  openGraph: {
    title: "Best Zanzibar Tours | Stone Town, Safari Blue & Spice Farms",
    description: "Book the best Zanzibar tours with local experts. Stone Town, spice farms, Safari Blue, Prison Island & more.",
    url: `${baseUrl}/zanzibar-tours`,
    type: "website",
  },
}

// Tanzania Safaris Page Metadata
export const safarisMetadata: Metadata = {
  title: "Tanzania Safaris | Serengeti, Ngorongoro, Selous & Mikumi",
  description:
    "Book unforgettable Tanzania safaris to Serengeti, Ngorongoro Crater, Selous, and Mikumi. Day trips and multi-day adventures from Zanzibar. Expert guides, all-inclusive packages.",
  keywords: [
    "Tanzania safaris",
    "Serengeti safari",
    "Ngorongoro crater safari",
    "Selous safari",
    "Mikumi safari",
    "Gombe chimpanzee tracking",
    "Tarangire safari",
    "Lake Manyara safari",
    "safari from Zanzibar",
    "day trip safari Tanzania",
    "Big Five safari",
    "wildlife safari Tanzania",
  ],
  alternates: {
    canonical: `${baseUrl}/tanzania-safaris`,
  },
  openGraph: {
    title: "Tanzania Safaris | Serengeti, Ngorongoro & Selous",
    description: "Book unforgettable Tanzania safaris. Serengeti, Ngorongoro Crater, Selous & Mikumi. Day trips & multi-day adventures from Zanzibar.",
    url: `${baseUrl}/tanzania-safaris`,
    type: "website",
  },
}

// Packages Page Metadata
export const packagesMetadata: Metadata = {
  title: "Zanzibar Tour Packages | All-Inclusive Vacation Deals",
  description:
    "All-inclusive Zanzibar tour packages from 2 to 14 days. Includes accommodation, airport transfers, meals, and guided tours. Custom packages available. Book your dream Zanzibar vacation.",
  keywords: [
    "Zanzibar tour packages",
    "Zanzibar vacation packages",
    "all inclusive Zanzibar",
    "Zanzibar holiday packages",
    "Zanzibar honeymoon packages",
    "Zanzibar beach packages",
    "Stone Town packages",
    "Zanzibar travel packages",
  ],
  alternates: {
    canonical: `${baseUrl}/packages`,
  },
  openGraph: {
    title: "Zanzibar Tour Packages | All-Inclusive Vacation Deals",
    description: "All-inclusive Zanzibar packages from 2-14 days. Accommodation, transfers, meals & tours included. Custom packages available.",
    url: `${baseUrl}/packages`,
    type: "website",
  },
}

// Transfers Page Metadata
export const transfersMetadata: Metadata = {
  title: "Zanzibar Airport Transfers & Car Rental",
  description:
    "Book reliable Zanzibar airport transfers (ZNZ) and car rentals with driver. 24/7 service, comfortable vehicles, professional drivers. Hotel pickup and drop-off available.",
  keywords: [
    "Zanzibar airport transfer",
    "ZNZ airport transfer",
    "Zanzibar car rental",
    "Zanzibar taxi",
    "Zanzibar private transfer",
    "Stone Town transfer",
    "Nungwi transfer",
    "Kendwa transfer",
    "Paje transfer",
    "Jambiani transfer",
    "Zanzibar chauffeur service",
  ],
  alternates: {
    canonical: `${baseUrl}/transfers`,
  },
  openGraph: {
    title: "Zanzibar Airport Transfers & Car Rental | 24/7 Service",
    description: "Reliable Zanzibar airport transfers and car rentals. 24/7 service, comfortable vehicles, professional drivers.",
    url: `${baseUrl}/transfers`,
    type: "website",
  },
}

// Booking Page Metadata
export const bookingMetadata: Metadata = {
  title: "Book Your Tour | Online Reservation | Mtoto Por Tours",
  description:
    "Book your Zanzibar tour or Tanzania safari online. Easy booking process, instant confirmation, flexible payment options. Secure your adventure today with Mtoto Por Tours.",
  keywords: [
    "book Zanzibar tour",
    "book Tanzania safari",
    "Zanzibar tour booking",
    "safari booking online",
    "reserve Zanzibar tour",
    "Mtoto Por Tours booking",
  ],
  alternates: {
    canonical: `${baseUrl}/booking`,
  },
  openGraph: {
    title: "Book Your Tour | Online Reservation",
    description: "Book your Zanzibar tour or Tanzania safari online. Easy booking, instant confirmation, flexible payments.",
    url: `${baseUrl}/booking`,
    type: "website",
  },
}

// Contact Page Metadata
export const contactMetadata: Metadata = {
  title: "Contact Us | Get in Touch | Mtoto Por Tours Zanzibar",
  description:
    "Contact Mtoto Por Tours for Zanzibar tours and Tanzania safaris. WhatsApp +255 717 079200, email mtotoportours@gmail.com. We're here to help plan your perfect trip.",
  keywords: [
    "contact Mtoto Por Tours",
    "Zanzibar tour contact",
    "Mtoto Por Tours phone",
    "Mtoto Por Tours WhatsApp",
    "Zanzibar tour operator contact",
    "book Zanzibar tour",
  ],
  alternates: {
    canonical: `${baseUrl}/contact-us`,
  },
  openGraph: {
    title: "Contact Us | Mtoto Por Tours Zanzibar",
    description: "Contact us for Zanzibar tours and Tanzania safaris. WhatsApp +255 717 079200. Plan your perfect trip.",
    url: `${baseUrl}/contact-us`,
    type: "website",
  },
}

// FAQs Page Metadata
export const faqsMetadata: Metadata = {
  title: "FAQs | Frequently Asked Questions | Zanzibar Tours & Safaris",
  description:
    "Find answers to frequently asked questions about Zanzibar tours, Tanzania safaris, bookings, payments, cancellations, and travel requirements. Get help planning your trip.",
  keywords: [
    "Zanzibar tour FAQ",
    "Tanzania safari FAQ",
    "Zanzibar travel questions",
    "safari booking FAQ",
    "Zanzibar visa requirements",
    "Zanzibar travel tips",
  ],
  alternates: {
    canonical: `${baseUrl}/faqs`,
  },
  openGraph: {
    title: "FAQs | Zanzibar Tours & Safaris",
    description: "Find answers about Zanzibar tours, Tanzania safaris, bookings, and travel requirements.",
    url: `${baseUrl}/faqs`,
    type: "website",
  },
}

// About Zanzibar Page Metadata
export const aboutZanzibarMetadata: Metadata = {
  title: "About Zanzibar | The Spice Island Guide | History & Culture",
  description:
    "Discover Zanzibar - the Spice Island. Learn about its rich history, culture, Stone Town, beaches, spices, and why it's a must-visit destination. Your complete Zanzibar guide.",
  keywords: [
    "about Zanzibar",
    "Zanzibar history",
    "Zanzibar culture",
    "Spice Island",
    "Stone Town history",
    "Zanzibar beaches",
    "Zanzibar travel guide",
    "Zanzibar tourism",
  ],
  alternates: {
    canonical: `${baseUrl}/about-zanzibar`,
  },
  openGraph: {
    title: "About Zanzibar | The Spice Island Guide",
    description: "Discover Zanzibar's rich history, culture, and attractions. Your complete guide to the Spice Island.",
    url: `${baseUrl}/about-zanzibar`,
    type: "website",
  },
}

// Zanzibar Weather Page Metadata
export const weatherMetadata: Metadata = {
  title: "Zanzibar Weather | Best Time to Visit | Climate Guide",
  description:
    "Plan your trip with our Zanzibar weather guide. Learn about the best time to visit, dry and rainy seasons, temperatures, and what to expect each month.",
  keywords: [
    "Zanzibar weather",
    "Zanzibar climate",
    "best time to visit Zanzibar",
    "Zanzibar rainy season",
    "Zanzibar dry season",
    "Zanzibar temperature",
    "Zanzibar weather by month",
  ],
  alternates: {
    canonical: `${baseUrl}/zanzibar-weather`,
  },
  openGraph: {
    title: "Zanzibar Weather | Best Time to Visit",
    description: "Plan your trip with our Zanzibar weather guide. Best time to visit, seasons, and monthly temperatures.",
    url: `${baseUrl}/zanzibar-weather`,
    type: "website",
  },
}

// Privacy Policy Page Metadata
export const privacyMetadata: Metadata = {
  title: "Privacy Policy | Mtoto Por Tours",
  description: "Read our privacy policy to understand how Mtoto Por Tours collects, uses, and protects your personal information.",
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  robots: {
    index: false,
    follow: true,
  },
}

// Terms & Conditions Page Metadata
export const termsMetadata: Metadata = {
  title: "Terms & Conditions | Mtoto Por Tours",
  description: "Read our terms and conditions for booking tours, cancellations, refunds, and using our services.",
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
  robots: {
    index: false,
    follow: true,
  },
}
