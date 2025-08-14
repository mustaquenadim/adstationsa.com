import { Metadata } from "next";
import { generateMetadataFromConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateMetadataFromConfig(
    "join-us",
    locale as "en" | "ar",
    `/${locale}/join-us`
  );
}

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
