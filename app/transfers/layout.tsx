import type { Metadata } from "next"
import { transfersMetadata } from "@/app/metadata-config"

export const metadata: Metadata = transfersMetadata

export default function TransfersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
