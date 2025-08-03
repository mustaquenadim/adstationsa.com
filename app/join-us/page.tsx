import Image from "next/image";
import React from "react";

const JoinUsPage = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-[#8DC63F] text-black overflow-hidden flex items-center justify-center">
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 px-10">
          <div className="text-left text-white max-w-2xl flex flex-col justify-center h-full">
            <div className="text-2xl font-medium mb-6">Join Our Partners</div>
            <div>adstation</div>
            <h1 className="text-4xl mb-6 text-white">
              Your smart partner for digital growth
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-white">
              Adstation, the first digital platform that connects advertising
              service providers with their clients, aims to provide integrated
              services to businesses and organizations. With an ambitious
              vision, we seek to facilitate access to advertising services
              through smart partnerships, achieving shared goals that align with
              digital transformation and create greater opportunities for
              success for the advertising sector.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/handshake.svg"
              alt="Join Us"
              width={500}
              height={500}
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
    </>
  );
};

export default JoinUsPage;
