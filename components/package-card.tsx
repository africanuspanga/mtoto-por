"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PackageData } from "@/lib/packages-data"

interface PackageCardProps {
  pkg: PackageData
  index: number
}

export function PackageCard({ pkg, index }: PackageCardProps) {
  const whatsappNumber = "255777411991"
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${pkg.title}. Can you provide more information?`,
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={pkg.cardImage || "/placeholder.svg"}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {pkg.price && (
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-lg">
              {pkg.price}
            </span>
          </div>
        )}

        {/* Title on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">{pkg.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground font-body leading-relaxed mb-6 line-clamp-3">{pkg.summary}</p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link href={`/packages/${pkg.slug}`} className="w-full">
            <Button
              variant="outline"
              className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>

          <div className="flex gap-3">
            <Link href="/booking" className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Book Now</Button>
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button
                variant="outline"
                className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
              >
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
