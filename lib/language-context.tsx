"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Complete translations for all languages
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about-us": "About Us",
    "nav.about-zanzibar": "About Zanzibar",
    "nav.itineraries": "Itineraries",
    "nav.zanzibar-tours": "Zanzibar Tours",
    "nav.tanzania-safaris": "Tanzania Safaris",
    "nav.packages": "Packages",
    "nav.transfers": "Transfers",
    "nav.contact-us": "Contact Us",
    "nav.book": "Book Tour",

    // Hero
    "hero.tagline": "Serves Up Wonderful Vocations",
    "hero.title1": "Experience Zanzibar",
    "hero.title2": "Explore Tanzania",
    "hero.subtitle": "Your Gateway to Paradise",
    "hero.description1": "Experience paradise with unforgettable tours and adventures",
    "hero.description2": "Premium safaris and exclusive island experiences await you",
    "hero.exploreTours": "Explore Tours",
    "hero.bookNow": "Book Now",
    "hero.contactUs": "Contact Us",

    // About Section
    "about.badge": "About Us",
    "about.title": "Your Trusted Partner in Unforgettable Adventures",
    "about.description1":
      "Welcome to Zanzibar Exclusive Tours and Safaris, your trusted partner in unforgettable travel experiences! With over 20 years in the tourism industry, we've been providing exceptional tours, transfers, and personalized excursions to travelers from all over the world.",
    "about.description2":
      "Whether you're looking to relax on Zanzibar's pristine beaches or explore its rich culture, we ensure every moment is nothing short of extraordinary.",
    "about.highlight1": "Over 20 years of experience",
    "about.highlight2": "Personalized tours & transfers",
    "about.highlight3": "Expert local guides",
    "about.highlight4": "Large group capabilities",
    "about.yearsExperience": "Years Experience",
    "about.learnMore": "Learn More About Us",

    // Services Section
    "services.badge": "Our Services",
    "services.title": "Tailored Experiences for Every Traveler",
    "services.subtitle": "Discover our range of exclusive tours, safaris, and transfer services",
    "services.tours.title": "Zanzibar Tours",
    "services.tours.description": "Explore pristine beaches, spice plantations, and historical sites",
    "services.safaris.title": "Tanzania Safaris",
    "services.safaris.description": "Experience wildlife adventures in world-famous national parks",
    "services.packages.title": "Holiday Packages",
    "services.packages.description": "Complete vacation packages combining tours and accommodations",
    "services.transfers.title": "Transfer Services",
    "services.transfers.description": "Comfortable and reliable airport transfers and island transportation",

    // Full Day Tours
    "fullDayTours.badge": "Full Day Tours",
    "fullDayTours.title": "Explore Zanzibar in a Day",
    "fullDayTours.description":
      "Immerse yourself in unforgettable adventures with our carefully curated full-day experiences.",
    "fullDayTours.viewAll": "View Full Day Tours",

    // Half Day Tours
    "halfDayTours.badge": "Half Day Tours",
    "halfDayTours.title": "Quick Adventures, Lasting Memories",
    "halfDayTours.description":
      "Perfect for those short on time but big on adventure. Explore the best of Zanzibar in just a few hours.",
    "halfDayTours.viewAll": "View Half Day Tours",

    // Safaris Section
    "safaris.badge": "Tanzania Safaris",
    "safaris.title": "Witness Africa's Greatest Wildlife",
    "safaris.description":
      "From the legendary Serengeti to Ngorongoro Crater, experience Tanzania's world-famous national parks.",
    "safaris.viewAll": "View More Tanzania Safaris",

    // Packages Section
    "packages.badge": "Holiday Packages",
    "packages.title": "All-Inclusive Zanzibar Getaways",
    "packages.description": "Hassle-free vacation packages combining the best tours, accommodations, and experiences.",
    "packages.viewAll": "View All Packages",

    // Quad Biking
    "quadBiking.badge": "Adventure Awaits",
    "quadBiking.title": "Experience Quad Biking in Zanzibar",
    "quadBiking.description":
      "Feel the thrill of adventure as you ride through Zanzibar's stunning landscapes on a powerful quad bike.",
    "quadBiking.feature1": "Professional guides and safety equipment provided",
    "quadBiking.feature2": "Scenic routes through beaches, forests, and villages",
    "quadBiking.feature3": "Suitable for beginners and experienced riders",
    "quadBiking.feature4": "Sunset rides available for a magical experience",
    "quadBiking.bookRide": "Book A Ride",

    // Transfers Section
    "transfers.badge": "Transfer Services",
    "transfers.title": "Our Types of Transport",
    "transfers.description":
      "We use the best cars to satisfy our customers. Our vehicles suit all types of travelers - single travelers, couples, families, and groups.",
    "transfers.viewAll": "View Transfer Services",
    "transfers.passengers": "passengers",

    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "What Our Guests Say",
    "testimonials.description": "Real experiences from travelers who explored Zanzibar with us",

    // Recommended
    "recommended.badge": "Trusted By",
    "recommended.title": "Recommended By",

    // CTA Section
    "cta.title": "Ready to Start Your Adventure?",
    "cta.description": "Contact us today to plan your perfect Zanzibar experience",
    "cta.button": "Contact Us Now",

    // Footer
    "footer.description":
      "Your trusted partner for unforgettable Zanzibar tours, Tanzania safaris, and seamless transfers.",
    "footer.quickLinks": "Quick Links",
    "footer.ourServices": "Our Services",
    "footer.contactInfo": "Contact Info",
    "footer.copyright": "© 2026 Zanzibar Exclusive Tours & Safaris. All rights reserved.",

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

    // About Us Page
    "aboutPage.title": "About Us",
    "aboutPage.subtitle": "Your Trusted Partner in Unforgettable Adventures",
    "aboutPage.missionTitle": "Our Mission",
    "aboutPage.missionDesc": "To provide exceptional travel experiences that create lasting memories.",
    "aboutPage.visionTitle": "Our Vision",
    "aboutPage.visionDesc": "To be the leading tour operator in East Africa.",
    "aboutPage.whyChooseUs": "Why Choose Us",
    "aboutPage.experience": "20+ Years Experience",
    "aboutPage.experienceDesc": "Over two decades of expertise in tourism.",
    "aboutPage.localGuides": "Expert Local Guides",
    "aboutPage.localGuidesDesc": "Knowledgeable guides who know every corner.",
    "aboutPage.customTours": "Customized Tours",
    "aboutPage.customToursDesc": "Tailored experiences to match your preferences.",
    "aboutPage.support": "24/7 Support",
    "aboutPage.supportDesc": "Always available to assist you.",

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
    "contactPage.address": "Address",
    "contactPage.hours": "Working Hours",
    "contactPage.hoursValue": "Mon-Sun: 24/7",

    // Transfers Page
    "transfersPage.title": "Airport & Hotel Transfers",
    "transfersPage.subtitle": "Safe, Reliable, and Comfortable Transportation",
    "transfersPage.whyBook": "Why Book With Us?",
    "transfersPage.benefit1.title": "No Additional Costs",
    "transfersPage.benefit1.desc": "We do not charge any additional fees. Free waiting, free cancellation.",
    "transfersPage.benefit2.title": "On Time Taxi",
    "transfersPage.benefit2.desc": "Our cars always arrive on time. The driver arrives 15 minutes earlier.",
    "transfersPage.benefit3.title": "Friendly Drivers",
    "transfersPage.benefit3.desc": "We are friendly and knowledgeable drivers to achieve your satisfaction.",
    "transfersPage.benefit4.title": "Free Waiting Charges",
    "transfersPage.benefit4.desc": "You will not pay any waiting fee at the airport.",
    "transfersPage.vehiclesTitle": "Our Types of Transport",
    "transfersPage.vehiclesDesc": "We use the best cars to satisfy our customers.",
    "transfersPage.service24Title": "24 Hour Taxi Service",
    "transfersPage.service24Desc1":
      "If you are looking for a taxi in Zanzibar that will offer services whenever you need them, then you have come to the right place!",
    "transfersPage.service24Desc2":
      "We provide taxi services without time limits, the driver will come to pick you up at any time.",
    "transfersPage.popularRoutes": "Popular Taxi Routes",
    "transfersPage.popularRoutesDesc": "Most popular bookable taxi routes in Zanzibar",
    "transfersPage.ctaTitle": "Ready to Book Your Transfer?",
    "transfersPage.ctaDesc": "Contact us now for reliable transportation services",
    "transfersPage.contactNow": "Contact Us Now",

    // Packages Page
    "packagesPage.title": "Holiday Packages",
    "packagesPage.subtitle": "Complete Zanzibar Experiences",
    "packagesPage.description": "Discover our all-inclusive holiday packages designed for unforgettable memories.",

    // Tours Page
    "toursPage.title": "Zanzibar Tours",
    "toursPage.subtitle": "Discover the Spice Island",
    "toursPage.fullDayTitle": "Full Day Tours",
    "toursPage.fullDayDesc": "Immerse yourself in day-long adventures",
    "toursPage.halfDayTitle": "Half Day Tours",
    "toursPage.halfDayDesc": "Perfect short adventures",

    // Safaris Page
    "safarisPage.title": "Tanzania Safaris",
    "safarisPage.subtitle": "Experience Africa's Wildlife",
    "safarisPage.description": "Journey into the heart of Tanzania's legendary national parks.",

    // About Zanzibar Page
    "aboutZanzibar.title": "About Zanzibar",
    "aboutZanzibar.subtitle": "The Spice Island of Africa",
    "aboutZanzibar.intro": "Discover the enchanting island of Zanzibar, a tropical paradise off the coast of Tanzania.",
    "aboutZanzibar.stoneTitle": "Stone Town",
    "aboutZanzibar.stoneDesc": "A UNESCO World Heritage Site with rich history and culture.",
    "aboutZanzibar.spiceTitle": "Spice Island",
    "aboutZanzibar.spiceDesc": "Famous for cloves, nutmeg, cinnamon, and other exotic spices.",
    "aboutZanzibar.beachTitle": "Pristine Beaches",
    "aboutZanzibar.beachDesc": "White sand beaches and crystal-clear turquoise waters.",
    "aboutZanzibar.forestTitle": "Jozani Forest",
    "aboutZanzibar.forestDesc": "Home to the rare Red Colobus monkeys.",

    // FAQ Page
    "faqPage.title": "Frequently Asked Questions",
    "faqPage.subtitle": "Find answers to common questions",

    // Weather Page
    "weatherPage.title": "Zanzibar Weather",
    "weatherPage.subtitle": "Best Time to Visit",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about-us": "À Propos",
    "nav.about-zanzibar": "À Propos de Zanzibar",
    "nav.itineraries": "Itinéraires",
    "nav.zanzibar-tours": "Tours Zanzibar",
    "nav.tanzania-safaris": "Safaris Tanzanie",
    "nav.packages": "Forfaits",
    "nav.transfers": "Transferts",
    "nav.contact-us": "Contactez-nous",
    "nav.book": "Réserver",

    // Hero
    "hero.tagline": "Des Vacances Merveilleuses",
    "hero.title1": "Découvrez Zanzibar",
    "hero.title2": "Explorez la Tanzanie",
    "hero.subtitle": "Votre Porte vers le Paradis",
    "hero.description1": "Vivez le paradis avec des tours et aventures inoubliables",
    "hero.description2": "Des safaris premium et des expériences insulaires exclusives vous attendent",
    "hero.exploreTours": "Explorer les Tours",
    "hero.bookNow": "Réserver",
    "hero.contactUs": "Contactez-nous",

    // About Section
    "about.badge": "À Propos",
    "about.title": "Votre Partenaire de Confiance pour des Aventures Inoubliables",
    "about.description1":
      "Bienvenue chez Zanzibar Exclusive Tours and Safaris, votre partenaire de confiance pour des expériences de voyage inoubliables! Avec plus de 20 ans dans l'industrie du tourisme, nous offrons des tours exceptionnels.",
    "about.description2":
      "Que vous souhaitiez vous détendre sur les plages de Zanzibar ou explorer sa riche culture, nous assurons que chaque moment soit extraordinaire.",
    "about.highlight1": "Plus de 20 ans d'expérience",
    "about.highlight2": "Tours & transferts personnalisés",
    "about.highlight3": "Guides locaux experts",
    "about.highlight4": "Capacité grands groupes",
    "about.yearsExperience": "Ans d'Expérience",
    "about.learnMore": "En Savoir Plus",

    // Services Section
    "services.badge": "Nos Services",
    "services.title": "Expériences Sur Mesure pour Chaque Voyageur",
    "services.subtitle": "Découvrez notre gamme de tours, safaris et services de transfert exclusifs",
    "services.tours.title": "Tours Zanzibar",
    "services.tours.description": "Explorez les plages, plantations d'épices et sites historiques",
    "services.safaris.title": "Safaris Tanzanie",
    "services.safaris.description": "Aventures sauvages dans les parcs nationaux célèbres",
    "services.packages.title": "Forfaits Vacances",
    "services.packages.description": "Forfaits complets combinant tours et hébergements",
    "services.transfers.title": "Services de Transfert",
    "services.transfers.description": "Transferts aéroport confortables et fiables",

    // Full Day Tours
    "fullDayTours.badge": "Tours Journée Complète",
    "fullDayTours.title": "Explorez Zanzibar en une Journée",
    "fullDayTours.description": "Plongez dans des aventures inoubliables avec nos expériences d'une journée.",
    "fullDayTours.viewAll": "Voir Tous les Tours",

    // Half Day Tours
    "halfDayTours.badge": "Tours Demi-Journée",
    "halfDayTours.title": "Aventures Rapides, Souvenirs Durables",
    "halfDayTours.description": "Parfait pour ceux qui manquent de temps mais pas d'aventure.",
    "halfDayTours.viewAll": "Voir les Tours Demi-Journée",

    // Safaris Section
    "safaris.badge": "Safaris Tanzanie",
    "safaris.title": "Témoin de la Plus Grande Faune d'Afrique",
    "safaris.description": "Du légendaire Serengeti au cratère du Ngorongoro, vivez les parcs nationaux de Tanzanie.",
    "safaris.viewAll": "Voir Plus de Safaris",

    // Packages Section
    "packages.badge": "Forfaits Vacances",
    "packages.title": "Séjours Tout Compris à Zanzibar",
    "packages.description": "Forfaits vacances sans souci combinant les meilleurs tours et hébergements.",
    "packages.viewAll": "Voir Tous les Forfaits",

    // Quad Biking
    "quadBiking.badge": "L'Aventure Vous Attend",
    "quadBiking.title": "Quad à Zanzibar",
    "quadBiking.description": "Ressentez le frisson de l'aventure en parcourant les paysages de Zanzibar en quad.",
    "quadBiking.feature1": "Guides professionnels et équipement de sécurité fournis",
    "quadBiking.feature2": "Itinéraires pittoresques à travers plages, forêts et villages",
    "quadBiking.feature3": "Convient aux débutants et aux expérimentés",
    "quadBiking.feature4": "Balades au coucher du soleil disponibles",
    "quadBiking.bookRide": "Réserver une Balade",

    // Transfers Section
    "transfers.badge": "Services de Transfert",
    "transfers.title": "Nos Types de Transport",
    "transfers.description": "Nous utilisons les meilleures voitures pour satisfaire nos clients.",
    "transfers.viewAll": "Voir les Services de Transfert",
    "transfers.passengers": "passagers",

    // Testimonials
    "testimonials.badge": "Témoignages",
    "testimonials.title": "Ce que Disent Nos Clients",
    "testimonials.description": "Expériences réelles de voyageurs qui ont exploré Zanzibar avec nous",

    // Recommended
    "recommended.badge": "Recommandé Par",
    "recommended.title": "Recommandé Par",

    // CTA Section
    "cta.title": "Prêt à Commencer Votre Aventure?",
    "cta.description": "Contactez-nous aujourd'hui pour planifier votre expérience parfaite à Zanzibar",
    "cta.button": "Contactez-nous Maintenant",

    // Footer
    "footer.description": "Votre partenaire de confiance pour des tours inoubliables à Zanzibar.",
    "footer.quickLinks": "Liens Rapides",
    "footer.ourServices": "Nos Services",
    "footer.contactInfo": "Coordonnées",
    "footer.copyright": "© 2026 Zanzibar Exclusive Tours & Safaris. Tous droits réservés.",

    // Common
    "common.readMore": "En Savoir Plus",
    "common.bookNow": "Réserver",
    "common.whatsapp": "Réserver via WhatsApp",
    "common.from": "À partir de",
    "common.perPerson": "par personne",
    "common.duration": "Durée",
    "common.fullDay": "Journée Complète",
    "common.halfDay": "Demi-Journée",
    "common.included": "Inclus",
    "common.highlights": "Points Forts",
    "common.overview": "Aperçu",

    // About Us Page
    "aboutPage.title": "À Propos",
    "aboutPage.subtitle": "Votre Partenaire de Confiance",
    "aboutPage.missionTitle": "Notre Mission",
    "aboutPage.missionDesc": "Offrir des expériences de voyage exceptionnelles.",
    "aboutPage.visionTitle": "Notre Vision",
    "aboutPage.visionDesc": "Être le premier tour-opérateur d'Afrique de l'Est.",
    "aboutPage.whyChooseUs": "Pourquoi Nous Choisir",
    "aboutPage.experience": "20+ Ans d'Expérience",
    "aboutPage.experienceDesc": "Plus de deux décennies d'expertise.",
    "aboutPage.localGuides": "Guides Locaux Experts",
    "aboutPage.localGuidesDesc": "Guides connaissant chaque recoin.",
    "aboutPage.customTours": "Tours Personnalisés",
    "aboutPage.customToursDesc": "Expériences adaptées à vos préférences.",
    "aboutPage.support": "Support 24/7",
    "aboutPage.supportDesc": "Toujours disponibles pour vous aider.",

    // Contact Page
    "contactPage.title": "Contactez-nous",
    "contactPage.subtitle": "Entrez en Contact Avec Nous",
    "contactPage.formTitle": "Envoyez-nous un Message",
    "contactPage.name": "Votre Nom",
    "contactPage.email": "Adresse Email",
    "contactPage.phone": "Téléphone",
    "contactPage.subject": "Sujet",
    "contactPage.message": "Votre Message",
    "contactPage.send": "Envoyer",
    "contactPage.info": "Informations de Contact",
    "contactPage.address": "Adresse",
    "contactPage.hours": "Heures d'Ouverture",
    "contactPage.hoursValue": "Lun-Dim: 24/7",

    // Transfers Page
    "transfersPage.title": "Transferts Aéroport & Hôtel",
    "transfersPage.subtitle": "Transport Sûr, Fiable et Confortable",
    "transfersPage.whyBook": "Pourquoi Réserver Avec Nous?",
    "transfersPage.benefit1.title": "Sans Frais Supplémentaires",
    "transfersPage.benefit1.desc": "Pas de frais cachés. Attente gratuite, annulation gratuite.",
    "transfersPage.benefit2.title": "Taxi Ponctuel",
    "transfersPage.benefit2.desc": "Nos voitures arrivent toujours à l'heure. Le chauffeur arrive 15 minutes plus tôt.",
    "transfersPage.benefit3.title": "Chauffeurs Sympathiques",
    "transfersPage.benefit3.desc": "Chauffeurs sympathiques et compétents pour votre satisfaction.",
    "transfersPage.benefit4.title": "Attente Gratuite",
    "transfersPage.benefit4.desc": "Vous ne paierez aucun frais d'attente à l'aéroport.",
    "transfersPage.vehiclesTitle": "Nos Types de Transport",
    "transfersPage.vehiclesDesc": "Nous utilisons les meilleures voitures pour nos clients.",
    "transfersPage.service24Title": "Service Taxi 24h/24",
    "transfersPage.service24Desc1":
      "Si vous cherchez un taxi à Zanzibar disponible à tout moment, vous êtes au bon endroit!",
    "transfersPage.service24Desc2": "Nous offrons des services de taxi sans limite de temps.",
    "transfersPage.popularRoutes": "Itinéraires Populaires",
    "transfersPage.popularRoutesDesc": "Les itinéraires de taxi les plus populaires à Zanzibar",
    "transfersPage.ctaTitle": "Prêt à Réserver Votre Transfert?",
    "transfersPage.ctaDesc": "Contactez-nous maintenant pour des services de transport fiables",
    "transfersPage.contactNow": "Contactez-nous Maintenant",

    // Packages Page
    "packagesPage.title": "Forfaits Vacances",
    "packagesPage.subtitle": "Expériences Complètes à Zanzibar",
    "packagesPage.description": "Découvrez nos forfaits tout compris pour des souvenirs inoubliables.",

    // Tours Page
    "toursPage.title": "Tours Zanzibar",
    "toursPage.subtitle": "Découvrez l'Île aux Épices",
    "toursPage.fullDayTitle": "Tours Journée Complète",
    "toursPage.fullDayDesc": "Plongez dans des aventures d'une journée",
    "toursPage.halfDayTitle": "Tours Demi-Journée",
    "toursPage.halfDayDesc": "Aventures courtes parfaites",

    // Safaris Page
    "safarisPage.title": "Safaris Tanzanie",
    "safarisPage.subtitle": "Découvrez la Faune Africaine",
    "safarisPage.description": "Voyagez au cœur des parcs nationaux légendaires de Tanzanie.",

    // About Zanzibar Page
    "aboutZanzibar.title": "À Propos de Zanzibar",
    "aboutZanzibar.subtitle": "L'Île aux Épices d'Afrique",
    "aboutZanzibar.intro": "Découvrez l'île enchanteresse de Zanzibar, un paradis tropical au large de la Tanzanie.",
    "aboutZanzibar.stoneTitle": "Stone Town",
    "aboutZanzibar.stoneDesc": "Site du patrimoine mondial de l'UNESCO avec une riche histoire.",
    "aboutZanzibar.spiceTitle": "Île aux Épices",
    "aboutZanzibar.spiceDesc": "Célèbre pour les clous de girofle, la muscade, la cannelle.",
    "aboutZanzibar.beachTitle": "Plages Immaculées",
    "aboutZanzibar.beachDesc": "Plages de sable blanc et eaux turquoise cristallines.",
    "aboutZanzibar.forestTitle": "Forêt de Jozani",
    "aboutZanzibar.forestDesc": "Habitat des rares singes Colobes rouges.",

    // FAQ Page
    "faqPage.title": "Questions Fréquentes",
    "faqPage.subtitle": "Trouvez des réponses aux questions courantes",

    // Weather Page
    "weatherPage.title": "Météo Zanzibar",
    "weatherPage.subtitle": "Meilleure Période pour Visiter",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about-us": "Über Uns",
    "nav.about-zanzibar": "Über Sansibar",
    "nav.itineraries": "Reiserouten",
    "nav.zanzibar-tours": "Sansibar Touren",
    "nav.tanzania-safaris": "Tansania Safaris",
    "nav.packages": "Pakete",
    "nav.transfers": "Transfers",
    "nav.contact-us": "Kontakt",
    "nav.book": "Buchen",

    // Hero
    "hero.tagline": "Wunderbare Urlaubserlebnisse",
    "hero.title1": "Erleben Sie Sansibar",
    "hero.title2": "Erkunden Sie Tansania",
    "hero.subtitle": "Ihr Tor zum Paradies",
    "hero.description1": "Erleben Sie das Paradies mit unvergesslichen Touren und Abenteuern",
    "hero.description2": "Premium-Safaris und exklusive Inselerlebnisse erwarten Sie",
    "hero.exploreTours": "Touren Entdecken",
    "hero.bookNow": "Jetzt Buchen",
    "hero.contactUs": "Kontaktieren Sie Uns",

    // About Section
    "about.badge": "Über Uns",
    "about.title": "Ihr Vertrauenswürdiger Partner für Unvergessliche Abenteuer",
    "about.description1":
      "Willkommen bei Zanzibar Exclusive Tours and Safaris! Mit über 20 Jahren Erfahrung in der Tourismusbranche bieten wir außergewöhnliche Touren und Transfers.",
    "about.description2":
      "Ob Sie sich an Sansibars Stränden entspannen oder die reiche Kultur erkunden möchten, wir sorgen für unvergessliche Momente.",
    "about.highlight1": "Über 20 Jahre Erfahrung",
    "about.highlight2": "Personalisierte Touren & Transfers",
    "about.highlight3": "Erfahrene lokale Guides",
    "about.highlight4": "Große Gruppen möglich",
    "about.yearsExperience": "Jahre Erfahrung",
    "about.learnMore": "Mehr Erfahren",

    // Services Section
    "services.badge": "Unsere Dienste",
    "services.title": "Maßgeschneiderte Erlebnisse für Jeden Reisenden",
    "services.subtitle": "Entdecken Sie unsere exklusiven Touren, Safaris und Transferdienste",
    "services.tours.title": "Sansibar Touren",
    "services.tours.description": "Erkunden Sie Strände, Gewürzplantagen und historische Stätten",
    "services.safaris.title": "Tansania Safaris",
    "services.safaris.description": "Wildlife-Abenteuer in weltberühmten Nationalparks",
    "services.packages.title": "Urlaubspakete",
    "services.packages.description": "Komplette Urlaubspakete mit Touren und Unterkünften",
    "services.transfers.title": "Transferdienste",
    "services.transfers.description": "Komfortable und zuverlässige Flughafentransfers",

    // Full Day Tours
    "fullDayTours.badge": "Ganztagestouren",
    "fullDayTours.title": "Erkunden Sie Sansibar an Einem Tag",
    "fullDayTours.description": "Tauchen Sie ein in unvergessliche Abenteuer mit unseren Ganztageserlebnissen.",
    "fullDayTours.viewAll": "Alle Ganztagestouren",

    // Half Day Tours
    "halfDayTours.badge": "Halbtagestouren",
    "halfDayTours.title": "Kurze Abenteuer, Bleibende Erinnerungen",
    "halfDayTours.description": "Perfekt für alle mit wenig Zeit aber großem Abenteuerdrang.",
    "halfDayTours.viewAll": "Halbtagestouren Ansehen",

    // Safaris Section
    "safaris.badge": "Tansania Safaris",
    "safaris.title": "Erleben Sie Afrikas Größte Tierwelt",
    "safaris.description": "Von der Serengeti zum Ngorongoro-Krater - erleben Sie Tansanias Nationalparks.",
    "safaris.viewAll": "Mehr Safaris Ansehen",

    // Packages Section
    "packages.badge": "Urlaubspakete",
    "packages.title": "All-Inclusive Sansibar Urlaub",
    "packages.description": "Sorglose Urlaubspakete mit den besten Touren und Unterkünften.",
    "packages.viewAll": "Alle Pakete Ansehen",

    // Quad Biking
    "quadBiking.badge": "Abenteuer Erwartet Sie",
    "quadBiking.title": "Quad-Fahren auf Sansibar",
    "quadBiking.description": "Erleben Sie den Nervenkitzel, durch Sansibars Landschaften zu fahren.",
    "quadBiking.feature1": "Professionelle Guides und Sicherheitsausrüstung",
    "quadBiking.feature2": "Malerische Routen durch Strände, Wälder und Dörfer",
    "quadBiking.feature3": "Geeignet für Anfänger und erfahrene Fahrer",
    "quadBiking.feature4": "Sonnenuntergangsfahrten verfügbar",
    "quadBiking.bookRide": "Fahrt Buchen",

    // Transfers Section
    "transfers.badge": "Transferdienste",
    "transfers.title": "Unsere Transportarten",
    "transfers.description": "Wir verwenden die besten Fahrzeuge für unsere Kunden.",
    "transfers.viewAll": "Transferdienste Ansehen",
    "transfers.passengers": "Passagiere",

    // Testimonials
    "testimonials.badge": "Bewertungen",
    "testimonials.title": "Was Unsere Gäste Sagen",
    "testimonials.description": "Echte Erfahrungen von Reisenden, die Sansibar mit uns erkundet haben",

    // Recommended
    "recommended.badge": "Empfohlen Von",
    "recommended.title": "Empfohlen Von",

    // CTA Section
    "cta.title": "Bereit für Ihr Abenteuer?",
    "cta.description": "Kontaktieren Sie uns heute für Ihr perfektes Sansibar-Erlebnis",
    "cta.button": "Jetzt Kontaktieren",

    // Footer
    "footer.description": "Ihr vertrauenswürdiger Partner für unvergessliche Sansibar-Touren.",
    "footer.quickLinks": "Schnelllinks",
    "footer.ourServices": "Unsere Dienste",
    "footer.contactInfo": "Kontaktinfo",
    "footer.copyright": "© 2026 Zanzibar Exclusive Tours & Safaris. Alle Rechte vorbehalten.",

    // Common
    "common.readMore": "Mehr Lesen",
    "common.bookNow": "Jetzt Buchen",
    "common.whatsapp": "Via WhatsApp Buchen",
    "common.from": "Ab",
    "common.perPerson": "pro Person",
    "common.duration": "Dauer",
    "common.fullDay": "Ganztägig",
    "common.halfDay": "Halbtags",
    "common.included": "Inklusive",
    "common.highlights": "Höhepunkte",
    "common.overview": "Überblick",

    // About Us Page
    "aboutPage.title": "Über Uns",
    "aboutPage.subtitle": "Ihr Vertrauenswürdiger Partner",
    "aboutPage.missionTitle": "Unsere Mission",
    "aboutPage.missionDesc": "Außergewöhnliche Reiseerlebnisse bieten.",
    "aboutPage.visionTitle": "Unsere Vision",
    "aboutPage.visionDesc": "Führender Reiseveranstalter in Ostafrika.",
    "aboutPage.whyChooseUs": "Warum Uns Wählen",
    "aboutPage.experience": "20+ Jahre Erfahrung",
    "aboutPage.experienceDesc": "Über zwei Jahrzehnte Expertise.",
    "aboutPage.localGuides": "Erfahrene Lokale Guides",
    "aboutPage.localGuidesDesc": "Guides, die jeden Winkel kennen.",
    "aboutPage.customTours": "Individuelle Touren",
    "aboutPage.customToursDesc": "Erlebnisse nach Ihren Wünschen.",
    "aboutPage.support": "24/7 Support",
    "aboutPage.supportDesc": "Immer für Sie da.",

    // Contact Page
    "contactPage.title": "Kontakt",
    "contactPage.subtitle": "Kontaktieren Sie Uns",
    "contactPage.formTitle": "Nachricht Senden",
    "contactPage.name": "Ihr Name",
    "contactPage.email": "E-Mail-Adresse",
    "contactPage.phone": "Telefonnummer",
    "contactPage.subject": "Betreff",
    "contactPage.message": "Ihre Nachricht",
    "contactPage.send": "Nachricht Senden",
    "contactPage.info": "Kontaktinformationen",
    "contactPage.address": "Adresse",
    "contactPage.hours": "Öffnungszeiten",
    "contactPage.hoursValue": "Mo-So: 24/7",

    // Transfers Page
    "transfersPage.title": "Flughafen & Hotel Transfers",
    "transfersPage.subtitle": "Sichere, Zuverlässige Transportdienste",
    "transfersPage.whyBook": "Warum Bei Uns Buchen?",
    "transfersPage.benefit1.title": "Keine Zusatzkosten",
    "transfersPage.benefit1.desc": "Keine versteckten Gebühren. Kostenlose Wartezeit.",
    "transfersPage.benefit2.title": "Pünktliches Taxi",
    "transfersPage.benefit2.desc": "Unsere Autos kommen immer pünktlich. 15 Minuten früher.",
    "transfersPage.benefit3.title": "Freundliche Fahrer",
    "transfersPage.benefit3.desc": "Freundliche und kompetente Fahrer.",
    "transfersPage.benefit4.title": "Kostenlose Wartezeit",
    "transfersPage.benefit4.desc": "Keine Wartegebühren am Flughafen.",
    "transfersPage.vehiclesTitle": "Unsere Transportarten",
    "transfersPage.vehiclesDesc": "Wir verwenden die besten Fahrzeuge.",
    "transfersPage.service24Title": "24-Stunden Taxi-Service",
    "transfersPage.service24Desc1":
      "Wenn Sie ein Taxi in Sansibar suchen, das jederzeit verfügbar ist, sind Sie hier richtig!",
    "transfersPage.service24Desc2": "Wir bieten Taxi-Services ohne Zeitlimit.",
    "transfersPage.popularRoutes": "Beliebte Routen",
    "transfersPage.popularRoutesDesc": "Die beliebtesten Taxi-Routen in Sansibar",
    "transfersPage.ctaTitle": "Bereit zum Buchen?",
    "transfersPage.ctaDesc": "Kontaktieren Sie uns für zuverlässige Transportdienste",
    "transfersPage.contactNow": "Jetzt Kontaktieren",

    // Packages Page
    "packagesPage.title": "Urlaubspakete",
    "packagesPage.subtitle": "Komplette Sansibar-Erlebnisse",
    "packagesPage.description": "Entdecken Sie unsere All-Inclusive-Pakete.",

    // Tours Page
    "toursPage.title": "Sansibar Touren",
    "toursPage.subtitle": "Entdecken Sie die Gewürzinsel",
    "toursPage.fullDayTitle": "Ganztagestouren",
    "toursPage.fullDayDesc": "Ganztägige Abenteuer erleben",
    "toursPage.halfDayTitle": "Halbtagestouren",
    "toursPage.halfDayDesc": "Perfekte kurze Abenteuer",

    // Safaris Page
    "safarisPage.title": "Tansania Safaris",
    "safarisPage.subtitle": "Erleben Sie Afrikas Tierwelt",
    "safarisPage.description": "Reisen Sie ins Herz der Nationalparks Tansanias.",

    // About Zanzibar Page
    "aboutZanzibar.title": "Über Sansibar",
    "aboutZanzibar.subtitle": "Die Gewürzinsel Afrikas",
    "aboutZanzibar.intro": "Entdecken Sie die bezaubernde Insel Sansibar, ein tropisches Paradies vor Tansania.",
    "aboutZanzibar.stoneTitle": "Stone Town",
    "aboutZanzibar.stoneDesc": "UNESCO-Welterbestätte mit reicher Geschichte.",
    "aboutZanzibar.spiceTitle": "Gewürzinsel",
    "aboutZanzibar.spiceDesc": "Berühmt für Nelken, Muskat, Zimt.",
    "aboutZanzibar.beachTitle": "Makellose Strände",
    "aboutZanzibar.beachDesc": "Weiße Sandstrände und kristallklares Wasser.",
    "aboutZanzibar.forestTitle": "Jozani Wald",
    "aboutZanzibar.forestDesc": "Heimat der seltenen Roten Colobus-Affen.",

    // FAQ Page
    "faqPage.title": "Häufige Fragen",
    "faqPage.subtitle": "Antworten auf häufige Fragen",

    // Weather Page
    "weatherPage.title": "Sansibar Wetter",
    "weatherPage.subtitle": "Beste Reisezeit",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about-us": "من نحن",
    "nav.about-zanzibar": "عن زنجبار",
    "nav.itineraries": "خطط الرحلات",
    "nav.zanzibar-tours": "جولات زنجبار",
    "nav.tanzania-safaris": "سفاري تنزانيا",
    "nav.packages": "الباقات",
    "nav.transfers": "التنقلات",
    "nav.contact-us": "اتصل بنا",
    "nav.book": "احجز الآن",

    // Hero
    "hero.tagline": "إجازات رائعة",
    "hero.title1": "اكتشف زنجبار",
    "hero.title2": "استكشف تنزانيا",
    "hero.subtitle": "بوابتك إلى الجنة",
    "hero.description1": "استمتع بالجنة مع جولات ومغامرات لا تُنسى",
    "hero.description2": "سفاري فاخرة وتجارب جزيرة حصرية في انتظارك",
    "hero.exploreTours": "استكشف الجولات",
    "hero.bookNow": "احجز الآن",
    "hero.contactUs": "اتصل بنا",

    // About Section
    "about.badge": "من نحن",
    "about.title": "شريكك الموثوق في المغامرات التي لا تُنسى",
    "about.description1":
      "مرحباً بكم في زنجبار للجولات الحصرية والسفاري! مع أكثر من 20 عامًا في صناعة السياحة، نقدم جولات استثنائية.",
    "about.description2": "سواء كنت تريد الاسترخاء على شواطئ زنجبار أو استكشاف ثقافتها، نضمن لحظات استثنائية.",
    "about.highlight1": "أكثر من 20 عامًا من الخبرة",
    "about.highlight2": "جولات وتنقلات مخصصة",
    "about.highlight3": "مرشدون محليون خبراء",
    "about.highlight4": "إمكانية المجموعات الكبيرة",
    "about.yearsExperience": "سنوات الخبرة",
    "about.learnMore": "اعرف المزيد",

    // Services Section
    "services.badge": "خدماتنا",
    "services.title": "تجارب مصممة لكل مسافر",
    "services.subtitle": "اكتشف مجموعة جولاتنا الحصرية وخدمات السفاري والتنقلات",
    "services.tours.title": "جولات زنجبار",
    "services.tours.description": "استكشف الشواطئ ومزارع التوابل والمواقع التاريخية",
    "services.safaris.title": "سفاري تنزانيا",
    "services.safaris.description": "مغامرات الحياة البرية في المتنزهات الوطنية الشهيرة",
    "services.packages.title": "باقات العطلات",
    "services.packages.description": "باقات عطلات كاملة تجمع بين الجولات والإقامة",
    "services.transfers.title": "خدمات التنقل",
    "services.transfers.description": "تنقلات مريحة وموثوقة من المطار",

    // Full Day Tours
    "fullDayTours.badge": "جولات اليوم الكامل",
    "fullDayTours.title": "استكشف زنجبار في يوم واحد",
    "fullDayTours.description": "انغمس في مغامرات لا تُنسى مع تجاربنا اليومية.",
    "fullDayTours.viewAll": "عرض جميع الجولات",

    // Half Day Tours
    "halfDayTours.badge": "جولات نصف يوم",
    "halfDayTours.title": "مغامرات سريعة، ذكريات دائمة",
    "halfDayTours.description": "مثالية لمن لديهم وقت قصير ولكن حب كبير للمغامرة.",
    "halfDayTours.viewAll": "عرض جولات نصف اليوم",

    // Safaris Section
    "safaris.badge": "سفاري تنزانيا",
    "safaris.title": "شاهد أعظم حياة برية في أفريقيا",
    "safaris.description": "من سيرينغيتي الأسطورية إلى فوهة نغورونغورو.",
    "safaris.viewAll": "عرض المزيد من السفاري",

    // Packages Section
    "packages.badge": "باقات العطلات",
    "packages.title": "عطلات شاملة في زنجبار",
    "packages.description": "باقات عطلات بدون متاعب تجمع أفضل الجولات والإقامة.",
    "packages.viewAll": "عرض جميع الباقات",

    // Quad Biking
    "quadBiking.badge": "المغامرة في انتظارك",
    "quadBiking.title": "تجربة ركوب الدراجات الرباعية في زنجبار",
    "quadBiking.description": "اشعر بإثارة المغامرة وأنت تقود عبر مناظر زنجبار الخلابة.",
    "quadBiking.feature1": "مرشدون محترفون ومعدات سلامة",
    "quadBiking.feature2": "طرق خلابة عبر الشواطئ والغابات والقرى",
    "quadBiking.feature3": "مناسب للمبتدئين وذوي الخبرة",
    "quadBiking.feature4": "رحلات غروب الشمس متاحة",
    "quadBiking.bookRide": "احجز رحلة",

    // Transfers Section
    "transfers.badge": "خدمات التنقل",
    "transfers.title": "أنواع وسائل النقل لدينا",
    "transfers.description": "نستخدم أفضل السيارات لإرضاء عملائنا.",
    "transfers.viewAll": "عرض خدمات التنقل",
    "transfers.passengers": "ركاب",

    // Testimonials
    "testimonials.badge": "الشهادات",
    "testimonials.title": "ماذا يقول ضيوفنا",
    "testimonials.description": "تجارب حقيقية من مسافرين استكشفوا زنجبار معنا",

    // Recommended
    "recommended.badge": "موثوق به",
    "recommended.title": "موصى به من",

    // CTA Section
    "cta.title": "مستعد لبدء مغامرتك؟",
    "cta.description": "اتصل بنا اليوم لتخطيط تجربتك المثالية في زنجبار",
    "cta.button": "اتصل بنا الآن",

    // Footer
    "footer.description": "شريكك الموثوق لجولات زنجبار التي لا تُنسى.",
    "footer.quickLinks": "روابط سريعة",
    "footer.ourServices": "خدماتنا",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.copyright": "© 2026 زنجبار للجولات الحصرية والسفاري. جميع الحقوق محفوظة.",

    // Common
    "common.readMore": "اقرأ المزيد",
    "common.bookNow": "احجز الآن",
    "common.whatsapp": "احجز عبر واتساب",
    "common.from": "من",
    "common.perPerson": "للشخص",
    "common.duration": "المدة",
    "common.fullDay": "يوم كامل",
    "common.halfDay": "نصف يوم",
    "common.included": "يشمل",
    "common.highlights": "أبرز النقاط",
    "common.overview": "نظرة عامة",

    // About Us Page
    "aboutPage.title": "من نحن",
    "aboutPage.subtitle": "شريكك الموثوق",
    "aboutPage.missionTitle": "مهمتنا",
    "aboutPage.missionDesc": "تقديم تجارب سفر استثنائية.",
    "aboutPage.visionTitle": "رؤيتنا",
    "aboutPage.visionDesc": "أن نكون المشغل السياحي الرائد في شرق أفريقيا.",
    "aboutPage.whyChooseUs": "لماذا تختارنا",
    "aboutPage.experience": "أكثر من 20 عامًا خبرة",
    "aboutPage.experienceDesc": "أكثر من عقدين من الخبرة.",
    "aboutPage.localGuides": "مرشدون محليون خبراء",
    "aboutPage.localGuidesDesc": "مرشدون يعرفون كل زاوية.",
    "aboutPage.customTours": "جولات مخصصة",
    "aboutPage.customToursDesc": "تجارب مصممة حسب تفضيلاتك.",
    "aboutPage.support": "دعم 24/7",
    "aboutPage.supportDesc": "متاحون دائمًا لمساعدتك.",

    // Contact Page
    "contactPage.title": "اتصل بنا",
    "contactPage.subtitle": "تواصل معنا",
    "contactPage.formTitle": "أرسل لنا رسالة",
    "contactPage.name": "اسمك",
    "contactPage.email": "البريد الإلكتروني",
    "contactPage.phone": "رقم الهاتف",
    "contactPage.subject": "الموضوع",
    "contactPage.message": "رسالتك",
    "contactPage.send": "إرسال",
    "contactPage.info": "معلومات الاتصال",
    "contactPage.address": "العنوان",
    "contactPage.hours": "ساعات العمل",
    "contactPage.hoursValue": "الاثنين-الأحد: 24/7",

    // Transfers Page
    "transfersPage.title": "تنقلات المطار والفندق",
    "transfersPage.subtitle": "نقل آمن وموثوق ومريح",
    "transfersPage.whyBook": "لماذا تحجز معنا؟",
    "transfersPage.benefit1.title": "بدون تكاليف إضافية",
    "transfersPage.benefit1.desc": "لا رسوم مخفية. انتظار مجاني.",
    "transfersPage.benefit2.title": "تاكسي في الموعد",
    "transfersPage.benefit2.desc": "سياراتنا تصل دائمًا في الوقت المحدد.",
    "transfersPage.benefit3.title": "سائقون ودودون",
    "transfersPage.benefit3.desc": "سائقون ودودون ومدربون.",
    "transfersPage.benefit4.title": "انتظار مجاني",
    "transfersPage.benefit4.desc": "لن تدفع رسوم انتظار في المطار.",
    "transfersPage.vehiclesTitle": "أنواع وسائل النقل",
    "transfersPage.vehiclesDesc": "نستخدم أفضل السيارات.",
    "transfersPage.service24Title": "خدمة تاكسي 24 ساعة",
    "transfersPage.service24Desc1": "إذا كنت تبحث عن تاكسي في زنجبار متاح في أي وقت، فأنت في المكان الصحيح!",
    "transfersPage.service24Desc2": "نقدم خدمات تاكسي بدون حدود زمنية.",
    "transfersPage.popularRoutes": "المسارات الشائعة",
    "transfersPage.popularRoutesDesc": "أكثر مسارات التاكسي شعبية في زنجبار",
    "transfersPage.ctaTitle": "مستعد للحجز؟",
    "transfersPage.ctaDesc": "اتصل بنا الآن لخدمات نقل موثوقة",
    "transfersPage.contactNow": "اتصل بنا الآن",

    // Packages Page
    "packagesPage.title": "باقات العطلات",
    "packagesPage.subtitle": "تجارب زنجبار الكاملة",
    "packagesPage.description": "اكتشف باقاتنا الشاملة.",

    // Tours Page
    "toursPage.title": "جولات زنجبار",
    "toursPage.subtitle": "اكتشف جزيرة التوابل",
    "toursPage.fullDayTitle": "جولات يوم كامل",
    "toursPage.fullDayDesc": "انغمس في مغامرات يوم كامل",
    "toursPage.halfDayTitle": "جولات نصف يوم",
    "toursPage.halfDayDesc": "مغامرات قصيرة مثالية",

    // Safaris Page
    "safarisPage.title": "سفاري تنزانيا",
    "safarisPage.subtitle": "اكتشف الحياة البرية الأفريقية",
    "safarisPage.description": "سافر إلى قلب متنزهات تنزانيا الأسطورية.",

    // About Zanzibar Page
    "aboutZanzibar.title": "عن زنجبار",
    "aboutZanzibar.subtitle": "جزيرة التوابل الأفريقية",
    "aboutZanzibar.intro": "اكتشف جزيرة زنجبار الساحرة، جنة استوائية قبالة ساحل تنزانيا.",
    "aboutZanzibar.stoneTitle": "ستون تاون",
    "aboutZanzibar.stoneDesc": "موقع تراث عالمي لليونسكو بتاريخ غني.",
    "aboutZanzibar.spiceTitle": "جزيرة التوابل",
    "aboutZanzibar.spiceDesc": "مشهورة بالقرنفل وجوزة الطيب والقرفة.",
    "aboutZanzibar.beachTitle": "شواطئ نقية",
    "aboutZanzibar.beachDesc": "شواطئ رملية بيضاء ومياه فيروزية صافية.",
    "aboutZanzibar.forestTitle": "غابة جوزاني",
    "aboutZanzibar.forestDesc": "موطن قرود الكولوبوس الحمراء النادرة.",

    // FAQ Page
    "faqPage.title": "الأسئلة الشائعة",
    "faqPage.subtitle": "إجابات على الأسئلة الشائعة",

    // Weather Page
    "weatherPage.title": "طقس زنجبار",
    "weatherPage.subtitle": "أفضل وقت للزيارة",
  },
  pl: {
    // Navigation
    "nav.home": "Strona główna",
    "nav.about-us": "O nas",
    "nav.about-zanzibar": "O Zanzibarze",
    "nav.itineraries": "Trasy",
    "nav.zanzibar-tours": "Wycieczki Zanzibar",
    "nav.tanzania-safaris": "Safari Tanzania",
    "nav.packages": "Pakiety",
    "nav.transfers": "Transfery",
    "nav.contact-us": "Kontakt",
    "nav.book": "Rezerwuj",

    // Hero
    "hero.tagline": "Wspaniałe Wakacje",
    "hero.title1": "Odkryj Zanzibar",
    "hero.title2": "Poznaj Tanzanię",
    "hero.subtitle": "Twoja Brama do Raju",
    "hero.description1": "Doświadcz raju z niezapomnianymi wycieczkami i przygodami",
    "hero.description2": "Ekskluzywne safari i wyjątkowe doświadczenia wyspiarskie",
    "hero.exploreTours": "Odkryj Wycieczki",
    "hero.bookNow": "Rezerwuj Teraz",
    "hero.contactUs": "Kontakt",

    // About Section
    "about.badge": "O Nas",
    "about.title": "Twój Zaufany Partner w Niezapomnianych Przygodach",
    "about.description1":
      "Witamy w Zanzibar Exclusive Tours and Safaris! Z ponad 20-letnim doświadczeniem w turystyce oferujemy wyjątkowe wycieczki.",
    "about.description2":
      "Niezależnie czy chcesz odpocząć na plażach Zanzibaru czy poznać jego kulturę, zapewniamy niezapomniane chwile.",
    "about.highlight1": "Ponad 20 lat doświadczenia",
    "about.highlight2": "Spersonalizowane wycieczki i transfery",
    "about.highlight3": "Doświadczeni lokalni przewodnicy",
    "about.highlight4": "Możliwość dużych grup",
    "about.yearsExperience": "Lat Doświadczenia",
    "about.learnMore": "Dowiedz się Więcej",

    // Services Section
    "services.badge": "Nasze Usługi",
    "services.title": "Doświadczenia Dostosowane do Każdego Podróżnika",
    "services.subtitle": "Odkryj naszą gamę ekskluzywnych wycieczek, safari i transferów",
    "services.tours.title": "Wycieczki Zanzibar",
    "services.tours.description": "Odkryj plaże, plantacje przypraw i miejsca historyczne",
    "services.safaris.title": "Safari Tanzania",
    "services.safaris.description": "Przygody z dziką przyrodą w słynnych parkach narodowych",
    "services.packages.title": "Pakiety Wakacyjne",
    "services.packages.description": "Kompletne pakiety łączące wycieczki i zakwaterowanie",
    "services.transfers.title": "Usługi Transferowe",
    "services.transfers.description": "Wygodne i niezawodne transfery lotniskowe",

    // Full Day Tours
    "fullDayTours.badge": "Wycieczki Całodniowe",
    "fullDayTours.title": "Odkryj Zanzibar w Jeden Dzień",
    "fullDayTours.description": "Zanurz się w niezapomnianych przygodach z naszymi całodniowymi doświadczeniami.",
    "fullDayTours.viewAll": "Zobacz Wszystkie Wycieczki",

    // Half Day Tours
    "halfDayTours.badge": "Wycieczki Półdniowe",
    "halfDayTours.title": "Krótkie Przygody, Trwałe Wspomnienia",
    "halfDayTours.description": "Idealne dla tych z mniejszą ilością czasu, ale wielką chęcią przygody.",
    "halfDayTours.viewAll": "Zobacz Wycieczki Półdniowe",

    // Safaris Section
    "safaris.badge": "Safari Tanzania",
    "safaris.title": "Zobacz Największą Dziką Przyrodę Afryki",
    "safaris.description": "Od legendarnego Serengeti po krater Ngorongoro.",
    "safaris.viewAll": "Zobacz Więcej Safari",

    // Packages Section
    "packages.badge": "Pakiety Wakacyjne",
    "packages.title": "Wakacje All-Inclusive na Zanzibarze",
    "packages.description": "Bezproblemowe pakiety wakacyjne łączące najlepsze wycieczki i zakwaterowanie.",
    "packages.viewAll": "Zobacz Wszystkie Pakiety",

    // Quad Biking
    "quadBiking.badge": "Przygoda Czeka",
    "quadBiking.title": "Jazda Quadem na Zanzibarze",
    "quadBiking.description": "Poczuj dreszcz emocji jadąc przez krajobrazy Zanzibaru.",
    "quadBiking.feature1": "Profesjonalni przewodnicy i sprzęt bezpieczeństwa",
    "quadBiking.feature2": "Malownicze trasy przez plaże, lasy i wioski",
    "quadBiking.feature3": "Odpowiednie dla początkujących i doświadczonych",
    "quadBiking.feature4": "Dostępne przejażdżki o zachodzie słońca",
    "quadBiking.bookRide": "Zarezerwuj Przejażdżkę",

    // Transfers Section
    "transfers.badge": "Usługi Transferowe",
    "transfers.title": "Nasze Rodzaje Transportu",
    "transfers.description": "Używamy najlepszych samochodów dla naszych klientów.",
    "transfers.viewAll": "Zobacz Usługi Transferowe",
    "transfers.passengers": "pasażerów",

    // Testimonials
    "testimonials.badge": "Opinie",
    "testimonials.title": "Co Mówią Nasi Goście",
    "testimonials.description": "Prawdziwe doświadczenia podróżników, którzy zwiedzili Zanzibar z nami",

    // Recommended
    "recommended.badge": "Zaufany Przez",
    "recommended.title": "Polecany Przez",

    // CTA Section
    "cta.title": "Gotowy na Swoją Przygodę?",
    "cta.description": "Skontaktuj się z nami, aby zaplanować idealne doświadczenie na Zanzibarze",
    "cta.button": "Skontaktuj się Teraz",

    // Footer
    "footer.description": "Twój zaufany partner dla niezapomnianych wycieczek na Zanzibarze.",
    "footer.quickLinks": "Szybkie Linki",
    "footer.ourServices": "Nasze Usługi",
    "footer.contactInfo": "Informacje Kontaktowe",
    "footer.copyright": "© 2026 Zanzibar Exclusive Tours & Safaris. Wszelkie prawa zastrzeżone.",

    // Common
    "common.readMore": "Czytaj Więcej",
    "common.bookNow": "Rezerwuj Teraz",
    "common.whatsapp": "Rezerwuj przez WhatsApp",
    "common.from": "Od",
    "common.perPerson": "za osobę",
    "common.duration": "Czas trwania",
    "common.fullDay": "Cały Dzień",
    "common.halfDay": "Pół Dnia",
    "common.included": "W cenie",
    "common.highlights": "Atrakcje",
    "common.overview": "Przegląd",

    // About Us Page
    "aboutPage.title": "O Nas",
    "aboutPage.subtitle": "Twój Zaufany Partner",
    "aboutPage.missionTitle": "Nasza Misja",
    "aboutPage.missionDesc": "Oferować wyjątkowe doświadczenia podróżnicze.",
    "aboutPage.visionTitle": "Nasza Wizja",
    "aboutPage.visionDesc": "Być wiodącym touroperatorem w Afryce Wschodniej.",
    "aboutPage.whyChooseUs": "Dlaczego My",
    "aboutPage.experience": "20+ Lat Doświadczenia",
    "aboutPage.experienceDesc": "Ponad dwie dekady ekspertyzy.",
    "aboutPage.localGuides": "Lokalni Przewodnicy",
    "aboutPage.localGuidesDesc": "Przewodnicy znający każdy zakątek.",
    "aboutPage.customTours": "Wycieczki na Zamówienie",
    "aboutPage.customToursDesc": "Doświadczenia dopasowane do preferencji.",
    "aboutPage.support": "Wsparcie 24/7",
    "aboutPage.supportDesc": "Zawsze dostępni.",

    // Contact Page
    "contactPage.title": "Kontakt",
    "contactPage.subtitle": "Skontaktuj się z Nami",
    "contactPage.formTitle": "Wyślij Wiadomość",
    "contactPage.name": "Twoje Imię",
    "contactPage.email": "Adres Email",
    "contactPage.phone": "Numer Telefonu",
    "contactPage.subject": "Temat",
    "contactPage.message": "Twoja Wiadomość",
    "contactPage.send": "Wyślij",
    "contactPage.info": "Informacje Kontaktowe",
    "contactPage.address": "Adres",
    "contactPage.hours": "Godziny Pracy",
    "contactPage.hoursValue": "Pon-Niedz: 24/7",

    // Transfers Page
    "transfersPage.title": "Transfery Lotniskowe i Hotelowe",
    "transfersPage.subtitle": "Bezpieczny i Niezawodny Transport",
    "transfersPage.whyBook": "Dlaczego z Nami?",
    "transfersPage.benefit1.title": "Bez Dodatkowych Kosztów",
    "transfersPage.benefit1.desc": "Brak ukrytych opłat. Darmowe czekanie.",
    "transfersPage.benefit2.title": "Punktualna Taksówka",
    "transfersPage.benefit2.desc": "Nasze samochody zawsze na czas. 15 minut wcześniej.",
    "transfersPage.benefit3.title": "Przyjaźni Kierowcy",
    "transfersPage.benefit3.desc": "Przyjaźni i kompetentni kierowcy.",
    "transfersPage.benefit4.title": "Darmowe Czekanie",
    "transfersPage.benefit4.desc": "Brak opłat za czekanie na lotnisku.",
    "transfersPage.vehiclesTitle": "Nasze Rodzaje Transportu",
    "transfersPage.vehiclesDesc": "Używamy najlepszych pojazdów.",
    "transfersPage.service24Title": "Taksówka 24/7",
    "transfersPage.service24Desc1": "Szukasz taksówki na Zanzibarze dostępnej o każdej porze? Dobrze trafiłeś!",
    "transfersPage.service24Desc2": "Oferujemy usługi taksówkowe bez limitu czasowego.",
    "transfersPage.popularRoutes": "Popularne Trasy",
    "transfersPage.popularRoutesDesc": "Najpopularniejsze trasy taksówkowe na Zanzibarze",
    "transfersPage.ctaTitle": "Gotowy do Rezerwacji?",
    "transfersPage.ctaDesc": "Skontaktuj się z nami dla niezawodnych usług transportowych",
    "transfersPage.contactNow": "Skontaktuj się Teraz",

    // Packages Page
    "packagesPage.title": "Pakiety Wakacyjne",
    "packagesPage.subtitle": "Kompletne Doświadczenia Zanzibaru",
    "packagesPage.description": "Odkryj nasze pakiety all-inclusive.",

    // Tours Page
    "toursPage.title": "Wycieczki Zanzibar",
    "toursPage.subtitle": "Odkryj Wyspę Przypraw",
    "toursPage.fullDayTitle": "Wycieczki Całodniowe",
    "toursPage.fullDayDesc": "Zanurz się w całodniowych przygodach",
    "toursPage.halfDayTitle": "Wycieczki Półdniowe",
    "toursPage.halfDayDesc": "Idealne krótkie przygody",

    // Safaris Page
    "safarisPage.title": "Safari Tanzania",
    "safarisPage.subtitle": "Doświadcz Afrykańskiej Dzikiej Przyrody",
    "safarisPage.description": "Podróżuj w serce legendarnych parków narodowych Tanzanii.",

    // About Zanzibar Page
    "aboutZanzibar.title": "O Zanzibarze",
    "aboutZanzibar.subtitle": "Afrykańska Wyspa Przypraw",
    "aboutZanzibar.intro": "Odkryj urokliwą wyspę Zanzibar, tropikalny raj u wybrzeży Tanzanii.",
    "aboutZanzibar.stoneTitle": "Stone Town",
    "aboutZanzibar.stoneDesc": "Obiekt Światowego Dziedzictwa UNESCO z bogatą historią.",
    "aboutZanzibar.spiceTitle": "Wyspa Przypraw",
    "aboutZanzibar.spiceDesc": "Słynna z goździków, gałki muszkatołowej, cynamonu.",
    "aboutZanzibar.beachTitle": "Nieskazitelne Plaże",
    "aboutZanzibar.beachDesc": "Białe plaże i krystalicznie czysta woda.",
    "aboutZanzibar.forestTitle": "Las Jozani",
    "aboutZanzibar.forestDesc": "Dom rzadkich małp Kolobus.",

    // FAQ Page
    "faqPage.title": "Często Zadawane Pytania",
    "faqPage.subtitle": "Odpowiedzi na częste pytania",

    // Weather Page
    "weatherPage.title": "Pogoda Zanzibar",
    "weatherPage.subtitle": "Najlepszy Czas na Wizytę",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about-us": "Sobre Nosotros",
    "nav.about-zanzibar": "Sobre Zanzíbar",
    "nav.itineraries": "Itinerarios",
    "nav.zanzibar-tours": "Tours Zanzíbar",
    "nav.tanzania-safaris": "Safaris Tanzania",
    "nav.packages": "Paquetes",
    "nav.transfers": "Traslados",
    "nav.contact-us": "Contáctanos",
    "nav.book": "Reservar",

    // Hero
    "hero.tagline": "Vacaciones Maravillosas",
    "hero.title1": "Descubre Zanzíbar",
    "hero.title2": "Explora Tanzania",
    "hero.subtitle": "Tu Puerta al Paraíso",
    "hero.description1": "Experimenta el paraíso con tours y aventuras inolvidables",
    "hero.description2": "Safaris premium y experiencias isleñas exclusivas te esperan",
    "hero.exploreTours": "Explorar Tours",
    "hero.bookNow": "Reservar Ahora",
    "hero.contactUs": "Contáctanos",

    // About Section
    "about.badge": "Sobre Nosotros",
    "about.title": "Tu Socio de Confianza en Aventuras Inolvidables",
    "about.description1":
      "¡Bienvenido a Zanzibar Exclusive Tours and Safaris! Con más de 20 años en la industria del turismo, ofrecemos tours excepcionales.",
    "about.description2":
      "Ya sea que quieras relajarte en las playas de Zanzíbar o explorar su rica cultura, aseguramos momentos extraordinarios.",
    "about.highlight1": "Más de 20 años de experiencia",
    "about.highlight2": "Tours y traslados personalizados",
    "about.highlight3": "Guías locales expertos",
    "about.highlight4": "Capacidad para grupos grandes",
    "about.yearsExperience": "Años de Experiencia",
    "about.learnMore": "Saber Más",

    // Services Section
    "services.badge": "Nuestros Servicios",
    "services.title": "Experiencias a Medida para Cada Viajero",
    "services.subtitle": "Descubre nuestra gama de tours, safaris y servicios de traslado exclusivos",
    "services.tours.title": "Tours Zanzíbar",
    "services.tours.description": "Explora playas, plantaciones de especias y sitios históricos",
    "services.safaris.title": "Safaris Tanzania",
    "services.safaris.description": "Aventuras de vida salvaje en parques nacionales famosos",
    "services.packages.title": "Paquetes Vacacionales",
    "services.packages.description": "Paquetes completos combinando tours y alojamiento",
    "services.transfers.title": "Servicios de Traslado",
    "services.transfers.description": "Traslados al aeropuerto cómodos y confiables",

    // Full Day Tours
    "fullDayTours.badge": "Tours de Día Completo",
    "fullDayTours.title": "Explora Zanzíbar en Un Día",
    "fullDayTours.description": "Sumérgete en aventuras inolvidables con nuestras experiencias de día completo.",
    "fullDayTours.viewAll": "Ver Todos los Tours",

    // Half Day Tours
    "halfDayTours.badge": "Tours de Medio Día",
    "halfDayTours.title": "Aventuras Rápidas, Recuerdos Duraderos",
    "halfDayTours.description": "Perfecto para quienes tienen poco tiempo pero grandes ganas de aventura.",
    "halfDayTours.viewAll": "Ver Tours de Medio Día",

    // Safaris Section
    "safaris.badge": "Safaris Tanzania",
    "safaris.title": "Presencia la Mayor Vida Salvaje de África",
    "safaris.description": "Desde el legendario Serengeti hasta el Cráter del Ngorongoro.",
    "safaris.viewAll": "Ver Más Safaris",

    // Packages Section
    "packages.badge": "Paquetes Vacacionales",
    "packages.title": "Escapadas Todo Incluido en Zanzíbar",
    "packages.description": "Paquetes vacacionales sin preocupaciones combinando los mejores tours y alojamiento.",
    "packages.viewAll": "Ver Todos los Paquetes",

    // Quad Biking
    "quadBiking.badge": "La Aventura te Espera",
    "quadBiking.title": "Experimenta Quad en Zanzíbar",
    "quadBiking.description": "Siente la emoción de la aventura recorriendo los paisajes de Zanzíbar en quad.",
    "quadBiking.feature1": "Guías profesionales y equipo de seguridad incluidos",
    "quadBiking.feature2": "Rutas escénicas por playas, bosques y aldeas",
    "quadBiking.feature3": "Apto para principiantes y experimentados",
    "quadBiking.feature4": "Paseos al atardecer disponibles",
    "quadBiking.bookRide": "Reservar Paseo",

    // Transfers Section
    "transfers.badge": "Servicios de Traslado",
    "transfers.title": "Nuestros Tipos de Transporte",
    "transfers.description": "Usamos los mejores vehículos para satisfacer a nuestros clientes.",
    "transfers.viewAll": "Ver Servicios de Traslado",
    "transfers.passengers": "pasajeros",

    // Testimonials
    "testimonials.badge": "Testimonios",
    "testimonials.title": "Lo Que Dicen Nuestros Huéspedes",
    "testimonials.description": "Experiencias reales de viajeros que exploraron Zanzíbar con nosotros",

    // Recommended
    "recommended.badge": "Confiado Por",
    "recommended.title": "Recomendado Por",

    // CTA Section
    "cta.title": "¿Listo para Tu Aventura?",
    "cta.description": "Contáctanos hoy para planificar tu experiencia perfecta en Zanzíbar",
    "cta.button": "Contáctanos Ahora",

    // Footer
    "footer.description": "Tu socio de confianza para tours inolvidables en Zanzíbar.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.ourServices": "Nuestros Servicios",
    "footer.contactInfo": "Información de Contacto",
    "footer.copyright": "© 2026 Zanzibar Exclusive Tours & Safaris. Todos los derechos reservados.",

    // Common
    "common.readMore": "Leer Más",
    "common.bookNow": "Reservar Ahora",
    "common.whatsapp": "Reservar por WhatsApp",
    "common.from": "Desde",
    "common.perPerson": "por persona",
    "common.duration": "Duración",
    "common.fullDay": "Día Completo",
    "common.halfDay": "Medio Día",
    "common.included": "Incluido",
    "common.highlights": "Destacados",
    "common.overview": "Descripción",

    // About Us Page
    "aboutPage.title": "Sobre Nosotros",
    "aboutPage.subtitle": "Tu Socio de Confianza",
    "aboutPage.missionTitle": "Nuestra Misión",
    "aboutPage.missionDesc": "Ofrecer experiencias de viaje excepcionales.",
    "aboutPage.visionTitle": "Nuestra Visión",
    "aboutPage.visionDesc": "Ser el operador turístico líder en África Oriental.",
    "aboutPage.whyChooseUs": "Por Qué Elegirnos",
    "aboutPage.experience": "20+ Años de Experiencia",
    "aboutPage.experienceDesc": "Más de dos décadas de experiencia.",
    "aboutPage.localGuides": "Guías Locales Expertos",
    "aboutPage.localGuidesDesc": "Guías que conocen cada rincón.",
    "aboutPage.customTours": "Tours Personalizados",
    "aboutPage.customToursDesc": "Experiencias adaptadas a tus preferencias.",
    "aboutPage.support": "Soporte 24/7",
    "aboutPage.supportDesc": "Siempre disponibles para ayudarte.",

    // Contact Page
    "contactPage.title": "Contáctanos",
    "contactPage.subtitle": "Ponte en Contacto",
    "contactPage.formTitle": "Envíanos un Mensaje",
    "contactPage.name": "Tu Nombre",
    "contactPage.email": "Correo Electrónico",
    "contactPage.phone": "Número de Teléfono",
    "contactPage.subject": "Asunto",
    "contactPage.message": "Tu Mensaje",
    "contactPage.send": "Enviar Mensaje",
    "contactPage.info": "Información de Contacto",
    "contactPage.address": "Dirección",
    "contactPage.hours": "Horario de Atención",
    "contactPage.hoursValue": "Lun-Dom: 24/7",

    // Transfers Page
    "transfersPage.title": "Traslados Aeropuerto y Hotel",
    "transfersPage.subtitle": "Transporte Seguro, Confiable y Cómodo",
    "transfersPage.whyBook": "¿Por Qué Reservar Con Nosotros?",
    "transfersPage.benefit1.title": "Sin Costos Adicionales",
    "transfersPage.benefit1.desc": "Sin cargos ocultos. Espera gratuita.",
    "transfersPage.benefit2.title": "Taxi Puntual",
    "transfersPage.benefit2.desc": "Nuestros autos siempre llegan a tiempo. 15 minutos antes.",
    "transfersPage.benefit3.title": "Conductores Amables",
    "transfersPage.benefit3.desc": "Conductores amables y capacitados.",
    "transfersPage.benefit4.title": "Espera Gratuita",
    "transfersPage.benefit4.desc": "Sin cargo por espera en el aeropuerto.",
    "transfersPage.vehiclesTitle": "Nuestros Tipos de Transporte",
    "transfersPage.vehiclesDesc": "Usamos los mejores vehículos.",
    "transfersPage.service24Title": "Servicio de Taxi 24 Horas",
    "transfersPage.service24Desc1":
      "¿Buscas un taxi en Zanzíbar disponible en cualquier momento? ¡Has llegado al lugar correcto!",
    "transfersPage.service24Desc2": "Ofrecemos servicios de taxi sin límite de tiempo.",
    "transfersPage.popularRoutes": "Rutas Populares",
    "transfersPage.popularRoutesDesc": "Las rutas de taxi más populares en Zanzíbar",
    "transfersPage.ctaTitle": "¿Listo para Reservar?",
    "transfersPage.ctaDesc": "Contáctanos ahora para servicios de transporte confiables",
    "transfersPage.contactNow": "Contáctanos Ahora",

    // Packages Page
    "packagesPage.title": "Paquetes Vacacionales",
    "packagesPage.subtitle": "Experiencias Completas en Zanzíbar",
    "packagesPage.description": "Descubre nuestros paquetes todo incluido.",

    // Tours Page
    "toursPage.title": "Tours Zanzíbar",
    "toursPage.subtitle": "Descubre la Isla de las Especias",
    "toursPage.fullDayTitle": "Tours de Día Completo",
    "toursPage.fullDayDesc": "Sumérgete en aventuras de día completo",
    "toursPage.halfDayTitle": "Tours de Medio Día",
    "toursPage.halfDayDesc": "Aventuras cortas perfectas",

    // Safaris Page
    "safarisPage.title": "Safaris Tanzania",
    "safarisPage.subtitle": "Experimenta la Vida Salvaje Africana",
    "safarisPage.description": "Viaja al corazón de los legendarios parques nacionales de Tanzania.",

    // About Zanzibar Page
    "aboutZanzibar.title": "Sobre Zanzíbar",
    "aboutZanzibar.subtitle": "La Isla de las Especias de África",
    "aboutZanzibar.intro": "Descubre la encantadora isla de Zanzíbar, un paraíso tropical frente a Tanzania.",
    "aboutZanzibar.stoneTitle": "Stone Town",
    "aboutZanzibar.stoneDesc": "Patrimonio de la Humanidad con rica historia.",
    "aboutZanzibar.spiceTitle": "Isla de las Especias",
    "aboutZanzibar.spiceDesc": "Famosa por clavo, nuez moscada, canela.",
    "aboutZanzibar.beachTitle": "Playas Prístinas",
    "aboutZanzibar.beachDesc": "Playas de arena blanca y aguas turquesa cristalinas.",
    "aboutZanzibar.forestTitle": "Bosque Jozani",
    "aboutZanzibar.forestDesc": "Hogar de los raros monos Colobus rojos.",

    // FAQ Page
    "faqPage.title": "Preguntas Frecuentes",
    "faqPage.subtitle": "Respuestas a preguntas comunes",

    // Weather Page
    "weatherPage.title": "Clima Zanzíbar",
    "weatherPage.subtitle": "Mejor Época para Visitar",
  },
}

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedLang = localStorage.getItem("language")
    if (storedLang && translations[storedLang]) {
      setLanguageState(storedLang)
    }
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  // Prevent hydration mismatch by returning English during SSR
  const contextValue = {
    language: mounted ? language : "en",
    setLanguage,
    t: mounted ? t : (key: string) => translations.en[key] || key,
  }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
