import { pageSEOConfigs } from '@/lib/seo/content';

// SEO Validation utility functions
export class SEOValidator {
  
  // Validate title length (50-60 characters optimal)
  static validateTitle(title: string): { isValid: boolean; message: string } {
    const length = title.length;
    if (length < 30) {
      return { isValid: false, message: `Title too short (${length} chars). Aim for 50-60 characters.` };
    }
    if (length > 70) {
      return { isValid: false, message: `Title too long (${length} chars). Keep under 60 characters.` };
    }
    return { isValid: true, message: `Title length optimal (${length} chars).` };
  }

  // Validate description length (150-160 characters optimal)
  static validateDescription(description: string): { isValid: boolean; message: string } {
    const length = description.length;
    if (length < 120) {
      return { isValid: false, message: `Description too short (${length} chars). Aim for 150-160 characters.` };
    }
    if (length > 170) {
      return { isValid: false, message: `Description too long (${length} chars). Keep under 160 characters.` };
    }
    return { isValid: true, message: `Description length optimal (${length} chars).` };
  }

  // Validate keyword density in content
  static validateKeywordDensity(content: string, keywords: string[]): { keyword: string; density: number; isOptimal: boolean }[] {
    const wordCount = content.split(/\s+/).length;
    
    return keywords.map(keyword => {
      const keywordCount = (content.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
      const density = (keywordCount / wordCount) * 100;
      
      return {
        keyword,
        density: parseFloat(density.toFixed(2)),
        isOptimal: density >= 1 && density <= 3 // 1-3% is optimal
      };
    });
  }

  // Validate URL structure
  static validateURL(url: string, locale: string): { isValid: boolean; message: string } {
    const isValidStructure = url.startsWith(`/${locale}/`) || url === `/${locale}`;
    const hasProperFormat = !url.includes('//') && !url.endsWith('/') && url.toLowerCase() === url;
    
    if (!isValidStructure) {
      return { isValid: false, message: `URL should start with /${locale}/` };
    }
    if (!hasProperFormat) {
      return { isValid: false, message: 'URL should be lowercase, no trailing slash, no double slashes' };
    }
    return { isValid: true, message: 'URL structure is valid' };
  }

  // Validate hreflang implementation
  static validateHreflang(pageUrl: string): { en: string; ar: string; xDefault: string } {
    const baseUrl = 'https://adstationsa.com';
    return {
      en: `${baseUrl}/en${pageUrl}`,
      ar: `${baseUrl}/ar${pageUrl}`,
      xDefault: `${baseUrl}/en${pageUrl}`
    };
  }

  // Generate SEO audit report for all pages
  static generateSEOAudit(): {
    english: { [key: string]: unknown };
    arabic: { [key: string]: unknown };
    summary: {
      totalPages: number;
      validTitles: number;
      validDescriptions: number;
      issues: string[];
    };
  } {
    const audit = {
      english: {} as { [key: string]: unknown },
      arabic: {} as { [key: string]: unknown },
      summary: {
        totalPages: 0,
        validTitles: 0,
        validDescriptions: 0,
        issues: [] as string[]
      }
    };

    // Audit all pages using new configuration system
    Object.entries(pageSEOConfigs).forEach(([key, config]) => {
      // Audit English content
      const enContent = config.seoConfig.en;
      const enTitleValidation = this.validateTitle(enContent.title);
      const enDescValidation = this.validateDescription(enContent.description);
      
      audit.english[key] = {
        title: enContent.title,
        titleValidation: enTitleValidation,
        description: enContent.description,
        descriptionValidation: enDescValidation,
        keywordCount: enContent.keywords.length,
        hasOgTitle: !!enContent.ogTitle,
        hasOgDescription: !!enContent.ogDescription
      };

      audit.summary.totalPages++;
      if (enTitleValidation.isValid) audit.summary.validTitles++;
      if (enDescValidation.isValid) audit.summary.validDescriptions++;
      
      if (!enTitleValidation.isValid) {
        audit.summary.issues.push(`English ${key}: ${enTitleValidation.message}`);
      }
      if (!enDescValidation.isValid) {
        audit.summary.issues.push(`English ${key}: ${enDescValidation.message}`);
      }

      // Audit Arabic content
      const arContent = config.seoConfig.ar;
      const arTitleValidation = this.validateTitle(arContent.title);
      const arDescValidation = this.validateDescription(arContent.description);
      
      audit.arabic[key] = {
        title: arContent.title,
        titleValidation: arTitleValidation,
        description: arContent.description,
        descriptionValidation: arDescValidation,
        keywordCount: arContent.keywords.length,
        hasOgTitle: !!arContent.ogTitle,
        hasOgDescription: !!arContent.ogDescription
      };

      audit.summary.totalPages++;
      if (arTitleValidation.isValid) audit.summary.validTitles++;
      if (arDescValidation.isValid) audit.summary.validDescriptions++;
      
      if (!arTitleValidation.isValid) {
        audit.summary.issues.push(`Arabic ${key}: ${arTitleValidation.message}`);
      }
      if (!arDescValidation.isValid) {
        audit.summary.issues.push(`Arabic ${key}: ${arDescValidation.message}`);
      }
    });

    return audit;
  }

  // Check for missing metadata implementations
  static checkMissingImplementations(): {
    missingEnglishPages: string[];
    missingArabicPages: string[];
    recommendations: string[];
  } {
    const allPageKeys = Object.keys(pageSEOConfigs);
    
    // Since the new system has both English and Arabic in every config,
    // we just check for completeness of the configurations
    const incompletePages = allPageKeys.filter(key => {
      const config = pageSEOConfigs[key];
      const hasCompleteEn = config.seoConfig.en.title && config.seoConfig.en.description && config.seoConfig.en.keywords.length > 0;
      const hasCompleteAr = config.seoConfig.ar.title && config.seoConfig.ar.description && config.seoConfig.ar.keywords.length > 0;
      return !hasCompleteEn || !hasCompleteAr;
    });

    const recommendations = [];
    if (incompletePages.length > 0) {
      recommendations.push(`Complete SEO configurations for: ${incompletePages.join(', ')}`);
    }
    recommendations.push('All pages now use the unified SEO configuration system');

    return {
      missingEnglishPages: [], // No longer applicable with unified system
      missingArabicPages: [], // No longer applicable with unified system
      recommendations
    };
  }

  // Generate structured data validation
  static validateStructuredData(schemaType: string, schema: object): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    const schemaObj = schema as Record<string, unknown>;

    // Basic validation
    if (!schemaObj['@context']) {
      errors.push('Missing @context property');
    }
    if (!schemaObj['@type']) {
      errors.push('Missing @type property');
    }

    // Type-specific validation
    switch (schemaType) {
      case 'Organization':
        if (!schemaObj.name) errors.push('Organization missing name');
        if (!schemaObj.url) errors.push('Organization missing url');
        break;
      case 'WebSite':
        if (!schemaObj.name) errors.push('WebSite missing name');
        if (!schemaObj.url) errors.push('WebSite missing url');
        break;
      case 'Service':
        if (!schemaObj.name) errors.push('Service missing name');
        if (!schemaObj.description) errors.push('Service missing description');
        if (!schemaObj.provider) errors.push('Service missing provider');
        break;
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Export validation functions for use in development
export const validateSEOImplementation = () => {
  console.log('🔍 AdStation SEO Audit Report');
  console.log('============================');
  
  const audit = SEOValidator.generateSEOAudit();
  const missing = SEOValidator.checkMissingImplementations();
  
  console.log(`📊 Summary:`);
  console.log(`Total Pages: ${audit.summary.totalPages}`);
  console.log(`Valid Titles: ${audit.summary.validTitles}/${audit.summary.totalPages}`);
  console.log(`Valid Descriptions: ${audit.summary.validDescriptions}/${audit.summary.totalPages}`);
  
  if (audit.summary.issues.length > 0) {
    console.log(`\n⚠️  Issues Found:`);
    audit.summary.issues.forEach(issue => console.log(`- ${issue}`));
  } else {
    console.log(`\n✅ All SEO metadata is optimized!`);
  }
  
  if (missing.recommendations.length > 0) {
    console.log(`\n💡 Recommendations:`);
    missing.recommendations.forEach(rec => console.log(`- ${rec}`));
  }
  
  return { audit, missing };
};

// Development helper to run SEO validation
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).validateAdStationSEO = validateSEOImplementation;
}
