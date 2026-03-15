import type { Metadata } from "next"
import { bookingMetadata } from "@/app/metadata-config"

export const metadata: Metadata = bookingMetadata

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
