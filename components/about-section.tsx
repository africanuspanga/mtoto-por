"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Over 20 years of experience",
  "Personalized tours & transfers",
  "Expert local guides",
  "Large group capabilities",
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
                src="/images/about.jpg"
                alt="Beautiful Zanzibar beach with traditional dhow boats"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-display font-bold">20+</span>
                <span className="text-sm font-body opacity-90">Years Experience</span>
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Your Trusted Partner in Unforgettable Adventures
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
              Welcome to Zanzibar Exclusive Tours and Safaris, your trusted partner in unforgettable travel experiences!
              With over 20 years in the tourism industry, we've been providing exceptional tours, transfers, and
              personalized excursions to travelers from all over the world.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              Whether you're looking to relax on Zanzibar's pristine beaches or explore its rich culture, we ensure
              every moment is nothing short of extraordinary.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium font-body">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
