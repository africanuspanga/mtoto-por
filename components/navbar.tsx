"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { TopBar } from "@/components/top-bar"

const navItems = [
  { key: "nav.home", href: "/" },
  { key: "nav.about-us", href: "/about-us" },
  { key: "nav.about-zanzibar", href: "/about-zanzibar" },
  { key: "nav.zanzibar-tours", href: "/zanzibar-tours" },
  { key: "nav.tanzania-safaris", href: "/tanzania-safaris" },
  { key: "nav.packages", href: "/packages" },
  { key: "nav.transfers", href: "/transfers" },
  { key: "nav.contact-us", href: "/contact-us" },
]

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "pl", name: "Polish", flag: "🇵🇱" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
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

  const currentLangData = languages.find((l) => l.code === language) || languages[0]

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
                  src="/images/logo-new.png"
                  alt="Zanzibar Exclusive Tours & Safaris"
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
                  key={item.key}
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
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side - Language & CTA */}
            <div className="hidden xl:flex items-center gap-4">
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`gap-2 ${isScrolled ? "text-foreground" : "text-white"}`}
                  >
                    <Globe className="h-4 w-4" />
                    <span>{currentLangData.flag}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className="cursor-pointer">
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                      {language === lang.code && <span className="ml-auto text-primary">✓</span>}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Book Tour Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                  <Link href="/contact-us" onClick={handleNavClick}>
                    {t("nav.book")}
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
                  key={item.key}
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
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Language Selector */}
              <div className="py-4">
                <p className="text-sm text-muted-foreground mb-3">Select Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                        language === lang.code
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Book Tour Button */}
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
              >
                <Link href="/contact-us" onClick={handleNavClick}>
                  {t("nav.book")}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
