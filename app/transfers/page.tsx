"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Clock, DollarSign, Users, Timer, Car, MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: DollarSign,
    title: "Without Additional Costs",
    description: "We do not charge any additional fees. Free waiting, free cancellation.",
  },
  {
    icon: Clock,
    title: "On Time Taxi",
    description:
      "Our cars always arrive on time. The driver arrives 15 minutes earlier and will take you on a journey.",
  },
  {
    icon: Users,
    title: "Friendly Drivers",
    description: "We are friendly and knowledgeable drivers to achieve your satisfaction.",
  },
  {
    icon: Timer,
    title: "Free Waiting Charges",
    description: "You will not pay any waiting fee at the airport, we understand the visa process at the airport.",
  },
]

const vehicles = [
  {
    name: "Toyota Alphard",
    capacity: "1 – 6 travelers",
    image: "/images/transfers/toyota-alphard.webp",
    description: "Luxury minivan perfect for couples, families, and small groups seeking comfort.",
  },
  {
    name: "Toyota Hiace",
    capacity: "8 – 16 travelers",
    image: "/images/transfers/toyota-hiace.webp",
    description: "Spacious van ideal for medium-sized groups and tour parties.",
  },
  {
    name: "Coaster Bus",
    capacity: "15 – 28 travelers",
    image: "/images/transfers/toyota-coaster.webp",
    description: "Full-size bus for large groups, events, and corporate transfers.",
  },
]

const popularRoutes = [
  { from: "Zanzibar Airport", to: "Jambiani" },
  { from: "Zanzibar Airport", to: "Paje" },
  { from: "Zanzibar Airport", to: "Michamvi" },
  { from: "Zanzibar Airport", to: "Nungwi" },
  { from: "Zanzibar Airport", to: "Kendwa" },
  { from: "Zanzibar Airport", to: "Stone Town" },
  { from: "Stone Town", to: "Paje" },
  { from: "Stone Town", to: "Nungwi" },
  { from: "Nungwi", to: "Jambiani" },
]

export default function TransfersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-dark via-dark/95 to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Car className="w-5 h-5" />
              <span className="font-medium">24/7 Transfer Services</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Airport & Hotel <span className="text-primary">Transfers</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto text-pretty">
              Reliable, comfortable, and affordable taxi services across Zanzibar. Book your transfer with us and travel
              with peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact-us">
                  Book Your Transfer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=255777411991&text=Hello%2C%20I%20would%20like%20to%20book%20a%20transfer&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Book a Taxi With <span className="text-primary">Us?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience hassle-free transportation with our professional and reliable service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vehicles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Types of <span className="text-primary">Transport</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use the best cars to satisfy our customers. Our vehicles suit all types of travelers - single
              travelers, couples, families, and groups.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.capacity}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{vehicle.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{vehicle.description}</p>
                  <div className="flex items-center text-primary">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{vehicle.capacity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 24 Hour Service */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Available 24/7</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                We Are a <span className="text-primary">24 Hour</span> Taxi Service in Zanzibar
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you are looking for a taxi in Zanzibar that will offer services whenever you need them, then you have
                come to the right place!
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                We provide taxi services without time limits. The driver will come to pick you up at any time you have
                mentioned to us in advance and will take you to your destination. We really care about our customers'
                time. So you can contact us and book our services anywhere in Zanzibar - from airport, hotels, or
                anywhere.
              </p>

              <div className="space-y-3">
                {["Airport pickups & drop-offs", "Hotel transfers", "Island tours", "Custom routes"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/transfers/toyota-alphard.webp"
                  alt="24 Hour Taxi Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
                        <p className="font-semibold text-foreground">+255 777 411 991</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Most Popular <span className="text-primary">Taxi Routes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book your transfer on any of these popular routes or contact us for custom destinations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={`${route.from}-${route.to}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 bg-muted/50 rounded-xl p-4 hover:bg-primary/10 transition-colors duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">From {route.from}</p>
                  <p className="font-medium text-foreground truncate">To {route.to}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your <span className="text-primary">Transfer?</span>
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Contact us today to arrange your airport pickup, hotel transfer, or custom route. We're available 24/7 to
              serve you.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact-us">
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
