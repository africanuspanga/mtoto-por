"use client"

import { motion } from "framer-motion"
import { Compass, Anchor, Sun, Palmtree } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TourCard } from "@/components/tour-card"
import { zanzibarTours } from "@/lib/tours-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  { icon: Compass, label: "Expert Guides" },
  { icon: Anchor, label: "Ocean Adventures" },
  { icon: Sun, label: "Full Day Tours" },
  { icon: Palmtree, label: "Island Paradise" },
]

export default function ZanzibarToursPage() {
  const fullDayTours = zanzibarTours.filter((tour) => tour.category === "full-day")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Explore the Island
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
              Zanzibar <span className="text-primary">Tours</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Discover the magic of Zanzibar with our expertly curated tours. From ocean adventures to cultural
              experiences, create unforgettable memories.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-white text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Day Tours Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Island Experiences</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 font-serif">Full Day Tours</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in the beauty and culture of Zanzibar with our comprehensive full-day tours, each
              designed to showcase the best the island has to offer.
            </p>
          </motion.div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {fullDayTours.map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-white/80 mb-8">
                We offer custom tour packages tailored to your preferences. Contact us to create your perfect Zanzibar
                adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                    Contact Us
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  <a
                    href="https://wa.me/255777411991?text=Hello! I'm interested in a custom tour package."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
