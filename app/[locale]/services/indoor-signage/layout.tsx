import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Indoor Signage Services - Interior Advertising Solutions",
  description:
    "Professional indoor signage and interior advertising solutions. Get high-quality indoor signs, wayfinding systems, and interior branding solutions for your business in Saudi Arabia.",
  keywords: [
    "indoor signage saudi arabia",
    "interior signage",
    "wayfinding systems",
    "office signage",
    "retail signage",
    "interior branding",
    "directional signs",
    "wall graphics",
    "indoor advertising",
    "corporate signage",
  ],
  url: "/services/indoor-signage",
  type: "website",
});

export default function IndoorSignageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
