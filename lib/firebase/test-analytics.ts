// Test Firebase Analytics configuration
// This script can be used to verify Firebase Analytics is working

import { getAnalyticsInstance } from '@/lib/firebase/config';

export const testFirebaseAnalytics = async () => {
  try {
    console.log('Testing Firebase Analytics configuration...');
    
    // Check environment variables (client-side access)
    const envVars = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    };

    const missingVars = Object.entries(envVars)
      .filter(([key, value]) => !value)
      .map(([key]) => `NEXT_PUBLIC_FIREBASE_${key.toUpperCase().replace(/([A-Z])/g, '_$1').replace(/^_/, '')}`);
    
    if (missingVars.length > 0) {
      console.error('Missing environment variables:', missingVars);
      console.log('Current environment variables:', envVars);
      return false;
    }

    console.log('✅ All required environment variables are present');

    // Test Firebase Analytics initialization
    if (typeof window !== 'undefined') {
      const analytics = await getAnalyticsInstance();
      
      if (analytics) {
        console.log('✅ Firebase Analytics initialized successfully');
        return true;
      } else {
        console.error('❌ Firebase Analytics failed to initialize');
        return false;
      }
    } else {
      console.log('⚠️ Running in server environment, cannot test analytics initialization');
      return true;
    }
  } catch (error) {
    console.error('❌ Firebase Analytics test failed:', error);
    return false;
  }
};

// Log configuration (without sensitive data)
export const logFirebaseConfig = () => {
  if (typeof window !== 'undefined') {
    console.log('Firebase Configuration:', {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      hasApiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      hasAppId: !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    });
  }
};
