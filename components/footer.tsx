"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Tours", href: "/zanzibar-tours" },
  { name: "Safaris", href: "/tanzania-safaris" },
  { name: "Car Rental", href: "/transfers" },
  { name: "Contact Us", href: "/contact-us" },
]

const tourLinks = [
  { name: "Dolphin Safari", href: "/zanzibar-tours" },
  { name: "Prison Island", href: "/zanzibar-tours" },
  { name: "Safari Blue", href: "/zanzibar-tours" },
  { name: "Jozani Forest", href: "/zanzibar-tours" },
  { name: "Gombe Chimpanzees", href: "/tanzania-safaris" },
  { name: "Selous Safari", href: "/tanzania-safaris" },
]

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://api.whatsapp.com/send/?phone=255717079200&text&type=phone_number&app_absent=0" },
]

export function Footer() {
  return (
    <footer className="bg-[#0f2915] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/mtoto por images/mtoto-por logo.png"
                alt="Mtoto Por Tours"
                width={180}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-white/70 font-body mb-6 leading-relaxed">
              Your trusted partner for unforgettable tours, safaris, and seamless travel experiences in Zanzibar and East Africa.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-[#f7c43c] hover:text-[#1e3f23] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
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
                  <Link href={link.href} className="text-white/70 hover:text-[#f7c43c] transition-colors font-body">
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
                  <Link href={link.href} className="text-white/70 hover:text-[#f7c43c] transition-colors font-body">
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
                <MapPin className="h-5 w-5 text-[#f7c43c] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 font-body">
                  <p>Zanzibar, Tanzania</p>
                  <p>East Africa</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#f7c43c] flex-shrink-0" />
                <div className="text-white/70 font-body">
                  <a href="tel:+255717079200" className="hover:text-[#f7c43c] transition-colors">
                    +255 717 079200
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#f7c43c] flex-shrink-0" />
                <div className="text-white/70 font-body space-y-1">
                  <a href="mailto:amtopwa@yahoo.com" className="hover:text-[#f7c43c] transition-colors block">
                    amtopwa@yahoo.com
                  </a>
                  <a href="mailto:mtopwaabou@gmail.com" className="hover:text-[#f7c43c] transition-colors block">
                    mtopwaabou@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#f7c43c] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 font-body">
                  <p>Mon - Sun: 24/7</p>
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
            <p className="text-white/70 text-sm font-body">We Accept</p>
            <div className="flex items-center gap-4">
              <Image
                src="/mtoto por images/new mtoto pot images/payment/visa-logo.png"
                alt="Visa"
                width={60}
                height={40}
                className="h-10 w-auto bg-white rounded px-2 py-1"
              />
              <Image
                src="/mtoto por images/new mtoto pot images/payment/unionpay-logo.png"
                alt="UnionPay"
                width={60}
                height={40}
                className="h-10 w-auto bg-white rounded px-2 py-1"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm font-body text-center md:text-left">
              © {new Date().getFullYear()} Mtoto Por Tours — All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/60 text-sm hover:text-[#f7c43c] transition-colors font-body">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 text-sm hover:text-[#f7c43c] transition-colors font-body">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
