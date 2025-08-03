import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Be_Vietnam_Pro } from "next/font/google";
import * as motion from "motion/react-client";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const WhyAdstationPage = () => {
  return (
    <section className="min-h-screen bg-[#8DC63F] py-20">
      <section className="flex items-center justify-center relative text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 sm:mb-6 md:mb-8 leading-tight capitalize">
                We are more than just a platform.. We are your partner for{" "}
                <span className="relative text-black">Smart Advertising</span>
              </h1>
            </div>
            <div className="mt-6 lg:mt-0">
              <h3 className="text-lg sm:text-2xl md:text-4xl font-medium mb-3 sm:mb-4">
                Why Adstation?
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-black">
                In the world of traditional advertising, many marketing managers
                waste time and effort searching for the ideal advertising
                partner.
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
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
                Local Leadership
              </h3>
              <p className="text-base text-black sm:text-lg md:text-xl leading-relaxed">
                The first specialized Saudi platform that integrates traditional
                advertising services with digital solutions to keep pace with
                market development.
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/local-leadership.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
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
                alt="Three people's hands in a business meeting"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
                Diverse Expertise
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                A diverse team of experts in advertising and marketing, and
                sales managers for local and global brands.
              </p>
            </div>
          </div>

          {/* Smart Solutions */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
                Smart Solutions
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                We combine the power of traditional advertising with the
                efficiency of digital technology to give you the best return on
                investment.
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/smart-solutions.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
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
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
                Full Transparency
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Clear prices, real evaluations for providers, and continuous
                follow-up from order to completion.
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
            Advantages
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[120px] font-semibold text-white ${beVietnamPro.className}`}
          >
            adstation
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl font-normal text-white">
            Competitiveness
          </div>
        </div>
      </section>

      {/* Feature Sections with White Background */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14 md:space-y-16">
          {/* Spending Efficiency */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                Spending Efficiency
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                Our experts negotiate on your behalf to achieve the best prices
                from trusted providers, with maximum value for investment.
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/spending-efficiency.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
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
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                Better Options
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                We submit your request to more than 5 providers in each
                category, so you can choose from multiple offers and ideas that
                achieve superior results for you.
              </p>
            </div>
          </div>

          {/* Saving Time and Effort */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                Saving Time and Effort
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                Our team follows up on your requests step by step, ensuring fast
                completion without you bearing the burdens of communication and
                coordination.
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/saving-time-and-effort.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
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
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                Diverse and Integrated Services
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                We cover more than 50 traditional advertising services, and
                continuously expand through new partnerships with specialized
                service providers.
              </p>
            </div>
          </div>

          {/* Wide Geographical Coverage */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 text-[#8DC63F]">
                Wide Geographical Coverage
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                Our services reach all cities in the Kingdom and ensure fast
                completion of your projects and advertising campaigns at the
                lowest cost, with speed and high reliability through a wide
                network of advertising service providers.
              </p>
            </div>
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/why-adstation/wide-geographical-coverage.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
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
