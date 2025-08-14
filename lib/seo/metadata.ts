/**
 * Simplified Page Metadata Generator
 * Easy-to-use metadata generation for pages
 */

import { Metadata } from 'next';
import { generateSEO } from './generator';
import { pageSEOConfigs } from './content';
import type { SupportedLocale } from './types';

/**
 * Generate metadata for a page using the page key
 */
export async function generatePageMetadata(
  pageKey: string, 
  locale: SupportedLocale,
  customUrl?: string
): Promise<Metadata> {
  const config = pageSEOConfigs[pageKey];
  
  if (!config) {
    console.warn(`SEO configuration not found for page: ${pageKey}`);
    return generateSEO({ locale });
  }

  const seoData = config.seoConfig[locale];
  const url = customUrl || (pageKey === 'home' ? `/${locale}` : `/${locale}/${pageKey}`);

  return generateSEO({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    url,
    locale
  });
}
