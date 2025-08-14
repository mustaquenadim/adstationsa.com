import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "outdoor-advertising",
    locale as "en" | "ar",
    `/${locale}/services/outdoor-advertising`
  );
}

export default function OutdoorAdvertisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
