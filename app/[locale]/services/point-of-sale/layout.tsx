import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "point-of-sale",
    locale as "en" | "ar",
    `/${locale}/services/point-of-sale`
  );
}

export default function PointOfSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
