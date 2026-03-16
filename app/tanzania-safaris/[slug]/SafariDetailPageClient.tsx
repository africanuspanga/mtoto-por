"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, MapPin, Users, Check, X, Calendar, ChevronRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SafariCard } from "@/components/safari-card"
import { getSafariBySlug, getRelatedSafaris } from "@/lib/safaris-data"

export function SafariDetailPageClient() {
  const params = useParams()
  const slug = params.slug as string
  const safari = getSafariBySlug(slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!safari) {
    notFound()
  }

  const relatedSafaris = getRelatedSafaris(slug, 3)
  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in booking the ${safari.title} safari. Please send me more information.`,
  )
  const whatsappUrl = `https://wa.me/255717079200?text=${whatsappMessage}`

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={safari.images[activeImage] || "/placeholder.svg"}
            alt={safari.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>

        {/* Back Button */}
        <button
          onClick={() => {
            window.location.href = "/tanzania-safaris"
          }}
          className="absolute top-24 left-4 sm:left-8 z-20 flex items-center gap-2 text-white hover:text-primary transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back to Safaris</span>
        </button>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pb-8 sm:pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {safari.duration}
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {safari.location}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3">
              {safari.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl">{safari.subtitle}</p>
          </motion.div>
        </div>

        {/* Image Thumbnails */}
        {safari.images.length > 1 && (
          <div className="absolute bottom-4 right-4 sm:right-8 z-20 flex gap-2">
            {safari.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === idx ? "border-primary scale-105" : "border-white/50 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`View ${idx + 1}`}
                  width={80}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{safari.description}</p>

                {/* Wildlife */}
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-3">Wildlife You May See:</h3>
                  <div className="flex flex-wrap gap-2">
                    {safari.wildlife.map((animal) => (
                      <span
                        key={animal}
                        className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm"
                      >
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {safari.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {safari.itinerary.map((day, idx) => (
                    <Card key={idx} className="border-l-4 border-l-primary">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-3">
                          <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                            {day.day}
                          </span>
                          <div>
                            <span className="text-sm text-primary font-medium">Day {day.day}</span>
                            <h3 className="text-lg font-bold text-foreground">{day.title}</h3>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {day.activities.map((activity, actIdx) => (
                            <li key={actIdx} className="flex items-start gap-3 text-muted-foreground">
                              <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Pricing */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">Pricing</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {safari.pricing.map((pricingType, idx) => (
                    <Card key={idx}>
                      <CardHeader className="bg-secondary/50 pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          {pricingType.type}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          {pricingType.prices.map((price, priceIdx) => (
                            <li
                              key={priceIdx}
                              className="flex justify-between items-center py-2 border-b border-border last:border-0"
                            >
                              <span className="text-muted-foreground">{price.groupSize}</span>
                              <span className="font-bold text-foreground">{price.price}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Included/Excluded */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-6"
              >
                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Price Includes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {safari.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-green-800">
                          <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/50">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {safari.excluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-red-800">
                          <X className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="shadow-xl border-2">
                    <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                      <CardTitle className="text-center">Book This Safari</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-center pb-4 border-b">
                        <span className="text-sm text-muted-foreground">Starting from</span>
                        <p className="text-3xl font-bold text-foreground">
                          {safari.pricing[0]?.prices[0]?.price || "Contact us"}
                        </p>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>

                      <Button asChild className="w-full" size="lg">
                        <Link href="/booking" onClick={() => window.scrollTo(0, 0)}>
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Now
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                        size="lg"
                      >
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Book via WhatsApp
                        </a>
                      </Button>

                      <div className="pt-4 border-t space-y-3">
                        <a
                          href="tel:+255717079200"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Phone className="w-5 h-5 text-primary" />
                          <span>+255 717 079200</span>
                        </a>
                        <a
                          href="mailto:mtotoportours@gmail.com"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Mail className="w-5 h-5 text-primary" />
                          <span className="text-sm">mtotoportours@gmail.com</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4">Quick Info</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Duration: {safari.duration}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{safari.location}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Private & Group Tours Available</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Safaris */}
      {relatedSafaris.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Other Safari Adventures
              </h2>
              <p className="text-muted-foreground">Explore more of our exciting safari packages</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSafaris.map((relatedSafari, index) => (
                <SafariCard key={relatedSafari.id} safari={relatedSafari} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
