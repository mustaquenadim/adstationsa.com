"use client";

import { useEffect } from "react";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import {
  getAnalytics,
  Analytics,
  logEvent,
  isSupported,
} from "firebase/analytics";

let analyticsInstance: Analytics | null = null;
let firebaseApp: FirebaseApp | null = null;

const initializeFirebase = () => {
  // Only run on client side
  if (typeof window === "undefined") return null;

  if (firebaseApp) return firebaseApp;

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  console.log("🔥 Firebase Config Debug:", {
    hasApiKey: !!firebaseConfig.apiKey,
    hasAuthDomain: !!firebaseConfig.authDomain,
    hasProjectId: !!firebaseConfig.projectId,
    hasStorageBucket: !!firebaseConfig.storageBucket,
    hasMessagingSenderId: !!firebaseConfig.messagingSenderId,
    hasAppId: !!firebaseConfig.appId,
    hasMeasurementId: !!firebaseConfig.measurementId,
    projectId: firebaseConfig.projectId,
    measurementId: firebaseConfig.measurementId,
  });

  // Check for missing config
  const missingKeys = Object.entries(firebaseConfig)
    .filter(([key, value]) => !value)
    .map(([key]) => key);

  if (missingKeys.length > 0) {
    console.error("❌ Missing Firebase config keys:", missingKeys);
    return null;
  }

  try {
    firebaseApp =
      getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    console.log("✅ Firebase app initialized successfully");
    return firebaseApp;
  } catch (error) {
    console.error("❌ Failed to initialize Firebase app:", error);
    return null;
  }
};

const initializeFirebaseAnalytics = async () => {
  if (typeof window === "undefined") return null;
  if (analyticsInstance) return analyticsInstance;

  const app = initializeFirebase();
  if (!app) return null;

  try {
    const supported = await isSupported();
    if (!supported) {
      console.warn(
        "⚠️ Firebase Analytics is not supported in this environment"
      );
      return null;
    }

    analyticsInstance = getAnalytics(app);
    console.log("✅ Firebase Analytics initialized successfully");
    return analyticsInstance;
  } catch (error) {
    console.error("❌ Failed to initialize Firebase Analytics:", error);
    return null;
  }
};

export const trackPageView = async (page_title: string) => {
  const analytics = await initializeFirebaseAnalytics();
  if (analytics) {
    logEvent(analytics, "page_view", {
      page_title,
      page_location: window.location.href,
    });
    console.log("📊 Page view tracked:", page_title);
  }
};

export const trackEvent = async (
  eventName: string,
  parameters?: Record<string, any>
) => {
  const analytics = await initializeFirebaseAnalytics();
  if (analytics) {
    logEvent(analytics, eventName, parameters);
    console.log("📊 Event tracked:", eventName, parameters);
  }
};

export default function SimpleFirebaseAnalytics() {
  useEffect(() => {
    const init = async () => {
      const analytics = await initializeFirebaseAnalytics();
      if (analytics) {
        await trackPageView(document.title);
      }
    };

    init();
  }, []);

  return null;
}
