"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Enoch Jenny",
    text: "We went on multiple tours during our honeymoon. Musa was informative, professional, and friendly. From the spice tour to Stone Town and sunset sailing, every day was full of cherished memories. We can't wait to return!",
    rating: 5,
    country: "United States",
    flag: "🇺🇸",
  },
  {
    name: "F C Alvarez",
    text: "They picked us up and took us everywhere - shopping, sites, even Freddie Mercury's birthplace. They speak excellent English and explained everything in Swahili too. Most were greetings and welcomes. I love them!",
    rating: 5,
    country: "Spain",
    flag: "🇪🇸",
  },
  {
    name: "Dave Conrod",
    text: "Being from Western Canada, we had little experience in East Africa. Mr. Mussa Shaaban was highly knowledgeable, professional, polite, patient with a good sense of humor. Our Stone Town tour was well done and informative.",
    rating: 5,
    country: "Canada",
    flag: "🇨🇦",
  },
  {
    name: "Mapula Phoko",
    text: "Thank you Zanzibar Exclusive Tours. They are professional, patient and punctual. From the time we landed at the airport through their transfers to and from the hotel - exceptional service throughout!",
    rating: 5,
    country: "South Africa",
    flag: "🇿🇦",
  },
]

export function TestimonialsSection() {
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Real experiences from travelers who trusted us with their Zanzibar adventures.
          </p>
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
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-primary p-3 rounded-full">
                    <Quote className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground font-body leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Name with Flag */}
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
