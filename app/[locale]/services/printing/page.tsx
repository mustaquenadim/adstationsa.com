"use client";

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useQuoteDialog } from "@/contexts/quote-dialog-context";
import { useTranslations } from "next-intl";

const PrintingPage = () => {
  const { openDialog } = useQuoteDialog();
  const t = useTranslations("services");

  // Services color configuration
  const servicesConfig = [
    "bg-black",
    "bg-[#11ABC4]",
    "bg-[#118D8B]",
    "bg-[#4D449B]",
    "bg-[#FAB91B]",
    "bg-[#E17932]",
    "bg-[#6E42F2]",
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#11ABC4] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left rtl:text-right text-white max-w-2xl">
            <h1 className="text-2xl mb-6">{t("main.title")}</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              {t("printing.title")}
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              {t("printing.description")}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center overflow-hidden order-1 md:order-2 mt-20">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/printing-services.svg"
              alt="Printing Services Hero"
              width={500}
              height={500}
              className="object-contain max-w-full max-h-full w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="pt-20">
        <div className="max-w-3xl mx-auto text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium capitalize">
            {t("printing.sectionTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {servicesConfig.slice(0, 4).map((bgColor, index) => (
            <div
              key={index}
              className={`h-full w-full ${bgColor} text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium line-clamp-3 h-24 sm:h-28 lg:h-24 xl:h-36 capitalize">
                {t(`printing.services.${index}.title`)}
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 line-clamp-5 h-30 sm:h-32 lg:h-30 xl:h-40">
                {t(`printing.services.${index}.description`)}
              </p>
              <Button
                size="xl"
                onClick={openDialog}
                className="px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
              >
                {t("printing.requestQuote")}
              </Button>
            </div>
          ))}

          {/* Image spanning from 2nd row 2nd column to 3rd row 2nd column - responsive positioning */}
          <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 bg-gray-800 overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/printing-services.png"
              alt="Printing Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {servicesConfig.slice(4).map((bgColor, index) => (
            <div
              key={index + 4}
              className={`h-full w-full ${bgColor} text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium line-clamp-3 h-24 sm:h-28 lg:h-24 xl:h-36 capitalize">
                {t(`printing.services.${index + 4}.title`)}
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 line-clamp-5 h-30 sm:h-32 lg:h-30 xl:h-40">
                {t(`printing.services.${index + 4}.description`)}
              </p>
              <Button
                size="xl"
                onClick={openDialog}
                className="px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
              >
                {t("printing.requestQuote")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingPage;
