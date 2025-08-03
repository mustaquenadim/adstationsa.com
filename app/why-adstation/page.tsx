import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WhyAdstationPage = () => {
  return (
    <section className="min-h-screen bg-[#8DC63F]">
      <section className="relative text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span>Why Adstation?</span>
              <h1 className="text-5xl lg:text-6xl font-medium mb-8 leading-tight">
                We are more than just a platform.. We are your partner Smart
                advertising
              </h1>
            </div>
            <div className="">
              <h3 className="text-2xl font-bold mb-4">Why Adstation?</h3>
              <p className="text-lg leading-relaxed">
                In the world of traditional advertising, many marketing managers
                waste time and effort searching for the ideal advertising
                partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections with Green Background */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Local Leadership */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Local Leadership</h3>
              <p className="text-xl leading-relaxed">
                The first specialized Saudi platform that integrates traditional
                advertising services with digital solutions to keep pace with
                market development.
              </p>
            </div>
            <div className="relative h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/why-adstation/local-leadership.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Diverse Expertise */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 bg-white/10 rounded-2xl flex items-center justify-center order-2 lg:order-1 overflow-hidden">
              <Image
                src="/images/why-adstation/diverse-expertise.png"
                alt="Three people's hands in a business meeting"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="text-white order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6">Diverse Expertise</h3>
              <p className="text-xl leading-relaxed">
                A diverse team of experts in advertising and marketing, and
                sales managers for local and global brands.
              </p>
            </div>
          </div>

          {/* Smart Solutions */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Smart Solutions</h3>
              <p className="text-xl leading-relaxed">
                We combine the power of traditional advertising with the
                efficiency of digital technology to give you the best return on
                investment.
              </p>
            </div>
            <div className="relative h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/why-adstation/smart-solutions.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Full Transparency */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/why-adstation/full-transparency.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="text-white order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6">Full Transparency</h3>
              <p className="text-xl leading-relaxed">
                Clear prices, real evaluations for providers, and continuous
                follow-up from order to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Section Divider */}
      <section className="py-8 bg-green-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white">Advantages</h2>
            <h2 className="text-3xl font-bold text-white">
              Competitive adstation
            </h2>
          </div>
        </div>
      </section>

      {/* Feature Sections with White Background */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Spending Efficiency */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Spending Efficiency
              </h3>
              <p className="text-xl leading-relaxed text-gray-700">
                Our experts negotiate on your behalf to achieve the best prices
                from trusted providers, with maximum value for investment.
              </p>
            </div>
            <div className="relative h-100 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/why-adstation/spending-efficiency.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Better Options */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-100 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/why-adstation/better-options.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Better Options
              </h3>
              <p className="text-xl leading-relaxed text-gray-700">
                We submit your request to more than 5 providers in each
                category, so you can choose from multiple offers and ideas that
                achieve superior results for you.
              </p>
            </div>
          </div>

          {/* Saving Time and Effort */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Saving Time and Effort
              </h3>
              <p className="text-xl leading-relaxed text-gray-700">
                Our team follows up on your requests step by step, ensuring fast
                completion without you bearing the burdens of communication and
                coordination.
              </p>
            </div>
            <div className="relative h-100 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/why-adstation/saving-time-and-effort.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Diverse and Integrated Services */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-100 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/why-adstation/diverse-and-integrated-services.png"
                alt="Person in traditional Saudi attire interacting with advanced digital interface"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Diverse and Integrated Services
              </h3>
              <p className="text-xl leading-relaxed text-gray-700">
                We cover more than 50 traditional advertising services, and
                continuously expand through new partnerships with specialized
                service providers.
              </p>
            </div>
          </div>

          {/* Wide Geographical Coverage */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Wide Geographical Coverage
              </h3>
              <p className="text-xl leading-relaxed text-gray-700">
                Our services reach all cities in the Kingdom and ensure fast
                completion of your projects and advertising campaigns at the
                lowest cost, with speed and high reliability through a wide
                network of advertising service providers.
              </p>
            </div>
            <div className="relative h-100 bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
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

      {/* Call to Action Section */}
      <section className="py-20 px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Journey with Adstation Today
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join the leading advertising platform in the Kingdom and get the
            best services at the best prices
          </p>
          <Button className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8 py-4 text-lg font-semibold">
            Contact Us Now
          </Button>
        </div>
      </section>
    </section>
  );
};

export default WhyAdstationPage;
