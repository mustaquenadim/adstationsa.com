import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "indoor-signage",
    locale as "en" | "ar",
    `/${locale}/services/indoor-signage`
  );
}

export default function IndoorSignageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
