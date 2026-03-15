import type { Metadata } from "next"
import { TourDetailPageClient } from "./page.client"
import { allTours, zanzibarTours } from "@/lib/tours-data"

export function generateStaticParams() {
  return allTours.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tour = zanzibarTours.find((t) => t.slug === params.slug)
  
  if (!tour) {
    return {
      title: "Tour Not Found | Mtoto Por Tours",
    }
  }
  
  const baseUrl = "https://www.mtotoportours.co.tz"
  
  return {
    title: `${tour.title} | Zanzibar Tour | Book Online`,
    description: tour.summary,
    keywords: [
      tour.title,
      "Zanzibar tour",
      ...tour.tags,
      "Zanzibar activities",
      "book Zanzibar tour",
    ],
    alternates: {
      canonical: `${baseUrl}/zanzibar-tours/${tour.slug}`,
    },
    openGraph: {
      title: `${tour.title} | Zanzibar Tour`,
      description: tour.summary,
      url: `${baseUrl}/zanzibar-tours/${tour.slug}`,
      type: "article",
      images: [
        {
          url: tour.cardImage,
          alt: tour.title,
        },
      ],
    },
  }
}

export default function TourDetailPage() {
  return <TourDetailPageClient />
}
