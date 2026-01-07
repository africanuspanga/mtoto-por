"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Check, Users, Globe, Heart, Award } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Decades of expertise in creating exceptional travel experiences across Zanzibar and Tanzania.",
  },
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Professional, knowledgeable guides who bring the culture and history to life.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Welcoming travelers from all over the world with multilingual support.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every trip is customized to meet your unique preferences and needs.",
  },
]

const offerings = [
  {
    title: "Tailored Transfers",
    description:
      "Safe, reliable transportation for individuals or groups, from airport pickups to custom routes across Zanzibar.",
  },
  {
    title: "Excursions & Tours",
    description:
      "Discover Zanzibar's iconic destinations—whether it's Stone Town's history, the spice farms, or the stunning beaches—with our experienced local guides.",
  },
  {
    title: "Group & Family Travel",
    description:
      "Whether you're organizing a family vacation, a student group tour, or a corporate retreat, we specialize in creating unforgettable experiences for large groups.",
  },
  {
    title: "Local Experiences",
    description:
      "Get a deeper connection with Zanzibar's unique culture, food and history through authentic, hands-on experiences.",
  },
]

const whyChooseUs = [
  "Over 20 years of providing exceptional tours and transfers in Zanzibar and beyond",
  "We are committed to provide seamless, stress-free travel experiences that you can count on",
  "Every trip is unique, and we tailor every detail to suit your group, family, or event",
  "Whether it's a family reunion, student group, or corporate events, we specialize in handling large groups with ease",
]

export default function AboutUsPage() {
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 text-balance">
              About Us
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-body">
              Your trusted partner in unforgettable travel experiences since 2004
            </p>
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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Welcome</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                Welcome to Zanzibar Exclusive Tours and Safaris
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Your trusted partner in unforgettable travel experiences! With over 20 years in the tourism industry,
                we've been providing exceptional tours, transfers, and personalized excursions to travelers from all
                over the World.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Whether you're looking to relax on Zanzibar's pristine beaches or explore its rich culture, we ensure
                every moment is nothing short of extraordinary.
              </p>
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
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
              >
                <p className="font-display text-4xl font-bold">20+</p>
                <p className="font-body text-sm">Years of Excellence</p>
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-lg font-body">
              With decades of experience, we understand what makes a trip truly memorable. From seamless airport
              transfers to immersive guided tours, we go the extra mile to deliver personalized services tailored to
              your unique needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-body">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-3.jpg"
                  alt="Traditional boats on Zanzibar beach"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-8 text-balance">
                What We Offer
              </h2>

              <div className="space-y-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={offering.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">{offering.title}</h3>
                      <p className="text-muted-foreground font-body">{offering.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Us</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-8 text-balance">
                Why Choose Us?
              </h2>

              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
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
                ))}
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
                Let Us Be Your Travel Partner
              </h3>
              <p className="text-white/80 font-body text-lg leading-relaxed mb-8">
                We are more than just a tour company—we're your travel partner, here to make your Zanzibar adventure
                unforgettable! Let us take care of the details so you can focus on enjoying your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Us Today
                </a>
                <a
                  href="https://wa.me/255777411991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
                >
                  WhatsApp Us
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
