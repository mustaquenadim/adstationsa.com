import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { QuoteDialogProvider } from "@/contexts/quote-dialog-context";

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

export const metadata: Metadata = {
  title: "Adstation",
  description: "Adstation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratArabic.variable} antialiased font-arabic`}
      >
        <QuoteDialogProvider>
          <Header />
          <main className="">{children}</main>
          <Footer />
        </QuoteDialogProvider>
      </body>
    </html>
  );
}
