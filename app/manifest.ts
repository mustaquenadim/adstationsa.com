import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AdStation - The First Saudi Platform for Advertising Services',
    short_name: 'AdStation',
    description: 'AdStation is a unified platform connecting top advertising agencies and companies in Saudi Arabia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8dc73f',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    categories: ['business', 'productivity', 'utilities'],
    lang: 'en',
    orientation: 'portrait-primary',
    scope: '/'
  }
}
