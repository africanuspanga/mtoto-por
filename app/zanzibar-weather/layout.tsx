import type { Metadata } from "next"
import { weatherMetadata } from "@/app/metadata-config"

export const metadata: Metadata = weatherMetadata

export default function WeatherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
