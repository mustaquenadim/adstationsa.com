import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Advertising Campaigns - Strategic Marketing Solutions",
  description:
    "Comprehensive advertising campaign services in Saudi Arabia. Get strategic marketing solutions, campaign planning, and execution from top advertising agencies through AdStation.",
  keywords: [
    "advertising campaigns saudi arabia",
    "marketing campaigns",
    "advertising strategy",
    "campaign management",
    "digital campaigns",
    "traditional advertising",
    "marketing strategy",
    "brand campaigns",
    "promotional campaigns",
    "integrated marketing",
  ],
  url: "/services/advertising-campaigns",
  type: "website",
});

export default function AdvertisingCampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
