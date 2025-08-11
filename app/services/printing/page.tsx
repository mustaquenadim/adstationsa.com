"use client";

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useQuoteDialog } from "@/contexts/quote-dialog-context";

// Printing services data structure
const printingServicesData = [
  {
    id: 1,
    title: "Digital Printing",
    description:
      "High-quality digital printing services for banners, posters, and promotional materials with quick turnaround times.",
    bgColor: "bg-black",
    link: "/services/printing",
  },
  {
    id: 2,
    title: "Offset Printing",
    description:
      "Professional offset printing for large volume projects including brochures, catalogs, and corporate materials.",
    bgColor: "bg-[#11ABC4]",
    link: "/services/printing",
  },
  {
    id: 3,
    title: "Large Format Printing",
    description:
      "Specialized large format printing for billboards, vehicle wraps, and outdoor advertising displays.",
    bgColor: "bg-[#118D8B]",
    link: "/services/printing",
  },
  {
    id: 4,
    title: "UV Printing",
    description:
      "Advanced UV printing technology for durable, weather-resistant prints on various substrates.",
    bgColor: "bg-[#4D449B]",
    link: "/services/printing",
  },
  {
    id: 5,
    title: "3D Printing",
    description:
      "Innovative 3D printing solutions for prototypes, promotional models, and custom displays.",
    bgColor: "bg-[#FAB91B]",
    link: "/services/printing",
  },
  {
    id: 6,
    title: "Screen Printing",
    description:
      "Traditional screen printing for textiles, promotional items, and specialty applications.",
    bgColor: "bg-[#E17932]",
    link: "/services/printing",
  },
  {
    id: 7,
    title: "Variable Data Printing",
    description:
      "Personalized printing solutions for direct mail campaigns and targeted marketing materials.",
    bgColor: "bg-[#6E42F2]",
    link: "/services/printing",
  },
];

const PrintingPage = () => {
  const { openDialog } = useQuoteDialog();

  return (
    <section className="relative w-full min-h-screen bg-[#11ABC4] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Printing services and solutions
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              Whatever the type of printing, order it via{" "}
              <span className="block font-medium text-4xl md:text-5xl lg:text-6xl py-2">
                adstation
              </span>{" "}
              We provide you with instant quotes and follow up on your order
              until delivery – all from one platform and with the click of a
              button.
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
              src="/printing-services.svg"
              alt="Printing Services Hero"
              width={350}
              height={350}
              className="object-contain max-w-full max-h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="pt-20">
        <div className="max-w-3xl mx-auto text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium capitalize">
            Our list of services and printing solutions includes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {printingServicesData.slice(0, 4).map((service) => (
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
              src="/printing-services.png"
              alt="Printing Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {printingServicesData.slice(4).map((service) => (
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

export default PrintingPage;
