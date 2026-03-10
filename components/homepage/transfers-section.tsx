"use client"

import { motion } from "framer-motion"
import { Car, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function TransfersSection() {
  const { t } = useLanguage()

  const vehicles = [
    {
      nameKey: "transfers.alphard.name",
      capacityKey: "transfers.alphard.capacity",
      descriptionKey: "transfers.alphard.description",
      image: "/mtoto por images/images/transfers/toyota-alphard.webp",
    },
    {
      nameKey: "transfers.hiace.name",
      capacityKey: "transfers.hiace.capacity",
      descriptionKey: "transfers.hiace.description",
      image: "/mtoto por images/images/transfers/toyota-hiace.webp",
    },
    {
      nameKey: "transfers.coaster.name",
      capacityKey: "transfers.coaster.capacity",
      descriptionKey: "transfers.coaster.description",
      image: "/mtoto por images/images/transfers/toyota-coaster.webp",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Car className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t("transfers.badge")}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("transfers.title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("transfers.description")}</p>
        </motion.div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.nameKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={t(vehicle.nameKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-2 bg-white/90 text-foreground text-sm font-semibold px-3 py-2 rounded-full">
                      <Users className="h-4 w-4 text-primary" />
                      {t(vehicle.capacityKey)}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{t(vehicle.nameKey)}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{t(vehicle.descriptionKey)}</p>
                </div>
              </div>
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
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/transfers" className="flex items-center gap-2">
              {t("transfers.viewAll")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
