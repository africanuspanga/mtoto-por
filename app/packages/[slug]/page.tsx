import { packagesData } from "@/lib/packages-data"
import { PackageDetailPageClient } from "./page.client"

export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }))
}

export default function PackageDetailPage() {
  return <PackageDetailPageClient />
}
