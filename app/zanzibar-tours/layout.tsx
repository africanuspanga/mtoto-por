import type { Metadata } from "next"
import { toursMetadata } from "@/app/metadata-config"

export const metadata: Metadata = toursMetadata

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
