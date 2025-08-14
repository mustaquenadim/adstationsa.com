// Arabic-specific FAQ content for SEO
export const arabicFAQs = [
  {
    question: "ما هي أدستيشن؟",
    answer: "أدستيشن هي أول منصة سعودية موحدة تربط أفضل وكالات الإعلان والشركات في المملكة العربية السعودية، مما يوفر خدمات إعلانية احترافية شاملة."
  },
  {
    question: "ما هي الخدمات التي تقدمها أدستيشن؟",
    answer: "نقدم أكثر من 70 خدمة إعلانية تشمل الإعلان الخارجي، التصميم الإبداعي، خدمات الطباعة، المعارض والفعاليات، اللافتات الداخلية، وحلول نقطة البيع."
  },
  {
    question: "في أي مناطق تعمل أدستيشن؟",
    answer: "نغطي جميع مناطق المملكة العربية السعودية بما في ذلك الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، وجميع المناطق الأخرى."
  },
  {
    question: "كيف يمكنني طلب عرض سعر؟",
    answer: "يمكنك طلب عرض سعر من خلال ملء النموذج في موقعنا، وسيتواصل معك فريقنا خلال 24 ساعة بعرض سعر مخصص لاحتياجاتك."
  },
  {
    question: "هل تقدم أدستيشن خدمات للشركات الصغيرة؟",
    answer: "نعم، نقدم خدماتنا لجميع أحجام الشركات من الشركات الناشئة الصغيرة إلى المؤسسات الكبيرة، مع حلول مخصصة لكل احتياج."
  },
  {
    question: "ما هي مميزات العمل مع أدستيشن؟",
    answer: "توفر أدستيشن الوقت والجهد والتكلفة من خلال جمع أفضل مقدمي الخدمات في مكان واحد، مع ضمان الجودة والأسعار التنافسية."
  },
  {
    question: "هل يمكنني أن أصبح شريكاً مع أدستيشن؟",
    answer: "نعم، نرحب بانضمام وكالات الإعلان والشركات المتخصصة إلى شبكتنا. يمكنك التقديم من خلال صفحة 'كن شريكنا' في موقعنا."
  }
];

export function generateArabicFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: arabicFAQs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Local business schema for Arabic content
export function generateArabicLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://adstationsa.com',
    name: 'أدستيشن',
    alternateName: 'AdStation',
    description: 'أول منصة سعودية لخدمات الإعلان',
    url: 'https://adstationsa.com',
    telephone: '+966-XXX-XXXXX', // Replace with actual phone
    email: 'info@adstationsa.com', // Replace with actual email
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'المملكة العربية السعودية',
      addressLocality: 'الرياض' // Update with actual city
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.7136', // Riyadh coordinates - update with actual location
      longitude: '46.6753'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'الرياض'
      },
      {
        '@type': 'City', 
        name: 'جدة'
      },
      {
        '@type': 'City',
        name: 'الدمام'
      },
      {
        '@type': 'Country',
        name: 'المملكة العربية السعودية'
      }
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'المملكة العربية السعودية'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات الإعلان',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'الإعلان الخارجي',
            description: 'خدمات الإعلان الخارجي واللوحات الإعلانية'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'التصميم الإبداعي',
            description: 'خدمات التصميم الجرافيكي والعلامة التجارية'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'خدمات الطباعة',
            description: 'طباعة المواد الإعلانية والتسويقية'
          }
        }
      ]
    },
    sameAs: [
      'https://facebook.com/adstationsa',
      'https://twitter.com/adstationsa',
      'https://instagram.com/adstationsa',
      'https://linkedin.com/company/adstationsa'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150'
    }
  };
}
