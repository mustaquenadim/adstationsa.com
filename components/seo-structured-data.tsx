import { useEffect } from "react";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceSchema,
} from "@/lib/seo";

interface SEOStructuredDataProps {
  data?: object | object[];
  locale?: string;
  pageType?: "home" | "service" | "about" | "contact";
  serviceName?: string;
  serviceDescription?: string;
  serviceUrl?: string;
}

export default function SEOStructuredData({
  data,
  locale = "en",
  pageType = "home",
  serviceName,
  serviceDescription,
  serviceUrl,
}: SEOStructuredDataProps) {
  useEffect(() => {
    // Clear any existing structured data
    const existingScripts = document.querySelectorAll(
      'script[id^="structured-data-"]'
    );
    existingScripts.forEach((script) => script.remove());

    let schemas: object[] = [];

    if (data) {
      // Use provided data
      schemas = Array.isArray(data) ? data : [data];
    } else {
      // Generate default schemas based on locale and page type
      const supportedLocale = (locale === "ar" ? "ar" : "en") as "en" | "ar";

      // Organization schema
      const orgSchema = generateOrganizationSchema(supportedLocale);
      schemas.push(orgSchema);

      // Website schema
      const webSchema = generateWebsiteSchema(supportedLocale);
      schemas.push(webSchema);

      // Service schema if applicable
      if (
        pageType === "service" &&
        serviceName &&
        serviceDescription &&
        serviceUrl
      ) {
        const serviceSchema = generateServiceSchema(
          serviceName,
          serviceDescription,
          serviceUrl,
          supportedLocale
        );
        schemas.push(serviceSchema);
      }
    }

    // Add schemas to document head
    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, [data, locale, pageType, serviceName, serviceDescription, serviceUrl]);

  return null;
}
