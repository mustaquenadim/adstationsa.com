"use client";

import { useEffect } from "react";

export default function DebugFirebaseConfig() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("🔍 Debug Firebase Environment Variables:");
      console.log(
        "NEXT_PUBLIC_FIREBASE_PROJECT_ID:",
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
      );
      console.log(
        "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:",
        process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
      );
      console.log("Has API Key:", !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
      console.log("Has App ID:", !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID);
    }
  }, []);

  return (
    <div style={{ display: "none" }}>
      Debug component - check console for Firebase config
    </div>
  );
}
