"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    name: "Erik Johansen",
    text: "Mtoto Por Tours made our family vacation absolutely magical! From the moment we landed in Zanzibar, everything was perfectly arranged. The chimpanzee tracking in Gombe was a dream come true. Highly recommend their services!",
    rating: 5,
    country: "Norway",
    flag: "🇳🇴",
  },
  {
    name: "Sofie Larsen",
    text: "What an incredible experience with Mtoto Por Tours! We explored Stone Town, enjoyed spice tours, and relaxed on the most beautiful beaches. The team was professional, friendly, and made us feel like family. Tusinde tak!",
    rating: 5,
    country: "Denmark",
    flag: "🇩🇰",
  },
  {
    name: "Marco Rossi",
    text: "Bellissimo! Mtoto Por Tours organized our safari to Serengeti and it exceeded all expectations. Seeing the Big Five was amazing, and the guides were incredibly knowledgeable. The perfect mix of adventure and comfort.",
    rating: 5,
    country: "Italy",
    flag: "🇮🇹",
  },
  {
    name: "Jennifer Miller",
    text: "As an American traveling to East Africa for the first time, I was nervous. But Mtoto Por Tours took care of everything! From airport pickups to amazing tours, they made our honeymoon unforgettable. Thank you for the memories!",
    rating: 5,
    country: "United States",
    flag: "🇺🇸",
  },
  {
    name: "Yuki Tanaka",
    text: "Mtoto Por Tours provided exceptional service during our visit to Zanzibar. The attention to detail, the warm hospitality, and the beautiful locations made this trip one of our best ever. Arigato gozaimasu for everything!",
    rating: 5,
    country: "Japan",
    flag: "🇯🇵",
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("testimonials.badge")}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg font-body">{t("testimonials.description")}</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full bg-card p-8 rounded-2xl shadow-lg border border-border/50 relative"
              >
                <div className="absolute -top-4 left-8">
                  <div className="bg-primary p-3 rounded-full">
                    <Quote className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex gap-1 mb-4 pt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground font-body leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{testimonial.flag}</span>
                    <div>
                      <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground font-body">{testimonial.country}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
