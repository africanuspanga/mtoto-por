"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const heroSlides = [
  {
    image: "/mtoto por images/mtoto-por-zanzi.jpg",
    title: "Explore Zanzibar & East Africa",
    description: "Experience unforgettable adventures, safaris, island tours and travel services with Mtoto Por Tours.",
  },
  {
    image: "/mtoto por images/new mtoto pot images/featured/lions-safari.jpg",
    title: "Discover Tanzania's Wildlife",
    description: "Premium safaris and exclusive island experiences await you in the heart of Africa",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.05,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('${slide.image}')` }} 
          />
          {/* Overlay - darker for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heroSlides[currentSlide].title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {heroSlides[currentSlide].description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Gold CTA button */}
            <Button
              asChild
              size="lg"
              className="bg-[#f7c43c] hover:bg-[#e5b234] text-[#1e3f23] font-bold px-8 py-6 text-lg rounded-md"
            >
              <Link href="/zanzibar-tours">Explore Tours</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1e3f23] font-semibold px-8 py-6 text-lg bg-transparent rounded-md"
            >
              <Link href="/contact-us">Book Your Tour</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-[#f7c43c] w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
