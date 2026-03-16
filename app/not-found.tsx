"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Compass, Home, Map, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e8f5e9] to-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <span className="text-9xl sm:text-[180px] font-bold text-[#1e3f23]/10">404</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <Compass className="w-20 h-20 sm:w-32 sm:h-32 text-[#1e3f23]" />
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3f23] mb-4">
              Page Not Found
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              Oops! Looks like you&apos;ve wandered off the beaten path. 
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <p className="text-gray-500 mb-10">
              But don&apos;t worry - we&apos;ll help you find your way back to adventure!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10"
          >
            <Link
              href="/"
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#1e3f23]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1e3f23] transition-colors">
                <Home className="w-6 h-6 text-[#1e3f23] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#1e3f23] mb-1">Homepage</h3>
              <p className="text-sm text-gray-500">Start fresh</p>
            </Link>

            <Link
              href="/tanzania-safaris"
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#1e3f23]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1e3f23] transition-colors">
                <Map className="w-6 h-6 text-[#1e3f23] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#1e3f23] mb-1">Safari Tours</h3>
              <p className="text-sm text-gray-500">Wild adventures</p>
            </Link>

            <Link
              href="/zanzibar-tours"
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#1e3f23]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1e3f23] transition-colors">
                <Calendar className="w-6 h-6 text-[#1e3f23] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-[#1e3f23] mb-1">Zanzibar Tours</h3>
              <p className="text-sm text-gray-500">Island paradise</p>
            </Link>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#1e3f23] hover:bg-[#2d5a35] text-white px-8"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Return to Homepage
              </Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 mb-2">Need help finding something?</p>
            <a
              href="https://wa.me/255717079200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e3f23] font-medium hover:underline"
            >
              Contact us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
