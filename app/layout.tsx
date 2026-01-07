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
  title: "Zanzibar Exclusive Tours & Safaris | Serves Up Wonderful Vacations",
  description:
    "Experience unforgettable adventures in Zanzibar with over 20 years of expertise. Premium tours, safaris, and transfers across Tanzania.",
  keywords:
    "Zanzibar tours, Tanzania safaris, Zanzibar transfers, Stone Town tours, spice tours, beach holidays, East Africa travel",
  generator: "v0.app",
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  openGraph: {
    title: "Zanzibar Exclusive Tours & Safaris",
    description: "Your trusted partner for unforgettable travel experiences in Zanzibar and Tanzania",
    type: "website",
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
