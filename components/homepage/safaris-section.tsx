"use client"

import { motion } from "framer-motion"
import { Compass, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { safariPackages } from "@/lib/safaris-data"

// Get 3 safaris with prices
const featuredSafaris = safariPackages.filter((s) => s.pricing && s.pricing.length > 0).slice(0, 3)

export function SafarisSection() {
  return (
    <section className="py-20 md:py-28 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <Compass className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Tanzania Safaris</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Witness Africa's Greatest Wildlife
          </h2>
          <p className="text-white/70 text-lg">
            From the legendary Serengeti to Ngorongoro Crater, experience Tanzania's world-famous national parks.
          </p>
        </motion.div>

        {/* Safaris Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {featuredSafaris.map((safari, index) => (
            <motion.div
              key={safari.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/tanzania-safaris/${safari.slug}`} className="group block h-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={safari.cardImage || "/placeholder.svg"}
                      alt={safari.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    {/* Price badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                        {safari.pricing[0]?.prices[0]?.price || "Contact Us"}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {safari.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {safari.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2 flex-1">{safari.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {safari.wildlife.slice(0, 3).map((animal) => (
                        <span key={animal} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">
                          {animal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-dark bg-transparent"
          >
            <Link href="/tanzania-safaris" className="flex items-center gap-2">
              View More Tanzania Safaris
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
