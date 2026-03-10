"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const partners = [
  {
    name: "TripAdvisor",
    logo: "/mtoto por images/images/tripadvisor.webp",
    width: 140,
    height: 50,
    url: "https://www.tripadvisor.com/Attraction_Review-g666395-d26730809-Reviews-Zanzibar_Exclusive_Tours-Unguja_City_Zanzibar_Island_Zanzibar_Archipelago.html",
  },
  { name: "Google Reviews", logo: "/mtoto por images/images/google-reviews.png", width: 140, height: 60 },
  { name: "Trustpilot", logo: "/mtoto por images/images/trustpilot.png", width: 130, height: 50 },
  { name: "GetYourGuide", logo: "/mtoto por images/images/getyourguide.png", width: 80, height: 80 },
  { name: "Safarigo", logo: "/mtoto por images/images/safarigo.png", width: 130, height: 40 },
  { name: "Tanzania Tourist Board", logo: "/mtoto por images/images/tanzania-tourist-board.jpg", width: 100, height: 50 },
]

export function RecommendedSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Trusted Worldwide</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3">Recommended By</h2>
        </motion.div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center hover:scale-105 transition-all duration-300"
            >
              {partner.url ? (
                <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="h-12 md:h-14 w-auto object-contain cursor-pointer"
                  />
                </Link>
              ) : (
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
