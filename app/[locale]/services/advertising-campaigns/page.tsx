import * as motion from "motion/react-client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AdvertisingCampaignsPage = () => {
  const t = useTranslations("services");
  return (
    <section className="relative w-full min-h-screen bg-[#8dc73f] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left rtl:text-right text-white max-w-2xl">
            <h1 className="text-2xl mb-6">{t("main.title")}</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              {t("advertisingCampaigns.title")}
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              {t("advertisingCampaigns.description")}
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
              src="/advertising-campaigns.svg"
              alt="Advertising Campaigns Hero"
              width={700}
              height={700}
              className="object-contain max-w-full max-h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="h-screen pt-20">
        <div className="max-w-3xl mx-auto text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            {t("advertisingCampaigns.sectionTitle")}
          </h2>
        </div>

        <div className="flex items-center justify-center mb-20">
          <Image
            src="/loading.png"
            alt="Advertising Campaign Services Loading"
            width={800}
            height={800}
            className="object-contain w-full h-auto max-w-md md:max-w-lg lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvertisingCampaignsPage;
