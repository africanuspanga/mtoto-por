import type { Metadata } from "next"
import { faqsMetadata } from "@/app/metadata-config"

export const metadata: Metadata = faqsMetadata

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
