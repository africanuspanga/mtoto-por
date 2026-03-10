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
  metadataBase: new URL("https://mtotoportours.com"),
  title: {
    default: "Mtoto Por Tours | Zanzibar & East Africa Tours, Safaris & Car Rental",
    template: "%s | Mtoto Por Tours",
  },
  description:
    "Experience unforgettable adventures, safaris, island tours and travel services with Mtoto Por Tours. Based in Zanzibar, Tanzania - offering tours, car rentals, aviation support, and events management.",
  keywords:
    "Zanzibar tours, Tanzania safaris, Stone Town tours, spice tours, Safari Blue, beach holidays, Jozani Forest, Prison Island, Mnemba snorkeling, Serengeti safari, Ngorongoro crater, cultural tours, Zanzibar transfers, airport pickup, car rental Zanzibar, Mtoto Por Tours",
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
    url: "https://mtotoportours.com",
    title: "Mtoto Por Tours | Zanzibar & East Africa Tours & Safaris",
    description:
      "Your trusted partner for unforgettable travel experiences in Zanzibar and East Africa. Tours, safaris, car rentals, and more.",
    siteName: "Mtoto Por Tours",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mtoto Por Tours",
    description: "Unforgettable tours and safaris in Zanzibar and East Africa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
