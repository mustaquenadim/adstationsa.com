import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "printing",
    locale as "en" | "ar",
    `/${locale}/services/printing`
  );
}

export default function PrintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
