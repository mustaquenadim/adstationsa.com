import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "creative-design",
    locale as "en" | "ar",
    `/${locale}/services/creative-design`
  );
}

export default function CreativeDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
