"use client"

import { motion } from "framer-motion"
import { Package, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { packagesData } from "@/lib/packages-data"
import { useLanguage } from "@/lib/language-context"

const featuredPackages = packagesData.filter((p) => p.price).slice(0, 3)

export function PackagesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-background">
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
            <Package className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">{t("packages.badge")}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("packages.title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("packages.description")}</p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/packages/${pkg.slug}`} className="group block h-full">
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={pkg.cardImage || "/placeholder.svg"}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {pkg.duration} / {pkg.nights}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{pkg.summary}</p>
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
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/packages" className="flex items-center gap-2">
              {t("packages.viewAll")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
