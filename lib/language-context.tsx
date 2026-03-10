"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// English only translations - All keys included
const translations: Record<string, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.about-us": "About Us",
  "nav.tours": "Tours",
  "nav.safaris": "Safaris",
  "nav.packages": "Packages",
  "nav.car-rental": "Car Rental",
  "nav.contact-us": "Contact Us",
  "nav.book": "Book Your Tour",

  // Hero
  "hero.title1": "Explore Zanzibar & East Africa",
  "hero.title2": "Discover Tanzania's Wildlife",
  "hero.description1": "Experience unforgettable adventures, safaris, island tours and travel services with Mtoto Por Tours.",
  "hero.description2": "Premium safaris and exclusive island experiences await you in the heart of Africa",
  "hero.exploreTours": "Explore Tours",
  "hero.bookNow": "Book Your Tour",

  // About Section
  "about.badge": "About Us",
  "about.title": "Your Trusted Partner in Unforgettable Adventures",
  "about.description1": "Mtoto Por Tours is a fully established travel company operating in Zanzibar and across East Africa. We provide a wide range of travel services including tours and travel, car rentals, aviation support, events management, and tourism experiences.",
  "about.description2": "Our passion is to deliver efficient, reliable, and personalized customer service to every traveler. We combine international travel standards with deep local expertise to provide authentic East African adventures.",
  "about.highlight1": "Expert local guides",
  "about.highlight2": "Personalized service",
  "about.highlight3": "International standards",
  "about.highlight4": "Sustainable tourism",
  "about.learnMore": "Discover Our Tours",
  "about.yearsExperience": "Years Experience",

  // About Page
  "aboutPage.title": "About Us",
  "aboutPage.subtitle": "Your Trusted Partner in Unforgettable Adventures",
  "aboutPage.missionTitle": "Our Mission",
  "aboutPage.missionDesc": "To help travelers achieve their dream journeys by providing smart travel solutions and exceptional service that exceeds expectations in quality, value, and reliability.",
  "aboutPage.visionTitle": "Our Vision",
  "aboutPage.visionDesc": "To become the number one choice for tour and travel services in East Africa by delivering service beyond customer satisfaction and demand.",
  "aboutPage.whyChooseUs": "Why Choose Us",
  "aboutPage.experience": "Expert Local Knowledge",
  "aboutPage.experienceDesc": "Deep understanding of East African destinations and wildlife.",
  "aboutPage.localGuides": "Professional Team",
  "aboutPage.localGuidesDesc": "Experienced staff dedicated to your comfort and safety.",
  "aboutPage.customTours": "Customized Solutions",
  "aboutPage.customToursDesc": "Tailored experiences to match your preferences and budget.",
  "aboutPage.support": "24/7 Support",
  "aboutPage.supportDesc": "Always available to assist you before, during, and after your trip.",

  // Services Section
  "services.badge": "Our Services",
  "services.title": "Our Travel Services",
  "services.subtitle": "Discover our range of exclusive tours, safaris, and travel services",
  "services.tours.title": "Safari Adventures",
  "services.tours.description": "Experience Tanzania's incredible wildlife and natural landscapes. From the Serengeti plains to Mount Kilimanjaro.",
  "services.safaris.title": "Holiday Packages",
  "services.safaris.description": "We provide carefully designed vacation packages that allow travelers to explore Tanzania's beaches, historical towns, and natural wonders.",
  "services.packages.title": "Hotel Booking",
  "services.packages.description": "We work with selected hotels and lodges that provide comfortable accommodation while supporting sustainable tourism.",
  "services.transfers.title": "Car Hire Services",
  "services.transfers.description": "Reliable and affordable car rental services in Zanzibar. Our fleet includes saloon cars, minivans, safari vehicles, and buses.",

  // Safaris Section
  "safaris.badge": "Tanzania Safaris",
  "safaris.title": "Witness Africa's Greatest Wildlife",
  "safaris.description": "From the legendary Serengeti to Ngorongoro Crater, experience Tanzania's world-famous national parks.",
  "safaris.viewAll": "View More Safaris",

  // Packages Section
  "packages.badge": "Holiday Packages",
  "packages.title": "All-Inclusive Getaways",
  "packages.description": "Hassle-free vacation packages combining the best tours, accommodations, and experiences.",
  "packages.viewAll": "View All Packages",

  // Transfers Section (Homepage)
  "transfers.badge": "Transfer Services",
  "transfers.title": "Our Types of Transport",
  "transfers.description": "We use the best cars to satisfy our customers. Our vehicles suit all types of travelers - single travelers, couples, families, and groups.",
  "transfers.viewAll": "View Transfer Services",
  "transfers.passengers": "passengers",
  "transfers.alphard.name": "Toyota Alphard",
  "transfers.alphard.capacity": "6",
  "transfers.alphard.description": "Luxury minivan with comfortable seating, air conditioning, and spacious luggage area. Perfect for families and small groups.",
  "transfers.hiace.name": "Toyota Hiace",
  "transfers.hiace.capacity": "8",
  "transfers.hiace.description": "Spacious van ideal for medium-sized groups. Features comfortable seats and air conditioning for a pleasant journey.",
  "transfers.coaster.name": "Toyota Coaster",
  "transfers.coaster.capacity": "22",
  "transfers.coaster.description": "Comfortable bus for large groups, events, and corporate transfers. Equipped with air conditioning and reclining seats.",

  // Transfers Page
  "transfersPage.title": "Car Rental Services",
  "transfersPage.subtitle": "Reliable Vehicles for Your Journey",
  "transfersPage.whyBook": "Why Rent With Us?",
  "transfersPage.benefit1.title": "Affordable Rates",
  "transfersPage.benefit1.desc": "Competitive pricing with no hidden fees.",
  "transfersPage.benefit2.title": "Well-Maintained Fleet",
  "transfersPage.benefit2.desc": "Regularly serviced vehicles for your safety.",
  "transfersPage.benefit3.title": "Professional Drivers",
  "transfersPage.benefit3.desc": "Experienced and knowledgeable drivers available.",
  "transfersPage.benefit4.title": "Flexible Options",
  "transfersPage.benefit4.desc": "From saloon cars to safari vehicles and buses.",
  "transfersPage.vehiclesTitle": "Our Fleet",
  "transfersPage.vehiclesDesc": "Choose from our range of vehicles to suit your needs.",
  "transfersPage.ctaTitle": "Ready to Book Your Vehicle?",
  "transfersPage.ctaDesc": "Contact us now for reliable car rental services",
  "transfersPage.contactNow": "Contact Us Now",
  "transfersPage.service24Title": "24 Hour Taxi Service",
  "transfersPage.service24Desc1": "If you are looking for a taxi in Zanzibar that will offer services whenever you need them, then you have come to the right place!",
  "transfersPage.service24Desc2": "We provide taxi services without time limits, the driver will come to pick you up at any time.",
  "transfersPage.feature1": "Professional and experienced drivers",
  "transfersPage.feature2": "Air-conditioned vehicles",
  "transfersPage.feature3": "Available 24/7 including holidays",
  "transfersPage.feature4": "Competitive rates with no hidden fees",
  "transfersPage.popularRoutes": "Popular Taxi Routes",
  "transfersPage.popularRoutesDesc": "Most popular bookable taxi routes in Zanzibar",

  // Full Day Tours Section
  "fullDayTours.badge": "Popular Tours",
  "fullDayTours.title": "Zanzibar & Tanzania Experiences",
  "fullDayTours.description": "Immerse yourself in unforgettable adventures with our carefully curated experiences.",
  "fullDayTours.viewAll": "View All Tours",

  // Half Day Tours Section
  "halfDayTours.badge": "Half Day Tours",
  "halfDayTours.title": "Quick Adventures, Lasting Memories",
  "halfDayTours.description": "Perfect for those short on time but big on adventure. Explore the best of Zanzibar in just a few hours.",
  "halfDayTours.viewAll": "View Half Day Tours",

  // Quad Biking Section
  "quadBiking.badge": "Adventure Awaits",
  "quadBiking.title": "Experience Quad Biking in Zanzibar",
  "quadBiking.description": "Feel the thrill of adventure as you ride through Zanzibar's stunning landscapes on a powerful quad bike.",
  "quadBiking.feature1": "Professional guides and safety equipment provided",
  "quadBiking.feature2": "Scenic routes through beaches, forests, and villages",
  "quadBiking.feature3": "Suitable for beginners and experienced riders",
  "quadBiking.feature4": "Sunset rides available for a magical experience",
  "quadBiking.bookRide": "Book A Ride",

  // Testimonials
  "testimonials.badge": "Testimonials",
  "testimonials.title": "What Our Guests Say",
  "testimonials.description": "Real experiences from travelers who explored with us",

  // Recommended
  "recommended.badge": "Trusted By",
  "recommended.title": "Recommended By",

  // CTA Section
  "cta.badge": "Start Your Adventure",
  "cta.title": "Start Your Adventure Today",
  "cta.subtitle": "Discover Zanzibar's beaches, wildlife, culture, and unforgettable travel experiences with Mtoto Por Tours.",
  "cta.button": "Book Your Tour",
  "cta.viewTours": "Contact Us",

  // Contact Page
  "contactPage.title": "Contact Us",
  "contactPage.subtitle": "Get in Touch With Us",
  "contactPage.formTitle": "Send Us a Message",
  "contactPage.name": "Your Name",
  "contactPage.email": "Email Address",
  "contactPage.phone": "Phone Number",
  "contactPage.subject": "Subject",
  "contactPage.message": "Your Message",
  "contactPage.send": "Send Message",
  "contactPage.info": "Contact Information",
  "contactPage.address": "Location",
  "contactPage.hours": "Working Hours",
  "contactPage.hoursValue": "Mon-Sun: 24/7",

  // Tours Page
  "toursPage.title": "Zanzibar Tours",
  "toursPage.subtitle": "Discover the Spice Island",
  "toursPage.fullDayTitle": "Full Day Tours",
  "toursPage.fullDayDesc": "Immerse yourself in day-long adventures exploring the best of Zanzibar",
  "toursPage.halfDayTitle": "Half Day Tours",
  "toursPage.halfDayDesc": "Perfect short adventures for those with limited time",
  "toursPage.description": "Explore Zanzibar's pristine beaches, historic Stone Town, spice plantations, and incredible marine life with our expert guides.",

  // Footer
  "footer.brand": "Your trusted partner for unforgettable tours, safaris, and seamless travel experiences in Zanzibar and East Africa.",
  "footer.quickLinks": "Quick Links",
  "footer.popularTours": "Popular Tours",
  "footer.contactUs": "Contact Us",
  "footer.weAccept": "We Accept",
  "footer.rights": "All Rights Reserved",
  "footer.privacyPolicy": "Privacy Policy",
  "footer.termsOfService": "Terms of Service",

  // Common
  "common.readMore": "Read More",
  "common.bookNow": "Book Now",
  "common.whatsapp": "Book via WhatsApp",
  "common.from": "From",
  "common.perPerson": "per person",
  "common.duration": "Duration",
  "common.fullDay": "Full Day",
  "common.halfDay": "Half Day",
  "common.included": "What's Included",
  "common.highlights": "Highlights",
  "common.overview": "Overview",
}

type Language = "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (key: string): string => {
    return translations[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language: "en", setLanguage: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: string): string => translations[key] || key,
    }
  }
  return context
}
