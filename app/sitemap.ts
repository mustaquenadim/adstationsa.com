import { MetadataRoute } from 'next'
import {routing} from '@/i18n/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adstationsa.com'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/advertising-campaigns',
    '/services/creative-design',
    '/services/exhibitions-events',
    '/services/indoor-signage',
    '/services/outdoor-advertising',
    '/services/point-of-sale',
    '/services/printing',
    '/why-adstation',
    '/join-us'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for each locale with proper Arabic SEO considerations
  routing.locales.forEach(locale => {
    routes.forEach(route => {
      const url = `${baseUrl}/${locale}${route}`;
      const priority = route === '' ? 1 : route.includes('/services/') ? 0.8 : 0.9;
      const changeFrequency = route === '' ? 'daily' : 'weekly';
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${route}`,
            'ar': `${baseUrl}/ar${route}`,
            'x-default': `${baseUrl}/en${route}` // Default to English for international users
          }
        }
      })
    })
  })

  return sitemap
}
