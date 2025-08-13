"use client";

import React from "react";
import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
import { useTranslations, useLocale } from "next-intl";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const WhyAdstationPage = () => {
  const t = useTranslations('whyAdstation');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className="min-h-screen bg-[#8DC63F] py-20">
      <section className="flex items-center justify-center relative text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 sm:mb-6 md:mb-8 leading-tight capitalize">
                {t('hero.title')}{" "}
                <span className="relative text-black">{t('hero.smartAdvertising')}</span>
              </h1>
            </div>
            <div className={`mt-6 lg:mt-0 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-lg sm:text-2xl md:text-4xl font-medium mb-3 sm:mb-4">
                {t('hero.subtitle')}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-black">
                {t('hero.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections with Green Background */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 md:space-y-16">
          {/* Local Leadership */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className={`order-2 lg:order-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
                {t('features.localLeadership.title')}
              </h3>
              <p className="text-base text-black sm:text-lg md:text-xl leading-relaxed">
                {t('features.localLeadership.description')}
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/local-leadership.png"
                alt={t('features.localLeadership.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Diverse Expertise */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1">
              <Image
                src="/images/why-adstation/diverse-expertise.png"
                alt={t('features.diverseExpertise.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className={`order-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
                {t('features.diverseExpertise.title')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                {t('features.diverseExpertise.description')}
              </p>
            </div>
          </div>

          {/* Smart Solutions */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className={`order-2 lg:order-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
                {t('features.smartSolutions.title')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                {t('features.smartSolutions.description')}
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/smart-solutions.png"
                alt={t('features.smartSolutions.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Full Transparency */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1">
              <Image
                src="/images/why-adstation/full-transparency.png"
                alt={t('features.fullTransparency.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className={`order-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
                {t('features.fullTransparency.title')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                {t('features.fullTransparency.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-8 sm:py-10 flex items-center justify-center overflow-hidden bg-[#416017]">
        {/* Watermark Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src="/watermark-logo.svg"
            alt="Logo Watermark"
            width={800}
            height={800}
            className="object-cover rounded-lg opacity-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[800px] xl:h-[800px]"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4">
          <div className="text-lg sm:text-xl md:text-2xl font-normal text-white">
            {t('advantages.title')}
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[120px] font-semibold text-white ${beVietnamPro.className}`}
          >
            {t('advantages.brand')}
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl font-normal text-white">
            {t('advantages.subtitle')}
          </div>
        </div>
      </section>

      {/* Feature Sections with White Background */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 md:space-y-16">
          {/* Spending Efficiency */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className={`order-2 lg:order-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                {t('features.spendingEfficiency.title')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                {t('features.spendingEfficiency.description')}
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/spending-efficiency.png"
                alt={t('features.spendingEfficiency.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Better Options */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1">
              <Image
                src="/images/why-adstation/better-options.png"
                alt={t('features.betterOptions.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className={`order-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                {t('features.betterOptions.title')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                {t('features.betterOptions.description')}
              </p>
            </div>
          </div>

          {/* Saving Time and Effort */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className={`order-2 lg:order-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                {t('features.savingTimeAndEffort.title')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                {t('features.savingTimeAndEffort.description')}
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/saving-time-and-effort.png"
                alt={t('features.savingTimeAndEffort.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Diverse and Integrated Services */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1">
              <Image
                src="/images/why-adstation/diverse-and-integrated-services.png"
                alt={t('features.diverseAndIntegratedServices.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className={`order-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                {t('features.diverseAndIntegratedServices.title')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                {t('features.diverseAndIntegratedServices.description')}
              </p>
            </div>
          </div>

          {/* Wide Geographical Coverage */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className={`order-2 lg:order-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                {t('features.wideGeographicalCoverage.title')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                {t('features.wideGeographicalCoverage.description')}
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/wide-geographical-coverage.png"
                alt={t('features.wideGeographicalCoverage.title')}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyAdstationPage;
