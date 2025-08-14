import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "exhibitions-events",
    locale as "en" | "ar",
    `/${locale}/services/exhibitions-events`
  );
}

export default function ExhibitionsEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
