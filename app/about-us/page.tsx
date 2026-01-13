"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Check, Users, Globe, Heart, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AboutUsPage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Award,
      titleKey: "aboutPage.experience",
      descKey: "aboutPage.experienceDesc",
    },
    {
      icon: Users,
      titleKey: "aboutPage.localGuides",
      descKey: "aboutPage.localGuidesDesc",
    },
    {
      icon: Globe,
      titleKey: "aboutPage.customTours",
      descKey: "aboutPage.customToursDesc",
    },
    {
      icon: Heart,
      titleKey: "aboutPage.support",
      descKey: "aboutPage.supportDesc",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/about-1.jpg" alt="The Rock Restaurant Zanzibar" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("about.badge")}</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 text-balance">
              {t("aboutPage.title")}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-body">{t("aboutPage.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("about.badge")}</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                {t("about.title")}
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">{t("about.description1")}</p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">{t("about.description2")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/about-2.jpg" alt="Beach resort in Zanzibar" fill className="object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
              >
                <p className="font-display text-4xl font-bold">20+</p>
                <p className="font-body text-sm">{t("about.yearsExperience")}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("aboutPage.whyChooseUs")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              {t("aboutPage.missionTitle")}
            </h2>
            <p className="text-muted-foreground text-lg font-body">{t("aboutPage.missionDesc")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground font-body">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {t("aboutPage.whyChooseUs")}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-8 text-balance">
                {t("aboutPage.visionTitle")}
              </h2>

              <div className="space-y-4">
                {[t("about.highlight1"), t("about.highlight2"), t("about.highlight3"), t("about.highlight4")].map(
                  (reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-white/90 font-body">{reason}</p>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                {t("aboutPage.visionDesc")}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                >
                  {t("cta.button")}
                </a>
                <a
                  href="https://wa.me/255777411991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
                >
                  {t("common.whatsapp")}
                </a>
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
