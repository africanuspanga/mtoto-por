"use client"

import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { packagesData } from "@/lib/packages-data"
import { Calendar, Moon, MapPin, Check, X, ArrowLeft, Building2, Palmtree, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PackageDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const pkg = packagesData.find((p) => p.slug === slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!pkg) {
    notFound()
  }

  const whatsappNumber = "255777411991"
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in booking the ${pkg.title}. Can you provide more details and availability?`,
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        {/* Main Image */}
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <Image
            src={pkg.images[activeImage] || "/placeholder.svg"}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-24 left-4 sm:left-8"
          >
            <Link href="/packages">
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Packages
              </Button>
            </Link>
          </motion.div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {pkg.duration}
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full flex items-center gap-2">
                    <Moon className="h-4 w-4" />
                    {pkg.nights}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                  {pkg.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <div className="flex gap-3 overflow-x-auto pb-4">
            {pkg.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all ${
                  activeImage === index ? "ring-4 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={image || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Package Overview</h2>
                <p className="text-muted-foreground font-body leading-relaxed text-lg">{pkg.overview}</p>
              </motion.div>

              {/* Accommodation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Accommodation Options
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold">Hotels Near Town</h3>
                    </div>
                    <ul className="space-y-2">
                      {pkg.accommodationTown.map((hotel) => (
                        <li key={hotel} className="flex items-center gap-2 text-muted-foreground font-body">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          {hotel}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-ocean/5 rounded-2xl border border-ocean/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-ocean/10 rounded-lg">
                        <Palmtree className="h-5 w-5 text-ocean" />
                      </div>
                      <h3 className="font-display text-lg font-semibold">Hotels Near Beach</h3>
                    </div>
                    <ul className="space-y-2">
                      {pkg.accommodationBeach.map((hotel) => (
                        <li key={hotel} className="flex items-center gap-2 text-muted-foreground font-body">
                          <Check className="h-4 w-4 text-ocean flex-shrink-0" />
                          {hotel}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {pkg.itinerary.map((day, index) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-l-transparent last:pb-0"
                    >
                      {/* Day Marker */}
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {day.day}
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm text-primary font-medium">Day {day.day}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">{day.title}</h3>
                        <p className="text-muted-foreground font-body leading-relaxed">{day.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Included & Excluded */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-900">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      Package Included
                    </h3>
                    <ul className="space-y-3">
                      {pkg.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground font-body">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-200 dark:border-red-900">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <X className="h-5 w-5 text-red-600" />
                      Package Excluded
                    </h3>
                    <ul className="space-y-3">
                      {pkg.excluded.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground font-body">
                          <X className="h-4 w-4 text-red-600 flex-shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-28 p-6 bg-card rounded-2xl shadow-xl border border-border"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Book This Package</h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Contact us to check availability and get a personalized quote.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground font-body">Duration</span>
                    <span className="font-semibold">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground font-body">Nights</span>
                    <span className="font-semibold">{pkg.nights}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground font-body">Activities</span>
                    <span className="font-semibold">{pkg.itinerary.length - 1}+</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/booking" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                      Book Now
                    </Button>
                  </Link>

                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold py-6 text-lg bg-transparent"
                    >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Book via WhatsApp
                    </Button>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground font-body mb-3">Need help or have questions?</p>
                  <div className="space-y-2">
                    <a
                      href="tel:+255777411991"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      +255 777 411 991
                    </a>
                    <a
                      href="mailto:info@zanzibarexclusivetours.com"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors break-all"
                    >
                      <span className="text-primary">@</span>
                      info@zanzibarexclusivetours.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Packages */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Explore Other Packages</h2>
            <p className="text-muted-foreground font-body">Find the perfect package for your Zanzibar adventure</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packagesData
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((otherPkg, index) => (
                <motion.div
                  key={otherPkg.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/packages/${otherPkg.slug}`}>
                    <div className="group relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src={otherPkg.cardImage || "/placeholder.svg"}
                        alt={otherPkg.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2 mb-2">
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                            {otherPkg.duration}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-bold text-white line-clamp-2">{otherPkg.title}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
