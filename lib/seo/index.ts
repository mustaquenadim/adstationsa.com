/**
 * Main SEO Module Index
 * Centralized exports for all SEO functionality
 */

// Export all types
export type {
  BaseSEOConfig,
  LocalizedSEOConfig,
  SEOGeneratorProps,
  OrganizationSchema,
  WebsiteSchema,
  ServiceSchema,
  BreadcrumbSchema,
  PageSEOConfig,
  SEOValidationResult,
  KeywordAnalysis,
  SupportedLocale,
  PageType
} from './types';

// Export constants
export { SEO_CONSTANTS } from './types';

// Export core functionality
export { generateSEO, generateMetadataFromConfig, generateServiceMetadata } from './generator';
export { 
  generateOrganizationSchema, 
  generateWebsiteSchema, 
  generateServiceSchema, 
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  combineSchemas
} from './schema';
export { SEOValidator, SEOOptimizer } from './validator';
export { 
  pageSEOConfigs,
  homeSEO,
  aboutSEO,
  servicesSEO,
  whyAdStationSEO,
  joinUsSEO,
  outdoorAdvertisingSEO,
  creativeDesignSEO,
  printingSEO,
  exhibitionsEventsSEO,
  pointOfSaleSEO,
  indoorSignageSEO,
  advertisingCampaignsSEO
} from './content';

// Export utilities
export * from './utils';

// Export migration tools (development only)
export * from './migration';
