import type { Metadata } from "next"
import { aboutZanzibarMetadata } from "@/app/metadata-config"

export const metadata: Metadata = aboutZanzibarMetadata

export default function AboutZanzibarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
