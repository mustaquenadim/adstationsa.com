"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Facebook,
  Instagram,
  X,
  Pinterest,
  TikTok,
  YouTube,
  SaudiBusinessCenter,
} from "./icons";

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-black text-white">
      {/* Navigation and Calls to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Navigation Links */}
        <div className="max-w-lg mx-auto flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4 sm:gap-x-8 sm:gap-y-4 mb-6 rtl:sm:space-x-reverse">
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            {t('navigation.about')}
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            {t('navigation.services')}
          </Link>
          <Link
            href="/why-adstation"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            {t('navigation.whyAdstation')}
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            {t('navigation.blog')}
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            {t('navigation.contact')}
          </Link>
          <Link
            href="/join-us"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            {t('cta.becomePartner')}
          </Link>
          <Link
            href="/quote"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            {t('cta.getQuote')}
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-x-4 sm:gap-x-6 mb-8 sm:mb-12 mt-12 rtl:space-x-reverse">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Facebook size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Instagram size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Pinterest size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <TikTok size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <YouTube size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
        </div>

        {/* Business Logos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
          {/* Saudi Business Center Logo */}
          <SaudiBusinessCenter
            size="80"
            className="sm:w-24 sm:h-24 lg:w-25 lg:h-25"
            color="white"
          />

          {/* Ameyez Logo */}
          <Image
            src="/images/ameyez.png"
            alt="Ameyez"
            width={120}
            height={120}
            className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
