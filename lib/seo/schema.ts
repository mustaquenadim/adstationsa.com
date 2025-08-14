/**
 * Schema.org Structured Data Generators
 * Centralized schema generation for SEO
 */

import {
  OrganizationSchema,
  WebsiteSchema,
  ServiceSchema,
  BreadcrumbSchema,
  SupportedLocale,
  SEO_CONSTANTS
} from './types';

/**
 * Generate Organization schema markup
 */
export function generateOrganizationSchema(locale: SupportedLocale = 'en'): OrganizationSchema {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: isArabic ? 'أدستيشن' : SEO_CONSTANTS.SITE_NAME,
    url: SEO_CONSTANTS.SITE_URL,
    logo: `${SEO_CONSTANTS.SITE_URL}/logo.png`,
    description: isArabic 
      ? 'أول منصة سعودية لخدمات الإعلان، تربط الشركات بأفضل وكالات الإعلان.'
      : 'The first Saudi platform for advertising services, connecting businesses with top advertising agencies.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: isArabic ? 'خدمة العملاء' : 'customer service',
      availableLanguage: ['English', 'Arabic']
    },
    sameAs: Object.values(SEO_CONSTANTS.SOCIAL_MEDIA)
  };
}

/**
 * Generate Website schema markup
 */
export function generateWebsiteSchema(locale: SupportedLocale = 'en'): WebsiteSchema {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: isArabic ? 'أدستيشن' : SEO_CONSTANTS.SITE_NAME,
    url: SEO_CONSTANTS.SITE_URL,
    description: isArabic 
      ? 'أول منصة سعودية لخدمات الإعلان'
      : 'The first Saudi platform for advertising services',
    publisher: {
      '@type': 'Organization',
      name: isArabic ? 'أدستيشن' : SEO_CONSTANTS.SITE_NAME
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SEO_CONSTANTS.SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['en', 'ar']
  };
}

/**
 * Generate Service schema markup
 */
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  locale: SupportedLocale = 'en'
): ServiceSchema {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: `${SEO_CONSTANTS.SITE_URL}${serviceUrl}`,
    provider: {
      '@type': 'Organization',
      name: isArabic ? 'أدستيشن' : SEO_CONSTANTS.SITE_NAME,
      url: SEO_CONSTANTS.SITE_URL
    },
    areaServed: {
      '@type': 'Country',
      name: isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'
    },
    availableLanguage: ['English', 'Arabic']
  };
}

/**
 * Generate Breadcrumb schema markup
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SEO_CONSTANTS.SITE_URL}${item.url}`
    }))
  };
}

/**
 * Generate FAQ schema markup
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
  locale: SupportedLocale = 'en'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate Local Business schema markup
 */
export function generateLocalBusinessSchema(locale: SupportedLocale = 'en') {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SEO_CONSTANTS.SITE_URL}/#organization`,
    name: isArabic ? 'أدستيشن' : SEO_CONSTANTS.SITE_NAME,
    description: isArabic 
      ? 'أول منصة سعودية لخدمات الإعلان'
      : 'The first Saudi platform for advertising services',
    url: SEO_CONSTANTS.SITE_URL,
    logo: `${SEO_CONSTANTS.SITE_URL}/logo.png`,
    image: `${SEO_CONSTANTS.SITE_URL}/hero-logo.svg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.7136',
      longitude: '46.6753'
    },
    sameAs: Object.values(SEO_CONSTANTS.SOCIAL_MEDIA),
    priceRange: '$$',
    currenciesAccepted: 'SAR',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer']
  };
}

/**
 * Combine multiple schemas into a single JSON-LD script
 */
export function combineSchemas(schemas: object[]): string {
  if (schemas.length === 1) {
    return JSON.stringify(schemas[0], null, 2);
  }
  
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schemas
  }, null, 2);
}
