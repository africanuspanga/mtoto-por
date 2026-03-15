import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Terms of Service | Mtoto Por Tours",
  description: "Terms of Service for Mtoto Por Tours - Read our booking conditions and policies.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/80 font-body text-lg">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-body">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using the services of Mtoto Por Tours, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Booking and Reservations</h2>
            <p className="text-muted-foreground mb-4">When making a booking with us:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>All bookings are subject to availability</li>
              <li>A deposit may be required to confirm your reservation</li>
              <li>Full payment is typically required before the tour date</li>
              <li>Booking confirmations will be sent via email</li>
              <li>Please verify all details upon receiving your confirmation</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Pricing and Payment</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>All prices are quoted in USD unless otherwise stated</li>
              <li>We accept major credit cards (Visa, MasterCard, American Express)</li>
              <li>Prices are subject to change without notice until booking is confirmed</li>
              <li>Additional charges may apply for special requests or modifications</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Cancellation Policy</h2>
            <p className="text-muted-foreground mb-4">Our cancellation policy is as follows:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Cancellations made 14+ days before: Full refund minus processing fees</li>
              <li>Cancellations made 7-13 days before: 50% refund</li>
              <li>Cancellations made less than 7 days before: No refund</li>
              <li>No-shows: No refund</li>
              <li>We reserve the right to cancel tours due to unforeseen circumstances with full refund</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Tour Modifications</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify tour itineraries due to weather conditions, safety concerns, or other
              unforeseen circumstances. We will make every effort to provide suitable alternatives and notify you of any
              changes as soon as possible.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Health and Safety</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Participants must disclose any medical conditions that may affect their participation</li>
              <li>Travel insurance is strongly recommended for all travelers</li>
              <li>Participants must follow safety instructions provided by guides</li>
              <li>We are not responsible for personal belongings during tours</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Liability Limitations</h2>
            <p className="text-muted-foreground mb-6">
              Mtoto Por Tours shall not be liable for any loss, injury, or damage to persons,
              property, or belongings arising from participation in our tours, except where caused by our negligence. We
              strongly recommend purchasing comprehensive travel insurance.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Travel Documents</h2>
            <p className="text-muted-foreground mb-6">
              Clients are responsible for ensuring they have valid passports, visas, and any required travel documents.
              We are not responsible for denied entry due to improper documentation.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Photography and Media</h2>
            <p className="text-muted-foreground mb-6">
              By participating in our tours, you grant us permission to use photographs and videos taken during the tour
              for promotional purposes, unless you notify us otherwise in writing.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms shall be governed by and construed in accordance with the laws of the United Republic of
              Tanzania. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of
              Tanzanian courts.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground mb-4">For questions about these terms, please contact us:</p>
            <ul className="list-none text-muted-foreground mb-6 space-y-2">
              <li>
                <strong>Email:</strong> mtotoportours@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +255 717 079 200
              </li>
              <li>
                <strong>Address:</strong> Jumbi - Zanzibar, P.O.Box 2731, Tanzania
              </li>
              <li>
                <strong>Website:</strong> www.mtotopor.com
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
