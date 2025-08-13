"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { Be_Vietnam_Pro } from "next/font/google";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <>
      {/* Top Section - Green Background */}
      <section className="relative w-full min-h-screen bg-[#8dc73f] overflow-hidden">
        {/* Large Text Overlay */}
        <div className={`hidden md:block absolute top-40 ${isRTL ? 'left-10' : 'right-10'}`}>
          <Image
            src="/adstation-watermark.svg"
            alt="About Hero"
            width={600}
            height={800}
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content */}
        <div className={`relative z-20 flex items-center justify-start h-screen ${isRTL ? 'pr-16' : 'pl-16'}`}>
          <div className={`${isRTL ? 'text-right' : 'text-left'} text-white max-w-2xl`}>
            <h1 className="text-4xl mb-6">{t('hero.title')}</h1>
            <div className="text-6xl font-normal text-black">
              {t('hero.subtitle')}{" "}
              <span className="relative">
                {isRTL ? 'التقليدي' : 'traditional'}
                <svg
                  viewBox="0 0 286 73"
                  fill="none"
                  className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                      duration: 1.25,
                      ease: "easeInOut",
                    }}
                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </div>
            <p className="mt-8 text-xl font-normal leading-relaxed text-black">
              {t('hero.description')}
            </p>
          </div>
        </div>

        <div className="text-center py-20 space-y-7">
          <h2
            className={`text-6xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[160px] font-semibold text-white ${beVietnamPro.className}`}
          >
            <span className="text-black">ad</span>station
          </h2>
          <p className="text-xl font-normal leading-relaxed max-w-3xl mx-auto px-8">
            {t('brandSection.description')}
          </p>
        </div>
      </section>

      {/* Middle Section - Purple Background */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#6b46c1]">
        {/* Background Image */}
        <Image
          src="/about-bg-two.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className={`z-0 ${isRTL ? '' : 'scale-x-[-1]'}`}
          priority
        />

        {/* Content */}
        <div className={`relative z-20 ${isRTL ? 'text-right' : 'text-left'} text-white px-8 max-w-2xl`}>
          <h2 className="text-4xl md:text-5xl font-medium mb-8 drop-shadow-lg">
            {t('storySection.title')}
          </h2>
          <p className="text-lg md:text-xl font-light mb-6 drop-shadow leading-relaxed">
            {t('storySection.description')}
          </p>
        </div>
      </section>

      <section className="container mx-auto relative py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          {/* Vision */}
          <AboutCard
            imageSrc="/hands-together.jpg"
            imageAlt={t('cards.vision.overlayText')}
            overlayText={t('cards.vision.overlayText')}
            title={t('cards.vision.title')}
            description={t('cards.vision.description')}
            overlayColor="#4a8f6b"
            titleColor="#4a8f6b"
            isRTL={isRTL}
          />
          {/* Mission */}
          <AboutCard
            imageSrc="/teamwork.jpg"
            imageAlt={t('cards.mission.overlayText')}
            overlayText={t('cards.mission.overlayText')}
            title={t('cards.mission.title')}
            description={t('cards.mission.description')}
            overlayColor="#c1423d"
            titleColor="#c1423d"
            isRTL={isRTL}
          />
          {/* Values */}
          <AboutCard
            imageSrc="/paper-boat.jpg"
            imageAlt={t('cards.values.overlayText')}
            overlayText={t('cards.values.overlayText')}
            title={t('cards.values.title')}
            description={
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span>
                    <strong>{t('cards.values.experience').split(':')[0]}:</strong> {t('cards.values.experience').split(':')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span>
                    <strong>{t('cards.values.innovation').split(':')[0]}:</strong> {t('cards.values.innovation').split(':')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span>
                    <strong>{t('cards.values.transparency').split(':')[0]}:</strong> {t('cards.values.transparency').split(':')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span>
                    <strong>{t('cards.values.clientCentric').split(':')[0]}:</strong> {t('cards.values.clientCentric').split(':')[1]}
                  </span>
                </div>
              </div>
            }
            overlayColor="#818181"
            titleColor="#818181"
            isRTL={isRTL}
          />
        </div>
      </section>
    </>
  );
}

interface AboutCardProps {
  imageSrc: string;
  imageAlt: string;
  overlayText: string;
  title: string;
  description: React.ReactNode;
  className?: string;
  overlayColor?: string;
  titleColor?: string;
  isRTL: boolean;
}

const AboutCard = ({
  imageSrc,
  imageAlt,
  overlayText,
  title,
  description,
  overlayColor,
  className,
  titleColor,
  isRTL,
}: AboutCardProps) => {
  return (
    <Card className={cn("w-full shadow-none border-none pt-0", className)}>
      <CardContent className="px-0">
        <div className="relative aspect-video">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={280}
            className="w-full h-full rounded-xl object-cover grayscale"
          />
          <div
            className="absolute inset-0 flex items-end justify-center bg-opacity-40 rounded-xl pb-10"
            style={{ backgroundColor: `${overlayColor}80` }}
          >
            <h3 className="text-white text-2xl font-medium text-center">
              {overlayText}
            </h3>
          </div>
        </div>
      </CardContent>
      <CardHeader className="p-0">
        <CardTitle
          className={cn("text-2xl font-bold", isRTL ? "text-right" : "text-left")}
          style={{ color: titleColor }}
        >
          {title}
        </CardTitle>
        <CardDescription className={cn("text-lg text-black font-light", isRTL ? "text-right" : "text-left")}>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
