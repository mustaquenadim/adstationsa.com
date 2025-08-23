import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { QuoteDialogProvider } from "@/contexts/quote-dialog-context";
import {
  combineSchemas,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo";
import { Be_Vietnam_Pro } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/sonner";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserratArabic = localFont({
  src: [
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArbFONTS-Montserrat-Arabic-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat-arabic",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();
  const isRTL = locale === "ar";

  const organizationSchema = generateOrganizationSchema(locale as "en" | "ar");
  const websiteSchema = generateWebsiteSchema(locale as "en" | "ar");

  // Combine schemas for better performance
  const combinedSchema = combineSchemas([organizationSchema, websiteSchema]);

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#8dc73f" />
        <meta name="msapplication-TileColor" content="#8dc73f" />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: combinedSchema,
          }}
          suppressHydrationWarning
        /> */}

        {/* Arabic SEO specific meta tags */}
        {isRTL && (
          <>
            <meta name="content-language" content="ar" />
            <meta name="language" content="Arabic" />
            <meta name="geo.region" content="SA" />
            <meta name="geo.country" content="Saudi Arabia" />
            <meta name="geo.placename" content="المملكة العربية السعودية" />
          </>
        )}

        {/* Hreflang links for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://adstationsa.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://adstationsa.com/ar" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://adstationsa.com/en"
        />
      </head>

      <body
        className={`${beVietnamPro.variable} ${
          montserratArabic.variable
        } antialiased ${isRTL ? "font-arabic" : "font-english"}`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <QuoteDialogProvider>
            <Header />
            <main className="">{children}</main>
            <Footer />
          </QuoteDialogProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
