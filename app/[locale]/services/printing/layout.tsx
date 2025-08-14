import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Printing Services - Professional Printing Solutions",
  description:
    "High-quality printing services for all your advertising and marketing needs. Get professional printing solutions from top printing companies in Saudi Arabia through AdStation.",
  keywords: [
    "printing services saudi arabia",
    "commercial printing",
    "advertising printing",
    "large format printing",
    "digital printing",
    "offset printing",
    "promotional printing",
    "marketing materials printing",
    "banner printing",
    "brochure printing",
  ],
  url: "/services/printing",
  type: "website",
});

export default function PrintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
