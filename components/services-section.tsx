"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Compass, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const services = [
  {
    icon: MapPin,
    titleKey: "services.tours.title",
    descKey: "services.tours.description",
    href: "/zanzibar-tours",
    image: "/images/services/packages.jpg",
  },
  {
    icon: Compass,
    titleKey: "services.safaris.title",
    descKey: "services.safaris.description",
    href: "/tanzania-safaris",
    image: "/images/services/safaris.jpg",
  },
  {
    icon: Car,
    titleKey: "services.transfers.title",
    descKey: "services.transfers.description",
    href: "/transfers",
    image: "/images/services/transfers.webp",
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("services.badge")}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg font-body">{t("services.subtitle")}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
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
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 rounded-full bg-white/90 shadow-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">{t(service.titleKey)}</h3>
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">{t(service.descKey)}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group/btn"
                  >
                    <Link href={service.href} className="flex items-center gap-2">
                      {t("common.readMore")}
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
