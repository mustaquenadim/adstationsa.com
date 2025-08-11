import PartnerRegistrationForm from "@/components/forms/partner-registration-form";
import Image from "next/image";
import React from "react";

const JoinUsPage = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-[#8DC63F] text-black overflow-hidden flex items-center justify-center py-10 md:py-0">
        <div className="container relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-0 mx-auto">
          <div className="text-left text-white flex flex-col justify-center h-full order-2 lg:order-1">
            <div className="text-xl sm:text-2xl font-medium mb-4 md:mb-6">Join Our Partners</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-white leading-tight">
              Your smart partner for digital growth
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
              Adstation, the first digital platform that connects advertising
              service providers with their clients, aims to provide integrated
              services to businesses and organizations. With an ambitious
              vision, we seek to facilitate access to advertising services
              through smart partnerships, achieving shared goals that align with
              digital transformation and create greater opportunities for
              success for the advertising sector.
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

      <section className="relative w-full h-screen overflow-hidden bg-[#8F66DB]">
        {/* Background Image */}
        <Image
          src="/join-us.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 scale-x-[-1]"
          priority
        />

        <div className="container mx-auto py-20 z-20 relative h-full">
          {/* Content */}
          <div className="h-full relative text-left text-white flex flex-col justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-medium mb-4 drop-shadow-lg">
              Why Adstation?
            </h2>
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
                  Additional digital sales channel: We showcase your services to
                  thousands of targeted customers through our digital platform,
                  increasing your revenue.
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
                  Free promotion with no upfront costs: We cover the costs of
                  marketing your services, without any financial obligations
                  from you.
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
                  Service Promotion Campaigns: We design marketing offers and
                  campaigns tailored to your audience, enhancing the appeal of
                  your services and increasing demand.
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
              Join Our Partner Network!
            </h3>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Make your advertising services accessible to thousands of
              customers! Register your data and information with us and start
              growing your business today.
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
                  Partner Registration Form
                </h2>
                <div className="w-16 h-0.5 bg-white mx-auto mb-3"></div>
                <p className="text-sm md:text-base opacity-90">
                  Complete your partner application with detailed information
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
