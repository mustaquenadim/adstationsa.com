/**
 * Legacy Page Metadata (Backward Compatibility)
 * This file maintains backward compatibility while using the new modular structure
 */

import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { generatePageMetadata } from './seo/metadata';
import type { SupportedLocale } from './seo/types';

interface PageMetadataConfig {
  englishTitle: string;
  englishDescription: string;
  englishKeywords: string[];
  arabicPageKey: string; // This will be mapped to the new system
  url: string;
}

/**
 * @deprecated Use generatePageMetadata from @/lib/seo/metadata instead
 */
export async function generatePageMetadata_Legacy(config: PageMetadataConfig): Promise<Metadata> {
  const locale = await getLocale() as SupportedLocale;
  
  try {
    // Try to use the new system with the page key
    return await generatePageMetadata(config.arabicPageKey, locale, config.url);
  } catch {
    // Fallback to manual generation
    const { generateSEO } = await import('./seo');
    
    return generateSEO({
      title: locale === 'en' ? config.englishTitle : config.englishTitle, // Fallback to English
      description: locale === 'en' ? config.englishDescription : config.englishDescription,
      keywords: config.englishKeywords,
      url: config.url,
      locale
    });
  }
}
