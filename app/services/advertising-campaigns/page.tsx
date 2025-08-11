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
    <section className="relative w-full min-h-screen bg-[#8dc73f] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Booking Services Advertising Campaigns
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              Soon on{" "}
              <span className="block font-medium text-4xl md:text-5xl lg:text-6xl py-2">
                adstation
              </span>{" "}
              Outdoor advertising campaign booking service in streets, malls,
              airports, metro and bus stations
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

      <div className="h-screen pt-20">
        <div className="max-w-3xl mx-auto text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            Every day...more services, stronger partnerships To help you grow
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
