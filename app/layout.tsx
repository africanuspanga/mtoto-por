import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zanzibarexclusivetours.com"),
  title: {
    default: "Zanzibar Exclusive Tours & Safaris | Award-Winning Tours Since 2002",
    template: "%s | Zanzibar Exclusive Tours",
  },
  description:
    "Experience unforgettable Zanzibar tours, Tanzania safaris, and transfers with over 20 years of expertise. Book authentic cultural experiences, wildlife safaris, spice tours, and beach holidays with Zanzibar's most trusted tour operator.",
  keywords:
    "Zanzibar tours, Tanzania safaris, Stone Town tours, spice tours, Safari Blue, beach holidays, Jozani Forest, Prison Island, Mnemba snorkeling, Serengeti safari, Ngorongoro crater, cultural tours, Zanzibar transfers, airport pickup",
  authors: [{ name: "Zanzibar Exclusive Tours & Safaris" }],
  creator: "Zanzibar Exclusive Tours & Safaris",
  publisher: "Zanzibar Exclusive Tours & Safaris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.app",
  applicationName: "Zanzibar Exclusive Tours & Safaris",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zanzibarexclusivetours.com",
    title: "Zanzibar Exclusive Tours & Safaris | Award-Winning Tours Since 2002",
    description:
      "Your trusted partner for unforgettable travel experiences in Zanzibar and Tanzania. Cultural tours, safaris, transfers, and beach holidays.",
    siteName: "Zanzibar Exclusive Tours & Safaris",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zanzibar Exclusive Tours & Safaris",
    description: "Award-winning tours and safaris in Zanzibar and Tanzania since 2002",
  },
  verification: {
    google: "c84a6bc1ef92d42b",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
