import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

// Advertising campaigns services data structure
const advertisingCampaignsServicesData = [
  {
    id: 1,
    title: "Strategic Campaign Planning",
    description:
      "Comprehensive advertising campaign strategies designed to reach your target audience and achieve business objectives.",
    bgColor: "bg-black",
    link: "/services/advertising-campaigns",
  },
  {
    id: 2,
    title: "Multi-Channel Campaigns",
    description:
      "Integrated advertising campaigns across multiple channels including outdoor, digital, print, and social media.",
    bgColor: "bg-[#11ABC4]",
    link: "/services/advertising-campaigns",
  },
  {
    id: 3,
    title: "Location-Based Advertising",
    description:
      "Strategic placement of advertising materials in high-traffic locations for maximum visibility and impact.",
    bgColor: "bg-[#118D8B]",
    link: "/services/advertising-campaigns",
  },
  {
    id: 4,
    title: "Seasonal Campaign Management",
    description:
      "Specialized seasonal advertising campaigns that capitalize on peak business periods and consumer behavior.",
    bgColor: "bg-[#4D449B]",
    link: "/services/advertising-campaigns",
  },
  {
    id: 5,
    title: "Digital Campaign Integration",
    description:
      "Seamless integration of traditional and digital advertising for comprehensive campaign coverage.",
    bgColor: "bg-[#FAB91B]",
    link: "/services/advertising-campaigns",
  },
  {
    id: 6,
    title: "Performance Analytics",
    description:
      "Comprehensive campaign performance tracking and analytics to measure ROI and optimize future campaigns.",
    bgColor: "bg-[#E17932]",
    link: "/services/advertising-campaigns",
  },
  {
    id: 7,
    title: "Brand Awareness Campaigns",
    description:
      "Focused campaigns designed to increase brand recognition and establish market presence.",
    bgColor: "bg-[#6E42F2]",
    link: "/services/advertising-campaigns",
  },
];

const AdvertisingCampaignsPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#6E42F2] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Advertising Campaign Solutions
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              Strategic advertising campaigns that deliver measurable results
              and drive business growth through targeted messaging and
              placement.
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
              width={350}
              height={350}
              className="object-contain max-w-full max-h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="pt-20">
        <div className="max-w-3xl mx-auto text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            Our Advertising Campaign Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {advertisingCampaignsServicesData.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className={`h-full w-full ${service.bgColor} text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
                {service.description}
              </p>
              <Button
                size="lg"
                className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
              >
                Request a Quote
              </Button>
            </div>
          ))}

          {/* Image spanning from 2nd row 2nd column to 3rd row 2nd column - responsive positioning */}
          <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 bg-gray-800 overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/advertising-campaigns-service.png"
              alt="Advertising Campaigns Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {advertisingCampaignsServicesData.slice(4).map((service) => (
            <div
              key={service.id}
              className={`h-full w-full ${service.bgColor} text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
                {service.description}
              </p>
              <Button
                size="lg"
                className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
              >
                Request a Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisingCampaignsPage;
