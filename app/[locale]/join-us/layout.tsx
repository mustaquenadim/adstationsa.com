import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Become Our Partner - Join AdStation Network",
  description:
    "Join the AdStation network and become our partner. Connect with businesses looking for advertising services and grow your agency through our professional platform in Saudi Arabia.",
  keywords: [
    "join adstation",
    "become partner",
    "advertising agency partnership",
    "partner registration",
    "advertising network",
    "agency partnership saudi",
    "advertising services provider",
    "business partnership",
    "marketing agency network",
    "advertising opportunities",
  ],
  url: "/join-us",
  type: "website",
});

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
