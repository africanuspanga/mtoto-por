"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Translations dictionary
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.tours": "Zanzibar Tours",
    "nav.safaris": "Tanzania Safaris",
    "nav.packages": "Packages",
    "nav.transfers": "Transfers",
    "nav.contact": "Contact Us",
    "nav.book": "Book Tour",
    // Hero
    "hero.discover": "Discover Zanzibar",
    "hero.explore": "Explore Tanzania",
    "hero.desc1": "Experience paradise with unforgettable tours and adventures",
    "hero.desc2": "Premium safaris and exclusive island experiences await you",
    "hero.exploreTours": "Explore Tours",
    "hero.bookNow": "Book Now",
    // About
    "about.subtitle": "About Us",
    "about.title": "Your Trusted Travel Partner",
    "about.description":
      "With over 20 years of experience in the tourism industry, Zanzibar Exclusive Tours and Safaris has been providing exceptional tours, transfers, and personalized excursions to travelers from all over the world.",
    "about.years": "Years Experience",
    "about.tours": "Tours Completed",
    "about.guests": "Happy Guests",
    "about.learnMore": "Learn More About Us",
    // Services
    "services.subtitle": "Our Services",
    "services.title": "Explore Our Experiences",
    "services.zanzibar": "Zanzibar Tours",
    "services.safaris": "Tanzania Safaris",
    "services.transfers": "Transfer Services",
    "services.zanzibarDesc": "Discover pristine beaches, historic Stone Town, spice farms, and marine adventures.",
    "services.safarisDesc": "Experience the Serengeti, Ngorongoro Crater, and Tanzania's incredible wildlife.",
    "services.transfersDesc": "Reliable airport transfers and transportation across Zanzibar and Tanzania.",
    // Testimonials
    "testimonials.subtitle": "Testimonials",
    "testimonials.title": "What Our Guests Say",
    "testimonials.description": "Real experiences from travelers who trusted us with their Zanzibar adventures.",
    // Recommended
    "recommended.subtitle": "Trusted Worldwide",
    "recommended.title": "Recommended By",
    // CTA
    "cta.title": "Ready for Your Adventure?",
    "cta.description":
      "Let us create an unforgettable experience tailored just for you. Contact us today to start planning your dream vacation.",
    "cta.button": "Get in Touch",
    // Footer
    "footer.description":
      "Your trusted partner in unforgettable travel experiences. Serving wonderful vacations for over 20 years.",
    "footer.quickLinks": "Quick Links",
    "footer.popularTours": "Popular Tours",
    "footer.contactUs": "Contact Us",
    "footer.weAccept": "We Accept:",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in Touch",
    "contact.description":
      "Have questions or ready to book? We're here to help make your Zanzibar adventure unforgettable.",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.otherWays": "Other Ways to Contact Us",
    "contact.info": "For more information you can contact us via details below",
    // About Page
    "aboutPage.title": "About Us",
    "aboutPage.subtitle": "Our Story",
    "aboutPage.welcome": "Welcome to Zanzibar Exclusive Tours and Safaris",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.tours": "جولات زنجبار",
    "nav.safaris": "رحلات سفاري تنزانيا",
    "nav.packages": "الباقات",
    "nav.transfers": "النقل",
    "nav.contact": "اتصل بنا",
    "nav.book": "احجز جولة",
    "hero.discover": "اكتشف زنجبار",
    "hero.explore": "استكشف تنزانيا",
    "hero.desc1": "استمتع بالجنة مع جولات ومغامرات لا تُنسى",
    "hero.desc2": "رحلات سفاري فاخرة وتجارب جزيرة حصرية في انتظارك",
    "hero.exploreTours": "استكشف الجولات",
    "hero.bookNow": "احجز الآن",
    "about.subtitle": "من نحن",
    "about.title": "شريكك الموثوق في السفر",
    "about.description":
      "مع أكثر من 20 عامًا من الخبرة في صناعة السياحة، قدمت زنجبار إكسكلوسيف تورز جولات استثنائية ورحلات مخصصة للمسافرين من جميع أنحاء العالم.",
    "about.years": "سنوات الخبرة",
    "about.tours": "الجولات المكتملة",
    "about.guests": "ضيوف سعداء",
    "about.learnMore": "اعرف المزيد عنا",
    "services.subtitle": "خدماتنا",
    "services.title": "استكشف تجاربنا",
    "services.zanzibar": "جولات زنجبار",
    "services.safaris": "رحلات سفاري تنزانيا",
    "services.transfers": "خدمات النقل",
    "services.zanzibarDesc": "اكتشف الشواطئ البكر والمدينة الحجرية التاريخية ومزارع التوابل والمغامرات البحرية.",
    "services.safarisDesc": "جرب سيرينجيتي وفوهة نجورونجورو والحياة البرية المذهلة في تنزانيا.",
    "services.transfersDesc": "نقل موثوق من المطار والتنقل عبر زنجبار وتنزانيا.",
    "testimonials.subtitle": "الشهادات",
    "testimonials.title": "ماذا يقول ضيوفنا",
    "testimonials.description": "تجارب حقيقية من المسافرين الذين وثقوا بنا في مغامراتهم في زنجبار.",
    "recommended.subtitle": "موثوق عالميًا",
    "recommended.title": "موصى به من قبل",
    "cta.title": "هل أنت مستعد لمغامرتك؟",
    "cta.description": "دعنا نصنع تجربة لا تُنسى مصممة خصيصًا لك. اتصل بنا اليوم لبدء التخطيط لعطلتك المثالية.",
    "cta.button": "تواصل معنا",
    "footer.description": "شريكك الموثوق في تجارب السفر التي لا تُنسى. نقدم إجازات رائعة لأكثر من 20 عامًا.",
    "footer.quickLinks": "روابط سريعة",
    "footer.popularTours": "الجولات الشعبية",
    "footer.contactUs": "اتصل بنا",
    "footer.weAccept": "نحن نقبل:",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "contact.title": "اتصل بنا",
    "contact.subtitle": "تواصل معنا",
    "contact.description": "هل لديك أسئلة أو جاهز للحجز؟ نحن هنا للمساعدة في جعل مغامرتك في زنجبار لا تُنسى.",
    "contact.name": "اسمك",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.message": "رسالتك",
    "contact.send": "إرسال الرسالة",
    "contact.otherWays": "طرق أخرى للتواصل معنا",
    "contact.info": "لمزيد من المعلومات يمكنك الاتصال بنا عبر التفاصيل أدناه",
    "aboutPage.title": "من نحن",
    "aboutPage.subtitle": "قصتنا",
    "aboutPage.welcome": "مرحبًا بكم في زنجبار إكسكلوسيف تورز وسفاريس",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.tours": "Tours Zanzibar",
    "nav.safaris": "Safaris Tanzanie",
    "nav.packages": "Forfaits",
    "nav.transfers": "Transferts",
    "nav.contact": "Contactez-Nous",
    "nav.book": "Réserver",
    "hero.discover": "Découvrez Zanzibar",
    "hero.explore": "Explorez la Tanzanie",
    "hero.desc1": "Vivez le paradis avec des tours et aventures inoubliables",
    "hero.desc2": "Des safaris premium et des expériences insulaires exclusives vous attendent",
    "hero.exploreTours": "Explorer les Tours",
    "hero.bookNow": "Réserver Maintenant",
    "about.subtitle": "À Propos",
    "about.title": "Votre Partenaire de Voyage de Confiance",
    "about.description":
      "Avec plus de 20 ans d'expérience dans l'industrie du tourisme, Zanzibar Exclusive Tours and Safaris offre des tours exceptionnels et des excursions personnalisées aux voyageurs du monde entier.",
    "about.years": "Années d'Expérience",
    "about.tours": "Tours Complétés",
    "about.guests": "Clients Satisfaits",
    "about.learnMore": "En Savoir Plus",
    "services.subtitle": "Nos Services",
    "services.title": "Explorez Nos Expériences",
    "services.zanzibar": "Tours Zanzibar",
    "services.safaris": "Safaris Tanzanie",
    "services.transfers": "Services de Transfert",
    "services.zanzibarDesc":
      "Découvrez des plages immaculées, la ville historique de Stone Town, les plantations d'épices et les aventures marines.",
    "services.safarisDesc": "Vivez le Serengeti, le cratère du Ngorongoro et la faune incroyable de Tanzanie.",
    "services.transfersDesc": "Transferts aéroport fiables et transport à travers Zanzibar et la Tanzanie.",
    "testimonials.subtitle": "Témoignages",
    "testimonials.title": "Ce Que Disent Nos Clients",
    "testimonials.description":
      "Expériences réelles de voyageurs qui nous ont fait confiance pour leurs aventures à Zanzibar.",
    "recommended.subtitle": "Reconnu Mondialement",
    "recommended.title": "Recommandé Par",
    "cta.title": "Prêt pour Votre Aventure?",
    "cta.description":
      "Laissez-nous créer une expérience inoubliable sur mesure pour vous. Contactez-nous aujourd'hui pour planifier vos vacances de rêve.",
    "cta.button": "Nous Contacter",
    "footer.description":
      "Votre partenaire de confiance pour des expériences de voyage inoubliables. Au service de vacances merveilleuses depuis plus de 20 ans.",
    "footer.quickLinks": "Liens Rapides",
    "footer.popularTours": "Tours Populaires",
    "footer.contactUs": "Contactez-Nous",
    "footer.weAccept": "Nous Acceptons:",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "contact.title": "Contactez-Nous",
    "contact.subtitle": "Entrer en Contact",
    "contact.description":
      "Des questions ou prêt à réserver? Nous sommes là pour rendre votre aventure à Zanzibar inoubliable.",
    "contact.name": "Votre Nom",
    "contact.email": "Adresse E-mail",
    "contact.phone": "Numéro de Téléphone",
    "contact.message": "Votre Message",
    "contact.send": "Envoyer le Message",
    "contact.otherWays": "Autres Moyens de Nous Contacter",
    "contact.info": "Pour plus d'informations, vous pouvez nous contacter via les détails ci-dessous",
    "aboutPage.title": "À Propos",
    "aboutPage.subtitle": "Notre Histoire",
    "aboutPage.welcome": "Bienvenue chez Zanzibar Exclusive Tours and Safaris",
  },
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über Uns",
    "nav.tours": "Sansibar Touren",
    "nav.safaris": "Tansania Safaris",
    "nav.packages": "Pakete",
    "nav.transfers": "Transfers",
    "nav.contact": "Kontakt",
    "nav.book": "Tour Buchen",
    "hero.discover": "Entdecken Sie Sansibar",
    "hero.explore": "Erkunden Sie Tansania",
    "hero.desc1": "Erleben Sie das Paradies mit unvergesslichen Touren und Abenteuern",
    "hero.desc2": "Premium-Safaris und exklusive Inselerlebnisse erwarten Sie",
    "hero.exploreTours": "Touren Entdecken",
    "hero.bookNow": "Jetzt Buchen",
    "about.subtitle": "Über Uns",
    "about.title": "Ihr Vertrauenswürdiger Reisepartner",
    "about.description":
      "Mit über 20 Jahren Erfahrung in der Tourismusbranche bietet Zanzibar Exclusive Tours and Safaris außergewöhnliche Touren und personalisierte Ausflüge für Reisende aus aller Welt.",
    "about.years": "Jahre Erfahrung",
    "about.tours": "Abgeschlossene Touren",
    "about.guests": "Zufriedene Gäste",
    "about.learnMore": "Mehr Erfahren",
    "services.subtitle": "Unsere Dienstleistungen",
    "services.title": "Entdecken Sie Unsere Erlebnisse",
    "services.zanzibar": "Sansibar Touren",
    "services.safaris": "Tansania Safaris",
    "services.transfers": "Transfer-Services",
    "services.zanzibarDesc":
      "Entdecken Sie unberührte Strände, die historische Stone Town, Gewürzfarmen und Meeresabenteuer.",
    "services.safarisDesc": "Erleben Sie die Serengeti, den Ngorongoro-Krater und Tansanias unglaubliche Tierwelt.",
    "services.transfersDesc": "Zuverlässige Flughafentransfers und Transport in Sansibar und Tansania.",
    "testimonials.subtitle": "Bewertungen",
    "testimonials.title": "Was Unsere Gäste Sagen",
    "testimonials.description": "Echte Erfahrungen von Reisenden, die uns ihr Sansibar-Abenteuer anvertraut haben.",
    "recommended.subtitle": "Weltweit Vertraut",
    "recommended.title": "Empfohlen Von",
    "cta.title": "Bereit für Ihr Abenteuer?",
    "cta.description":
      "Lassen Sie uns ein unvergessliches Erlebnis speziell für Sie schaffen. Kontaktieren Sie uns noch heute, um Ihren Traumurlaub zu planen.",
    "cta.button": "Kontakt Aufnehmen",
    "footer.description":
      "Ihr vertrauenswürdiger Partner für unvergessliche Reiseerlebnisse. Seit über 20 Jahren wundervolle Urlaube.",
    "footer.quickLinks": "Schnelllinks",
    "footer.popularTours": "Beliebte Touren",
    "footer.contactUs": "Kontakt",
    "footer.weAccept": "Wir Akzeptieren:",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
    "contact.title": "Kontakt",
    "contact.subtitle": "Kontakt Aufnehmen",
    "contact.description":
      "Haben Sie Fragen oder sind Sie bereit zu buchen? Wir sind hier, um Ihr Sansibar-Abenteuer unvergesslich zu machen.",
    "contact.name": "Ihr Name",
    "contact.email": "E-Mail-Adresse",
    "contact.phone": "Telefonnummer",
    "contact.message": "Ihre Nachricht",
    "contact.send": "Nachricht Senden",
    "contact.otherWays": "Andere Kontaktmöglichkeiten",
    "contact.info": "Für weitere Informationen können Sie uns über die folgenden Details kontaktieren",
    "aboutPage.title": "Über Uns",
    "aboutPage.subtitle": "Unsere Geschichte",
    "aboutPage.welcome": "Willkommen bei Zanzibar Exclusive Tours and Safaris",
  },
  pl: {
    "nav.home": "Strona Główna",
    "nav.about": "O Nas",
    "nav.tours": "Wycieczki Zanzibar",
    "nav.safaris": "Safari Tanzania",
    "nav.packages": "Pakiety",
    "nav.transfers": "Transfery",
    "nav.contact": "Kontakt",
    "nav.book": "Zarezerwuj",
    "hero.discover": "Odkryj Zanzibar",
    "hero.explore": "Poznaj Tanzanię",
    "hero.desc1": "Doświadcz raju z niezapomnianymi wycieczkami i przygodami",
    "hero.desc2": "Ekskluzywne safari i wyjątkowe doświadczenia wyspiarskie na Ciebie czekają",
    "hero.exploreTours": "Odkryj Wycieczki",
    "hero.bookNow": "Zarezerwuj Teraz",
    "about.subtitle": "O Nas",
    "about.title": "Twój Zaufany Partner Podróży",
    "about.description":
      "Z ponad 20-letnim doświadczeniem w branży turystycznej, Zanzibar Exclusive Tours and Safaris oferuje wyjątkowe wycieczki i spersonalizowane wyjazdy dla podróżnych z całego świata.",
    "about.years": "Lat Doświadczenia",
    "about.tours": "Ukończonych Wycieczek",
    "about.guests": "Zadowolonych Gości",
    "about.learnMore": "Dowiedz Się Więcej",
    "services.subtitle": "Nasze Usługi",
    "services.title": "Odkryj Nasze Doświadczenia",
    "services.zanzibar": "Wycieczki Zanzibar",
    "services.safaris": "Safari Tanzania",
    "services.transfers": "Usługi Transferowe",
    "services.zanzibarDesc": "Odkryj dziewicze plaże, historyczne Stone Town, farmy przypraw i morskie przygody.",
    "services.safarisDesc": "Doświadcz Serengeti, krateru Ngorongoro i niesamowitej dzikiej przyrody Tanzanii.",
    "services.transfersDesc": "Niezawodne transfery lotniskowe i transport po Zanzibarze i Tanzanii.",
    "testimonials.subtitle": "Opinie",
    "testimonials.title": "Co Mówią Nasi Goście",
    "testimonials.description":
      "Prawdziwe doświadczenia podróżników, którzy zaufali nam w swoich przygodach na Zanzibarze.",
    "recommended.subtitle": "Zaufanie Na Całym Świecie",
    "recommended.title": "Polecani Przez",
    "cta.title": "Gotowy na Przygodę?",
    "cta.description":
      "Pozwól nam stworzyć niezapomniane przeżycie specjalnie dla Ciebie. Skontaktuj się z nami już dziś, aby zaplanować wymarzone wakacje.",
    "cta.button": "Skontaktuj Się",
    "footer.description":
      "Twój zaufany partner w niezapomnianych doświadczeniach podróżniczych. Od ponad 20 lat służymy wspaniałymi wakacjami.",
    "footer.quickLinks": "Szybkie Linki",
    "footer.popularTours": "Popularne Wycieczki",
    "footer.contactUs": "Kontakt",
    "footer.weAccept": "Akceptujemy:",
    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.privacy": "Polityka Prywatności",
    "footer.terms": "Warunki Usługi",
    "contact.title": "Kontakt",
    "contact.subtitle": "Skontaktuj Się",
    "contact.description":
      "Masz pytania lub jesteś gotowy do rezerwacji? Jesteśmy tutaj, aby uczynić Twoją przygodę na Zanzibarze niezapomnianą.",
    "contact.name": "Twoje Imię",
    "contact.email": "Adres E-mail",
    "contact.phone": "Numer Telefonu",
    "contact.message": "Twoja Wiadomość",
    "contact.send": "Wyślij Wiadomość",
    "contact.otherWays": "Inne Sposoby Kontaktu",
    "contact.info": "Aby uzyskać więcej informacji, możesz skontaktować się z nami za pośrednictwem poniższych danych",
    "aboutPage.title": "O Nas",
    "aboutPage.subtitle": "Nasza Historia",
    "aboutPage.welcome": "Witamy w Zanzibar Exclusive Tours and Safaris",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre Nosotros",
    "nav.tours": "Tours Zanzíbar",
    "nav.safaris": "Safaris Tanzania",
    "nav.packages": "Paquetes",
    "nav.transfers": "Traslados",
    "nav.contact": "Contáctenos",
    "nav.book": "Reservar Tour",
    "hero.discover": "Descubre Zanzíbar",
    "hero.explore": "Explora Tanzania",
    "hero.desc1": "Experimenta el paraíso con tours y aventuras inolvidables",
    "hero.desc2": "Safaris premium y experiencias exclusivas en la isla te esperan",
    "hero.exploreTours": "Explorar Tours",
    "hero.bookNow": "Reservar Ahora",
    "about.subtitle": "Sobre Nosotros",
    "about.title": "Tu Socio de Viajes de Confianza",
    "about.description":
      "Con más de 20 años de experiencia en la industria del turismo, Zanzibar Exclusive Tours and Safaris ofrece tours excepcionales y excursiones personalizadas a viajeros de todo el mundo.",
    "about.years": "Años de Experiencia",
    "about.tours": "Tours Completados",
    "about.guests": "Huéspedes Felices",
    "about.learnMore": "Conocer Más",
    "services.subtitle": "Nuestros Servicios",
    "services.title": "Explora Nuestras Experiencias",
    "services.zanzibar": "Tours Zanzíbar",
    "services.safaris": "Safaris Tanzania",
    "services.transfers": "Servicios de Traslado",
    "services.zanzibarDesc":
      "Descubre playas vírgenes, el histórico Stone Town, granjas de especias y aventuras marinas.",
    "services.safarisDesc": "Experimenta el Serengeti, el cráter Ngorongoro y la increíble vida salvaje de Tanzania.",
    "services.transfersDesc": "Traslados confiables desde el aeropuerto y transporte por Zanzíbar y Tanzania.",
    "testimonials.subtitle": "Testimonios",
    "testimonials.title": "Lo Que Dicen Nuestros Huéspedes",
    "testimonials.description":
      "Experiencias reales de viajeros que confiaron en nosotros para sus aventuras en Zanzíbar.",
    "recommended.subtitle": "Confianza Mundial",
    "recommended.title": "Recomendado Por",
    "cta.title": "¿Listo para Tu Aventura?",
    "cta.description":
      "Permítenos crear una experiencia inolvidable hecha a tu medida. Contáctanos hoy para comenzar a planificar tus vacaciones soñadas.",
    "cta.button": "Ponerse en Contacto",
    "footer.description":
      "Tu socio de confianza en experiencias de viaje inolvidables. Sirviendo vacaciones maravillosas por más de 20 años.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.popularTours": "Tours Populares",
    "footer.contactUs": "Contáctenos",
    "footer.weAccept": "Aceptamos:",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "contact.title": "Contáctenos",
    "contact.subtitle": "Ponerse en Contacto",
    "contact.description":
      "¿Tienes preguntas o estás listo para reservar? Estamos aquí para hacer tu aventura en Zanzíbar inolvidable.",
    "contact.name": "Tu Nombre",
    "contact.email": "Correo Electrónico",
    "contact.phone": "Número de Teléfono",
    "contact.message": "Tu Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.otherWays": "Otras Formas de Contactarnos",
    "contact.info": "Para más información puede contactarnos a través de los detalles a continuación",
    "aboutPage.title": "Sobre Nosotros",
    "aboutPage.subtitle": "Nuestra Historia",
    "aboutPage.welcome": "Bienvenido a Zanzibar Exclusive Tours and Safaris",
  },
}

type LanguageContextType = {
  currentLang: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("language")
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang)
    }
  }, [])

  const setLanguage = (lang: string) => {
    setCurrentLang(lang)
    localStorage.setItem("language", lang)
    // Update document language attribute
    document.documentElement.lang = lang
    // Set direction for RTL languages
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = (key: string): string => {
    return translations[currentLang]?.[key] || translations["en"]?.[key] || key
  }

  return <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
