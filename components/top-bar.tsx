"use client"

import { Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://api.whatsapp.com/send/?phone=255717079200&text&type=phone_number&app_absent=0",
  },
]

export function TopBar() {
  return (
    <div className="bg-[#1e3f23] text-white text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="https://api.whatsapp.com/send/?phone=255717079200&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#f7c43c] transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call / WhatsApp +255 717 079200</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href="mailto:mtotoportours@gmail.com"
              className="flex items-center gap-2 hover:text-[#f7c43c] transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>mtotoportours@gmail.com</span>
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
                className="p-1.5 rounded-full bg-white/10 hover:bg-[#f7c43c] hover:text-[#1e3f23] transition-colors"
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
