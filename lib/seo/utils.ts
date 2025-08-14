/**
 * SEO Utility Helpers
 * Common helper functions for SEO operations
 */

import { Metadata } from 'next';
import { SupportedLocale } from './types';
import { generateMetadataFromConfig, generateServiceMetadata } from './generator';
import { pageSEOConfigs } from './content';
import { SEO_CONSTANTS } from './types';

/**
 * Get metadata for a standard page
 */
export async function getPageMetadata(
  pageKey: string,
  locale: SupportedLocale,
  customUrl?: string
): Promise<Metadata> {
  try {
    return generateMetadataFromConfig(pageKey, locale, customUrl);
  } catch (error) {
    console.warn(`SEO configuration not found for page: ${pageKey}, using defaults`);
    
    // Fallback to basic metadata
    const { generateSEO } = await import('@/lib/seo');
    return generateSEO({ locale });
  }
}

/**
 * Get metadata for service pages
 */
export async function getServicePageMetadata(
  serviceName: string,
  serviceDescription: string,
  serviceKeywords: string[],
  serviceUrl: string,
  locale: SupportedLocale
): Promise<Metadata> {
  return generateServiceMetadata(
    serviceName,
    serviceDescription,
    serviceKeywords,
    serviceUrl,
    locale
  );
}

/**
 * Check if a page has SEO configuration
 */
export function hasPageSEOConfig(pageKey: string): boolean {
  return pageKey in pageSEOConfigs;
}

/**
 * Get available page keys
 */
export function getAvailablePageKeys(): string[] {
  return Object.keys(pageSEOConfigs);
}

/**
 * Get breadcrumbs for a page
 */
export function getPageBreadcrumbs(pageKey: string, locale: SupportedLocale): Array<{ name: string; url: string }> | undefined {
  const config = pageSEOConfigs[pageKey];
  if (!config?.breadcrumbs) return undefined;

  // Localize breadcrumb names
  return config.breadcrumbs.map((breadcrumb: { name: string; url: string }) => ({
    ...breadcrumb,
    url: `/${locale}${breadcrumb.url === '/' ? '' : breadcrumb.url}`
  }));
}

/**
 * Generate SEO-friendly URL slug
 */
export function generateSlug(text: string, locale: SupportedLocale = 'en'): string {
  if (locale === 'ar') {
    // Handle Arabic text
    return text
      .trim()
      .toLowerCase()
      .replace(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g, (match) => {
        // Keep Arabic characters but convert spaces to hyphens
        return match;
      })
      .replace(/\s+/g, '-')
      .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-z0-9\-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  // Handle English text
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string, locale: SupportedLocale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONSTANTS.SITE_URL}/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Generate alternate language URLs
 */
export function generateAlternateUrls(path: string): Record<string, string> {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return {
    'en': `${SEO_CONSTANTS.SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`,
    'ar': `${SEO_CONSTANTS.SITE_URL}/ar${cleanPath === '/' ? '' : cleanPath}`,
    'x-default': `${SEO_CONSTANTS.SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`
  };
}

/**
 * Validate and sanitize SEO input
 */
export function sanitizeSEOInput(input: string, maxLength?: number): string {
  let sanitized = input
    .trim()
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/[<>]/g, ''); // Remove potential HTML tags

  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength - 3) + '...';
  }

  return sanitized;
}
