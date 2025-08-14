/**
 * SEO Main Export (Backward Compatibility)
 * This file maintains backward compatibility while delegating to the new modular structure
 */

// Re-export everything from the new modular structure
export * from './seo/index';

// Specific exports for backward compatibility
export { generateSEO } from './seo/generator';
export { 
  generateOrganizationSchema, 
  generateWebsiteSchema, 
  generateServiceSchema, 
  generateBreadcrumbSchema 
} from './seo/schema';
export { generatePageMetadata } from './seo/metadata';
export type { SEOGeneratorProps as SEOProps, SupportedLocale } from './seo/types';