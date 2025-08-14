import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Point of Sale Solutions - Product Display & Retail Solutions",
  description:
    "Professional point of sale production and display solutions. Partner with AdStation to deliver display solutions for grocery stores, supermarkets, and retail outlets in Saudi Arabia.",
  keywords: [
    "point of sale solutions",
    "retail display",
    "product display",
    "pos materials",
    "retail signage",
    "store displays",
    "supermarket displays",
    "promotional displays",
    "retail marketing",
    "in-store advertising",
  ],
  url: "/services/point-of-sale",
  type: "website",
});

export default function PointOfSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
