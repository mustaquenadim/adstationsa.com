import PartnerRegistrationForm from "@/components/forms/partner-registration-form";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const JoinUsPage = () => {
  const t = useTranslations("joinUs");
  return (
    <>
      {/* hero section */}
      <section className="relative w-full min-h-screen bg-[#8DC63F] text-black overflow-hidden flex items-center justify-center py-10 md:py-0">
        <div className="container relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-0 mx-auto">
          <div className="text-left rtl:text-right text-white flex flex-col justify-center h-full order-2 lg:order-1">
            <div className="text-xl sm:text-2xl font-medium mb-4 md:mb-6">
              {t("hero.title")}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-white leading-tight">
              {t("hero.subtitle")}
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
              {t("hero.description")}
            </p>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2">
            <Image
              src="/handshake.svg"
              alt="Join Us"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-screen overflow-hidden bg-[#8F66DB]">
        {/* Background Image */}
        <Image
          src="/join-us.jpg"
          alt="Hero Background"
          layout="fill"
          quality={100}
          className="object-cover z-0 ltr:scale-x-[-1] rtl:scale-x-100 hidden md:block"
          priority
        />

        <div className="container mx-auto py-20 z-20 relative md:h-screen">
          {/* Content */}
          <div className="relative text-left rtl:text-right text-white flex flex-col gap-8 md:h-full md:justify-between">
            <div>
              {/* Mobile illustration - only visible on mobile */}
              <div className="flex justify-center mb-10 md:hidden">
                <Image
                  src="/question-marks-illustration.png"
                  alt="Question Marks Illustration"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              <h2 className="text-4xl md:text-5xl font-medium mb-4 drop-shadow-lg text-center md:text-left md:rtl:text-right">
                {t("whySection.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              <div className="p-4 rounded-lg flex flex-col items-center gap-8">
                <Image
                  src="/icons/icon-1.png"
                  alt="Join Us"
                  width={100}
                  height={100}
                  className="object-contain filter brightness-0 invert"
                />
                <p className="text-base sm:text-lg leading-relaxed text-white text-center">
                  {t("whySection.benefits.0.description")}
                </p>
              </div>

              <div className="p-4 rounded-lg flex flex-col items-center gap-8">
                <Image
                  src="/icons/icon-2.png"
                  alt="Join Us"
                  width={100}
                  height={100}
                  className="object-contain filter brightness-0 invert"
                />
                <p className="text-base sm:text-lg leading-relaxed text-white text-center">
                  {t("whySection.benefits.1.description")}
                </p>
              </div>

              <div className="p-4 rounded-lg flex flex-col items-center gap-8">
                <Image
                  src="/icons/icon-3.png"
                  alt="Join Us"
                  width={100}
                  height={100}
                  className="object-contain filter brightness-0 invert"
                />
                <p className="text-base sm:text-lg leading-relaxed text-white text-center">
                  {t("whySection.benefits.2.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-80 overflow-hidden bg-[#8F66DB]">
        <Image
          src="/handshake.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center 60%"
          quality={100}
          className="z-0 scale-x-[-1]"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F7B76]/80 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-6 space-y-7">
            <h3 className="text-3xl md:text-4xl font-medium drop-shadow-lg capitalize">
              {t("ctaSection.title")}
            </h3>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              {t("ctaSection.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto overflow-hidden">
        {/* Partner Registration Banner */}
        <div className="relative mb-8 overflow-hidden">
          {/* Background with gradient and angle */}
          <div className="relative h-48 bg-gradient-to-r from-blue-400 to-green-400">
            {/* Content container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h2 className="text-3xl md:text-4xl font-medium capitalize tracking-wide mb-2">
                  {t("formSection.title")}
                </h2>
                <div className="w-16 h-0.5 bg-white mx-auto mb-3"></div>
                <p className="text-sm md:text-base opacity-90">
                  {t("formSection.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <h2 className="text-2xl font-medium mb-6">Partner Registration</h2> */}
        <div className="max-w-lg mx-auto rounded-lg p-8 shadow-lg my-10">
          <PartnerRegistrationForm />
        </div>
      </section>
    </>
  );
};

export default JoinUsPage;
