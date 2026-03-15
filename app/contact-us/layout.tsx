import type { Metadata } from "next"
import { contactMetadata } from "@/app/metadata-config"

export const metadata: Metadata = contactMetadata

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
