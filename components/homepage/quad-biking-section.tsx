"use client"

import { motion } from "framer-motion"
import { Bike, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function QuadBikingSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Bike className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t("quadBiking.badge")}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("quadBiking.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{t("quadBiking.description")}</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-foreground">
                <span className="h-2 w-2 bg-primary rounded-full" />
                {t("quadBiking.feature1")}
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="h-2 w-2 bg-primary rounded-full" />
                {t("quadBiking.feature2")}
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="h-2 w-2 bg-primary rounded-full" />
                {t("quadBiking.feature3")}
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="h-2 w-2 bg-primary rounded-full" />
                {t("quadBiking.feature4")}
              </li>
            </ul>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/booking" className="flex items-center gap-2">
                {t("quadBiking.bookRide")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QUAD%20BIKING-M0qntfzjA1C84JjWfmyeDp3e31fiAh.MOV" type="video/quicktime" />
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QUAD%20BIKING-M0qntfzjA1C84JjWfmyeDp3e31fiAh.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
