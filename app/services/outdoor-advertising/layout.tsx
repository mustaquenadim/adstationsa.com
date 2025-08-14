import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Outdoor Advertising Services - Billboards & Promotional Panels",
  description:
    "Professional outdoor advertising services in Saudi Arabia. Get the best producers of project fencing panels, unipolar panels, wall panels, facade panels, and building roof panels through AdStation.",
  keywords: [
    "outdoor advertising saudi arabia",
    "billboard advertising",
    "promotional panels",
    "wall panels",
    "facade panels",
    "unipolar panels",
    "roof panels",
    "outdoor signage",
    "advertising panels riyadh",
    "outdoor marketing",
  ],
  url: "/services/outdoor-advertising",
  type: "website",
});

export default function OutdoorAdvertisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
