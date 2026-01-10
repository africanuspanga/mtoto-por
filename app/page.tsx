import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FullDayToursSection } from "@/components/homepage/full-day-tours-section"
import { HalfDayToursSection } from "@/components/homepage/half-day-tours-section"
import { SafarisSection } from "@/components/homepage/safaris-section"
import { PackagesSection } from "@/components/homepage/packages-section"
import { QuadBikingSection } from "@/components/homepage/quad-biking-section"
import { TransfersSection } from "@/components/homepage/transfers-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { RecommendedSection } from "@/components/recommended-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FullDayToursSection />
      <HalfDayToursSection />
      <SafarisSection />
      <PackagesSection />
      <QuadBikingSection />
      <TransfersSection />
      {/* End new sections */}
      <TestimonialsSection />
      <RecommendedSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
