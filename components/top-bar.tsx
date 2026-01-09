"use client"

import { Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/ZanzibarExclusiveTours",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/zanzibarexclusivetours",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://api.whatsapp.com/send/?phone=255777411991&text&type=phone_number&app_absent=0",
  },
]

export function TopBar() {
  return (
    <div className="bg-accent text-white text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="https://api.whatsapp.com/send/?phone=255777411991&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call / WhatsApp +255 777 411 991</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href="mailto:exclusivetoursm@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>exclusivetoursm@gmail.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
