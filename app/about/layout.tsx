import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "About Us - The Smart Future of Traditional Advertising",
  description:
    "Learn about AdStation, the first Saudi platform to bring together the best traditional advertising service providers under one digital roof. Discover our mission to make advertising simpler and faster.",
  keywords: [
    "about adstation",
    "saudi advertising platform",
    "advertising company saudi arabia",
    "traditional advertising",
    "digital advertising platform",
    "advertising agencies saudi",
    "advertising services provider",
    "marketing solutions saudi arabia",
  ],
  url: "/about",
  type: "website",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
