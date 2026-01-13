"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Translations dictionary
type TranslationKeys = {
  [key: string]: string
}

const translations: Record<string, TranslationKeys> = {
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
      "Feel the thrill of adventure as you ride through Zanzibar's stunning landscapes on a powerful quad bike. Explore hidden trails, coastal paths, and rural villages while experiencing the island from a completely new perspective.",
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
    "transfers.alphard.name": "Toyota Alphard",
    "transfers.alphard.capacity": "1 – 6 travelers",
    "transfers.alphard.description": "Luxury minivan perfect for couples, small families, or business travelers.",
    "transfers.hiace.name": "Toyota Hiace",
    "transfers.hiace.capacity": "8 – 16 travelers",
    "transfers.hiace.description": "Spacious van ideal for medium-sized groups and families.",
    "transfers.coaster.name": "Coaster Bus",
    "transfers.coaster.capacity": "15 – 28 travelers",
    "transfers.coaster.description": "Comfortable bus for large groups, events, and corporate transfers.",

    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "What Our Guests Say",
    "testimonials.subtitle": "Read about the experiences of travelers from around the world",

    // Recommended
    "recommended.badge": "Trusted Partners",
    "recommended.title": "Recommended By",
    "recommended.subtitle": "Trusted by leading travel platforms and review sites",

    // CTA
    "cta.badge": "Start Your Journey",
    "cta.title": "Ready for Your Zanzibar Adventure?",
    "cta.subtitle":
      "Let us take care of the details so you can focus on enjoying your journey. Contact us today to plan your perfect getaway!",
    "cta.button": "Book Your Tour",
    "cta.viewTours": "View All Tours",

    // Footer
    "footer.brand":
      "Your trusted partner in unforgettable travel experiences. Serving wonderful vacations for over 20 years.",
    "footer.quickLinks": "Quick Links",
    "footer.popularTours": "Popular Tours",
    "footer.contactUs": "Contact Us",
    "footer.openingHours": "Opening Hours",
    "footer.weekdays": "Mon - Fri: 8:00 - 17:00",
    "footer.saturday": "Saturday: 8:00 - 14:00",
    "footer.sunday": "Sunday: Closed",
    "footer.followUs": "Follow Us",
    "footer.weAccept": "We Accept:",
    "footer.rights": "All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",

    // Common
    "common.readMore": "Read More",
    "common.bookNow": "Book Now",
    "common.bookViaWhatsApp": "Book via WhatsApp",
    "common.viewAll": "View All",
    "common.from": "From",
    "common.person": "person",
    "common.perPerson": "per person",
    "common.duration": "Duration",
    "common.included": "Included",
    "common.excluded": "Excluded",
    "common.highlights": "Highlights",
    "common.overview": "Overview",
    "common.itinerary": "Itinerary",
    "common.gallery": "Gallery",
    "common.learnMore": "Learn More",
    "common.contactUs": "Contact Us",

    // About Us Page
    "aboutUsPage.heroTagline": "Our Story",
    "aboutUsPage.heroTitle": "About Us",
    "aboutUsPage.heroDescription": "Your trusted partner in unforgettable travel experiences since 2004",
    "aboutUsPage.welcomeTagline": "Welcome",
    "aboutUsPage.welcomeTitle": "Welcome to Zanzibar Exclusive Tours and Safaris",
    "aboutUsPage.welcomeDesc1":
      "Your trusted partner in unforgettable travel experiences! With over 20 years in the tourism industry, we've been providing exceptional tours, transfers, and personalized excursions to travelers from all over the World.",
    "aboutUsPage.welcomeDesc2":
      "Whether you're looking to relax on Zanzibar's pristine beaches or explore its rich culture, we ensure every moment is nothing short of extraordinary.",
    "aboutUsPage.expertiseTagline": "Our Expertise",
    "aboutUsPage.expertiseTitle": "What Makes Us Different",
    "aboutUsPage.expertiseDesc":
      "With decades of experience, we understand what makes a trip truly memorable. From seamless airport transfers to immersive guided tours, we go the extra mile to deliver personalized services tailored to your unique needs.",
    "aboutUsPage.feature1.title": "20+ Years Experience",
    "aboutUsPage.feature1.desc":
      "Decades of expertise in creating exceptional travel experiences across Zanzibar and Tanzania.",
    "aboutUsPage.feature2.title": "Expert Local Guides",
    "aboutUsPage.feature2.desc": "Professional, knowledgeable guides who bring the culture and history to life.",
    "aboutUsPage.feature3.title": "Global Reach",
    "aboutUsPage.feature3.desc": "Welcoming travelers from all over the world with multilingual support.",
    "aboutUsPage.feature4.title": "Personalized Service",
    "aboutUsPage.feature4.desc": "Every trip is customized to meet your unique preferences and needs.",
    "aboutUsPage.servicesTagline": "Services",
    "aboutUsPage.servicesTitle": "What We Offer",
    "aboutUsPage.offering1.title": "Tailored Transfers",
    "aboutUsPage.offering1.desc":
      "Safe, reliable transportation for individuals or groups, from airport pickups to custom routes across Zanzibar.",
    "aboutUsPage.offering2.title": "Excursions & Tours",
    "aboutUsPage.offering2.desc":
      "Discover Zanzibar's iconic destinations—whether it's Stone Town's history, the spice farms, or the stunning beaches—with our experienced local guides.",
    "aboutUsPage.offering3.title": "Group & Family Travel",
    "aboutUsPage.offering3.desc":
      "Whether you're organizing a family vacation, a student group tour, or a corporate retreat, we specialize in creating unforgettable experiences for large groups.",
    "aboutUsPage.offering4.title": "Local Experiences",
    "aboutUsPage.offering4.desc":
      "Get a deeper connection with Zanzibar's unique culture, food and history through authentic, hands-on experiences.",
    "aboutUsPage.whyUsTagline": "Why Us",
    "aboutUsPage.whyUsTitle": "Why Choose Us?",
    "aboutUsPage.reason1": "Over 20 years of providing exceptional tours and transfers in Zanzibar and beyond",
    "aboutUsPage.reason2": "We are committed to provide seamless, stress-free travel experiences that you can count on",
    "aboutUsPage.reason3": "Every trip is unique, and we tailor every detail to suit your group, family, or event",
    "aboutUsPage.reason4":
      "Whether it's a family reunion, student group, or corporate events, we specialize in handling large groups with ease",
    "aboutUsPage.partnerTitle": "Let Us Be Your Travel Partner",
    "aboutUsPage.partnerDesc":
      "We are more than just a tour company—we're your travel partner, here to make your Zanzibar adventure unforgettable! Let us take care of the details so you can focus on enjoying your journey.",
    "aboutUsPage.contactToday": "Contact Us Today",
    "aboutUsPage.whatsappUs": "WhatsApp Us",

    // Contact Us Page
    "contactPage.heroTagline": "Get in Touch",
    "contactPage.heroTitle": "Contact Us",
    "contactPage.heroDescription":
      "Have questions or ready to book? We're here to help make your Zanzibar adventure unforgettable.",
    "contactPage.formTitle": "Send Us a Message",
    "contactPage.formDesc": "Fill out the form below and we'll get back to you as soon as possible.",
    "contactPage.formSuccess": "Your message has been sent successfully. We'll get back to you shortly.",
    "contactPage.name": "Your Name",
    "contactPage.email": "Email Address",
    "contactPage.phone": "Phone Number",
    "contactPage.message": "Your Message",
    "contactPage.namePlaceholder": "John Doe",
    "contactPage.emailPlaceholder": "john@example.com",
    "contactPage.phonePlaceholder": "+1 234 567 8900",
    "contactPage.messagePlaceholder": "Tell us about your travel plans...",
    "contactPage.sendMessage": "Send Message",
    "contactPage.sending": "Sending...",
    "contactPage.otherWays": "Other Ways to Contact Us",
    "contactPage.otherWaysDesc": "For more information you can contact us via details below.",
    "contactPage.address": "Address",
    "contactPage.whatsapp": "WhatsApp",
    "contactPage.website": "Website",
    "contactPage.followSocial": "Follow Us on Social Media",
    "contactPage.mapTitle": "Find Us on the Map",
    "contactPage.mapDesc": "Visit our office in Jumbi, Zanzibar",
    "contactPage.openInMaps": "Open in Google Maps",

    // Transfers Page
    "transfersPage.heroTagline": "24/7 Transfer Services",
    "transfersPage.heroTitle": "Airport & Hotel Transfers",
    "transfersPage.heroDesc":
      "Reliable, comfortable, and affordable taxi services across Zanzibar. Book your transfer with us and travel with peace of mind.",
    "transfersPage.bookTransfer": "Book Your Transfer",
    "transfersPage.whyBookTitle": "Why Book a Taxi With Us?",
    "transfersPage.whyBookDesc": "Experience hassle-free transportation with our professional and reliable service",
    "transfersPage.benefit1.title": "Without Additional Costs",
    "transfersPage.benefit1.desc": "We do not charge any additional fees. Free waiting, free cancellation.",
    "transfersPage.benefit2.title": "On Time Taxi",
    "transfersPage.benefit2.desc":
      "Our cars always arrive on time. The driver arrives 15 minutes earlier and will take you on a journey.",
    "transfersPage.benefit3.title": "Friendly Drivers",
    "transfersPage.benefit3.desc": "We are friendly and knowledgeable drivers to achieve your satisfaction.",
    "transfersPage.benefit4.title": "Free Waiting Charges",
    "transfersPage.benefit4.desc":
      "You will not pay any waiting fee at the airport, we understand the visa process at the airport.",
    "transfersPage.vehiclesTitle": "Our Types of Transport",
    "transfersPage.vehiclesDesc":
      "We use the best cars to satisfy our customers. Our vehicles suit all types of travelers - single travelers, couples, families, and groups.",
    "transfersPage.service24Title": "We Are a 24 Hour Taxi Service in Zanzibar",
    "transfersPage.service24Desc1":
      "If you are looking for a taxi in Zanzibar that will offer services whenever you need them, then you have come to the right place!",
    "transfersPage.service24Desc2":
      "We provide taxi services without time limits. The driver will come to pick you up at any time you have mentioned to us in advance and will take you to your destination. We really care about our customers' time. So you can contact us and book our services anywhere in Zanzibar - from airport, hotels, or anywhere.",
    "transfersPage.feature1": "Airport pickups & drop-offs",
    "transfersPage.feature2": "Hotel transfers",
    "transfersPage.feature3": "Island tours",
    "transfersPage.feature4": "Custom routes",
    "transfersPage.popularRoutes": "Most Popular Taxi Routes",
    "transfersPage.popularRoutesDesc":
      "Book your transfer on any of these popular routes or contact us for custom destinations",
    "transfersPage.ctaTitle": "Ready to Book Your Transfer?",
    "transfersPage.ctaDesc":
      "Contact us today to arrange your airport pickup, hotel transfer, or custom route. We're available 24/7 to serve you.",
    "transfersPage.contactNow": "Contact Us Now",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about-us": "معلومات عنا",
    "nav.about-zanzibar": "عن زنجبار",
    "nav.itineraries": "برامج الرحلات",
    "nav.zanzibar-tours": "جولات زنجبار",
    "nav.tanzania-safaris": "رحلات السفاري في تنزانيا",
    "nav.packages": "الباقات",
    "nav.transfers": "النقل",
    "nav.contact-us": "اتصل بنا",

    // Hero
    "hero.tagline": "نقدم إجازات رائعة",
    "hero.title1": "استمتع بزنجبار",
    "hero.title2": "استكشف تنزانيا",
    "hero.subtitle": "بوابتك إلى الجنة",
    "hero.description1": "جرب الجنة مع جولات ومغامرات لا تنسى",
    "hero.description2": "رحلات السفاري المميزة وتجارب الجزيرة الحصرية في انتظارك",
    "hero.exploreTours": "استكشف الجولات",
    "hero.bookNow": "احجز الآن",
    "hero.contactUs": "اتصل بنا",

    // About Section
    "about.badge": "معلومات عنا",
    "about.title": "شريكك الموثوق في المغامرات التي لا تنسى",
    "about.description1":
      "مرحبًا بكم في زنجبار إكسكلوسيف تورز وسفاريز، شريككم الموثوق في تجارب السفر التي لا تنسى! مع أكثر من 20 عامًا في صناعة السياحة، كنا نقدم جولات استثنائية ونقل ورحلات مخصصة للمسافرين من جميع أنحاء العالم.",
    "about.description2":
      "سواء كنت تبحث عن الاسترخاء على شواطئ زنجبار البكر أو استكشاف ثقافتها الغنية، فإننا نضمن أن تكون كل لحظة استثنائية.",
    "about.highlight1": "أكثر من 20 عامًا من الخبرة",
    "about.highlight2": "جولات ونقل مخصص",
    "about.highlight3": "مرشدون محليون خبراء",
    "about.highlight4": "قدرات المجموعات الكبيرة",
    "about.yearsExperience": "سنوات من الخبرة",
    "about.learnMore": "اعرف المزيد عنا",

    // Services
    "services.badge": "خدماتنا",
    "services.title": "تجارب مصممة لكل مسافر",
    "services.subtitle": "اكتشف مجموعتنا من الجولات الحصرية والسفاري وخدمات النقل",
    "services.tours.title": "جولات زنجبار",
    "services.tours.description": "استكشف الشواطئ البكر ومزارع التوابل والمواقع التاريخية",
    "services.safaris.title": "رحلات السفاري في تنزانيا",
    "services.safaris.description": "تجربة مغامرات الحياة البرية في الحدائق الوطنية الشهيرة عالميًا",
    "services.packages.title": "باقات العطلات",
    "services.packages.description": "باقات عطلات كاملة تجمع بين الجولات والإقامة",
    "services.transfers.title": "خدمات النقل",
    "services.transfers.description": "نقل مريح وموثوق من المطار وداخل الجزيرة",

    // Full Day Tours
    "fullDayTours.badge": "جولات اليوم الكامل",
    "fullDayTours.title": "استكشف زنجبار في يوم واحد",
    "fullDayTours.description": "انغمس في مغامرات لا تنسى مع تجاربنا المختارة بعناية ليوم كامل.",
    "fullDayTours.viewAll": "عرض جولات اليوم الكامل",

    // Half Day Tours
    "halfDayTours.badge": "جولات نصف يوم",
    "halfDayTours.title": "مغامرات سريعة، ذكريات دائمة",
    "halfDayTours.description":
      "مثالي لمن لديهم وقت قصير لكنهم يبحثون عن مغامرة كبيرة. استكشف أفضل ما في زنجبار في بضع ساعات فقط.",
    "halfDayTours.viewAll": "عرض جولات نصف اليوم",

    // Safaris
    "safaris.badge": "سفاري تنزانيا",
    "safaris.title": "شاهد أعظم الحياة البرية في أفريقيا",
    "safaris.description":
      "من سيرينجيتي الأسطوري إلى فوهة نجورونجورو، استمتع بتجربة المحميات الوطنية الشهيرة عالميًا في تنزانيا.",
    "safaris.viewAll": "عرض المزيد من سفاري تنزانيا",

    // Packages
    "packages.badge": "باقات العطلات",
    "packages.title": "عطلات شاملة في زنجبار",
    "packages.description": "باقات عطلات خالية من المتاعب تجمع بين أفضل الجولات والإقامة والتجارب.",
    "packages.viewAll": "عرض جميع الباقات",

    // Quad Biking
    "quadBiking.badge": "المغامرة في انتظارك",
    "quadBiking.title": "جرب ركوب الدراجات الرباعية في زنجبار",
    "quadBiking.description":
      "اشعر بإثارة المغامرة أثناء ركوبك عبر المناظر الطبيعية الخلابة في زنجبار على دراجة رباعية قوية.",
    "quadBiking.feature1": "مرشدون محترفون ومعدات سلامة مقدمة",
    "quadBiking.feature2": "مسارات خلابة عبر الشواطئ والغابات والقرى",
    "quadBiking.feature3": "مناسب للمبتدئين والراكبين ذوي الخبرة",
    "quadBiking.feature4": "رحلات غروب الشمس متاحة لتجربة ساحرة",
    "quadBiking.bookRide": "احجز رحلة",

    // Transfers
    "transfers.badge": "خدمات النقل",
    "transfers.title": "أنواع النقل لدينا",
    "transfers.description": "نستخدم أفضل السيارات لإرضاء عملائنا. مركباتنا تناسب جميع أنواع المسافرين.",
    "transfers.viewAll": "عرض خدمات النقل",
    "transfers.alphard.name": "تويوتا ألفارد",
    "transfers.alphard.capacity": "1 – 6 مسافرين",
    "transfers.alphard.description": "ميني فان فاخر مثالي للأزواج والعائلات الصغيرة أو رجال الأعمال.",
    "transfers.hiace.name": "تويوتا هايس",
    "transfers.hiace.capacity": "8 – 16 مسافر",
    "transfers.hiace.description": "فان فسيح مثالي للمجموعات المتوسطة والعائلات.",
    "transfers.coaster.name": "حافلة كوستر",
    "transfers.coaster.capacity": "15 – 28 مسافر",
    "transfers.coaster.description": "حافلة مريحة للمجموعات الكبيرة والفعاليات ونقل الشركات.",

    // Testimonials
    "testimonials.badge": "الشهادات",
    "testimonials.title": "ماذا يقول ضيوفنا",
    "testimonials.subtitle": "اقرأ عن تجارب المسافرين من جميع أنحاء العالم",

    // Recommended
    "recommended.badge": "شركاء موثوقون",
    "recommended.title": "موصى به من",
    "recommended.subtitle": "موثوق به من قبل منصات السفر الرائدة ومواقع المراجعة",

    // CTA
    "cta.badge": "ابدأ رحلتك",
    "cta.title": "هل أنت مستعد لمغامرتك في زنجبار؟",
    "cta.subtitle": "دعنا نهتم بالتفاصيل حتى تتمكن من التركيز على الاستمتاع برحلتك. اتصل بنا اليوم!",
    "cta.button": "احجز جولتك",
    "cta.viewTours": "عرض جميع الجولات",

    // Footer
    "footer.brand": "شريكك الموثوق في تجارب السفر التي لا تنسى. خدمة إجازات رائعة لأكثر من 20 عامًا.",
    "footer.quickLinks": "روابط سريعة",
    "footer.popularTours": "جولات شعبية",
    "footer.contactUs": "اتصل بنا",
    "footer.openingHours": "ساعات العمل",
    "footer.weekdays": "الإثنين - الجمعة: 8:00 - 17:00",
    "footer.saturday": "السبت: 8:00 - 14:00",
    "footer.sunday": "الأحد: مغلق",
    "footer.followUs": "تابعنا",
    "footer.weAccept": "نقبل:",
    "footer.rights": "كل الحقوق محفوظة.",
    "footer.privacyPolicy": "سياسة الخصوصية",
    "footer.termsOfService": "شروط الخدمة",

    // Common
    "common.readMore": "اقرأ المزيد",
    "common.bookNow": "احجز الآن",
    "common.bookViaWhatsApp": "احجز عبر واتساب",
    "common.viewAll": "عرض الكل",
    "common.from": "من",
    "common.person": "شخص",
    "common.perPerson": "للشخص",
    "common.duration": "المدة",
    "common.included": "مشمول",
    "common.excluded": "غير مشمول",
    "common.highlights": "أبرز النقاط",
    "common.overview": "نظرة عامة",
    "common.itinerary": "برنامج الرحلة",
    "common.gallery": "معرض الصور",
    "common.learnMore": "اعرف المزيد",
    "common.contactUs": "اتصل بنا",

    // About Us Page
    "aboutUsPage.heroTagline": "قصتنا",
    "aboutUsPage.heroTitle": "معلومات عنا",
    "aboutUsPage.heroDescription": "شريكك الموثوق في تجارب السفر التي لا تنسى منذ 2004",
    "aboutUsPage.welcomeTagline": "أهلاً بك",
    "aboutUsPage.welcomeTitle": "مرحبًا بكم في زنجبار إكسكلوسيف تورز وسفاريز",
    "aboutUsPage.welcomeDesc1":
      "شريككم الموثوق في تجارب السفر التي لا تنسى! مع أكثر من 20 عامًا في صناعة السياحة، كنا نقدم جولات استثنائية ونقل ورحلات مخصصة للمسافرين من جميع أنحاء العالم.",
    "aboutUsPage.welcomeDesc2":
      "سواء كنت تبحث عن الاسترخاء على شواطئ زنجبار البكر أو استكشاف ثقافتها الغنية، فإننا نضمن أن تكون كل لحظة استثنائية.",
    "aboutUsPage.expertiseTagline": "خبرتنا",
    "aboutUsPage.expertiseTitle": "ما يميزنا",
    "aboutUsPage.expertiseDesc": "مع عقود من الخبرة، نحن نفهم ما يجعل الرحلة لا تنسى حقًا.",
    "aboutUsPage.feature1.title": "أكثر من 20 عامًا خبرة",
    "aboutUsPage.feature1.desc": "عقود من الخبرة في إنشاء تجارب سفر استثنائية.",
    "aboutUsPage.feature2.title": "مرشدون محليون خبراء",
    "aboutUsPage.feature2.desc": "مرشدون محترفون وذوو معرفة يجلبون الثقافة والتاريخ إلى الحياة.",
    "aboutUsPage.feature3.title": "انتشار عالمي",
    "aboutUsPage.feature3.desc": "نرحب بالمسافرين من جميع أنحاء العالم مع دعم متعدد اللغات.",
    "aboutUsPage.feature4.title": "خدمة شخصية",
    "aboutUsPage.feature4.desc": "كل رحلة مخصصة لتلبية تفضيلاتك واحتياجاتك الفريدة.",
    "aboutUsPage.servicesTagline": "الخدمات",
    "aboutUsPage.servicesTitle": "ما نقدمه",
    "aboutUsPage.offering1.title": "نقل مخصص",
    "aboutUsPage.offering1.desc": "نقل آمن وموثوق للأفراد أو المجموعات.",
    "aboutUsPage.offering2.title": "الرحلات والجولات",
    "aboutUsPage.offering2.desc": "اكتشف وجهات زنجبار الشهيرة مع مرشدينا المحليين ذوي الخبرة.",
    "aboutUsPage.offering3.title": "سفر المجموعات والعائلات",
    "aboutUsPage.offering3.desc": "نحن متخصصون في إنشاء تجارب لا تنسى للمجموعات الكبيرة.",
    "aboutUsPage.offering4.title": "التجارب المحلية",
    "aboutUsPage.offering4.desc": "احصل على اتصال أعمق مع ثقافة زنجبار الفريدة.",
    "aboutUsPage.whyUsTagline": "لماذا نحن",
    "aboutUsPage.whyUsTitle": "لماذا تختارنا؟",
    "aboutUsPage.reason1": "أكثر من 20 عامًا من تقديم جولات ونقل استثنائي في زنجبار",
    "aboutUsPage.reason2": "نحن ملتزمون بتقديم تجارب سفر سلسة وخالية من التوتر",
    "aboutUsPage.reason3": "كل رحلة فريدة، ونحن نخصص كل التفاصيل",
    "aboutUsPage.reason4": "سواء كانت لم شمل عائلي أو مجموعة طلابية أو فعاليات شركات",
    "aboutUsPage.partnerTitle": "دعنا نكون شريك سفرك",
    "aboutUsPage.partnerDesc": "نحن أكثر من مجرد شركة سياحية - نحن شريك سفرك!",
    "aboutUsPage.contactToday": "اتصل بنا اليوم",
    "aboutUsPage.whatsappUs": "واتساب",

    // Contact Us Page
    "contactPage.heroTagline": "تواصل معنا",
    "contactPage.heroTitle": "اتصل بنا",
    "contactPage.heroDescription": "هل لديك أسئلة أو جاهز للحجز؟ نحن هنا للمساعدة.",
    "contactPage.formTitle": "أرسل لنا رسالة",
    "contactPage.formDesc": "املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن.",
    "contactPage.formSuccess": "تم إرسال رسالتك بنجاح.",
    "contactPage.name": "اسمك",
    "contactPage.email": "عنوان البريد الإلكتروني",
    "contactPage.phone": "رقم الهاتف",
    "contactPage.message": "رسالتك",
    "contactPage.namePlaceholder": "محمد أحمد",
    "contactPage.emailPlaceholder": "mohammed@example.com",
    "contactPage.phonePlaceholder": "+966 12 345 6789",
    "contactPage.messagePlaceholder": "أخبرنا عن خطط سفرك...",
    "contactPage.sendMessage": "إرسال الرسالة",
    "contactPage.sending": "جاري الإرسال...",
    "contactPage.otherWays": "طرق أخرى للتواصل",
    "contactPage.otherWaysDesc": "لمزيد من المعلومات يمكنك التواصل معنا عبر التفاصيل أدناه.",
    "contactPage.address": "العنوان",
    "contactPage.whatsapp": "واتساب",
    "contactPage.website": "الموقع الإلكتروني",
    "contactPage.followSocial": "تابعنا على وسائل التواصل الاجتماعي",
    "contactPage.mapTitle": "اعثر علينا على الخريطة",
    "contactPage.mapDesc": "قم بزيارة مكتبنا في جومبي، زنجبار",
    "contactPage.openInMaps": "افتح في خرائط جوجل",

    // Transfers Page
    "transfersPage.heroTagline": "خدمات النقل 24/7",
    "transfersPage.heroTitle": "نقل المطار والفندق",
    "transfersPage.heroDesc": "خدمات تاكسي موثوقة ومريحة وبأسعار معقولة في جميع أنحاء زنجبار.",
    "transfersPage.bookTransfer": "احجز نقلك",
    "transfersPage.whyBookTitle": "لماذا تحجز تاكسي معنا؟",
    "transfersPage.whyBookDesc": "استمتع بنقل خالٍ من المتاعب مع خدمتنا المهنية",
    "transfersPage.benefit1.title": "بدون تكاليف إضافية",
    "transfersPage.benefit1.desc": "لا نفرض أي رسوم إضافية. انتظار مجاني، إلغاء مجاني.",
    "transfersPage.benefit2.title": "تاكسي في الموعد",
    "transfersPage.benefit2.desc": "سياراتنا تصل دائمًا في الموعد. يصل السائق قبل 15 دقيقة.",
    "transfersPage.benefit3.title": "سائقون ودودون",
    "transfersPage.benefit3.desc": "نحن سائقون ودودون وذوو معرفة لتحقيق رضاك.",
    "transfersPage.benefit4.title": "رسوم انتظار مجانية",
    "transfersPage.benefit4.desc": "لن تدفع أي رسوم انتظار في المطار.",
    "transfersPage.vehiclesTitle": "أنواع النقل لدينا",
    "transfersPage.vehiclesDesc": "نستخدم أفضل السيارات لإرضاء عملائنا.",
    "transfersPage.service24Title": "نحن خدمة تاكسي 24 ساعة في زنجبار",
    "transfersPage.service24Desc1": "إذا كنت تبحث عن تاكسي في زنجبار يقدم خدمات متى احتجت، فقد وصلت إلى المكان الصحيح!",
    "transfersPage.service24Desc2": "نقدم خدمات التاكسي بدون حدود زمنية.",
    "transfersPage.feature1": "استقبال وتوصيل المطار",
    "transfersPage.feature2": "نقل الفنادق",
    "transfersPage.feature3": "جولات الجزيرة",
    "transfersPage.feature4": "مسارات مخصصة",
    "transfersPage.popularRoutes": "أشهر مسارات التاكسي",
    "transfersPage.popularRoutesDesc": "احجز نقلك على أي من هذه المسارات الشعبية",
    "transfersPage.ctaTitle": "هل أنت مستعد لحجز نقلك؟",
    "transfersPage.ctaDesc": "اتصل بنا اليوم لترتيب نقل المطار أو الفندق. متاحون 24/7.",
    "transfersPage.contactNow": "اتصل بنا الآن",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about-us": "À Propos",
    "nav.about-zanzibar": "À Propos de Zanzibar",
    "nav.itineraries": "Programmes de voyage",
    "nav.zanzibar-tours": "Tours Zanzibar",
    "nav.tanzania-safaris": "Safaris Tanzanie",
    "nav.packages": "Forfaits",
    "nav.transfers": "Transferts",
    "nav.contact-us": "Contactez-Nous",

    // Hero
    "hero.tagline": "Des Vacances Merveilleuses",
    "hero.title1": "Découvrez Zanzibar",
    "hero.title2": "Explorez la Tanzanie",
    "hero.subtitle": "Votre Porte vers le Paradis",
    "hero.description1": "Vivez le paradis avec des tours et aventures inoubliables",
    "hero.description2": "Des safaris de luxe et des expériences exclusives sur l'île vous attendent",
    "hero.exploreTours": "Explorer les Tours",
    "hero.bookNow": "Réserver Maintenant",
    "hero.contactUs": "Contactez-Nous",

    // About
    "about.badge": "À Propos",
    "about.title": "Votre Partenaire de Confiance dans les Aventures Inoubliables",
    "about.description1":
      "Bienvenue chez Zanzibar Exclusive Tours and Safaris, votre partenaire de confiance dans les expériences de voyage inoubliables! Avec plus de 20 ans dans l'industrie du tourisme, nous offrons des tours exceptionnels, des transferts et des excursions personnalisées aux voyageurs du monde entier.",
    "about.description2":
      "Que vous cherchiez à vous détendre sur les plages immaculées de Zanzibar ou à explorer sa riche culture, nous assurons que chaque moment soit inégalé.",
    "about.highlight1": "Plus de 20 ans d'expérience",
    "about.highlight2": "Tours et transferts personnalisés",
    "about.highlight3": "Guides locaux experts",
    "about.highlight4": "Capacités pour grands groupes",
    "about.yearsExperience": "Années d'Expérience",
    "about.learnMore": "En Savoir Plus",

    // Services
    "services.badge": "Nos Services",
    "services.title": "Expériences Sur Mesure pour Chaque Voyageur",
    "services.subtitle": "Découvrez notre gamme de tours exclusifs, safaris et services de transfert",
    "services.tours.title": "Tours Zanzibar",
    "services.tours.description": "Explorez les plages immaculées, les plantations d'épices et les sites historiques",
    "services.safaris.title": "Safaris Tanzanie",
    "services.safaris.description": "Expériences de la faune dans les parcs nationaux célèbres du monde",
    "services.packages.title": "Forfaits Vacances",
    "services.packages.description": "Des forfaits de vacances complets combinant des tours et de l'hébergement",
    "services.transfers.title": "Services de Transfert",
    "services.transfers.description": "Transferts aéroport confortables et fiables et transport sur l'île",

    // Full Day Tours
    "fullDayTours.badge": "Tours Journée Complète",
    "fullDayTours.title": "Explorez Zanzibar en Une Journée",
    "fullDayTours.description":
      "Plongez dans des aventures inoubliables avec nos expériences de journée complète soigneusement sélectionnées.",
    "fullDayTours.viewAll": "Voir les Tours Journée Complète",

    // Half Day Tours
    "halfDayTours.badge": "Tours Demi-Journée",
    "halfDayTours.title": "Aventures Rapides, Souvenirs Durables",
    "halfDayTours.description": "Parfait pour ceux qui manquent de temps mais pas d'aventure.",
    "halfDayTours.viewAll": "Voir les Tours Demi-Journée",

    // Safaris
    "safaris.badge": "Safaris Tanzanie",
    "safaris.title": "Admirez la Plus Grande Faune d'Afrique",
    "safaris.description":
      "Du légendaire Serengeti au cratère du Ngorongoro, découvrez les parcs nationaux mondialement célèbres de Tanzanie.",
    "safaris.viewAll": "Voir Plus de Safaris",

    // Packages
    "packages.badge": "Forfaits Vacances",
    "packages.title": "Séjours Tout Compris à Zanzibar",
    "packages.description":
      "Forfaits vacances sans souci combinant les meilleures excursions, hébergements et expériences.",
    "packages.viewAll": "Voir Tous les Forfaits",

    // Quad Biking
    "quadBiking.badge": "L'Aventure Vous Attend",
    "quadBiking.title": "Vivez le Quad à Zanzibar",
    "quadBiking.description":
      "Ressentez le frisson de l'aventure en parcourant les paysages époustouflants de Zanzibar sur un puissant quad.",
    "quadBiking.feature1": "Guides professionnels et équipement de sécurité fournis",
    "quadBiking.feature2": "Itinéraires pittoresques à travers plages, forêts et villages",
    "quadBiking.feature3": "Adapté aux débutants et aux pilotes expérimentés",
    "quadBiking.feature4": "Balades au coucher du soleil pour une expérience magique",
    "quadBiking.bookRide": "Réserver une Balade",

    // Transfers
    "transfers.badge": "Services de Transfert",
    "transfers.title": "Nos Types de Transport",
    "transfers.description": "Nous utilisons les meilleures voitures pour satisfaire nos clients.",
    "transfers.viewAll": "Voir les Services de Transfert",
    "transfers.alphard.name": "Toyota Alphard",
    "transfers.alphard.capacity": "1 – 6 voyageurs",
    "transfers.alphard.description":
      "Monospace de luxe parfait pour les couples, petites familles ou voyageurs d'affaires.",
    "transfers.hiace.name": "Toyota Hiace",
    "transfers.hiace.capacity": "8 – 16 voyageurs",
    "transfers.hiace.description": "Van spacieux idéal pour les groupes de taille moyenne et les familles.",
    "transfers.coaster.name": "Bus Coaster",
    "transfers.coaster.capacity": "15 – 28 voyageurs",
    "transfers.coaster.description": "Bus confortable pour les grands groupes et événements.",

    // Testimonials
    "testimonials.badge": "Témoignages",
    "testimonials.title": "Ce Que Nos Clients Disent",
    "testimonials.subtitle": "Lisez les expériences des voyageurs du monde entier",

    // Recommended
    "recommended.badge": "Partenaires de Confiance",
    "recommended.title": "Recommandé Par",
    "recommended.subtitle": "Fiable par les principales plateformes de voyage",

    // CTA
    "cta.badge": "Commencez Votre Voyage",
    "cta.title": "Prêt pour Votre Aventure à Zanzibar?",
    "cta.subtitle": "Laissez-nous nous occuper des détails pour que vous puissiez vous concentrer sur votre voyage.",
    "cta.button": "Réserver Votre Tour",
    "cta.viewTours": "Voir Tous les Tours",

    // Footer
    "footer.brand": "Votre partenaire de confiance dans les expériences de voyage inoubliables.",
    "footer.quickLinks": "Liens Rapides",
    "footer.popularTours": "Tours Populaires",
    "footer.contactUs": "Contactez-Nous",
    "footer.openingHours": "Heures d'Ouverture",
    "footer.weekdays": "Lun - Ven: 8:00 - 17:00",
    "footer.saturday": "Samedi: 8:00 - 14:00",
    "footer.sunday": "Dimanche: Fermé",
    "footer.followUs": "Suivez-nous",
    "footer.weAccept": "Nous Acceptons:",
    "footer.rights": "Tous droits réservés.",
    "footer.privacyPolicy": "Politique de Confidentialité",
    "footer.termsOfService": "Conditions d'Utilisation",

    // Common
    "common.readMore": "Lire Plus",
    "common.bookNow": "Réserver Maintenant",
    "common.bookViaWhatsApp": "Réserver via WhatsApp",
    "common.viewAll": "Voir Tout",
    "common.from": "À partir de",
    "common.person": "personne",
    "common.perPerson": "par personne",
    "common.duration": "Durée",
    "common.included": "Inclus",
    "common.excluded": "Non inclus",
    "common.highlights": "Points Forts",
    "common.overview": "Aperçu",
    "common.itinerary": "Itinéraire",
    "common.gallery": "Galerie",
    "common.learnMore": "En Savoir Plus",
    "common.contactUs": "Contactez-Nous",

    // About Us Page
    "aboutUsPage.heroTagline": "Notre Histoire",
    "aboutUsPage.heroTitle": "À Propos de Nous",
    "aboutUsPage.heroDescription": "Votre partenaire de confiance depuis 2004",
    "aboutUsPage.welcomeTagline": "Bienvenue",
    "aboutUsPage.welcomeTitle": "Bienvenue chez Zanzibar Exclusive Tours",
    "aboutUsPage.welcomeDesc1": "Votre partenaire de confiance dans les expériences de voyage inoubliables!",
    "aboutUsPage.welcomeDesc2": "Nous assurons que chaque moment soit extraordinaire.",
    "aboutUsPage.expertiseTagline": "Notre Expertise",
    "aboutUsPage.expertiseTitle": "Ce Qui Nous Différencie",
    "aboutUsPage.expertiseDesc": "Avec des décennies d'expérience, nous comprenons ce qui rend un voyage mémorable.",
    "aboutUsPage.feature1.title": "20+ Ans d'Expérience",
    "aboutUsPage.feature1.desc": "Des décennies d'expertise dans les expériences de voyage.",
    "aboutUsPage.feature2.title": "Guides Locaux Experts",
    "aboutUsPage.feature2.desc": "Des guides professionnels qui donnent vie à la culture.",
    "aboutUsPage.feature3.title": "Portée Mondiale",
    "aboutUsPage.feature3.desc": "Accueillant des voyageurs du monde entier.",
    "aboutUsPage.feature4.title": "Service Personnalisé",
    "aboutUsPage.feature4.desc": "Chaque voyage est personnalisé pour vous.",
    "aboutUsPage.servicesTagline": "Services",
    "aboutUsPage.servicesTitle": "Ce Que Nous Offrons",
    "aboutUsPage.offering1.title": "Transferts Sur Mesure",
    "aboutUsPage.offering1.desc": "Transport sûr et fiable.",
    "aboutUsPage.offering2.title": "Excursions & Tours",
    "aboutUsPage.offering2.desc": "Découvrez les destinations emblématiques.",
    "aboutUsPage.offering3.title": "Voyages Groupe & Famille",
    "aboutUsPage.offering3.desc": "Expériences pour grands groupes.",
    "aboutUsPage.offering4.title": "Expériences Locales",
    "aboutUsPage.offering4.desc": "Connexion avec la culture de Zanzibar.",
    "aboutUsPage.whyUsTagline": "Pourquoi Nous",
    "aboutUsPage.whyUsTitle": "Pourquoi Nous Choisir?",
    "aboutUsPage.reason1": "Plus de 20 ans de service exceptionnel",
    "aboutUsPage.reason2": "Expériences de voyage sans stress",
    "aboutUsPage.reason3": "Chaque détail personnalisé",
    "aboutUsPage.reason4": "Spécialisés dans les grands groupes",
    "aboutUsPage.partnerTitle": "Votre Partenaire de Voyage",
    "aboutUsPage.partnerDesc": "Nous sommes plus qu'une entreprise de tourisme!",
    "aboutUsPage.contactToday": "Contactez-Nous Aujourd'hui",
    "aboutUsPage.whatsappUs": "WhatsApp",

    // Contact Page
    "contactPage.heroTagline": "Contactez-Nous",
    "contactPage.heroTitle": "Nous Contacter",
    "contactPage.heroDescription": "Des questions? Nous sommes là pour vous aider.",
    "contactPage.formTitle": "Envoyez-nous un Message",
    "contactPage.formDesc": "Remplissez le formulaire ci-dessous.",
    "contactPage.formSuccess": "Message envoyé avec succès.",
    "contactPage.name": "Votre Nom",
    "contactPage.email": "Adresse Email",
    "contactPage.phone": "Numéro de Téléphone",
    "contactPage.message": "Votre Message",
    "contactPage.namePlaceholder": "Jean Dupont",
    "contactPage.emailPlaceholder": "jean@exemple.com",
    "contactPage.phonePlaceholder": "+33 1 23 45 67 89",
    "contactPage.messagePlaceholder": "Parlez-nous de vos plans...",
    "contactPage.sendMessage": "Envoyer le Message",
    "contactPage.sending": "Envoi en cours...",
    "contactPage.otherWays": "Autres Moyens de Contact",
    "contactPage.otherWaysDesc": "Contactez-nous via les détails ci-dessous.",
    "contactPage.address": "Adresse",
    "contactPage.whatsapp": "WhatsApp",
    "contactPage.website": "Site Web",
    "contactPage.followSocial": "Suivez-nous sur les Réseaux",
    "contactPage.mapTitle": "Trouvez-nous sur la Carte",
    "contactPage.mapDesc": "Visitez notre bureau à Jumbi, Zanzibar",
    "contactPage.openInMaps": "Ouvrir dans Google Maps",

    // Transfers Page
    "transfersPage.heroTagline": "Services de Transfert 24h/24",
    "transfersPage.heroTitle": "Transferts Aéroport & Hôtel",
    "transfersPage.heroDesc": "Services de taxi fiables et abordables.",
    "transfersPage.bookTransfer": "Réserver Votre Transfert",
    "transfersPage.whyBookTitle": "Pourquoi Réserver Avec Nous?",
    "transfersPage.whyBookDesc": "Transport sans tracas avec notre service professionnel",
    "transfersPage.benefit1.title": "Sans Frais Supplémentaires",
    "transfersPage.benefit1.desc": "Attente gratuite, annulation gratuite.",
    "transfersPage.benefit2.title": "Taxi à l'Heure",
    "transfersPage.benefit2.desc": "Nos voitures arrivent toujours à l'heure.",
    "transfersPage.benefit3.title": "Chauffeurs Sympathiques",
    "transfersPage.benefit3.desc": "Chauffeurs compétents pour votre satisfaction.",
    "transfersPage.benefit4.title": "Attente Gratuite",
    "transfersPage.benefit4.desc": "Pas de frais d'attente à l'aéroport.",
    "transfersPage.vehiclesTitle": "Nos Types de Transport",
    "transfersPage.vehiclesDesc": "Les meilleures voitures pour nos clients.",
    "transfersPage.service24Title": "Service de Taxi 24h/24 à Zanzibar",
    "transfersPage.service24Desc1": "Vous cherchez un taxi disponible à tout moment?",
    "transfersPage.service24Desc2": "Services sans limite de temps.",
    "transfersPage.feature1": "Transferts aéroport",
    "transfersPage.feature2": "Transferts hôtel",
    "transfersPage.feature3": "Tours de l'île",
    "transfersPage.feature4": "Itinéraires personnalisés",
    "transfersPage.popularRoutes": "Itinéraires Populaires",
    "transfersPage.popularRoutesDesc": "Réservez sur ces itinéraires populaires",
    "transfersPage.ctaTitle": "Prêt à Réserver?",
    "transfersPage.ctaDesc": "Contactez-nous pour vos transferts. 24h/24.",
    "transfersPage.contactNow": "Contactez-Nous",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about-us": "Über Uns",
    "nav.about-zanzibar": "Über Sansibar",
    "nav.itineraries": "Reisepläne",
    "nav.zanzibar-tours": "Sansibar Touren",
    "nav.tanzania-safaris": "Tansania Safaris",
    "nav.packages": "Pakete",
    "nav.transfers": "Transfers",
    "nav.contact-us": "Kontakt",

    // Hero
    "hero.tagline": "Wunderbare Ferien",
    "hero.title1": "Entdecken Sie Sansibar",
    "hero.title2": "Entdecken Sie Tansania",
    "hero.subtitle": "Ihr Tor zum Paradies",
    "hero.description1": "Erleben Sie das Paradies mit unvergesslichen Touren",
    "hero.description2": "Premium Safaris und exklusive Inselerfahrungen",
    "hero.exploreTours": "Touren Entdecken",
    "hero.bookNow": "Jetzt Buchen",
    "hero.contactUs": "Kontakt",

    // About
    "about.badge": "Über Uns",
    "about.title": "Ihr Vertrauenswürdiger Reisepartner",
    "about.description1":
      "Willkommen bei Zanzibar Exclusive Tours and Safaris! Mit über 20 Jahren Erfahrung bieten wir außergewöhnliche Touren und Transfers.",
    "about.description2":
      "Ob Sie sich entspannen oder die Kultur erkunden möchten, wir garantieren unvergessliche Momente.",
    "about.highlight1": "Über 20 Jahre Erfahrung",
    "about.highlight2": "Personalisierte Touren & Transfers",
    "about.highlight3": "Experten lokale Führer",
    "about.highlight4": "Große Gruppenkapazität",
    "about.yearsExperience": "Jahre Erfahrung",
    "about.learnMore": "Mehr Erfahren",

    // Services
    "services.badge": "Unsere Dienstleistungen",
    "services.title": "Maßgeschneiderte Erlebnisse",
    "services.subtitle": "Entdecken Sie unsere exklusiven Touren und Safaris",
    "services.tours.title": "Sansibar Touren",
    "services.tours.description": "Entdecken Sie Strände und historische Sehenswürdigkeiten",
    "services.safaris.title": "Tansania Safaris",
    "services.safaris.description": "Tierwanderungen in weltberühmten Nationalparks",
    "services.packages.title": "Urlaubs-Pakete",
    "services.packages.description": "Komplette Urlaubspakete mit Touren und Unterkünften",
    "services.transfers.title": "Transfer-Services",
    "services.transfers.description": "Komfortable Flughafentransfers",

    // Full Day Tours
    "fullDayTours.badge": "Ganztagestouren",
    "fullDayTours.title": "Sansibar an Einem Tag",
    "fullDayTours.description": "Unvergessliche Ganztageserlebnisse.",
    "fullDayTours.viewAll": "Alle Ganztagestouren",

    // Half Day Tours
    "halfDayTours.badge": "Halbtagestouren",
    "halfDayTours.title": "Schnelle Abenteuer",
    "halfDayTours.description": "Das Beste von Sansibar in wenigen Stunden.",
    "halfDayTours.viewAll": "Alle Halbtagestouren",

    // Safaris
    "safaris.badge": "Tansania Safaris",
    "safaris.title": "Afrikas Größte Tierwelt",
    "safaris.description": "Von der Serengeti bis zum Ngorongoro-Krater.",
    "safaris.viewAll": "Mehr Safaris Ansehen",

    // Packages
    "packages.badge": "Urlaubspakete",
    "packages.title": "All-Inclusive Sansibar",
    "packages.description": "Sorgenfreie Urlaubspakete.",
    "packages.viewAll": "Alle Pakete Ansehen",

    // Quad Biking
    "quadBiking.badge": "Abenteuer Wartet",
    "quadBiking.title": "Quad-Fahren auf Sansibar",
    "quadBiking.description": "Spüren Sie den Nervenkitzel auf atemberaubenden Landschaften.",
    "quadBiking.feature1": "Professionelle Guides und Sicherheitsausrüstung",
    "quadBiking.feature2": "Malerische Routen durch Strände und Dörfer",
    "quadBiking.feature3": "Für Anfänger und Erfahrene geeignet",
    "quadBiking.feature4": "Sonnenuntergangsfahrten verfügbar",
    "quadBiking.bookRide": "Fahrt Buchen",

    // Transfers
    "transfers.badge": "Transfer-Services",
    "transfers.title": "Unsere Transportarten",
    "transfers.description": "Die besten Fahrzeuge für alle Reisenden.",
    "transfers.viewAll": "Transfer-Services Ansehen",
    "transfers.alphard.name": "Toyota Alphard",
    "transfers.alphard.capacity": "1 – 6 Reisende",
    "transfers.alphard.description": "Luxus-Minivan für Paare und kleine Familien.",
    "transfers.hiace.name": "Toyota Hiace",
    "transfers.hiace.capacity": "8 – 16 Reisende",
    "transfers.hiace.description": "Geräumiger Van für mittelgroße Gruppen.",
    "transfers.coaster.name": "Coaster Bus",
    "transfers.coaster.capacity": "15 – 28 Reisende",
    "transfers.coaster.description": "Komfortabler Bus für große Gruppen.",

    // Testimonials
    "testimonials.badge": "Bewertungen",
    "testimonials.title": "Was Unsere Gäste Sagen",
    "testimonials.subtitle": "Erfahrungen von Reisenden weltweit",

    // Recommended
    "recommended.badge": "Vertrauenswürdige Partner",
    "recommended.title": "Empfohlen Von",
    "recommended.subtitle": "Anerkannt von führenden Reiseplattformen",

    // CTA
    "cta.badge": "Starten Sie Ihre Reise",
    "cta.title": "Bereit für Ihr Sansibar-Abenteuer?",
    "cta.subtitle": "Wir kümmern uns um die Details.",
    "cta.button": "Tour Buchen",
    "cta.viewTours": "Alle Touren Ansehen",

    // Footer
    "footer.brand": "Ihr vertrauenswürdiger Partner für unvergessliche Reisen.",
    "footer.quickLinks": "Schnelllinks",
    "footer.popularTours": "Beliebte Touren",
    "footer.contactUs": "Kontakt",
    "footer.openingHours": "Öffnungszeiten",
    "footer.weekdays": "Mo - Fr: 8:00 - 17:00",
    "footer.saturday": "Sa: 8:00 - 14:00",
    "footer.sunday": "So: Geschlossen",
    "footer.followUs": "Folgen Sie Uns",
    "footer.weAccept": "Wir Akzeptieren:",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacyPolicy": "Datenschutz",
    "footer.termsOfService": "Nutzungsbedingungen",

    // Common
    "common.readMore": "Mehr Lesen",
    "common.bookNow": "Jetzt Buchen",
    "common.bookViaWhatsApp": "Über WhatsApp Buchen",
    "common.viewAll": "Alle Anzeigen",
    "common.from": "Ab",
    "common.person": "Person",
    "common.perPerson": "pro Person",
    "common.duration": "Dauer",
    "common.included": "Inklusive",
    "common.excluded": "Nicht Inklusive",
    "common.highlights": "Highlights",
    "common.overview": "Überblick",
    "common.itinerary": "Reiseverlauf",
    "common.gallery": "Galerie",
    "common.learnMore": "Mehr Erfahren",
    "common.contactUs": "Kontakt",

    // About Us Page (abbreviated)
    "aboutUsPage.heroTagline": "Unsere Geschichte",
    "aboutUsPage.heroTitle": "Über Uns",
    "aboutUsPage.heroDescription": "Ihr Partner seit 2004",
    "aboutUsPage.welcomeTagline": "Willkommen",
    "aboutUsPage.welcomeTitle": "Willkommen bei Zanzibar Exclusive Tours",
    "aboutUsPage.welcomeDesc1": "Ihr Partner für unvergessliche Reisen!",
    "aboutUsPage.welcomeDesc2": "Jeder Moment ist außergewöhnlich.",
    "aboutUsPage.expertiseTagline": "Unsere Expertise",
    "aboutUsPage.expertiseTitle": "Was Uns Unterscheidet",
    "aboutUsPage.expertiseDesc": "Jahrzehntelange Erfahrung.",
    "aboutUsPage.feature1.title": "20+ Jahre Erfahrung",
    "aboutUsPage.feature1.desc": "Expertise in Reiseerlebnissen.",
    "aboutUsPage.feature2.title": "Lokale Guides",
    "aboutUsPage.feature2.desc": "Professionelle Guides.",
    "aboutUsPage.feature3.title": "Globale Reichweite",
    "aboutUsPage.feature3.desc": "Mehrsprachiger Support.",
    "aboutUsPage.feature4.title": "Persönlicher Service",
    "aboutUsPage.feature4.desc": "Nach Ihren Wünschen gestaltet.",
    "aboutUsPage.servicesTagline": "Dienste",
    "aboutUsPage.servicesTitle": "Was Wir Bieten",
    "aboutUsPage.offering1.title": "Maßgeschneiderte Transfers",
    "aboutUsPage.offering1.desc": "Sicherer Transport.",
    "aboutUsPage.offering2.title": "Ausflüge & Touren",
    "aboutUsPage.offering2.desc": "Ikonische Ziele entdecken.",
    "aboutUsPage.offering3.title": "Gruppenreisen",
    "aboutUsPage.offering3.desc": "Für große Gruppen.",
    "aboutUsPage.offering4.title": "Lokale Erlebnisse",
    "aboutUsPage.offering4.desc": "Kultur hautnah erleben.",
    "aboutUsPage.whyUsTagline": "Warum Wir",
    "aboutUsPage.whyUsTitle": "Warum Uns Wählen?",
    "aboutUsPage.reason1": "Über 20 Jahre Erfahrung",
    "aboutUsPage.reason2": "Stressfreie Reisen",
    "aboutUsPage.reason3": "Personalisierte Details",
    "aboutUsPage.reason4": "Große Gruppen willkommen",
    "aboutUsPage.partnerTitle": "Ihr Reisepartner",
    "aboutUsPage.partnerDesc": "Mehr als ein Reiseunternehmen!",
    "aboutUsPage.contactToday": "Kontaktieren Sie Uns",
    "aboutUsPage.whatsappUs": "WhatsApp",

    // Contact Page (abbreviated)
    "contactPage.heroTagline": "Kontaktieren Sie Uns",
    "contactPage.heroTitle": "Kontakt",
    "contactPage.heroDescription": "Wir helfen Ihnen gerne!",
    "contactPage.formTitle": "Nachricht Senden",
    "contactPage.formDesc": "Füllen Sie das Formular aus.",
    "contactPage.formSuccess": "Nachricht erfolgreich gesendet.",
    "contactPage.name": "Ihr Name",
    "contactPage.email": "E-Mail",
    "contactPage.phone": "Telefon",
    "contactPage.message": "Ihre Nachricht",
    "contactPage.namePlaceholder": "Max Mustermann",
    "contactPage.emailPlaceholder": "max@beispiel.de",
    "contactPage.phonePlaceholder": "+49 123 456 789",
    "contactPage.messagePlaceholder": "Ihre Reisepläne...",
    "contactPage.sendMessage": "Nachricht Senden",
    "contactPage.sending": "Wird gesendet...",
    "contactPage.otherWays": "Andere Kontaktmöglichkeiten",
    "contactPage.otherWaysDesc": "Kontaktieren Sie uns.",
    "contactPage.address": "Adresse",
    "contactPage.whatsapp": "WhatsApp",
    "contactPage.website": "Webseite",
    "contactPage.followSocial": "Social Media",
    "contactPage.mapTitle": "Auf der Karte",
    "contactPage.mapDesc": "Besuchen Sie uns in Jumbi",
    "contactPage.openInMaps": "In Google Maps Öffnen",

    // Transfers Page (abbreviated)
    "transfersPage.heroTagline": "24/7 Transfers",
    "transfersPage.heroTitle": "Flughafen- & Hoteltransfers",
    "transfersPage.heroDesc": "Zuverlässige Taxidienste.",
    "transfersPage.bookTransfer": "Transfer Buchen",
    "transfersPage.whyBookTitle": "Warum Mit Uns?",
    "transfersPage.whyBookDesc": "Problemloser Transport",
    "transfersPage.benefit1.title": "Keine Zusatzkosten",
    "transfersPage.benefit1.desc": "Kostenlose Wartezeit.",
    "transfersPage.benefit2.title": "Pünktlich",
    "transfersPage.benefit2.desc": "Immer rechtzeitig.",
    "transfersPage.benefit3.title": "Freundlich",
    "transfersPage.benefit3.desc": "Kompetente Fahrer.",
    "transfersPage.benefit4.title": "Kostenlose Wartezeit",
    "transfersPage.benefit4.desc": "Am Flughafen.",
    "transfersPage.vehiclesTitle": "Unsere Fahrzeuge",
    "transfersPage.vehiclesDesc": "Beste Fahrzeuge.",
    "transfersPage.service24Title": "24-Stunden-Service",
    "transfersPage.service24Desc1": "Taxi rund um die Uhr.",
    "transfersPage.service24Desc2": "Ohne Zeitlimit.",
    "transfersPage.feature1": "Flughafentransfers",
    "transfersPage.feature2": "Hoteltransfers",
    "transfersPage.feature3": "Inseltouren",
    "transfersPage.feature4": "Individuelle Routen",
    "transfersPage.popularRoutes": "Beliebte Routen",
    "transfersPage.popularRoutesDesc": "Buchen Sie diese Routen",
    "transfersPage.ctaTitle": "Bereit zu Buchen?",
    "transfersPage.ctaDesc": "Kontaktieren Sie uns. 24/7.",
    "transfersPage.contactNow": "Jetzt Kontaktieren",
  },
  pl: {
    // Navigation
    "nav.home": "Strona Główna",
    "nav.about-us": "O Nas",
    "nav.about-zanzibar": "O Zanzibarze",
    "nav.itineraries": "Programy podróży",
    "nav.zanzibar-tours": "Wycieczki Zanzibar",
    "nav.tanzania-safaris": "Safari Tanzania",
    "nav.packages": "Pakiety",
    "nav.transfers": "Transfery",
    "nav.contact-us": "Kontakt",

    // Hero
    "hero.tagline": "Wspaniałe Wakacje",
    "hero.title1": "Odkryj Zanzibar",
    "hero.title2": "Odkryj Tanzanię",
    "hero.subtitle": "Twoja Brama do Raju",
    "hero.description1": "Doświadcz raju z niezapomnianymi wycieczkami",
    "hero.description2": "Premiowe safari i ekskluzywne wycieczki",
    "hero.exploreTours": "Odkryj Wycieczki",
    "hero.bookNow": "Zarezerwuj Teraz",
    "hero.contactUs": "Kontakt",

    // About
    "about.badge": "O Nas",
    "about.title": "Twój Zaufany Partner Podróżniczy",
    "about.description1":
      "Witajcie w Zanzibar Exclusive Tours! Z ponad 20-letnim doświadczeniem oferujemy wyjątkowe wycieczki i transfery.",
    "about.description2": "Zapewniamy, że każdy moment będzie wyjątkowy.",
    "about.highlight1": "Ponad 20 lat doświadczenia",
    "about.highlight2": "Spersonalizowane wycieczki i transfery",
    "about.highlight3": "Eksperci lokalni przewodnicy",
    "about.highlight4": "Obsługa dużych grup",
    "about.yearsExperience": "Lat Doświadczenia",
    "about.learnMore": "Dowiedz się Więcej",

    // Services
    "services.badge": "Nasze Usługi",
    "services.title": "Doświadczenia Dla Każdego",
    "services.subtitle": "Odkryj nasze ekskluzywne wycieczki i safari",
    "services.tours.title": "Wycieczki Zanzibar",
    "services.tours.description": "Odkryj plaże i lokalne zabytki",
    "services.safaris.title": "Safari Tanzania",
    "services.safaris.description": "Przygody z dziką przyrodą",
    "services.packages.title": "Pakiety Wakacyjne",
    "services.packages.description": "Komplette pakiety z wycieczkami i noclegiem",
    "services.transfers.title": "Usługi Transferowe",
    "services.transfers.description": "Komfortowe transfery lotniskowe",

    // Full Day Tours
    "fullDayTours.badge": "Wycieczki Całodniowe",
    "fullDayTours.title": "Zanzibar w Jeden Dzień",
    "fullDayTours.description": "Niezapomniane całodniowe przygody.",
    "fullDayTours.viewAll": "Zobacz Wycieczki Całodniowe",

    // Half Day Tours
    "halfDayTours.badge": "Wycieczki Półdniowe",
    "halfDayTours.title": "Szybkie Przygody",
    "halfDayTours.description": "Najlepsze z Zanzibaru w kilka godzin.",
    "halfDayTours.viewAll": "Zobacz Wycieczki Półdniowe",

    // Safaris
    "safaris.badge": "Safari Tanzania",
    "safaris.title": "Dzika Przyroda Afryki",
    "safaris.description": "Od Serengeti do krateru Ngorongoro.",
    "safaris.viewAll": "Zobacz Więcej Safari",

    // Packages
    "packages.badge": "Pakiety Wakacyjne",
    "packages.title": "All-Inclusive Zanzibar",
    "packages.description": "Bezproblemowe pakiety wakacyjne.",
    "packages.viewAll": "Zobacz Wszystkie Pakiety",

    // Quad Biking
    "quadBiking.badge": "Przygoda Czeka",
    "quadBiking.title": "Quady na Zanzibarze",
    "quadBiking.description": "Poczuj dreszcz przygody na zapierających dech krajobrazach.",
    "quadBiking.feature1": "Profesjonalni przewodnicy i sprzęt bezpieczeństwa",
    "quadBiking.feature2": "Malownicze trasy przez plaże i wioski",
    "quadBiking.feature3": "Dla początkujących i doświadczonych",
    "quadBiking.feature4": "Przejażdżki o zachodzie słońca",
    "quadBiking.bookRide": "Zarezerwuj Jazdę",

    // Transfers
    "transfers.badge": "Usługi Transferowe",
    "transfers.title": "Nasze Typy Transportu",
    "transfers.description": "Najlepsze samochody dla naszych klientów.",
    "transfers.viewAll": "Zobacz Usługi Transferowe",
    "transfers.alphard.name": "Toyota Alphard",
    "transfers.alphard.capacity": "1 – 6 podróżnych",
    "transfers.alphard.description": "Luksusowy minivan dla par i małych rodzin.",
    "transfers.hiace.name": "Toyota Hiace",
    "transfers.hiace.capacity": "8 – 16 podróżnych",
    "transfers.hiace.description": "Przestronny van dla średnich grup.",
    "transfers.coaster.name": "Autobus Coaster",
    "transfers.coaster.capacity": "15 – 28 podróżnych",
    "transfers.coaster.description": "Komfortowy autobus dla dużych grup.",

    // Testimonials
    "testimonials.badge": "Opinie",
    "testimonials.title": "Co Mówią Nasi Goście",
    "testimonials.subtitle": "Doświadczenia podróżnych z całego świata",

    // Recommended
    "recommended.badge": "Zaufani Partnerzy",
    "recommended.title": "Zalecane Przez",
    "recommended.subtitle": "Uznane przez wiodące platformy podróżnicze",

    // CTA
    "cta.badge": "Rozpocznij Podróż",
    "cta.title": "Gotowy na Przygodę?",
    "cta.subtitle": "Zadbamy o szczegóły.",
    "cta.button": "Zarezerwuj Wycieczkę",
    "cta.viewTours": "Zobacz Wszystkie Wycieczki",

    // Footer
    "footer.brand": "Twój zaufany partner w niezapomnianych podróżach.",
    "footer.quickLinks": "Szybkie Linki",
    "footer.popularTours": "Popularne Wycieczki",
    "footer.contactUs": "Kontakt",
    "footer.openingHours": "Godziny Otwarcia",
    "footer.weekdays": "Pon - Pt: 8:00 - 17:00",
    "footer.saturday": "Sob: 8:00 - 14:00",
    "footer.sunday": "Niedz: Zamknięte",
    "footer.followUs": "Śledź Nas",
    "footer.weAccept": "Akceptujemy:",
    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.privacyPolicy": "Polityka Prywatności",
    "footer.termsOfService": "Warunki Użytkowania",

    // Common
    "common.readMore": "Czytaj Więcej",
    "common.bookNow": "Zarezerwuj Teraz",
    "common.bookViaWhatsApp": "Zarezerwuj przez WhatsApp",
    "common.viewAll": "Zobacz Wszystko",
    "common.from": "Od",
    "common.person": "osoby",
    "common.perPerson": "za osobę",
    "common.duration": "Czas trwania",
    "common.included": "W cenie",
    "common.excluded": "Nie w cenie",
    "common.highlights": "Atrakcje",
    "common.overview": "Przegląd",
    "common.itinerary": "Plan",
    "common.gallery": "Galeria",
    "common.learnMore": "Dowiedz się Więcej",
    "common.contactUs": "Kontakt",

    // About Us Page (abbreviated)
    "aboutUsPage.heroTagline": "Nasza Historia",
    "aboutUsPage.heroTitle": "O Nas",
    "aboutUsPage.heroDescription": "Twój partner od 2004",
    "aboutUsPage.welcomeTagline": "Witamy",
    "aboutUsPage.welcomeTitle": "Witajcie w Zanzibar Exclusive Tours",
    "aboutUsPage.welcomeDesc1": "Twój partner w niezapomnianych podróżach!",
    "aboutUsPage.welcomeDesc2": "Każda chwila jest wyjątkowa.",
    "aboutUsPage.expertiseTagline": "Nasza Ekspertyza",
    "aboutUsPage.expertiseTitle": "Co Nas Wyróżnia",
    "aboutUsPage.expertiseDesc": "Dziesięciolecia doświadczenia.",
    "aboutUsPage.feature1.title": "20+ Lat Doświadczenia",
    "aboutUsPage.feature1.desc": "Ekspertyza w podróżach.",
    "aboutUsPage.feature2.title": "Lokalni Przewodnicy",
    "aboutUsPage.feature2.desc": "Profesjonalni przewodnicy.",
    "aboutUsPage.feature3.title": "Globalny Zasięg",
    "aboutUsPage.feature3.desc": "Wielojęzyczne wsparcie.",
    "aboutUsPage.feature4.title": "Osobisty Serwis",
    "aboutUsPage.feature4.desc": "Dopasowane do Ciebie.",
    "aboutUsPage.servicesTagline": "Usługi",
    "aboutUsPage.servicesTitle": "Co Oferujemy",
    "aboutUsPage.offering1.title": "Indywidualne Transfery",
    "aboutUsPage.offering1.desc": "Bezpieczny transport.",
    "aboutUsPage.offering2.title": "Wycieczki & Tury",
    "aboutUsPage.offering2.desc": "Odkryj kultowe miejsca.",
    "aboutUsPage.offering3.title": "Podróże Grupowe",
    "aboutUsPage.offering3.desc": "Dla dużych grup.",
    "aboutUsPage.offering4.title": "Lokalne Doświadczenia",
    "aboutUsPage.offering4.desc": "Poznaj kulturę z bliska.",
    "aboutUsPage.whyUsTagline": "Dlaczego My",
    "aboutUsPage.whyUsTitle": "Dlaczego Wybrać Nas?",
    "aboutUsPage.reason1": "Ponad 20 lat doświadczenia",
    "aboutUsPage.reason2": "Bezstresowe podróże",
    "aboutUsPage.reason3": "Spersonalizowane szczegóły",
    "aboutUsPage.reason4": "Duże grupy mile widziane",
    "aboutUsPage.partnerTitle": "Twój Partner Podróżniczy",
    "aboutUsPage.partnerDesc": "Więcej niż firma turystyczna!",
    "aboutUsPage.contactToday": "Skontaktuj Się",
    "aboutUsPage.whatsappUs": "WhatsApp",

    // Contact Page (abbreviated)
    "contactPage.heroTagline": "Skontaktuj Się",
    "contactPage.heroTitle": "Kontakt",
    "contactPage.heroDescription": "Chętnie pomożemy!",
    "contactPage.formTitle": "Wyślij Wiadomość",
    "contactPage.formDesc": "Wypełnij formularz.",
    "contactPage.formSuccess": "Wiadomość wysłana pomyślnie.",
    "contactPage.name": "Twoje Imię",
    "contactPage.email": "E-mail",
    "contactPage.phone": "Telefon",
    "contactPage.message": "Twoja Wiadomość",
    "contactPage.namePlaceholder": "Jan Kowalski",
    "contactPage.emailPlaceholder": "jan@przyklad.pl",
    "contactPage.phonePlaceholder": "+48 123 456 789",
    "contactPage.messagePlaceholder": "Twoje plany podróży...",
    "contactPage.sendMessage": "Wyślij Wiadomość",
    "contactPage.sending": "Wysyłanie...",
    "contactPage.otherWays": "Inne Sposoby Kontaktu",
    "contactPage.otherWaysDesc": "Skontaktuj się z nami.",
    "contactPage.address": "Adres",
    "contactPage.whatsapp": "WhatsApp",
    "contactPage.website": "Strona",
    "contactPage.followSocial": "Social Media",
    "contactPage.mapTitle": "Na Mapie",
    "contactPage.mapDesc": "Odwiedź nas w Jumbi",
    "contactPage.openInMaps": "Otwórz w Google Maps",

    // Transfers Page (abbreviated)
    "transfersPage.heroTagline": "Transfery 24/7",
    "transfersPage.heroTitle": "Transfery Lotniskowe",
    "transfersPage.heroDesc": "Niezawodne usługi taxi.",
    "transfersPage.bookTransfer": "Zarezerwuj Transfer",
    "transfersPage.whyBookTitle": "Dlaczego Z Nami?",
    "transfersPage.whyBookDesc": "Bezproblemowy transport",
    "transfersPage.benefit1.title": "Bez Dodatkowych Opłat",
    "transfersPage.benefit1.desc": "Bezpłatne oczekiwanie.",
    "transfersPage.benefit2.title": "Punktualnie",
    "transfersPage.benefit2.desc": "Zawsze na czas.",
    "transfersPage.benefit3.title": "Przyjazni Kierowcy",
    "transfersPage.benefit3.desc": "Kompetentni kierowcy.",
    "transfersPage.benefit4.title": "Bezpłatne Oczekiwanie",
    "transfersPage.benefit4.desc": "Na lotnisku.",
    "transfersPage.vehiclesTitle": "Nasze Pojazdy",
    "transfersPage.vehiclesDesc": "Najlepsze samochody.",
    "transfersPage.service24Title": "Serwis 24-Godzinny",
    "transfersPage.service24Desc1": "Taxi całą dobę.",
    "transfersPage.service24Desc2": "Bez limitu czasowego.",
    "transfersPage.feature1": "Transfery lotniskowe",
    "transfersPage.feature2": "Transfery hotelowe",
    "transfersPage.feature3": "Wycieczki po wyspie",
    "transfersPage.feature4": "Indywidualne trasy",
    "transfersPage.popularRoutes": "Popularne Trasy",
    "transfersPage.popularRoutesDesc": "Zarezerwuj te trasy",
    "transfersPage.ctaTitle": "Gotowy do Rezerwacji?",
    "transfersPage.ctaDesc": "Skontaktuj się. 24/7.",
    "transfersPage.contactNow": "Skontaktuj Się",
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
    "nav.contact-us": "Contáctenos",

    // Hero
    "hero.tagline": "Vacaciones Maravillosas",
    "hero.title1": "Descubre Zanzíbar",
    "hero.title2": "Explora Tanzania",
    "hero.subtitle": "Tu Puerta al Paraíso",
    "hero.description1": "Experimenta el paraíso con tours inolvidables",
    "hero.description2": "Safaris premium y experiencias exclusivas",
    "hero.exploreTours": "Explorar Tours",
    "hero.bookNow": "Reservar Ahora",
    "hero.contactUs": "Contáctenos",

    // About
    "about.badge": "Sobre Nosotros",
    "about.title": "Tu Socio de Confianza en Aventuras",
    "about.description1":
      "Bienvenido a Zanzibar Exclusive Tours! Con más de 20 años de experiencia, ofrecemos tours y traslados excepcionales.",
    "about.description2": "Garantizamos que cada momento sea extraordinario.",
    "about.highlight1": "Más de 20 años de experiencia",
    "about.highlight2": "Tours y traslados personalizados",
    "about.highlight3": "Guías locales expertos",
    "about.highlight4": "Capacidad para grandes grupos",
    "about.yearsExperience": "Años de Experiencia",
    "about.learnMore": "Saber Más",

    // Services
    "services.badge": "Nuestros Servicios",
    "services.title": "Experiencias para Cada Viajero",
    "services.subtitle": "Descubre nuestros tours y safaris exclusivos",
    "services.tours.title": "Tours Zanzíbar",
    "services.tours.description": "Explora playas y sitios históricos",
    "services.safaris.title": "Safaris Tanzania",
    "services.safaris.description": "Aventuras con vida silvestre",
    "services.packages.title": "Paquetes Vacacionales",
    "services.packages.description": "Paquetes completos con tours y alojamiento",
    "services.transfers.title": "Servicios de Traslado",
    "services.transfers.description": "Traslados cómodos al aeropuerto",

    // Full Day Tours
    "fullDayTours.badge": "Tours de Día Completo",
    "fullDayTours.title": "Zanzíbar en Un Día",
    "fullDayTours.description": "Aventuras inolvidables de día completo.",
    "fullDayTours.viewAll": "Ver Tours de Día Completo",

    // Half Day Tours
    "halfDayTours.badge": "Tours de Medio Día",
    "halfDayTours.title": "Aventuras Rápidas",
    "halfDayTours.description": "Lo mejor de Zanzíbar en pocas horas.",
    "halfDayTours.viewAll": "Ver Tours de Medio Día",

    // Safaris
    "safaris.badge": "Safaris Tanzania",
    "safaris.title": "La Vida Silvestre de África",
    "safaris.description": "Desde el Serengeti hasta el cráter Ngorongoro.",
    "safaris.viewAll": "Ver Más Safaris",

    // Packages
    "packages.badge": "Paquetes Vacacionales",
    "packages.title": "Todo Incluido en Zanzíbar",
    "packages.description": "Paquetes vacacionales sin preocupaciones.",
    "packages.viewAll": "Ver Todos los Paquetes",

    // Quad Biking
    "quadBiking.badge": "La Aventura Espera",
    "quadBiking.title": "Cuatrimotos en Zanzíbar",
    "quadBiking.description": "Siente la emoción recorriendo paisajes impresionantes.",
    "quadBiking.feature1": "Guías profesionales y equipo de seguridad",
    "quadBiking.feature2": "Rutas pintorescas por playas y aldeas",
    "quadBiking.feature3": "Para principiantes y expertos",
    "quadBiking.feature4": "Paseos al atardecer disponibles",
    "quadBiking.bookRide": "Reservar Paseo",

    // Transfers
    "transfers.badge": "Servicios de Traslado",
    "transfers.title": "Nuestros Tipos de Transporte",
    "transfers.description": "Los mejores vehículos para nuestros clientes.",
    "transfers.viewAll": "Ver Servicios de Traslado",
    "transfers.alphard.name": "Toyota Alphard",
    "transfers.alphard.capacity": "1 – 6 viajeros",
    "transfers.alphard.description": "Minivan de lujo para parejas y familias pequeñas.",
    "transfers.hiace.name": "Toyota Hiace",
    "transfers.hiace.capacity": "8 – 16 viajeros",
    "transfers.hiace.description": "Furgoneta espaciosa para grupos medianos.",
    "transfers.coaster.name": "Bus Coaster",
    "transfers.coaster.capacity": "15 – 28 viajeros",
    "transfers.coaster.description": "Bus cómodo para grupos grandes.",

    // Testimonials
    "testimonials.badge": "Testimonios",
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Experiencias de viajeros de todo el mundo",

    // Recommended
    "recommended.badge": "Socios de Confianza",
    "recommended.title": "Recomendado Por",
    "recommended.subtitle": "Reconocido por plataformas de viaje líderes",

    // CTA
    "cta.badge": "Comienza Tu Viaje",
    "cta.title": "¿Listo para Tu Aventura?",
    "cta.subtitle": "Nos encargamos de los detalles.",
    "cta.button": "Reservar Tu Tour",
    "cta.viewTours": "Ver Todos los Tours",

    // Footer
    "footer.brand": "Tu socio de confianza en viajes inolvidables.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.popularTours": "Tours Populares",
    "footer.contactUs": "Contáctenos",
    "footer.openingHours": "Horario",
    "footer.weekdays": "Lun - Vie: 8:00 - 17:00",
    "footer.saturday": "Sáb: 8:00 - 14:00",
    "footer.sunday": "Dom: Cerrado",
    "footer.followUs": "Síguenos",
    "footer.weAccept": "Aceptamos:",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacyPolicy": "Política de Privacidad",
    "footer.termsOfService": "Términos de Servicio",

    // Common
    "common.readMore": "Leer Más",
    "common.bookNow": "Reservar Ahora",
    "common.bookViaWhatsApp": "Reservar por WhatsApp",
    "common.viewAll": "Ver Todo",
    "common.from": "Desde",
    "common.person": "persona",
    "common.perPerson": "por persona",
    "common.duration": "Duración",
    "common.included": "Incluido",
    "common.excluded": "No incluido",
    "common.highlights": "Destacados",
    "common.overview": "Resumen",
    "common.itinerary": "Itinerario",
    "common.gallery": "Galería",
    "common.learnMore": "Saber Más",
    "common.contactUs": "Contáctenos",

    // About Us Page (abbreviated)
    "aboutUsPage.heroTagline": "Nuestra Historia",
    "aboutUsPage.heroTitle": "Sobre Nosotros",
    "aboutUsPage.heroDescription": "Tu socio desde 2004",
    "aboutUsPage.welcomeTagline": "Bienvenido",
    "aboutUsPage.welcomeTitle": "Bienvenido a Zanzibar Exclusive Tours",
    "aboutUsPage.welcomeDesc1": "¡Tu socio en viajes inolvidables!",
    "aboutUsPage.welcomeDesc2": "Cada momento es extraordinario.",
    "aboutUsPage.expertiseTagline": "Nuestra Experiencia",
    "aboutUsPage.expertiseTitle": "Lo Que Nos Diferencia",
    "aboutUsPage.expertiseDesc": "Décadas de experiencia.",
    "aboutUsPage.feature1.title": "20+ Años de Experiencia",
    "aboutUsPage.feature1.desc": "Experiencia en viajes.",
    "aboutUsPage.feature2.title": "Guías Locales",
    "aboutUsPage.feature2.desc": "Guías profesionales.",
    "aboutUsPage.feature3.title": "Alcance Global",
    "aboutUsPage.feature3.desc": "Soporte multilingüe.",
    "aboutUsPage.feature4.title": "Servicio Personal",
    "aboutUsPage.feature4.desc": "Adaptado a ti.",
    "aboutUsPage.servicesTagline": "Servicios",
    "aboutUsPage.servicesTitle": "Lo Que Ofrecemos",
    "aboutUsPage.offering1.title": "Traslados Personalizados",
    "aboutUsPage.offering1.desc": "Transporte seguro.",
    "aboutUsPage.offering2.title": "Excursiones & Tours",
    "aboutUsPage.offering2.desc": "Descubre destinos icónicos.",
    "aboutUsPage.offering3.title": "Viajes en Grupo",
    "aboutUsPage.offering3.desc": "Para grupos grandes.",
    "aboutUsPage.offering4.title": "Experiencias Locales",
    "aboutUsPage.offering4.desc": "Conoce la cultura de cerca.",
    "aboutUsPage.whyUsTagline": "Por Qué Nosotros",
    "aboutUsPage.whyUsTitle": "¿Por Qué Elegirnos?",
    "aboutUsPage.reason1": "Más de 20 años de experiencia",
    "aboutUsPage.reason2": "Viajes sin estrés",
    "aboutUsPage.reason3": "Detalles personalizados",
    "aboutUsPage.reason4": "Grupos grandes bienvenidos",
    "aboutUsPage.partnerTitle": "Tu Socio de Viaje",
    "aboutUsPage.partnerDesc": "¡Más que una empresa de turismo!",
    "aboutUsPage.contactToday": "Contáctenos Hoy",
    "aboutUsPage.whatsappUs": "WhatsApp",

    // Contact Page (abbreviated)
    "contactPage.heroTagline": "Contáctenos",
    "contactPage.heroTitle": "Contacto",
    "contactPage.heroDescription": "¡Estamos aquí para ayudar!",
    "contactPage.formTitle": "Enviar Mensaje",
    "contactPage.formDesc": "Complete el formulario.",
    "contactPage.formSuccess": "Mensaje enviado con éxito.",
    "contactPage.name": "Su Nombre",
    "contactPage.email": "Correo Electrónico",
    "contactPage.phone": "Teléfono",
    "contactPage.message": "Su Mensaje",
    "contactPage.namePlaceholder": "Juan García",
    "contactPage.emailPlaceholder": "juan@ejemplo.com",
    "contactPage.phonePlaceholder": "+34 123 456 789",
    "contactPage.messagePlaceholder": "Sus planes de viaje...",
    "contactPage.sendMessage": "Enviar Mensaje",
    "contactPage.sending": "Enviando...",
    "contactPage.otherWays": "Otras Formas de Contacto",
    "contactPage.otherWaysDesc": "Contáctenos por estos medios.",
    "contactPage.address": "Dirección",
    "contactPage.whatsapp": "WhatsApp",
    "contactPage.website": "Sitio Web",
    "contactPage.followSocial": "Redes Sociales",
    "contactPage.mapTitle": "En el Mapa",
    "contactPage.mapDesc": "Visítenos en Jumbi",
    "contactPage.openInMaps": "Abrir en Google Maps",

    // Transfers Page (abbreviated)
    "transfersPage.heroTagline": "Traslados 24/7",
    "transfersPage.heroTitle": "Traslados Aeropuerto",
    "transfersPage.heroDesc": "Servicios de taxi confiables.",
    "transfersPage.bookTransfer": "Reservar Traslado",
    "transfersPage.whyBookTitle": "¿Por Qué Con Nosotros?",
    "transfersPage.whyBookDesc": "Transporte sin problemas",
    "transfersPage.benefit1.title": "Sin Costos Adicionales",
    "transfersPage.benefit1.desc": "Espera gratuita.",
    "transfersPage.benefit2.title": "Puntuales",
    "transfersPage.benefit2.desc": "Siempre a tiempo.",
    "transfersPage.benefit3.title": "Conductores Amables",
    "transfersPage.benefit3.desc": "Conductores capacitados.",
    "transfersPage.benefit4.title": "Espera Gratuita",
    "transfersPage.benefit4.desc": "En el aeropuerto.",
    "transfersPage.vehiclesTitle": "Nuestros Vehículos",
    "transfersPage.vehiclesDesc": "Los mejores vehículos.",
    "transfersPage.service24Title": "Servicio 24 Horas",
    "transfersPage.service24Desc1": "Taxi las 24 horas.",
    "transfersPage.service24Desc2": "Sin límite de tiempo.",
    "transfersPage.feature1": "Traslados aeropuerto",
    "transfersPage.feature2": "Traslados hotel",
    "transfersPage.feature3": "Tours por la isla",
    "transfersPage.feature4": "Rutas personalizadas",
    "transfersPage.popularRoutes": "Rutas Populares",
    "transfersPage.popularRoutesDesc": "Reserve estas rutas",
    "transfersPage.ctaTitle": "¿Listo para Reservar?",
    "transfersPage.ctaDesc": "Contáctenos. 24/7.",
    "transfersPage.contactNow": "Contáctenos Ahora",
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

  useEffect(() => {
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

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
