import { en } from "./en"
import { fr } from "./fr"
import { de } from "./de"

// For space reasons, we'll create abbreviated versions for other languages
// In production, these would be complete translations

export const es = {
  ...en,
  nav: {
    home: "Inicio",
    aboutUs: "Sobre Nosotros",
    aboutZanzibar: "Sobre Zanzíbar",
    zanzibarTours: "Tours en Zanzíbar",
    tanzaniaSafaris: "Safaris en Tanzania",
    packages: "Paquetes",
    transfers: "Traslados",
    contactUs: "Contáctenos",
  },
  hero: {
    ...en.hero,
    tagline: "Vacaciones Maravillosas",
    title: "Descubra Zanzíbar",
    subtitle: "Su Puerta al Paraíso",
    description:
      "Descubra playas vírgenes, rica cultura y aventuras inolvidables con el operador turístico más confiable de Zanzíbar desde 2004.",
    exploreTours: "Explorar Tours",
    contactUs: "Contáctenos",
  },
  common: {
    ...en.common,
    readMore: "Leer Más",
    bookNow: "Reservar Ahora",
    whatsapp: "Reservar por WhatsApp",
    learnMore: "Saber Más",
    viewAll: "Ver Todo",
    contactUs: "Contáctenos",
  },
}

export const pl = {
  ...en,
  nav: {
    home: "Strona Główna",
    aboutUs: "O Nas",
    aboutZanzibar: "O Zanzibarze",
    zanzibarTours: "Wycieczki na Zanzibar",
    tanzaniaSafaris: "Safari w Tanzanii",
    packages: "Pakiety",
    transfers: "Transfery",
    contactUs: "Kontakt",
  },
  hero: {
    ...en.hero,
    tagline: "Wspaniałe Wakacje",
    title: "Odkryj Zanzibar",
    subtitle: "Twoja Brama do Raju",
    description:
      "Odkryj dziewicze plaże, bogatą kulturę i niezapomniane przygody z najbardziej zaufanym operatorem turystycznym Zanzibaru od 2004 roku.",
    exploreTours: "Odkryj Wycieczki",
    contactUs: "Kontakt",
  },
  common: {
    ...en.common,
    readMore: "Czytaj Więcej",
    bookNow: "Zarezerwuj",
    whatsapp: "Zarezerwuj przez WhatsApp",
    learnMore: "Dowiedz się Więcej",
    viewAll: "Zobacz Wszystko",
    contactUs: "Kontakt",
  },
}

export const ar = {
  ...en,
  nav: {
    home: "الرئيسية",
    aboutUs: "من نحن",
    aboutZanzibar: "عن زنجبار",
    zanzibarTours: "جولات زنجبار",
    tanzaniaSafaris: "سفاري تنزانيا",
    packages: "الباقات",
    transfers: "النقل",
    contactUs: "اتصل بنا",
  },
  hero: {
    ...en.hero,
    tagline: "إجازات رائعة",
    title: "اكتشف زنجبار",
    subtitle: "بوابتك إلى الجنة",
    description:
      "اكتشف الشواطئ البكر والثقافة الغنية والمغامرات التي لا تُنسى مع أكثر منظمي الرحلات موثوقية في زنجبار منذ 2004.",
    exploreTours: "استكشف الجولات",
    contactUs: "اتصل بنا",
  },
  common: {
    ...en.common,
    readMore: "اقرأ المزيد",
    bookNow: "احجز الآن",
    whatsapp: "احجز عبر واتساب",
    learnMore: "اعرف المزيد",
    viewAll: "عرض الكل",
    contactUs: "اتصل بنا",
  },
}

export type Language = "en" | "fr" | "de" | "es" | "pl" | "ar"

export const translations = {
  en,
  fr,
  de,
  es,
  pl,
  ar,
}

export type Translations = typeof en
