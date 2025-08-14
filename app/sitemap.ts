import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adstation.sa'
  
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

  const locales = ['en', 'ar']
  
  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for each locale
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route.includes('/services/') ? 0.8 : 0.9,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${route}`,
            'ar': `${baseUrl}/ar${route}`,
          }
        }
      })
    })
  })

  return sitemap
}
