'use client';

import { getAnalyticsInstance } from './config';
import { logEvent, Analytics } from 'firebase/analytics';

let analytics: Analytics | null = null;

// Initialize analytics instance
export const initializeAnalytics = async () => {
  if (typeof window !== 'undefined') {
    analytics = await getAnalyticsInstance();
    return analytics;
  }
  return null;
};

// Track page views
export const trackPageView = async (page_title: string, page_location?: string) => {
  if (!analytics) {
    analytics = await initializeAnalytics();
  }
  
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title,
      page_location: page_location || window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = async (eventName: string, parameters?: Record<string, any>) => {
  if (!analytics) {
    analytics = await initializeAnalytics();
  }
  
  if (analytics) {
    logEvent(analytics, eventName, parameters);
  }
};

// Track quote requests
export const trackQuoteRequest = async (service: string, locale: string) => {
  trackEvent('quote_request', {
    service,
    locale,
    timestamp: new Date().toISOString(),
  });
};

// Track partner registration
export const trackPartnerRegistration = async (locale: string) => {
  trackEvent('partner_registration', {
    locale,
    timestamp: new Date().toISOString(),
  });
};

// Track form submissions
export const trackFormSubmission = async (formType: string, locale: string) => {
  trackEvent('form_submission', {
    form_type: formType,
    locale,
    timestamp: new Date().toISOString(),
  });
};

// Track navigation events
export const trackNavigation = async (destination: string, source: string) => {
  trackEvent('navigation', {
    destination,
    source,
    timestamp: new Date().toISOString(),
  });
};
