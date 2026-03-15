"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Check, X, ChevronLeft, Phone, Calendar, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getTourBySlug, getRelatedTours } from "@/lib/tours-data"
import { TourCard } from "@/components/tour-card"
import { useState } from "react"

export function TourDetailPageClient() {
  const params = useParams()
  const slug = params.slug as string
  const tour = getTourBySlug(slug)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!tour) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">The tour you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/zanzibar-tours">Back to Tours</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedTours = getRelatedTours(slug, 3)
  const allImages = [tour.heroImage, ...tour.galleryImages]

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in booking the ${tour.title}. Please send me more information.`,
  )
  const whatsappUrl = `https://wa.me/255717079200?text=${whatsappMessage}`

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={allImages[selectedImage] || "/placeholder.svg"}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>

        {/* Back Button */}
        <Link
          href="/zanzibar-tours"
          className="absolute top-24 left-4 md:left-8 z-20 flex items-center gap-2 text-white hover:text-primary transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Tours</span>
        </Link>

        <div className="relative z-10 container mx-auto px-4 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Clock className="w-4 h-4" />
              {tour.duration}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif">{tour.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{tour.subtitle}</p>
          </motion.div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="absolute bottom-4 right-4 md:right-8 z-20 flex gap-2">
          {allImages.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index ? "border-primary scale-105" : "border-white/50 hover:border-white"
              }`}
            >
              <Image src={image || "/placeholder.svg"} alt={`Gallery ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{tour.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {tour.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Middle Gallery Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-96 rounded-2xl overflow-hidden"
              >
                <Image
                  src={tour.galleryImages[0] || "/placeholder.svg"}
                  alt={`${tour.title} experience`}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Highlights */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-serif flex items-center gap-3">
                  <Star className="w-7 h-7 text-primary" />
                  Tour Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Included/Excluded */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Included */}
                <Card className="border-green-200 bg-green-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {tour.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Excluded */}
                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <X className="w-5 h-5 text-white" />
                      </div>
                      Not Included
                    </h3>
                    <ul className="space-y-3">
                      {tour.excluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Gallery Grid */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-serif">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tour.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedImage(index + 1)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${tour.title} gallery ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-primary/20 shadow-xl">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <p className="text-sm text-muted-foreground mb-1">Duration</p>
                        <p className="text-2xl font-bold text-foreground">{tour.duration}</p>
                      </div>

                      <div className="space-y-3">
                        <Button asChild className="w-full" size="lg">
                          <Link href="/booking" onClick={() => window.scrollTo(0, 0)}>
                            <Calendar className="w-5 h-5 mr-2" />
                            Book This Tour
                          </Link>
                        </Button>

                        <Button
                          asChild
                          variant="outline"
                          className="w-full bg-green-50 border-green-500 text-green-700 hover:bg-green-100"
                          size="lg"
                        >
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Book via WhatsApp
                          </a>
                        </Button>

                        <Button asChild variant="ghost" className="w-full" size="lg">
                          <a href="tel:+255717079200">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Us
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Need Help Card */}
                <Card className="bg-muted/50">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-foreground mb-2">Need Help?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our travel experts are here to assist you with any questions.
                    </p>
                    <p className="font-semibold text-primary">+255 717 079 200</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 8AM - 5PM</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">You Might Also Like</h2>
              <p className="text-muted-foreground mt-2">Explore more amazing Zanzibar experiences</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedTours.map((relatedTour, index) => (
                <TourCard key={relatedTour.id} tour={relatedTour} index={index} />
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
