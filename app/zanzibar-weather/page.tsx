"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Sun, Cloud, Droplets, Wind, Thermometer, Umbrella, Calendar, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const seasons = [
  {
    name: "Hot Dry Season",
    months: "December - February",
    icon: Sun,
    temp: "28-35°C",
    description:
      "The hottest time of year with minimal rainfall. Perfect for beach activities, swimming, and water sports. Ideal for snorkeling and diving with excellent visibility.",
    highlights: [
      "Best beach weather",
      "Clear waters for snorkeling",
      "Perfect for dhow cruises",
      "Peak tourist season",
    ],
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Long Rains",
    months: "March - May",
    icon: Droplets,
    temp: "25-30°C",
    description:
      "The wettest period with heavy afternoon showers. Lower tourist numbers mean better rates and fewer crowds. Rain usually clears quickly, leaving fresh, lush landscapes.",
    highlights: ["Lower prices", "Fewer tourists", "Lush green scenery", "Short afternoon showers"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Cool Dry Season",
    months: "June - October",
    icon: Wind,
    temp: "23-28°C",
    description:
      "The most comfortable weather with cool breezes and minimal rain. Excellent for all activities including safaris. This is considered the best overall time to visit.",
    highlights: ["Most comfortable temperatures", "Best for safaris", "Excellent visibility", "Perfect for tours"],
    color: "from-teal-500 to-green-500",
  },
  {
    name: "Short Rains",
    months: "November",
    icon: Cloud,
    temp: "26-31°C",
    description:
      "Brief rainy period with short showers that rarely disrupt activities. The island becomes green and beautiful. A great time to visit with moderate tourist numbers.",
    highlights: ["Brief showers", "Moderate crowds", "Green landscapes", "Good value"],
    color: "from-purple-500 to-pink-500",
  },
]

const monthlyData = [
  { month: "Jan", temp: 32, rain: 60, humidity: 78 },
  { month: "Feb", temp: 33, rain: 50, humidity: 76 },
  { month: "Mar", temp: 32, rain: 150, humidity: 80 },
  { month: "Apr", temp: 30, rain: 320, humidity: 85 },
  { month: "May", temp: 28, rain: 200, humidity: 83 },
  { month: "Jun", temp: 27, rain: 40, humidity: 75 },
  { month: "Jul", temp: 26, rain: 30, humidity: 73 },
  { month: "Aug", temp: 26, rain: 30, humidity: 72 },
  { month: "Sep", temp: 27, rain: 40, humidity: 73 },
  { month: "Oct", temp: 28, rain: 70, humidity: 75 },
  { month: "Nov", temp: 30, rain: 150, humidity: 78 },
  { month: "Dec", temp: 31, rain: 100, humidity: 77 },
]

const tips = [
  {
    icon: Umbrella,
    title: "Pack Light Rain Gear",
    description: "Even in dry season, brief showers can occur. A light rain jacket or umbrella is always useful.",
  },
  {
    icon: Sun,
    title: "Sun Protection Essential",
    description: "The tropical sun is strong year-round. Bring reef-safe sunscreen, sunglasses, and a hat.",
  },
  {
    icon: Thermometer,
    title: "Light, Breathable Clothing",
    description: "Cotton and linen clothes are ideal. Remember to pack modest clothing for visiting Stone Town.",
  },
  {
    icon: Wind,
    title: "Consider the Monsoons",
    description: "The Kaskazi (NE) brings rains Dec-Feb, while Kusi (SE) brings cool dry weather Jun-Oct.",
  },
]

export default function ZanzibarWeatherPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/weather-dhow.webp"
            alt="Sunset dhow cruise in Zanzibar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Sun className="h-5 w-5 text-yellow-400" />
              <span className="text-white/90 font-medium text-sm">Tropical Paradise</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Zanzibar Weather Guide
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-body">
              Plan your perfect trip with our comprehensive guide to Zanzibar's tropical climate, seasons, and best
              times to visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Climate Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Climate Overview</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Tropical Island Paradise
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Zanzibar enjoys a warm tropical climate year-round, with temperatures typically ranging from 25°C to
                  35°C (77°F to 95°F). Located just 6 degrees south of the equator, the archipelago experiences
                  consistent warmth throughout the year.
                </p>
                <p>
                  The climate is influenced by two monsoon seasons: the <strong>Kaskazi</strong> (northeast monsoon)
                  from December to February bringing warm, humid conditions, and the <strong>Kusi</strong> (southeast
                  monsoon) from June to October bringing cooler, drier weather.
                </p>
                <p>
                  With over 2,000 hours of sunshine annually and sea temperatures between 26-29°C, Zanzibar truly lives
                  up to its reputation as a beach lover's paradise.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <Thermometer className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-bold text-foreground">25-35°C</p>
                  <p className="text-xs text-muted-foreground">Year-round</p>
                </div>
                <div className="bg-ocean/10 rounded-xl p-4 text-center">
                  <Droplets className="h-6 w-6 text-ocean mx-auto mb-2" />
                  <p className="font-bold text-foreground">26-29°C</p>
                  <p className="text-xs text-muted-foreground">Sea Temp</p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-4 text-center">
                  <Sun className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-foreground">2000+</p>
                  <p className="text-xs text-muted-foreground">Sun Hours/Year</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/weather-stonetown.webp"
                  alt="Stone Town waterfront"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <p className="text-sm text-muted-foreground">Average Annual</p>
                <p className="font-display text-2xl font-bold text-primary">28°C</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seasons Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Seasonal Guide</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Four Distinct Seasons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Understanding Zanzibar's seasons helps you plan the perfect trip based on your preferences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {seasons.map((season, index) => (
              <motion.div
                key={season.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${season.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{season.name}</h3>
                      <p className="text-white/80 font-body">{season.months}</p>
                    </div>
                    <div className="bg-white/20 p-4 rounded-full">
                      <season.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-white/80" />
                    <span className="text-white font-semibold">{season.temp}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground font-body mb-4">{season.description}</p>
                  <ul className="space-y-2">
                    {season.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Monthly Data</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Weather by Month</h2>
          </motion.div>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-12 gap-2 md:gap-4 min-w-[800px]">
              {monthlyData.map((data, index) => (
                <motion.div
                  key={data.month}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card rounded-xl p-3 md:p-4 border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <p className="font-display font-bold text-foreground mb-2">{data.month}</p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Thermometer className="h-3 w-3 text-primary mx-auto mb-1" />
                      <p className="font-semibold text-foreground">{data.temp}°C</p>
                    </div>
                    <div className="bg-ocean/10 rounded-lg p-2">
                      <Droplets className="h-3 w-3 text-ocean mx-auto mb-1" />
                      <p className="font-semibold text-foreground">{data.rain}mm</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Travel Tips</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">What to Pack</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{tip.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Best Time to Visit: June - October
            </h2>
            <p className="text-white/90 font-body max-w-2xl mx-auto mb-8">
              For the best weather conditions, we recommend visiting during the cool dry season. However, Zanzibar is
              beautiful year-round - let us help you plan your perfect trip!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 bg-transparent"
              >
                <Link href="/contact-us">Plan Your Trip</Link>
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
