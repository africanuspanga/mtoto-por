"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const highlights = [
  "Expert local guides",
  "Personalized service", 
  "International standards",
  "Sustainable tourism",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/mtoto por images/new mtoto pot images/about/sandbank.jpg"
                alt="Beautiful Zanzibar sandbank and ocean"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge - Green with Gold accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-[#1e3f23] text-white p-6 rounded-2xl shadow-xl border-l-4 border-[#f7c43c]"
            >
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-display font-bold text-[#f7c43c]">#1</span>
                <span className="text-sm font-body opacity-90">Tour Choice</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-[#1e3f23] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Creating Memories Across East Africa
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
              At Mtoto Por Tours, we don't just plan trips – we craft extraordinary journeys that stay with you forever. From the pristine beaches of Zanzibar to the wild savannas of Tanzania, our dedicated team brings your travel dreams to life with passion and precision.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              Whether you're seeking thrilling wildlife encounters, relaxing beach getaways, or cultural immersions, we handle every detail so you can focus on making memories. Experience the warmth of East African hospitality with a team that truly cares.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#f7c43c] flex-shrink-0" />
                  <span className="text-foreground font-medium font-body">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-[#1e3f23] hover:bg-[#163319] text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="/zanzibar-tours">Discover Our Tours</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
