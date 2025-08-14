/**
 * SEO Types and Interfaces
 * Centralized type definitions for SEO functionality
 */

// Core SEO interfaces
export interface BaseSEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  url?: string;
  image?: string;
}

export interface LocalizedSEOConfig {
  en: BaseSEOConfig;
  ar: BaseSEOConfig;
}

export interface SEOGeneratorProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: string;
  alternates?: Record<string, string>;
}

// Schema.org structured data types
export interface OrganizationSchema {
  '@context': string;
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': 'PostalAddress';
    addressCountry: string;
    addressRegion: string;
  };
  contactPoint: {
    '@type': 'ContactPoint';
    contactType: string;
    availableLanguage: string[];
  };
  sameAs: string[];
}

export interface WebsiteSchema {
  '@context': string;
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  publisher: {
    '@type': 'Organization';
    name: string;
  };
  potentialAction: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
  inLanguage: string[];
}

export interface ServiceSchema {
  '@context': string;
  '@type': 'Service';
  name: string;
  description: string;
  url: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  areaServed: {
    '@type': 'Country';
    name: string;
  };
  availableLanguage: string[];
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

// Page metadata configuration
export interface PageSEOConfig {
  pageKey: string;
  seoConfig: LocalizedSEOConfig;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  schema?: {
    service?: {
      name: string;
      description: string;
      url: string;
    };
    faq?: Array<{
      question: string;
      answer: string;
    }>;
  };
}

// SEO validation types
export interface SEOValidationResult {
  isValid: boolean;
  message: string;
  score?: number;
}

export interface KeywordAnalysis {
  keyword: string;
  density: number;
  isOptimal: boolean;
  recommendations?: string[];
}

// Configuration constants
export const SEO_CONSTANTS = {
  SITE_NAME: 'AdStation',
  SITE_URL: 'https://adstationsa.com',
  DEFAULT_IMAGE: '/hero-logo.svg',
  TITLE_MAX_LENGTH: 60,
  DESCRIPTION_MAX_LENGTH: 160,
  OPTIMAL_KEYWORD_DENSITY: { min: 1, max: 3 },
  SOCIAL_MEDIA: {
    facebook: 'https://facebook.com/adstationsa',
    twitter: 'https://twitter.com/adstationsa',
    instagram: 'https://instagram.com/adstationsa',
    linkedin: 'https://linkedin.com/company/adstationsa'
  }
} as const;

export type SupportedLocale = 'en' | 'ar';
export type PageType = 'home' | 'about' | 'services' | 'contact' | 'service-detail';
