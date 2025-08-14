import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useQuoteDialog } from "@/contexts/quote-dialog-context";
import { useTranslations } from "next-intl";

const PointOfSalePage = () => {
  const { openDialog } = useQuoteDialog();
  const t = useTranslations("services");

  // Services color configuration
  const servicesConfig = [
    "bg-black",
    "bg-[#11ABC4]",
    "bg-[#118D8B]",
    "bg-[#4D449B]",
    "bg-[#FAB91B]",
    "bg-transparent",
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#E17932] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left rtl:text-right text-white max-w-2xl">
            <h1 className="text-2xl mb-6">{t("main.title")}</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              {t("pointOfSale.title")}
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              {t("pointOfSale.description")}
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
              src="/point-of-sale.svg"
              alt="Point of Sale Hero"
              width={500}
              height={500}
              className="object-contain max-w-full max-h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="pt-20">
        <div className="max-w-3xl mx-auto text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            {t("pointOfSale.sectionTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {servicesConfig.slice(0, 4).map((bgColor, index) => (
            <div
              key={index}
              className={`h-full w-full ${bgColor} text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
                {t(`pointOfSale.services.${index}.title`)}
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
                {t(`pointOfSale.services.${index}.description`)}
              </p>
              <Button
                size="lg"
                onClick={openDialog}
                className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
              >
                {t("pointOfSale.requestQuote")}
              </Button>
            </div>
          ))}

          {/* Image spanning from 2nd row 2nd column to 3rd row 2nd column - responsive positioning */}
          <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 bg-gray-800 overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/point-of-sale.jpg"
              alt="Point of Sale Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last service items */}
          {servicesConfig.slice(4).map((bgColor, index) => {
            // Make the 6th service (index 1 in this slice) empty for design purposes
            // Hide on mobile and small screens, only show on large screens
            if (index === 1) {
              return (
                <div
                  key={index + 4}
                  className={`h-full w-full ${bgColor} aspect-square hidden lg:block`}
                >
                  {/* Empty space for design */}
                </div>
              );
            }

            return (
              <div
                key={index + 4}
                className={`h-full w-full ${bgColor} text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden`}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
                  {t(`pointOfSale.services.${index + 4}.title`)}
                </h3>
                <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
                  {t(`pointOfSale.services.${index + 4}.description`)}
                </p>
                <Button
                  size="lg"
                  onClick={openDialog}
                  className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
                >
                  {t("pointOfSale.requestQuote")}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PointOfSalePage;
