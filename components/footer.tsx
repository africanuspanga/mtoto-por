"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Zanzibar Tours", href: "/zanzibar-tours" },
  { name: "Tanzania Safaris", href: "/tanzania-safaris" },
  { name: "Packages", href: "/packages" },
  { name: "Contact Us", href: "/contact-us" },
]

const tourLinks = [
  { name: "Stone Town Tour", href: "/zanzibar-tours#stone-town" },
  { name: "Spice Tour", href: "/zanzibar-tours#spice" },
  { name: "Prison Island", href: "/zanzibar-tours#prison-island" },
  { name: "Safari Blue", href: "/zanzibar-tours#safari-blue" },
  { name: "Sunset Cruise", href: "/zanzibar-tours#sunset" },
  { name: "Jozani Forest", href: "/zanzibar-tours#jozani" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column - Replaced logo with text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6">
              <h2 className="font-display text-2xl font-bold text-white leading-tight">
                ZANZIBAR EXCLUSIVE
                <br />
                <span className="text-primary">TOURS</span>
              </h2>
            </Link>
            <p className="text-white/70 font-body mb-6 leading-relaxed">
              Your trusted partner in unforgettable travel experiences. Serving wonderful vacations for over 20 years.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors font-body">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Tours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-bold mb-6 text-white">Popular Tours</h3>
            <ul className="space-y-3">
              {tourLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-primary transition-colors font-body">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/70 font-body">
                  <p>Jumbi - Zanzibar</p>
                  <p>P.O.Box 2731, Tanzania</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-white/70 font-body">
                  <a href="tel:+255777411991" className="hover:text-primary transition-colors">
                    +255 777 411 991
                  </a>
                  <br />
                  <a href="tel:+255787422992" className="hover:text-primary transition-colors">
                    +255 787 422 992
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@zanzibarexclusivetours.com"
                  className="text-white/70 hover:text-primary transition-colors font-body break-all"
                >
                  info@zanzibarexclusivetours.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/70 font-body">
                  <p>Mon - Fri: 8:00 - 17:00</p>
                  <p>Sat: 8:00 - 14:00</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/70 text-sm font-body">We Accept:</p>
            <Image
              src="/images/payment-methods.webp"
              alt="Payment Methods - Visa, MasterCard, American Express"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm font-body text-center md:text-left">
              © {new Date().getFullYear()} Zanzibar Exclusive Tours & Safaris. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/60 text-sm hover:text-primary transition-colors font-body">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 text-sm hover:text-primary transition-colors font-body">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
