/**
 * SEO Validation and Optimization Utilities
 * Tools for validating and optimizing SEO content
 */

import {
  SEOValidationResult,
  KeywordAnalysis,
  SEO_CONSTANTS,
  SupportedLocale
} from './types';

/**
 * SEO Validator class for comprehensive SEO analysis
 */
export class SEOValidator {
  
  /**
   * Validate title length and format
   */
  static validateTitle(title: string, locale: SupportedLocale = 'en'): SEOValidationResult {
    const length = title.length;
    const maxLength = SEO_CONSTANTS.TITLE_MAX_LENGTH;
    
    // Different optimal ranges for Arabic vs English
    const minLength = locale === 'ar' ? 25 : 30;
    const optimalMax = locale === 'ar' ? 55 : 60;
    
    if (length < minLength) {
      return {
        isValid: false,
        message: `Title too short (${length} chars). Aim for ${minLength}-${optimalMax} characters.`,
        score: (length / minLength) * 50
      };
    }
    
    if (length > maxLength) {
      return {
        isValid: false,
        message: `Title too long (${length} chars). Keep under ${maxLength} characters.`,
        score: Math.max(0, 100 - ((length - maxLength) * 5))
      };
    }
    
    const score = length >= minLength && length <= optimalMax ? 100 : 85;
    
    return {
      isValid: true,
      message: `Title length optimal (${length} chars).`,
      score
    };
  }

  /**
   * Validate description length and content
   */
  static validateDescription(description: string, locale: SupportedLocale = 'en'): SEOValidationResult {
    const length = description.length;
    const maxLength = SEO_CONSTANTS.DESCRIPTION_MAX_LENGTH;
    
    // Different optimal ranges for Arabic vs English
    const minLength = locale === 'ar' ? 100 : 120;
    const optimalMax = locale === 'ar' ? 150 : 155;
    
    if (length < minLength) {
      return {
        isValid: false,
        message: `Description too short (${length} chars). Aim for ${minLength}-${optimalMax} characters.`,
        score: (length / minLength) * 50
      };
    }
    
    if (length > maxLength) {
      return {
        isValid: false,
        message: `Description too long (${length} chars). Keep under ${maxLength} characters.`,
        score: Math.max(0, 100 - ((length - maxLength) * 3))
      };
    }
    
    const score = length >= minLength && length <= optimalMax ? 100 : 85;
    
    return {
      isValid: true,
      message: `Description length optimal (${length} chars).`,
      score
    };
  }

  /**
   * Analyze keyword density in content
   */
  static analyzeKeywordDensity(content: string, keywords: string[]): KeywordAnalysis[] {
    const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
    const { min, max } = SEO_CONSTANTS.OPTIMAL_KEYWORD_DENSITY;
    
    return keywords.map(keyword => {
      const keywordRegex = new RegExp(keyword.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      const matches = content.match(keywordRegex) || [];
      const keywordCount = matches.length;
      const density = wordCount > 0 ? (keywordCount / wordCount) * 100 : 0;
      
      const isOptimal = density >= min && density <= max;
      const recommendations: string[] = [];
      
      if (density < min) {
        recommendations.push(`Increase usage of "${keyword}" (current: ${density.toFixed(2)}%, target: ${min}-${max}%)`);
      } else if (density > max) {
        recommendations.push(`Reduce usage of "${keyword}" (current: ${density.toFixed(2)}%, target: ${min}-${max}%)`);
      }
      
      if (keywordCount === 0) {
        recommendations.push(`Keyword "${keyword}" not found in content`);
      }
      
      return {
        keyword,
        density: parseFloat(density.toFixed(2)),
        isOptimal,
        recommendations: recommendations.length > 0 ? recommendations : undefined
      };
    });
  }

  /**
   * Validate URL structure
   */
  static validateURL(url: string, locale: SupportedLocale): SEOValidationResult {
    const checks = {
      hasLocale: url.startsWith(`/${locale}/`) || url === `/${locale}`,
      noDoubleSlashes: !url.includes('//'),
      noTrailingSlash: !url.endsWith('/') || url === '/' || url === `/${locale}`,
      isLowercase: url === url.toLowerCase(),
      isNotTooLong: url.length <= 100,
      hasNoSpaces: !url.includes(' '),
      hasNoSpecialChars: !/[^a-zA-Z0-9\-\/]/.test(url.replace(`/${locale}`, ''))
    };
    
    const issues: string[] = [];
    let score = 100;
    
    if (!checks.hasLocale) {
      issues.push('URL should include locale prefix');
      score -= 20;
    }
    
    if (!checks.noDoubleSlashes) {
      issues.push('URL contains double slashes');
      score -= 15;
    }
    
    if (!checks.noTrailingSlash) {
      issues.push('URL should not end with trailing slash');
      score -= 10;
    }
    
    if (!checks.isLowercase) {
      issues.push('URL should be lowercase');
      score -= 10;
    }
    
    if (!checks.isNotTooLong) {
      issues.push('URL is too long (over 100 characters)');
      score -= 15;
    }
    
    if (!checks.hasNoSpaces) {
      issues.push('URL contains spaces');
      score -= 20;
    }
    
    if (!checks.hasNoSpecialChars) {
      issues.push('URL contains special characters');
      score -= 10;
    }
    
    return {
      isValid: issues.length === 0,
      message: issues.length > 0 ? `URL issues: ${issues.join(', ')}` : 'URL structure is valid',
      score: Math.max(0, score)
    };
  }

  /**
   * Comprehensive SEO audit
   */
  static auditPage(data: {
    title: string;
    description: string;
    content: string;
    keywords: string[];
    url: string;
    locale: SupportedLocale;
  }) {
    const titleResult = this.validateTitle(data.title, data.locale);
    const descriptionResult = this.validateDescription(data.description, data.locale);
    const urlResult = this.validateURL(data.url, data.locale);
    const keywordAnalysis = this.analyzeKeywordDensity(data.content, data.keywords);
    
    const overallScore = Math.round(
      (titleResult.score! + descriptionResult.score! + urlResult.score!) / 3
    );
    
    return {
      title: titleResult,
      description: descriptionResult,
      url: urlResult,
      keywords: keywordAnalysis,
      overallScore,
      recommendations: [
        ...(!titleResult.isValid ? [titleResult.message] : []),
        ...(!descriptionResult.isValid ? [descriptionResult.message] : []),
        ...(!urlResult.isValid ? [urlResult.message] : []),
        ...keywordAnalysis
          .filter(k => !k.isOptimal && k.recommendations)
          .flatMap(k => k.recommendations!)
      ]
    };
  }
}

/**
 * SEO optimization utilities
 */
export class SEOOptimizer {
  
  /**
   * Suggest title improvements
   */
  static optimizeTitle(title: string, keywords: string[], locale: SupportedLocale = 'en'): string[] {
    const suggestions: string[] = [];
    const maxLength = SEO_CONSTANTS.TITLE_MAX_LENGTH;
    
    // Check if primary keyword is at the beginning
    const primaryKeyword = keywords[0];
    if (primaryKeyword && !title.toLowerCase().startsWith(primaryKeyword.toLowerCase())) {
      suggestions.push(`Consider starting title with primary keyword: "${primaryKeyword}"`);
    }
    
    // Check length optimization
    if (title.length > maxLength) {
      const truncated = title.substring(0, maxLength - 3) + '...';
      suggestions.push(`Shorten title: "${truncated}"`);
    }
    
    // Check for brand inclusion
    const siteName = locale === 'ar' ? 'أدستيشن' : SEO_CONSTANTS.SITE_NAME;
    if (!title.includes(siteName)) {
      suggestions.push(`Consider adding brand name: "${title} | ${siteName}"`);
    }
    
    return suggestions;
  }

  /**
   * Suggest description improvements
   */
  static optimizeDescription(description: string, keywords: string[]): string[] {
    const suggestions: string[] = [];
    const maxLength = SEO_CONSTANTS.DESCRIPTION_MAX_LENGTH;
    
    // Check keyword inclusion
    const missingKeywords = keywords.filter(keyword => 
      !description.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (missingKeywords.length > 0) {
      suggestions.push(`Include missing keywords: ${missingKeywords.join(', ')}`);
    }
    
    // Check for call-to-action
    const ctaWords = ['discover', 'learn', 'explore', 'get', 'find', 'contact', 'اكتشف', 'تعلم', 'استكشف', 'احصل'];
    const hasCTA = ctaWords.some(word => description.toLowerCase().includes(word));
    
    if (!hasCTA) {
      suggestions.push('Consider adding a call-to-action phrase');
    }
    
    // Check length
    if (description.length > maxLength) {
      suggestions.push(`Shorten description to under ${maxLength} characters`);
    }
    
    return suggestions;
  }

  /**
   * Generate keyword variations
   */
  static generateKeywordVariations(baseKeyword: string, locale: SupportedLocale = 'en'): string[] {
    const variations: string[] = [baseKeyword];
    
    if (locale === 'en') {
      // English variations
      variations.push(
        `${baseKeyword} services`,
        `${baseKeyword} saudi arabia`,
        `${baseKeyword} riyadh`,
        `professional ${baseKeyword}`,
        `best ${baseKeyword}`,
        `${baseKeyword} companies`
      );
    } else {
      // Arabic variations
      variations.push(
        `خدمات ${baseKeyword}`,
        `${baseKeyword} السعودية`,
        `${baseKeyword} الرياض`,
        `${baseKeyword} احترافي`,
        `أفضل ${baseKeyword}`,
        `شركات ${baseKeyword}`
      );
    }
    
    return variations.filter(Boolean);
  }
}
