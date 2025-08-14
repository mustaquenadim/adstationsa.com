/**
 * SEO Structured Data Component
 * Server-side rendered structured data for better performance
 */

import Script from "next/script";
import { SupportedLocale, PageType } from "@/lib/seo/types";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  combineSchemas,
} from "@/lib/seo/schema";

interface SEOStructuredDataProps {
  locale?: SupportedLocale;
  pageType?: PageType;
  serviceName?: string;
  serviceDescription?: string;
  serviceUrl?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  customSchemas?: object[];
  includeLocalBusiness?: boolean;
}

export default function SEOStructuredData({
  locale = "en",
  pageType = "home",
  serviceName,
  serviceDescription,
  serviceUrl,
  breadcrumbs,
  faqs,
  customSchemas = [],
  includeLocalBusiness = false,
}: SEOStructuredDataProps) {
  const schemas: object[] = [];

  // Always include organization and website schemas
  schemas.push(generateOrganizationSchema(locale));
  schemas.push(generateWebsiteSchema(locale));

  // Add local business schema if requested
  if (includeLocalBusiness) {
    schemas.push(generateLocalBusinessSchema(locale));
  }

  // Add service schema for service pages
  if (
    pageType === "service-detail" &&
    serviceName &&
    serviceDescription &&
    serviceUrl
  ) {
    schemas.push(
      generateServiceSchema(serviceName, serviceDescription, serviceUrl, locale)
    );
  }

  // Add breadcrumb schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  // Add FAQ schema
  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs, locale));
  }

  // Add any custom schemas
  schemas.push(...customSchemas);

  // Combine all schemas
  const combinedSchema = combineSchemas(schemas);

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: combinedSchema,
      }}
    />
  );
}

/**
 * Pre-configured SEO component for home page
 */
export function HomeSEOStructuredData({
  locale = "en",
}: {
  locale?: SupportedLocale;
}) {
  return (
    <SEOStructuredData
      locale={locale}
      pageType="home"
      includeLocalBusiness={true}
    />
  );
}

/**
 * Pre-configured SEO component for service pages
 */
export function ServiceSEOStructuredData({
  locale = "en",
  serviceName,
  serviceDescription,
  serviceUrl,
  breadcrumbs,
}: {
  locale?: SupportedLocale;
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}) {
  return (
    <SEOStructuredData
      locale={locale}
      pageType="service-detail"
      serviceName={serviceName}
      serviceDescription={serviceDescription}
      serviceUrl={serviceUrl}
      breadcrumbs={breadcrumbs}
    />
  );
}

/**
 * Pre-configured SEO component for about page
 */
export function AboutSEOStructuredData({
  locale = "en",
  breadcrumbs,
}: {
  locale?: SupportedLocale;
  breadcrumbs?: Array<{ name: string; url: string }>;
}) {
  const faqs =
    locale === "ar"
      ? [
          {
            question: "ما هو أدستيشن؟",
            answer:
              "أدستيشن هو أول منصة سعودية موحدة تربط الشركات بأفضل مقدمي خدمات الإعلان في المملكة العربية السعودية.",
          },
          {
            question: "ما هي الخدمات التي تقدمها المنصة؟",
            answer:
              "نقدم أكثر من 70 خدمة إعلانية تشمل الإعلان الخارجي، التصميم الإبداعي، الطباعة، المعارض، ونقطة البيع.",
          },
        ]
      : [
          {
            question: "What is AdStation?",
            answer:
              "AdStation is the first Saudi unified platform connecting businesses with the best advertising service providers in Saudi Arabia.",
          },
          {
            question: "What services does the platform offer?",
            answer:
              "We offer 70+ advertising services including outdoor advertising, creative design, printing, exhibitions, and point of sale solutions.",
          },
        ];

  return (
    <SEOStructuredData
      locale={locale}
      pageType="about"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      includeLocalBusiness={true}
    />
  );
}
