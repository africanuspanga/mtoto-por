"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TopBar } from "@/components/top-bar"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Tours", href: "/zanzibar-tours" },
  { label: "Safaris", href: "/tanzania-safaris" },
  { label: "Car Rental", href: "/transfers" },
  { label: "Contact Us", href: "/contact-us" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "translate-y-[-100%] md:translate-y-0" : ""}`}
      >
        <TopBar />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "top-0 bg-background/95 backdrop-blur-md shadow-lg" : "top-0 md:top-10 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" onClick={handleNavClick} className="flex-shrink-0">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image
                  src="/mtoto por images/mtoto-por logo.png"
                  alt="Mtoto Por Tours"
                  width={200}
                  height={90}
                  className="h-16 md:h-20 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={`px-3 py-2 text-base font-semibold transition-colors hover:text-primary ${
                      isScrolled ? "text-foreground" : "text-white"
                    } ${pathname === item.href ? "text-primary" : ""}`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side - CTA only */}
            <div className="hidden xl:flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  className="bg-[#f7c43c] hover:bg-[#e5b234] text-[#1e3f23] font-bold px-6"
                >
                  <Link href="/contact-us" onClick={handleNavClick}>
                    Book Your Tour
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 xl:hidden pt-24 bg-background overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={`block py-3 text-lg font-medium hover:text-primary border-b border-border ${
                      pathname === item.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Book Tour Button */}
              <Button
                asChild
                className="w-full bg-[#f7c43c] hover:bg-[#e5b234] text-[#1e3f23] font-bold py-6 text-lg"
              >
                <Link href="/contact-us" onClick={handleNavClick}>
                  Book Your Tour
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
