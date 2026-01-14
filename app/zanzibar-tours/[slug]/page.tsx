import { TourDetailPageClient } from "./page.client"
import { allTours } from "@/lib/tours-data"

export function generateStaticParams() {
  return allTours.map((tour) => ({
    slug: tour.slug,
  }))
}

export default function TourDetailPage() {
  return <TourDetailPageClient />
}
