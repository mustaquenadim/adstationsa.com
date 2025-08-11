"use client";

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useQuoteDialog } from "@/contexts/quote-dialog-context";

// Outdoor advertising services data structure
const outdoorAdvertisingServicesData = [
  {
    id: 1,
    title: "Advertising Project Fences Hoarding Panels",
    description:
      "At ADSTATION, we offer, through our network of competent partners, professional, high-quality advertising fence solutions for projects, tailored to suit a variety of needs. Whether you're looking for temporary advertising coverage or a permanent design, we have you covered.",
    bgColor: "bg-black",
    link: "/services/outdoor-advertising",
  },
  {
    id: 2,
    title: "Manufacture of giant billboards on roads and buildings",
    description:
      "ADSTATION is proud of its partner service providers who specialize in manufacturing and executing giant billboards on roads, buildings, and roofs, with high quality and professional standards.",
    bgColor: "bg-[#11ABC4]",
    link: "/services/outdoor-advertising",
  },
  {
    id: 3,
    title: "Cladding panels and raised letters",
    description:
      "ADSTATION partners provide high-quality cladding and lettering services using aluminum composite panels in a variety of finishes. Lettering is also manufactured in a variety of materials, such as acrylic and stainless steel, with front or back lighting options.",
    bgColor: "bg-[#118D8B]",
    link: "/services/outdoor-advertising",
  },
  {
    id: 4,
    title: "Exhibition boards",
    description:
      "Exhibition facade panels, side panels (polysign), internal information panels for displaying departments and services within the exhibition, temporary display panels (roll-ups and stands) within the exhibition, in addition to illuminated panels that provide a professional appearance and high visual appeal.",
    bgColor: "bg-[#4D449B]",
    link: "/services/outdoor-advertising",
  },
  {
    id: 5,
    title: "Suspended Column Panels",
    description:
      "Our lampposts are available in a variety of styles, including single, double, illuminated, and seasonal, all designed to be clearly and attractively displayed on streets, events, and temporary or permanent advertisements.",
    bgColor: "bg-[#FAB91B]",
    link: "/services/outdoor-advertising",
  },
  {
    id: 6,
    title: "Interior panels for facilities, companies, and buildings",
    description:
      "AdStation partners offer a variety of indoor signage solutions, including department signs, parking signs, site signs, and indoor event signs, all with high quality and efficiency that ensure clear identity and organization within facilities.",
    bgColor: "bg-[#E17932]",
    link: "/services/outdoor-advertising",
  },
  {
    id: 7,
    title: "Paintings",
    description:
      "ADSTATION and its certified partners offer integrated solutions for designing and implementing various types of 3D billboards, including 3D, illuminated, interactive, and exhibition and facade displays, with innovative ideas that attract attention in various locations and events.",
    bgColor: "bg-[#6E42F2]",
    link: "/services/outdoor-advertising",
  },
];

const OutdoorAdvertisingPage = () => {
  const { openDialog } = useQuoteDialog();

  return (
    <section className="relative w-full min-h-screen bg-[#118D8B] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Services and solutions for all types of panels
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              We provide you with all the services and solutions for external
              panels{" "}
              <span className="block font-medium text-4xl md:text-5xl lg:text-6xl py-2">
                adstation
              </span>{" "}
              Available in various sizes and materials, whether for road signs,
              facades, or temporary billboards, we offer everything you need for
              outdoor advertising. Our experts understand your requirements and
              negotiate to achieve the best results.
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
              src="/outdoor-advertising-service.svg"
              alt="Outdoor Advertising Hero"
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
            Our list of services and panel solutions includes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {outdoorAdvertisingServicesData.slice(0, 4).map((service) => (
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
                onClick={openDialog}
                className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
              >
                Request a Quote
              </Button>
            </div>
          ))}

          {/* Image spanning from 2nd row 2nd column to 3rd row 2nd column - responsive positioning */}
          <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 bg-gray-800 overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/outdoor-advertising.png"
              alt="Outdoor Advertising Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {outdoorAdvertisingServicesData.slice(4).map((service) => (
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
                onClick={openDialog}
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

export default OutdoorAdvertisingPage;
