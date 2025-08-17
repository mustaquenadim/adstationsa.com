import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'ar',

  // Prefix even the default locale
  localePrefix: 'always',

  // Configure the pathnames for each locale
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/services': '/services',
    '/services/outdoor-advertising': '/services/outdoor-advertising',
    '/services/creative-design': '/services/creative-design',
    '/services/printing': '/services/printing',
    '/services/exhibitions-events': '/services/exhibitions-events',
    '/services/indoor-signage': '/services/indoor-signage',
    '/services/point-of-sale': '/services/point-of-sale',
    '/services/advertising-campaigns': '/services/advertising-campaigns',
    '/why-adstation': '/why-adstation',
    '/join-us': '/join-us',
    '/blog': '/blog',
    '/contact': '/contact',
    '/quote': '/quote'
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
