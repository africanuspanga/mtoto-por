"use client"

import { motion } from "framer-motion"
import { Palmtree, ArrowRight, Calendar, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { zanzibarTours } from "@/lib/tours-data"

// Get multi-day and featured tours
const featuredMultiDayTours = zanzibarTours.filter((tour) => 
  tour.category === "multi-day" || tour.slug === "explore-zanzibar-7-days-6-nights"
).slice(0, 3)

export function ZanzibarMultiDaySection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#1e3f23]/10 text-[#1e3f23] px-4 py-2 rounded-full mb-4">
            <Palmtree className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Zanzibar Tours</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1e3f23] mb-4 text-balance">
            Explore Zanzibar - Multi-Day Adventures
          </h2>
          <p className="text-[#1e3f23]/70 text-lg">
            Discover the ultimate Zanzibar experience with our carefully crafted multi-day packages. 
            From pristine beaches to historic Stone Town, spice farms to incredible wildlife.
          </p>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredMultiDayTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/zanzibar-tours/${tour.slug}`} className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={tour.cardImage || "/placeholder.svg"}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#f7c43c] text-[#1e3f23] text-xs font-bold px-3 py-1 rounded-full">
                        7 Days / 6 Nights
                      </span>
                    </div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#1e3f23] text-white text-xs font-bold px-3 py-1 rounded-full">
                        From $600
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {tour.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold text-[#1e3f23] mb-2 group-hover:text-[#2d5a35] transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 flex-1">{tour.summary}</p>
                    
                    {/* Highlights */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#1e3f23]" />
                        <span>All entrance fees included</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#1e3f23]" />
                        <span>Professional multilingual guides</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#1e3f23]" />
                        <span>6 nights accommodation</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 flex gap-3">
                      <Button 
                        asChild
                        className="flex-1 bg-[#1e3f23] hover:bg-[#2d5a35] text-white"
                      >
                        <Link href={`/zanzibar-tours/${tour.slug}`}>
                          Read More
                        </Link>
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                        className="flex-1 border-[#1e3f23] text-[#1e3f23] hover:bg-[#1e3f23] hover:text-white"
                      >
                        <Link href="/booking">
                          Book Now
                        </Link>
                      </Button>
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
          <Button asChild size="lg" className="bg-[#1e3f23] hover:bg-[#2d5a35] text-white">
            <Link href="/zanzibar-tours" className="flex items-center gap-2">
              View All Zanzibar Tours
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
