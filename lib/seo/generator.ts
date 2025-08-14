/**
 * Core SEO Generator
 * Main SEO metadata generation functionality
 */

import { Metadata } from 'next';
import {
  SEOGeneratorProps,
  SupportedLocale,
  SEO_CONSTANTS
} from './types';

/**
 * Generate comprehensive SEO metadata
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  image = SEO_CONSTANTS.DEFAULT_IMAGE,
  url,
  type = 'website',
  locale = 'en',
  alternates = {}
}: SEOGeneratorProps = {}): Metadata {
  const isArabic = locale === 'ar';
  
  // Default content based on locale
  const defaultTitle = isArabic 
    ? 'أدستيشن - أول منصة سعودية لخدمات الإعلان'
    : 'AdStation - The First Saudi Platform for Advertising Services';
  
  const defaultDescription = isArabic
    ? 'أدستيشن هي منصة موحدة تربط أفضل وكالات الإعلان والشركات في المملكة العربية السعودية. احصل على خدمات إعلانية احترافية تشمل الإعلان الخارجي والتصميم الإبداعي والطباعة والمعارض والمزيد.'
    : 'AdStation is a unified platform connecting top advertising agencies and companies in Saudi Arabia. Get professional advertising services including outdoor advertising, creative design, printing, exhibitions, and more.';
  
  const defaultKeywords = isArabic ? [
    'خدمات الإعلان',
    'الإعلان في السعودية',
    'الإعلان الخارجي',
    'التصميم الإبداعي',
    'خدمات الطباعة',
    'المعارض والفعاليات',
    'نقطة البيع',
    'وكالات الإعلان',
    'إعلانات اللوحات',
    'الإعلان الرقمي',
    'خدمات التسويق',
    'منصة الإعلان',
    'شركات الإعلان السعودية',
    'حلول الإعلان',
    'الخدمات الترويجية',
    'أدستيشن',
    'إعلانات الرياض',
    'إعلانات جدة',
    'إعلانات الدمام',
    'التسويق السعودي'
  ] : [
    'advertising services',
    'saudi arabia advertising',
    'outdoor advertising',
    'creative design',
    'printing services',
    'exhibitions events',
    'point of sale',
    'advertising agencies',
    'billboard advertising',
    'digital advertising',
    'marketing services',
    'advertising platform',
    'saudi advertising companies',
    'advertising solutions',
    'promotional services'
  ];

  // Build SEO values
  const seoTitle = title ? `${title} | ${SEO_CONSTANTS.SITE_NAME}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = [...keywords, ...defaultKeywords];
  const seoImage = image.startsWith('http') ? image : `${SEO_CONSTANTS.SITE_URL}${image}`;
  const seoUrl = url ? `${SEO_CONSTANTS.SITE_URL}${url}` : SEO_CONSTANTS.SITE_URL;

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords.join(', '),
    authors: [{ name: SEO_CONSTANTS.SITE_NAME }],
    creator: SEO_CONSTANTS.SITE_NAME,
    publisher: SEO_CONSTANTS.SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SEO_CONSTANTS.SITE_URL),
    alternates: {
      canonical: seoUrl,
      languages: {
        'en': '/en',
        'ar': '/ar',
        ...alternates
      }
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: SEO_CONSTANTS.SITE_NAME,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        }
      ],
      locale: isArabic ? 'ar_SA' : 'en_US',
      type: type,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: '@AdStationSA',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
  };

  return metadata;
}

/**
 * Generate metadata from page configuration
 */
export function generateMetadataFromConfig(
  pageKey: string,
  locale: SupportedLocale,
  customUrl?: string
): Metadata {
  // Import here to avoid circular dependency
  const { pageSEOConfigs } = require('./content');
  
  const config = pageSEOConfigs[pageKey];
  if (!config) {
    throw new Error(`SEO configuration not found for page: ${pageKey}`);
  }

  const seoData = config.seoConfig[locale];
  const url = customUrl || `/${locale}/${pageKey === 'home' ? '' : pageKey}`;

  return generateSEO({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    url: url,
    locale,
    image: seoData.image
  });
}

/**
 * Generate service-specific metadata
 */
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  serviceKeywords: string[],
  serviceUrl: string,
  locale: SupportedLocale = 'en'
): Metadata {
  const isArabic = locale === 'ar';
  
  const title = isArabic 
    ? `${serviceName} في السعودية | أدستيشن`
    : `${serviceName} in Saudi Arabia | AdStation`;

  return generateSEO({
    title,
    description: serviceDescription,
    keywords: serviceKeywords,
    url: serviceUrl,
    locale,
    type: 'website'
  });
}
