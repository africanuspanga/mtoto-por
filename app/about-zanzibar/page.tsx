"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { MapPin, Sun, Landmark, Leaf, Waves, ShieldCheck } from "lucide-react"

const highlights = [
  {
    icon: Landmark,
    title: "Stone Town",
    description: "UNESCO World Heritage site with winding limestone alleys and historic architecture",
  },
  {
    icon: Leaf,
    title: "Spice Island",
    description: "Experience the famous spice farms with cloves, cinnamon, vanilla and nutmeg",
  },
  {
    icon: Waves,
    title: "Pristine Beaches",
    description: "World-renowned turquoise waters and white sand beaches",
  },
  {
    icon: Sun,
    title: "Perfect Climate",
    description: "Tropical paradise with warm temperatures year-round",
  },
]

const travelTips = [
  { feature: "Best Time to Visit", info: "June to October (Cool & Dry) or December to February (Hot & Dry)" },
  { feature: "Currency", info: "Tanzanian Shilling (TSH), but USD is widely accepted" },
  { feature: "Language", info: "Swahili is the national language; English is widely spoken" },
  { feature: "Respect", info: "Zanzibar is culturally conservative; please dress modestly in towns and villages" },
]

export default function AboutZanzibarPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/hero-1.jpg" alt="Zanzibar Beach" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-medium text-sm mb-4">
              The Ultimate Island Escape
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to <span className="text-primary">Zanzibar</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              A sensory journey in the turquoise waters of the Indian Ocean
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Discover Paradise</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                More Than Just a Destination
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Zanzibar is more than just a destination; it is a sensory journey. Located just off the coast of
                Tanzania in the turquoise waters of the Indian Ocean, this archipelago—composed primarily of the islands
                of Unguja and Pemba—is a mosaic of ancient cultures, pristine nature, and world-class relaxation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At Zanzibar Exclusive Tours and Safaris, we specialize in unlocking the secrets of this island paradise,
                ensuring your journey is as seamless as it is unforgettable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/about.jpg" alt="Zanzibar Beach" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <MapPin className="h-8 w-8 mb-2" />
                <p className="font-bold text-lg">Indian Ocean</p>
                <p className="text-sm opacity-90">East Africa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stone Town Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/tours/stone-town.webp" alt="Stone Town" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Heart of History</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Stone Town</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your journey begins in Stone Town, a UNESCO World Heritage site and the soul of the island. A walk
                through its winding limestone alleys is a step back in time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <span className="font-semibold text-foreground">Architectural Wonders:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Discover the intricate "Zanzibar Doors," the historic House of Wonders, and the Old Fort.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <span className="font-semibold text-foreground">Cultural Fusion:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Witness the unique blend of African, Arab, Indian, and European influences that shaped Swahili
                      culture.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <span className="font-semibold text-foreground">Forodhani Gardens:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      As the sun sets, join the locals at the night market to sample fresh seafood and the famous
                      "Zanzibar Pizza."
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spice Island Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              The Spice Island Heritage
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              A Fragrant Journey
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg italic">
              "Smell the aroma of fresh cloves, taste the sweetness of tropical fruits, and learn how cinnamon, nutmeg,
              and black pepper are harvested in their natural environment."
            </p>
          </motion.div>

          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image src="/images/tours/spice-farm.webp" alt="Spice Farm Tour" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg md:text-xl font-medium">
                Zanzibar earned its nickname through its centuries-old spice trade. No visit is complete without a Spice
                Tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beaches Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Pristine Beaches & Azure Waters
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">World-Renowned Beaches</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nungwi & Kendwa",
                description:
                  "Famous for their turquoise waters and white sands that stay swimmable even during low tide.",
                image: "/images/tours/nungwi-beach-aerial.webp",
              },
              {
                title: "Paje & Jambiani",
                description:
                  "The kite-surfing capital of the island, offering a laid-back, bohemian vibe and stunning sandbanks.",
                image: "/images/tours/nakupenda-sandbank.webp",
              },
              {
                title: "Mnemba Atoll",
                description:
                  "A premier snorkeling and diving destination where you can encounter dolphins, sea turtles, and kaleidoscopic coral reefs.",
                image: "/images/tours/mnemba-snorkeling.webp",
              },
            ].map((beach, index) => (
              <motion.div
                key={beach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[250px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={beach.image || "/placeholder.svg"}
                    alt={beach.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{beach.title}</h3>
                <p className="text-muted-foreground">{beach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jozani Forest */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nature's Rarities</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">Jozani Forest</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For wildlife lovers, the Jozani Chwaka Bay National Park is a must-see. It is the last sanctuary for the
                Red Colobus Monkey, a species found nowhere else on Earth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wander through the ancient mahogany trees and the mystical mangrove boardwalks for a glimpse into the
                island's raw, green heart.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/tours/jozani-forest.webp" alt="Red Colobus Monkey" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Explore With Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">
              Zanzibar Exclusive Tours and Safaris
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Tailored Experiences",
                description: "From private dhow sunset cruises to exclusive mainland safaris.",
              },
              {
                icon: MapPin,
                title: "Expert Local Guides",
                description: "Our team doesn't just show you sights; they tell the stories behind them.",
              },
              {
                icon: Sun,
                title: "Seamless Logistics",
                description:
                  'We handle your transfers, bookings, and island-hopping so you can focus on the "Pole Pole" (slowly, slowly) pace of island life.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quick Travel Tips</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Plan Your Visit</h2>
          </motion.div>

          <div className="bg-muted/30 rounded-2xl p-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              {travelTips.map((tip, index) => (
                <motion.div
                  key={tip.feature}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-background rounded-xl"
                >
                  <div className="w-2 h-full bg-primary rounded-full" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{tip.feature}</h3>
                    <p className="text-muted-foreground">{tip.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Let us create an unforgettable experience tailored just for you. Contact us today to build your custom
              itinerary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link href="/zanzibar-tours">Browse Our Excursions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-semibold"
              >
                <Link href="/contact-us">Contact Our Team</Link>
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
