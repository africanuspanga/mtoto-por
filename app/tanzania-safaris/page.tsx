"use client"

import { motion } from "framer-motion"
import { Compass, TreePine, Camera, Shield } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SafariCard } from "@/components/safari-card"
import { safariPackages } from "@/lib/safaris-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Compass,
    title: "Expert Guides",
    description: "Professional English & Polish speaking guides",
  },
  {
    icon: TreePine,
    title: "Iconic Parks",
    description: "Serengeti, Ngorongoro, Selous & more",
  },
  {
    icon: Camera,
    title: "Big Five",
    description: "Lions, Elephants, Rhinos, Buffalos, Leopards",
  },
  {
    icon: Shield,
    title: "All Inclusive",
    description: "Flights, meals, accommodation & park fees",
  },
]

export default function TanzaniaSafarisPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/safaris/selous-lions.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Tanzania Safaris from Zanzibar
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance">
              Discover the Wild Heart of <span className="text-primary">Africa</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 text-pretty">
              Experience unforgettable wildlife adventures in Tanzania's most iconic national parks. From day trips to
              multi-day expeditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#safaris">Explore Safaris</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-foreground"
                asChild
              >
                <Link href="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-2xl bg-secondary/50"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Packages Grid */}
      <section id="safaris" className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Safari Packages</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              From day trips to multi-day expeditions, we offer a range of safari experiences tailored to your time and
              budget.
            </p>
          </motion.div>

          {/* Safari Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {safariPackages.map((safari, index) => (
              <SafariCard key={safari.id} safari={safari} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We can create custom safari packages tailored to your preferences, budget, and schedule. Contact us to
              plan your dream adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <a
                  href="https://wa.me/255777411991?text=Hello!%20I'm%20interested%20in%20a%20custom%20safari%20package.%20Please%20help%20me%20plan%20my%20adventure."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
