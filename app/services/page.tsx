import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const ServicesPage = () => {
  const t = useTranslations('services');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // Services data structure with color and link info
  const servicesConfig = [
    {
      bgColor: "bg-[#F3746F]",
      link: "/services/creative-design",
    },
    {
      bgColor: "bg-[#11ABC4]",
      link: "/services/printing",
    },
    {
      bgColor: "bg-[#118D8B]",
      link: "/services/outdoor-advertising",
    },
    {
      bgColor: "bg-[#4D449B]",
      link: "/services/indoor-signage",
    },
    {
      bgColor: "bg-[#FAB91B]",
      link: "/services/exhibitions-events",
    },
    {
      bgColor: "bg-[#E17932]",
      link: "/services/point-of-sale",
    },
    {
      bgColor: "bg-[#6E42F2]",
      link: "/services/advertising-campaigns",
    },
  ];
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Mobile Image - Above Content */}
      <div className="block md:hidden pt-16 pb-4 px-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/services-illustration.svg"
            alt="Services Hero"
            width={400}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-start h-auto min-h-[60vh] md:h-screen px-10">
        <div className="text-left rtl:text-right text-white max-w-2xl">
          <h1 className="text-4xl mb-6">{t('main.title')}</h1>
          <div className="text-6xl font-normal text-white">
            {t('main.heroTitle')}{" "}
          </div>
          <p className="mt-8 text-xl font-light leading-relaxed text-white">
            {t('main.heroDescription')}
          </p>
        </div>

        {/* Background Image */}
        <div className={`absolute ${isArabic ? 'left-10' : 'right-10'} top-40 hidden md:block`}>
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/services-illustration.svg"
              alt="Services Hero"
              width={600}
              height={800}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="max-w-2xl text-white text-center text-md font-normal">
          {t('main.description')}
        </p>
      </div>

      <div className="py-20">
        <div className="max-w-3xl mx-auto text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            {t('main.sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {servicesConfig.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className={`h-full w-full ${service.bgColor} text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
                {t(`list.${index}.title`)}
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
                {t(`list.${index}.description`)}
              </p>
              <Link href={service.link}>
                <Button
                  size="lg"
                  className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
                >
                  {t('main.learnMore')}{" "}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}

          {/* Image spanning from 2nd row 2nd column to 3rd row 2nd column - responsive positioning */}
          <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 bg-gray-800 overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/services-hand.png"
              alt="Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {servicesConfig.slice(4).map((service, index) => (
            <div
              key={index + 4}
              className={`h-full w-full ${service.bgColor} text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
                {t(`list.${index + 4}.title`)}
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
                {t(`list.${index + 4}.description`)}
              </p>
              <Link href={service.link}>
                <Button
                  size="lg"
                  className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
                >
                  {t('main.learnMore')}{" "}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
