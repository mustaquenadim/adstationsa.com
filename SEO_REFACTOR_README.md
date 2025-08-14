# SEO System Refactor

## Overview

The SEO system has been completely refactored to provide better organization, maintainability, and performance. The new modular structure separates concerns and provides a clean API while maintaining backward compatibility.

## New Structure

```
lib/seo/
├── types.ts           # Type definitions and constants
├── content.ts         # SEO content configurations
├── generator.ts       # Core metadata generation
├── schema.ts          # Schema.org structured data
├── validator.ts       # SEO validation and optimization
├── utils.ts           # Utility functions
├── metadata.ts        # Simplified metadata generation
└── index.ts           # Main exports

components/seo/
└── structured-data.tsx # New structured data component
```

## Key Improvements

### 1. **Modular Architecture**

- Separated concerns into focused modules
- Better code organization and maintainability
- Type-safe interfaces throughout

### 2. **Enhanced Type Safety**

- Comprehensive TypeScript interfaces
- Strict typing for locales and page types
- Better IDE support and error catching

### 3. **Performance Optimizations**

- Server-side rendered structured data
- Reduced client-side JavaScript execution
- Better Core Web Vitals scores

### 4. **Improved Developer Experience**

- Centralized configuration
- Easy-to-use helper functions
- Better documentation and examples

### 5. **SEO Validation Tools**

- Built-in SEO auditing capabilities
- Keyword density analysis
- Title and description optimization
- URL structure validation

## Usage Examples

### Basic Page Metadata

```typescript
import { generatePageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("home", "en");
}
```

### Service Page Metadata

```typescript
import { generateServiceMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    "Outdoor Advertising",
    "Professional outdoor advertising services in Saudi Arabia",
    ["outdoor advertising", "billboards", "signage"],
    "/services/outdoor-advertising",
    "en"
  );
}
```

### Structured Data Component

```tsx
import { ServiceSEOStructuredData } from "@/components/seo/structured-data";

export default function ServicePage() {
  return (
    <>
      <ServiceSEOStructuredData
        locale="en"
        serviceName="Outdoor Advertising"
        serviceDescription="Professional outdoor advertising services"
        serviceUrl="/services/outdoor-advertising"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Outdoor Advertising", url: "/services/outdoor-advertising" },
        ]}
      />
      {/* Page content */}
    </>
  );
}
```

### SEO Validation

```typescript
import { SEOValidator } from "@/lib/seo";

// Validate title
const titleResult = SEOValidator.validateTitle("My Page Title", "en");
console.log(titleResult.isValid, titleResult.message, titleResult.score);

// Validate description
const descResult = SEOValidator.validateDescription(
  "Page description...",
  "en"
);

// Analyze keywords
const keywordAnalysis = SEOValidator.analyzeKeywordDensity(
  "Content text here...",
  ["keyword1", "keyword2"]
);

// Full page audit
const audit = SEOValidator.auditPage({
  title: "Page Title",
  description: "Page description",
  content: "Full page content",
  keywords: ["keyword1", "keyword2"],
  url: "/page-url",
  locale: "en",
});
```

## Configuration

### Adding New Pages

1. Add SEO configuration to `lib/seo/content.ts`:

```typescript
export const newPageSEO: LocalizedSEOConfig = {
  en: {
    title: "New Page Title",
    description: "New page description",
    keywords: ["keyword1", "keyword2"],
    ogTitle: "Social media title",
    ogDescription: "Social media description",
  },
  ar: {
    title: "عنوان الصفحة الجديدة",
    description: "وصف الصفحة الجديدة",
    keywords: ["كلمة1", "كلمة2"],
    ogTitle: "عنوان وسائل التواصل",
    ogDescription: "وصف وسائل التواصل",
  },
};

// Add to pageSEOConfigs
export const pageSEOConfigs: Record<string, PageSEOConfig> = {
  // ... existing configs
  "new-page": {
    pageKey: "new-page",
    seoConfig: newPageSEO,
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "New Page", url: "/new-page" },
    ],
  },
};
```

2. Use in your page component:

```typescript
import { generatePageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata("new-page", params.locale as "en" | "ar");
}
```

### Customizing Schema.org Data

```typescript
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

// Add custom schemas
const customSchemas = [
  generateOrganizationSchema("en"),
  generateWebsiteSchema("en"),
  {
    "@context": "https://schema.org",
    "@type": "CustomType",
    // ... custom properties
  },
];
```

## Migration Guide

### From Old System

The new system maintains backward compatibility. Existing imports will continue to work:

```typescript
// This still works
import { generateSEO, generateOrganizationSchema } from "@/lib/seo";
```

### Recommended Migration Steps

1. **Update imports** to use the new modular structure:

   ```typescript
   // Old
   import { generateSEO } from "@/lib/seo";

   // New (recommended)
   import { generatePageMetadata } from "@/lib/seo/metadata";
   ```

2. **Replace manual metadata generation** with configuration-based approach:

   ```typescript
   // Old
   const metadata = generateSEO({
     title: "Manual title",
     description: "Manual description",
     // ...
   });

   // New
   const metadata = generatePageMetadata("page-key", "en");
   ```

3. **Update structured data components**:

   ```tsx
   // Old
   import SEOStructuredData from "@/components/seo-structured-data";

   // New
   import { HomeSEOStructuredData } from "@/components/seo/structured-data";
   ```

## Best Practices

### 1. **Use Configuration Over Manual**

Prefer using the centralized configuration in `content.ts` over manual metadata generation.

### 2. **Validate SEO Content**

Use the built-in validation tools to ensure optimal SEO:

```typescript
import { SEOValidator } from "@/lib/seo";

const audit = SEOValidator.auditPage({
  title: pageTitle,
  description: pageDescription,
  content: pageContent,
  keywords: pageKeywords,
  url: pageUrl,
  locale: currentLocale,
});

if (audit.overallScore < 80) {
  console.warn("SEO improvements needed:", audit.recommendations);
}
```

### 3. **Server-Side Structured Data**

Use the new structured data components for better performance:

```tsx
// Good - Server-side rendered
<HomeSEOStructuredData locale="en" />

// Avoid - Client-side injection
<script dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
```

### 4. **Type Safety**

Always use the provided types for better development experience:

```typescript
import type { SupportedLocale, PageType } from "@/lib/seo/types";

function myFunction(locale: SupportedLocale, pageType: PageType) {
  // TypeScript will enforce correct values
}
```

## Environment Variables

Make sure these environment variables are set:

```env
GOOGLE_SITE_VERIFICATION=your_google_verification_code
YANDEX_VERIFICATION=your_yandex_verification_code
YAHOO_VERIFICATION=your_yahoo_verification_code
```

## Monitoring

The new system provides better monitoring capabilities:

1. **SEO Scores**: Use `SEOValidator.auditPage()` for comprehensive audits
2. **Performance**: Structured data is now server-side rendered
3. **Validation**: Built-in checks for title length, description length, and keyword density

## Future Enhancements

- **AI-Powered SEO Suggestions**: Integration with AI for automatic SEO optimization
- **Real-time SEO Preview**: Live preview of how content appears in search results
- **A/B Testing Support**: Framework for testing different SEO strategies
- **Advanced Analytics**: Integration with Google Search Console API
- **Automated Reporting**: Regular SEO health reports
