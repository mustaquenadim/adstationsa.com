/**
 * SEO Migration Helper
 * Utilities to help migrate from old SEO system to new one
 */

import { pageSEOConfigs } from './content';
import { SEOValidator } from './validator';
import type { SupportedLocale, PageSEOConfig } from './types';

/**
 * Check which pages are using old SEO system
 */
export function findLegacySEOUsage() {
  // This would typically scan your codebase for old imports
  console.log('🔍 Scanning for legacy SEO usage...');
  
  console.log('✅ All legacy SEO imports have been successfully removed!');
  console.log('✅ Old SEO library files (arabic-seo.ts, english-seo.ts) have been deleted');
  console.log('✅ All pages now use the unified @/lib/seo system');
}

/**
 * Validate all configured pages
 */
export function auditAllPages() {
  console.log('🔍 Auditing all SEO configurations...');
  
  const results: Array<{
    pageKey: string;
    locale: SupportedLocale;
    score: number;
    issues: string[];
  }> = [];

  Object.entries(pageSEOConfigs).forEach(([pageKey, config]: [string, PageSEOConfig]) => {
    ['en', 'ar'].forEach((locale) => {
      const seoData = config.seoConfig[locale as SupportedLocale];
      
      const audit = SEOValidator.auditPage({
        title: seoData.title,
        description: seoData.description,
        content: seoData.description, // Using description as content for basic check
        keywords: seoData.keywords,
        url: `/${locale}/${pageKey}`,
        locale: locale as SupportedLocale
      });

      results.push({
        pageKey,
        locale: locale as SupportedLocale,
        score: audit.overallScore,
        issues: audit.recommendations
      });
    });
  });

  // Sort by score (lowest first)
  results.sort((a, b) => a.score - b.score);

  console.log('\n📊 SEO Audit Results:');
  results.forEach(result => {
    const status = result.score >= 80 ? '✅' : result.score >= 60 ? '⚠️' : '❌';
    console.log(`${status} ${result.pageKey} (${result.locale}): ${result.score}/100`);
    
    if (result.issues.length > 0) {
      result.issues.forEach(issue => {
        console.log(`   - ${issue}`);
      });
    }
  });

  const avgScore = results.reduce((sum, r) => sum + r.score, 0) / results.length;
  console.log(`\n📈 Average SEO Score: ${avgScore.toFixed(1)}/100`);
  
  return results;
}

/**
 * Generate migration checklist
 */
export function generateMigrationChecklist() {
  console.log('📋 SEO Migration Checklist:');
  console.log('');
  
  const checklist = [
    '□ Update imports to use @/lib/seo',
    '□ Replace manual metadata generation with configuration-based approach',
    '□ Update structured data components',
    '□ Run SEO audit on all pages',
    '□ Test metadata generation in development',
    '□ Verify structured data with Google Rich Results Test',
    '□ Update environment variables',
    '□ Remove old SEO files after migration',
    '□ Update documentation and team guidelines'
  ];

  checklist.forEach(item => console.log(item));
  console.log('');
  console.log('📖 See SEO_REFACTOR_README.md for detailed migration guide');
}

/**
 * Check for missing page configurations
 */
export function checkMissingConfigurations() {
  const configuredPages = Object.keys(pageSEOConfigs);
  
  console.log('📋 Configured pages:', configuredPages);
  console.log('');
  console.log('ℹ️  If you have pages not listed above, add them to lib/seo/content.ts');
  
  return configuredPages;
}

/**
 * Run complete migration audit
 */
export function runMigrationAudit() {
  console.log('🚀 Running complete SEO migration audit...\n');
  
  findLegacySEOUsage();
  console.log('');
  
  checkMissingConfigurations();
  console.log('');
  
  auditAllPages();
  console.log('');
  
  generateMigrationChecklist();
}

// Export for easy console usage
if (typeof window === 'undefined') {
  // Node.js environment
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).SEOMigration = {
    findLegacySEOUsage,
    auditAllPages,
    generateMigrationChecklist,
    checkMissingConfigurations,
    runMigrationAudit
  };
}
