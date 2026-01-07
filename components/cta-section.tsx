"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Start Your Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mt-4 mb-6 text-balance"
          >
            Ready for Your Zanzibar Adventure?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent-foreground/80 text-lg md:text-xl font-body mb-10"
          >
            Let us take care of the details so you can focus on enjoying your journey. Contact us today to plan your
            perfect getaway!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                Book Your Tour
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/zanzibar-tours">View All Tours</Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-accent-foreground/80"
          >
            <a href="tel:+255777411991" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-body">+255 777 411 991</span>
            </a>
            <span className="hidden sm:block text-accent-foreground/30">|</span>
            <a
              href="mailto:info@zanzibarexclusivetours.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-body">info@zanzibarexclusivetours.com</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
