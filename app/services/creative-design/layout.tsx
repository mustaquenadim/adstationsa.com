import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Creative Design Services - Logo & Product Design",
  description:
    "Professional creative design services for products and applications. Get expert logo design, product design, and branding solutions from experienced agencies through AdStation.",
  keywords: [
    "creative design services",
    "logo design saudi arabia",
    "product design",
    "branding services",
    "graphic design",
    "visual identity",
    "brand development",
    "design agencies saudi",
    "creative solutions",
    "marketing design",
  ],
  url: "/services/creative-design",
  type: "website",
});

export default function CreativeDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
