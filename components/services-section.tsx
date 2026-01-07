"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Compass, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: MapPin,
    title: "Zanzibar Tours",
    description:
      "Explore Stone Town's history, pristine beaches, spice farms, and hidden gems with our expert local guides.",
    href: "/zanzibar-tours",
    image: null, // Placeholder - you'll provide later
  },
  {
    icon: Compass,
    title: "Tanzania Safaris",
    description:
      "Experience the magnificent wildlife of Serengeti, Ngorongoro Crater, and Tanzania's world-famous national parks.",
    href: "/tanzania-safaris",
    image: null, // Placeholder - you'll provide later
  },
  {
    icon: Car,
    title: "Transfer Services",
    description:
      "Safe, reliable transportation for individuals or groups, from airport pickups to custom routes across Zanzibar.",
    href: "/transfers",
    image: null, // Placeholder - you'll provide later
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Tailored Experiences for Every Traveler
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            From thrilling safaris to serene beach getaways, we craft personalized journeys that create memories lasting
            a lifetime.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
                className="group h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Container - Empty for now */}
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  {/* Placeholder gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20" />

                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-6 rounded-full bg-white/90 shadow-lg">
                      <service.icon className="h-12 w-12 text-primary" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group/btn"
                  >
                    <Link href={service.href} className="flex items-center gap-2">
                      Learn More
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
