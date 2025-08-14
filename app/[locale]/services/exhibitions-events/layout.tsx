import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Exhibitions & Events Services - Professional Event Solutions",
  description:
    "Professional exhibition and event services in Saudi Arabia. Get complete event management, exhibition design, and event marketing solutions through AdStation's network of expert agencies.",
  keywords: [
    "exhibition services saudi arabia",
    "event management",
    "exhibition design",
    "trade show services",
    "event marketing",
    "conference services",
    "exhibition stands",
    "event planning",
    "corporate events",
    "exhibition booth design",
  ],
  url: "/services/exhibitions-events",
  type: "website",
});

export default function ExhibitionsEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
