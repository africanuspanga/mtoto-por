"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Jumbi - Zanzibar", "P.O.Box 2731, Tanzania"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+255 777 411 991", "+255 787 422 992"],
    links: ["tel:+255777411991", "tel:+255787422992"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+255 777 411 991"],
    links: ["https://wa.me/255777411991"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@zanzibarexclusivetours.com"],
    links: ["mailto:info@zanzibarexclusivetours.com"],
  },
  {
    icon: Globe,
    title: "Website",
    details: ["www.zanzibarexclusivetours.com"],
    links: ["https://www.zanzibarexclusivetours.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon - Fri: 8:00 - 17:00", "Sat: 8:00 - 14:00", "Sun: Closed"],
  },
]

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-page.webp"
            alt="Nakupenda Sandbank Zanzibar"
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 text-balance">
              Contact Us
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-body">
              Have questions or ready to book? We're here to help make your Zanzibar adventure unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground font-body mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground font-body">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Other Ways to Contact Us
              </h2>
              <p className="text-muted-foreground font-body mb-8">
                For more information you can contact us via details below.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border/50"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground font-body text-sm">
                          {info.links?.[i] ? (
                            <a
                              href={info.links[i]}
                              target={info.links[i].startsWith("http") ? "_blank" : undefined}
                              rel={info.links[i].startsWith("http") ? "noopener noreferrer" : undefined}
                              className="hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Find Us on the Map</h2>
            <p className="text-muted-foreground font-body">Visit our office in Jumbi, Zanzibar</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890123!2d39.2191!3d-6.1659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknNTcuMiJTIDM5wrAxMycwOC44IkU!5e0!3m2!1sen!2stz!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-center"
          >
            <a
              href="https://maps.app.goo.gl/QFUbtbW43Vnpxjm78"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <MapPin className="h-5 w-5" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
