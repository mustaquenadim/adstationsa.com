import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  locale?: string;
  alternates?: {
    [key: string]: string;
  };
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = '/hero-logo.svg',
  url,
  type = 'website',
  locale = 'en',
  alternates = {}
}: SEOProps = {}): Metadata {
  const siteName = 'AdStation';
  const defaultTitle = locale === 'ar' 
    ? 'أدستيشن - أول منصة سعودية لخدمات الإعلان'
    : 'AdStation - The First Saudi Platform for Advertising Services';
  
  const defaultDescription = locale === 'ar'
    ? 'أدستيشن هي منصة موحدة تربط أفضل وكالات الإعلان والشركات في المملكة العربية السعودية. احصل على خدمات إعلانية احترافية تشمل الإعلان الخارجي والتصميم الإبداعي والطباعة والمعارض والمزيد.'
    : 'AdStation is a unified platform connecting top advertising agencies and companies in Saudi Arabia. Get professional advertising services including outdoor advertising, creative design, printing, exhibitions, and more.';
  
  const defaultKeywords = locale === 'ar' ? [
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

  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = [...keywords, ...defaultKeywords];
  const seoImage = image.startsWith('http') ? image : `https://adstationsa.com${image}`;
  const seoUrl = url ? `https://adstationsa.com${url}` : 'https://adstationsa.com';

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords.join(', '),
    authors: [{ name: 'AdStation' }],
    creator: 'AdStation',
    publisher: 'AdStation',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://adstationsa.com'),
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
      siteName: siteName,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        }
      ],
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
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

// JSON-LD structured data generators
export function generateOrganizationSchema(locale: string = 'en') {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: isArabic ? 'أدستيشن' : 'AdStation',
    url: 'https://adstationsa.com',
    logo: 'https://adstationsa.com/logo.png',
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
    sameAs: [
      'https://facebook.com/adstationsa',
      'https://twitter.com/adstationsa',
      'https://instagram.com/adstationsa',
      'https://linkedin.com/company/adstationsa'
    ]
  };
}

export function generateWebsiteSchema(locale: string = 'en') {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: isArabic ? 'أدستيشن' : 'AdStation',
    url: 'https://adstationsa.com',
    description: isArabic 
      ? 'أول منصة سعودية لخدمات الإعلان'
      : 'The first Saudi platform for advertising services',
    publisher: {
      '@type': 'Organization',
      name: isArabic ? 'أدستيشن' : 'AdStation'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://adstationsa.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['en', 'ar']
  };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceUrl: string, locale: string = 'en') {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: `https://adstationsa.com${serviceUrl}`,
    provider: {
      '@type': 'Organization',
      name: isArabic ? 'أدستيشن' : 'AdStation',
      url: 'https://adstationsa.com'
    },
    areaServed: {
      '@type': 'Country',
      name: isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'
    },
    availableLanguage: ['English', 'Arabic']
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://adstationsa.com${item.url}`
    }))
  };
}
