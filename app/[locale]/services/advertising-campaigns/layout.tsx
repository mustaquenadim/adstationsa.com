import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "advertising-campaigns",
    locale as "en" | "ar",
    `/${locale}/services/advertising-campaigns`
  );
}

export default function AdvertisingCampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
