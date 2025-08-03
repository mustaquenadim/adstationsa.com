import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

// Indoor signage services data structure
const indoorSignageServicesData = [
  {
    id: 1,
    title: "Retail Store Signage",
    description:
      "Custom indoor signage solutions for retail stores, boutiques, and shopping centers to enhance brand presence.",
    bgColor: "bg-black",
    link: "/services/indoor-signage",
  },
  {
    id: 2,
    title: "Office Building Signage",
    description:
      "Professional signage for office buildings, corporate headquarters, and business centers with modern designs.",
    bgColor: "bg-[#11ABC4]",
    link: "/services/indoor-signage",
  },
  {
    id: 3,
    title: "Mall & Shopping Center Signs",
    description:
      "Comprehensive signage solutions for malls, shopping centers, and commercial complexes.",
    bgColor: "bg-[#118D8B]",
    link: "/services/indoor-signage",
  },
  {
    id: 4,
    title: "Restaurant & Hospitality Signs",
    description:
      "Custom signage for restaurants, hotels, and hospitality venues to create memorable dining experiences.",
    bgColor: "bg-[#4D449B]",
    link: "/services/indoor-signage",
  },
  {
    id: 5,
    title: "Healthcare Facility Signage",
    description:
      "Specialized signage for hospitals, clinics, and healthcare facilities with clear wayfinding systems.",
    bgColor: "bg-[#FAB91B]",
    link: "/services/indoor-signage",
  },
  {
    id: 6,
    title: "Educational Institution Signs",
    description:
      "Signage solutions for schools, universities, and educational institutions with informative displays.",
    bgColor: "bg-[#E17932]",
    link: "/services/indoor-signage",
  },
  {
    id: 7,
    title: "Digital Indoor Displays",
    description:
      "Interactive digital signage and display systems for modern indoor environments.",
    bgColor: "bg-[#6E42F2]",
    link: "/services/indoor-signage",
  },
];

const IndoorSignagePage = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#4D449B] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Indoor Signage Solutions
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              Professional indoor signage solutions that enhance your brand
              presence and improve customer experience in any indoor
              environment.
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
              src="/indoor-signage.svg"
              alt="Indoor Signage Hero"
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
            Our Indoor Signage Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {indoorSignageServicesData.slice(0, 4).map((service) => (
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
              src="/indoor-signage-service.png"
              alt="Indoor Signage Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {indoorSignageServicesData.slice(4).map((service) => (
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

export default IndoorSignagePage;
