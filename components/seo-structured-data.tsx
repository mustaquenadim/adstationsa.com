"use client";

import { useEffect } from "react";

interface SEOStructuredDataProps {
  data: object | object[];
}

export default function SEOStructuredData({ data }: SEOStructuredDataProps) {
  useEffect(() => {
    const scripts = Array.isArray(data) ? data : [data];

    scripts.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      scripts.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, [data]);

  return null;
}
