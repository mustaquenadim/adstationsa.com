import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Our Services - 70+ Professional Advertising Services",
  description:
    "Explore over 70 advertising services at AdStation. From creative design and outdoor advertising to printing services, exhibitions, and point of sale solutions. Professional advertising services in Saudi Arabia.",
  keywords: [
    "advertising services",
    "outdoor advertising saudi arabia",
    "creative design services",
    "printing services riyadh",
    "exhibition services",
    "point of sale advertising",
    "billboard advertising",
    "signage services",
    "promotional materials",
    "advertising solutions saudi",
  ],
  url: "/services",
  type: "website",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
