import type { Metadata } from "next"
import { safarisData, safariPackages } from "@/lib/safaris-data"
import { SafariDetailPageClient } from "./SafariDetailPageClient"

export function generateStaticParams() {
  return safarisData.map((safari) => ({
    slug: safari.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const safari = safariPackages.find((s) => s.slug === slug)
  
  if (!safari) {
    return {
      title: "Safari Not Found | Mtoto Por Tours",
    }
  }
  
  const baseUrl = "https://www.mtotoportours.co.tz"
  
  return {
    title: `${safari.title} | Tanzania Safari | Book Online`,
    description: safari.summary,
    keywords: [
      safari.title,
      "Tanzania safari",
      safari.location,
      "safari from Zanzibar",
      "book safari",
      ...safari.wildlife.slice(0, 5),
    ],
    alternates: {
      canonical: `${baseUrl}/tanzania-safaris/${safari.slug}`,
    },
    openGraph: {
      title: `${safari.title} | Tanzania Safari`,
      description: safari.summary,
      url: `${baseUrl}/tanzania-safaris/${safari.slug}`,
      type: "article",
      images: [
        {
          url: safari.cardImage,
          alt: safari.title,
        },
      ],
    },
  }
}

export default function SafariDetailPage() {
  return <SafariDetailPageClient />
}
