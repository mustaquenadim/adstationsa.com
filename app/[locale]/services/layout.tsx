import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "services",
    locale as "en" | "ar",
    `/${locale}/services`
  );
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
