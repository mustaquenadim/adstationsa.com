import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Why Choose AdStation - Your Advertising Partner",
  description:
    "Discover why AdStation is your ideal advertising partner that saves you time, effort, and cost. Learn about our benefits and how we simplify your advertising experience in Saudi Arabia.",
  keywords: [
    "why choose adstation",
    "advertising benefits",
    "advertising partner saudi",
    "cost effective advertising",
    "advertising platform benefits",
    "professional advertising services",
    "advertising solutions",
    "marketing efficiency",
    "advertising agencies network",
    "business advertising",
  ],
  url: "/why-adstation",
  type: "website",
});

export default function WhyAdstationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
