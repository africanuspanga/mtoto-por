import type { Metadata } from "next"
import { safarisMetadata } from "@/app/metadata-config"

export const metadata: Metadata = safarisMetadata

export default function SafarisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
