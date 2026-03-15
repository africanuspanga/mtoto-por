import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Privacy Policy | Mtoto Por Tours",
  description:
    "Privacy Policy for Mtoto Por Tours - Learn how we protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/80 font-body text-lg">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-body">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-6">
              Welcome to Mtoto Por Tours. We respect your privacy and are committed to protecting
              your personal data. This privacy policy will inform you about how we look after your personal data when
              you visit our website and tell you about your privacy rights.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Travel preferences and booking details</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication records (emails, messages, inquiries)</li>
              <li>Website usage data (cookies, analytics)</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use your personal information to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Process and manage your tour bookings</li>
              <li>Communicate with you about your reservations</li>
              <li>Send you relevant travel information and updates</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational security measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. All payment transactions are
              encrypted using SSL technology.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground mb-6">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was
              collected, including satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request transfer of your data</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Our website uses cookies to enhance your browsing experience. You can set your browser to refuse all or
              some browser cookies. However, if you disable cookies, some parts of our website may become inaccessible
              or not function properly.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground mb-6">
              Our website may include links to third-party websites. We do not control these websites and are not
              responsible for their privacy practices. We encourage you to read the privacy policy of every website you
              visit.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us:
            </p>
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
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this policy periodically.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
