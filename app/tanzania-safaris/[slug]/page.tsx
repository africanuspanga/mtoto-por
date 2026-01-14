import { safarisData } from "@/lib/safaris-data"
import { SafariDetailPageClient } from "./SafariDetailPageClient"

export function generateStaticParams() {
  return safarisData.map((safari) => ({
    slug: safari.slug,
  }))
}

export default function SafariDetailPage() {
  return <SafariDetailPageClient />
}
