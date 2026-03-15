"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Clock, DollarSign, Users, Timer, Car, MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const vehicles = [
  { name: "Toyota Alphard", capacityKey: "1 – 6", image: "/mtoto por images/new mtoto pot images/vehicles/alphard-white.png" },
  { name: "Toyota Hiace", capacityKey: "8 – 16", image: "/mtoto por images/new mtoto pot images/vehicles/coaster-bus.jpg" },
  { name: "Coaster Bus", capacityKey: "15 – 28", image: "/mtoto por images/new mtoto pot images/vehicles/coaster-22seat.avif" },
]

const popularRoutes = [
  { from: "Zanzibar Airport", to: "Jambiani" },
  { from: "Zanzibar Airport", to: "Paje" },
  { from: "Zanzibar Airport", to: "Michamvi" },
  { from: "Zanzibar Airport", to: "Nungwi" },
  { from: "Zanzibar Airport", to: "Kendwa" },
  { from: "Zanzibar Airport", to: "Stone Town" },
  { from: "Stone Town", to: "Paje" },
  { from: "Stone Town", to: "Nungwi" },
  { from: "Nungwi", to: "Jambiani" },
]

export default function TransfersPage() {
  const { t } = useLanguage()

  const benefits = [
    { icon: DollarSign, titleKey: "transfersPage.benefit1.title", descKey: "transfersPage.benefit1.desc" },
    { icon: Clock, titleKey: "transfersPage.benefit2.title", descKey: "transfersPage.benefit2.desc" },
    { icon: Users, titleKey: "transfersPage.benefit3.title", descKey: "transfersPage.benefit3.desc" },
    { icon: Timer, titleKey: "transfersPage.benefit4.title", descKey: "transfersPage.benefit4.desc" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-dark via-dark/95 to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Car className="w-5 h-5" />
              <span className="font-medium">{t("transfers.badge")}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {t("transfersPage.title")}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto text-pretty">
              {t("transfersPage.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact-us">
                  {t("common.bookNow")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=255717079200&text=Hello%2C%20I%20would%20like%20to%20book%20a%20transfer&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {t("common.whatsapp")}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("transfersPage.whyBook")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{t(benefit.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(benefit.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vehicles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("transfersPage.vehiclesTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("transfersPage.vehiclesDesc")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.capacityKey} {t("transfers.passengers")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{vehicle.name}</h3>
                  <div className="flex items-center text-primary">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">
                      {vehicle.capacityKey} {t("transfers.passengers")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 24 Hour Service */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Clock className="w-5 h-5" />
                <span className="font-medium">24/7</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("transfersPage.service24Title")}
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">{t("transfersPage.service24Desc1")}</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">{t("transfersPage.service24Desc2")}</p>

              <div className="space-y-3">
                {[
                  t("transfersPage.feature1"),
                  t("transfersPage.feature2"),
                  t("transfersPage.feature3"),
                  t("transfersPage.feature4"),
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/mtoto por images/new mtoto pot images/vehicles/alphard-white.png"
                  alt="24 Hour Taxi Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
                        <p className="font-semibold text-foreground">+255 717 079 200</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("transfersPage.popularRoutes")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("transfersPage.popularRoutesDesc")}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={`${route.from}-${route.to}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 bg-muted/50 rounded-xl p-4 hover:bg-primary/10 transition-colors duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">From {route.from}</p>
                  <p className="font-medium text-foreground truncate">To {route.to}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{t("transfersPage.ctaTitle")}</h2>
            <p className="text-white/80 mb-8 text-lg">{t("transfersPage.ctaDesc")}</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact-us">
                {t("transfersPage.contactNow")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
