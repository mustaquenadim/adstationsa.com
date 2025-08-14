import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { QuoteDialogProvider } from "@/contexts/quote-dialog-context";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import {
  generateSEO,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const montserratArabic = localFont({
  src: [
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/ArbFONTS-Montserrat-Arabic-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat-arabic",
  display: "swap",
});

export const metadata: Metadata = generateSEO({
  title: "The First Saudi Platform for Advertising Services",
  description:
    "AdStation is a unified platform connecting top advertising agencies and companies in Saudi Arabia. Get professional advertising services including outdoor advertising, creative design, printing, exhibitions, and more.",
  keywords: [
    "advertising services saudi arabia",
    "saudi advertising platform",
    "outdoor advertising",
    "creative design services",
    "printing services",
    "exhibition services",
    "point of sale advertising",
    "billboard advertising saudi",
    "advertising agencies saudi arabia",
    "marketing services riyadh",
    "advertising solutions",
    "promotional services",
  ],
  url: "/",
  type: "website",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRTL = locale === "ar";

  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#8dc73f" />
        <meta name="msapplication-TileColor" content="#8dc73f" />
      </head>
      <body
        className={`${montserrat.variable} ${montserratArabic.variable} antialiased font-arabic`}
      >
        <QuoteDialogProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </QuoteDialogProvider>
      </body>
    </html>
  );
}
