"use client"

import { motion } from "framer-motion"
import { ArrowRight, Compass, Palmtree, Building2, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Compass,
    title: "Safari Adventures",
    description: "Experience Tanzania's incredible wildlife and natural landscapes. From the Serengeti plains to Mount Kilimanjaro.",
    href: "/tanzania-safaris",
    image: "/mtoto por images/new mtoto pot images/featured/lions-safari.jpg",
  },
  {
    icon: Palmtree,
    title: "Holiday Packages",
    description: "We provide carefully designed vacation packages that allow travelers to explore Tanzania's beaches, historical towns, and natural wonders.",
    href: "/packages",
    image: "/mtoto por images/new mtoto pot images/tours/nakupenda-sandbank.jpg",
  },
  {
    icon: Building2,
    title: "Hotel Booking",
    description: "We work with selected hotels and lodges that provide comfortable accommodation while supporting sustainable tourism.",
    href: "/zanzibar-tours",
    image: "/mtoto por images/new mtoto pot images/packages/zanzibar-tour.jpg",
  },
  {
    icon: Car,
    title: "Car Hire Services",
    description: "Reliable and affordable car rental services in Zanzibar. Our fleet includes saloon cars, minivans, safari vehicles, and buses.",
    href: "/transfers",
    image: "/mtoto por images/new mtoto pot images/car-hire.webp",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#1e3f23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#f7c43c] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6 text-balance">
            Our Travel Services
          </h2>
          <p className="text-white/80 text-lg font-body">Discover our range of exclusive tours, safaris, and travel services</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 rounded-full bg-[#f7c43c] shadow-lg">
                      <service.icon className="h-6 w-6 text-[#1e3f23]" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-body mb-6 leading-relaxed text-sm">{service.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-[#1e3f23] hover:text-[#f7c43c] font-semibold group/btn"
                  >
                    <Link href={service.href} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
