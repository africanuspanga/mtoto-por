import type { Metadata } from "next"
import { packagesData } from "@/lib/packages-data"
import { PackageDetailPageClient } from "./page.client"

export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pkg = packagesData.find((p) => p.slug === params.slug)
  
  if (!pkg) {
    return {
      title: "Package Not Found | Mtoto Por Tours",
    }
  }
  
  const baseUrl = "https://www.mtotoportours.co.tz"
  
  return {
    title: `${pkg.title} | All-Inclusive Zanzibar Package`,
    description: pkg.summary,
    keywords: [
      pkg.title,
      "Zanzibar package",
      "Zanzibar vacation",
      "all inclusive Zanzibar",
      "Zanzibar holiday",
      "book Zanzibar package",
    ],
    alternates: {
      canonical: `${baseUrl}/packages/${pkg.slug}`,
    },
    openGraph: {
      title: `${pkg.title} | Zanzibar Package`,
      description: pkg.summary,
      url: `${baseUrl}/packages/${pkg.slug}`,
      type: "article",
      images: [
        {
          url: pkg.cardImage,
          alt: pkg.title,
        },
      ],
    },
  }
}

export default function PackageDetailPage() {
  return <PackageDetailPageClient />
}
