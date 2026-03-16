import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mtotoportours.co.tz"),
  title: {
    default: "Mtoto Por Tours | Zanzibar Tours, Tanzania Safaris & Car Rental",
    template: "%s | Mtoto Por Tours",
  },
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
    "Selous safari",
    "Mikumi safari",
    "car rental Zanzibar",
    "Zanzibar airport transfers",
    "Zanzibar beach holidays",
    "Dolphin tour Zanzibar",
    " quad biking Zanzibar",
    "Mtoto Por Tours",
    "Zanzibar tour operator",
    "Tanzania travel agency",
  ],
  authors: [{ name: "Mtoto Por Tours" }],
  creator: "Mtoto Por Tours",
  publisher: "Mtoto Por Tours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "Next.js",
  applicationName: "Mtoto Por Tours",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/mtoto por images/mtoto-por logo.png",
    apple: "/mtoto por images/mtoto-por logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mtotoportours.co.tz",
    title: "Mtoto Por Tours | Zanzibar Tours & Tanzania Safaris",
    description:
      "Your trusted partner for unforgettable Zanzibar tours and Tanzania safaris. Stone Town, spice tours, Safari Blue, Serengeti, Ngorongoro & more.",
    siteName: "Mtoto Por Tours",
    images: [
      {
        url: "/mtoto por images/mtoto-por logo.png",
        width: 1200,
        height: 630,
        alt: "Mtoto Por Tours - Zanzibar Tours & Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mtoto Por Tours | Zanzibar Tours & Tanzania Safaris",
    description: "Book unforgettable Zanzibar tours and Tanzania safaris with Mtoto Por Tours",
    images: ["/mtoto por images/mtoto-por logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://www.mtotoportours.co.tz",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Organization Schema.org structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Mtoto Por Tours",
    description: "Zanzibar tours, Tanzania safaris, and car rental services",
    url: "https://www.mtotoportours.co.tz",
    logo: "https://www.mtotoportours.co.tz/mtoto%20por%20images/mtoto-por%20logo.png",
    telephone: "+255717079200",
    email: "mtotoportours@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zanzibar",
      addressCountry: "TZ",
    },
    sameAs: [
      "https://www.instagram.com/mtotoportours",
      "https://www.facebook.com/mtotoportours",
      "https://www.tripadvisor.com/mtotoportours",
    ],
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: {
      "@type": "Place",
      name: "Zanzibar, Tanzania",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zanzibar Tours & Safaris",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristAttraction",
            name: "Stone Town Tour",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristAttraction",
            name: "Safari Blue Tour",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristAttraction",
            name: "Spice Farm Tour",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristAttraction",
            name: "Serengeti Safari",
          },
        },
      ],
    },
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mtoto Por Tours",
    image: "https://www.mtotoportours.co.tz/mtoto%20por%20images/mtoto-por%20logo.png",
    telephone: "+255717079200",
    email: "mtotoportours@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zanzibar",
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.1659",
      longitude: "39.2026",
    },
    url: "https://www.mtotoportours.co.tz",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mtoto Por Tours",
    url: "https://www.mtotoportours.co.tz",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.mtotoportours.co.tz/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
