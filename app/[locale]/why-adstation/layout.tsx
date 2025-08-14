import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "why-adstation",
    locale as "en" | "ar",
    `/${locale}/why-adstation`
  );
}

export default function WhyAdstationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
