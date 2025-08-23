"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initializeAnalytics, trackPageView } from "@/lib/firebase/analytics";

export default function FirebaseAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const initAndTrack = async () => {
      try {
        // Initialize Firebase Analytics on the client side
        const analytics = await initializeAnalytics();
        if (analytics) {
          console.log("✅ Firebase Analytics initialized successfully");

          // Track initial page view
          await trackPageView(document.title);
        } else {
          console.warn(
            "⚠️ Firebase Analytics could not be initialized (likely due to server-side rendering or ad blockers)"
          );
        }
      } catch (error) {
        console.error("❌ Error initializing Firebase Analytics:", error);
      }
    };

    // Only run on client side
    if (typeof window !== "undefined") {
      initAndTrack();
    }
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      trackPageView(document.title);
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}
