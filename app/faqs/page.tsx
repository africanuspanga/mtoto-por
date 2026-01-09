"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    category: "Booking & Payments",
    questions: [
      {
        q: "Can I customize my package before booking?",
        a: "We understand that every traveler has unique preferences. We're happy to modify any package to suit your needs - whether it's adjusting the itinerary, changing accommodations, or adding special activities. Just let us know what you'd like, and we'll create the perfect experience for you.",
      },
      {
        q: "What is included in your packages?",
        a: "Our holiday packages typically include accommodation, meals (as specified), airport transfers, tours and excursions with professional guides, entrance fees to attractions, and transportation during tours. Specific inclusions vary by package, so please check the details or contact us for more information.",
      },
      {
        q: "Can I cancel my vacation package?",
        a: "Yes, you can cancel your booking. Depending on when you cancel, you may receive up to 100% refund based on our terms and conditions. Cancellations made 30+ days before arrival receive full refund, 15-29 days receive 50% refund, and less than 15 days may not be refundable. Please review our Payment Terms & Conditions for complete details.",
      },
      {
        q: "How do I make payment?",
        a: "We accept multiple payment methods for your convenience. All packages can be paid by credit/debit card (Visa, MasterCard, American Express). For day tours, you can also pay in cash (USD or local currency). We also accept bank transfers for advance bookings.",
      },
      {
        q: "Can I book a package and pay later?",
        a: "Yes! We offer a flexible payment option where you can secure your booking with a 50% deposit, and pay the remaining balance before your arrival. This allows you to plan ahead without paying the full amount upfront.",
      },
      {
        q: "How far in advance should I book my Zanzibar vacation?",
        a: "We recommend booking at least one week before your arrival to ensure availability and smooth arrangements. However, during peak seasons (July-September and December-February), we suggest booking 2-4 weeks in advance as hotels and tours fill up quickly.",
      },
    ],
  },
  {
    category: "Travel & Logistics",
    questions: [
      {
        q: "What is the best time to visit Zanzibar?",
        a: "The best time to visit Zanzibar is during the dry seasons: June to October (cool and dry) and December to mid-March (hot and dry). These periods offer ideal beach weather and perfect conditions for water activities. The long rains occur from March to May, and short rains from November to December.",
      },
      {
        q: "What are the direct flights to Zanzibar?",
        a: "Several airlines offer direct or convenient connections to Zanzibar including Qatar Airways, Turkish Airlines, Ethiopian Airlines, Edelweiss Air, FlyDubai, Neos Airlines, Blue Panorama, Kenya Airways, and Air Tanzania. Routes vary by season, so we recommend checking with airlines for current schedules.",
      },
      {
        q: "Do you provide airport transfers?",
        a: "Yes! All our packages include airport transfers. We meet you at Abeid Amani Karume International Airport with a sign bearing your name, and our air-conditioned vehicles will take you directly to your hotel. Return transfers to the airport are also included.",
      },
      {
        q: "Do your vehicles have air conditioning?",
        a: "Your comfort is our priority. All our tour vehicles are clean, well-maintained, and equipped with air conditioning. We also provide complimentary drinking water during all transfers and tours.",
      },
      {
        q: "Can I book a trip to Zanzibar today and arrive tomorrow?",
        a: "Yes, we can accommodate last-minute bookings! Contact us anytime via phone or WhatsApp, and we'll do our best to arrange everything for you. Just book your flight, and we'll take care of airport transfers, hotels, and activities.",
      },
    ],
  },
  {
    category: "Tours & Activities",
    questions: [
      {
        q: "What tours do you offer?",
        a: "We offer a wide variety of tours including Stone Town walking tours, Spice tours, Prison Island visits, Safari Blue (full-day snorkeling adventure), Jozani Forest (Red Colobus monkeys), sunset dhow cruises, dolphin tours, Mnemba Island snorkeling, and many more. We also arrange Tanzania mainland safaris to Serengeti, Ngorongoro, and other parks.",
      },
      {
        q: "Are your guides multilingual?",
        a: "Yes! Our team includes guides who speak English, Arabic, French, German, Polish, Spanish, and Swahili. When booking, please let us know your preferred language, and we'll assign an appropriate guide.",
      },
      {
        q: "Do you offer all-inclusive Zanzibar vacation packages?",
        a: "Yes, we offer comprehensive all-inclusive packages that cover accommodation, all meals, airport transfers, selected tours and activities, and more. These packages provide excellent value and a hassle-free experience. Contact us for current all-inclusive options.",
      },
      {
        q: "Can I combine Zanzibar tours with Tanzania safaris?",
        a: "Definitely! Many of our guests combine their Zanzibar beach holiday with Tanzania mainland safaris. We offer fly-in and drive-in safari options to Serengeti, Ngorongoro Crater, Tarangire, and other famous parks. This is the perfect way to experience the best of both worlds.",
      },
    ],
  },
  {
    category: "Health & Safety",
    questions: [
      {
        q: "Do you arrange COVID-19 tests?",
        a: "Yes, we can arrange transportation to authorized COVID-19 testing facilities in Zanzibar. We'll advise you on the latest requirements and help ensure you have the necessary documentation for your return journey.",
      },
      {
        q: "Is Zanzibar safe for tourists?",
        a: "Zanzibar is generally very safe for tourists. The local people are friendly and welcoming. However, as with any destination, we recommend standard precautions: keep valuables secure, avoid walking alone at night in unfamiliar areas, and respect local customs. Our team is always available to assist you during your stay.",
      },
      {
        q: "Do I need vaccinations to visit Zanzibar?",
        a: "Yellow fever vaccination is required if you're arriving from a country with risk of yellow fever transmission. We also recommend consulting your doctor about hepatitis A, typhoid, and malaria prophylaxis. Bring your vaccination certificate with you when traveling.",
      },
    ],
  },
  {
    category: "General Information",
    questions: [
      {
        q: "What should I know before visiting Zanzibar?",
        a: "Zanzibar is a predominantly Muslim island, so modest dress is appreciated, especially in Stone Town and villages. The local currency is Tanzanian Shilling, but USD is widely accepted. English is commonly spoken in tourist areas. Tap water is not recommended for drinking - stick to bottled water. And don't forget reef-safe sunscreen for marine activities!",
      },
      {
        q: "What currency should I bring?",
        a: "US Dollars are widely accepted and often preferred for tourist services. Euros and British Pounds can also be exchanged. ATMs are available in Stone Town and larger hotels. We recommend bringing some cash as not all places accept cards, especially in smaller establishments.",
      },
    ],
  },
]

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-br from-accent via-accent/95 to-accent">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span className="text-white/90 font-medium text-sm">Got Questions?</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-body">
              Find answers to common questions about booking your Zanzibar vacation with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full" />
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const itemId = `${categoryIndex}-${index}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border border-border rounded-xl overflow-hidden bg-card"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-muted-foreground font-body leading-relaxed border-t border-border pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20"
          >
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our friendly team is here to help you plan your perfect Zanzibar
              adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 text-lg bg-transparent"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=255777411991&text=Hello! I have a question about booking a tour."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
