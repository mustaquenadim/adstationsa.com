import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { getLocalizedMetadata, arabicSEOContent } from './arabic-seo';

interface PageMetadataConfig {
  englishTitle: string;
  englishDescription: string;
  englishKeywords: string[];
  arabicPageKey: keyof typeof arabicSEOContent;
  url: string;
}

export async function generatePageMetadata(config: PageMetadataConfig): Promise<Metadata> {
  const locale = await getLocale();
  
  return getLocalizedMetadata(
    config.englishTitle,
    config.englishDescription,
    config.englishKeywords,
    config.arabicPageKey,
    config.url,
    locale
  );
}
