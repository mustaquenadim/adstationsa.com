import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

// Point of sale services data structure
const pointOfSaleServicesData = [
  {
    id: 1,
    title: "Retail Display Solutions",
    description:
      "Custom retail displays and fixtures designed to maximize product visibility and increase sales conversion.",
    bgColor: "bg-black",
    link: "/services/point-of-sale",
  },
  {
    id: 2,
    title: "Mall Kiosk Design",
    description:
      "Professional kiosk designs for shopping malls and retail centers that attract customer attention.",
    bgColor: "bg-[#11ABC4]",
    link: "/services/point-of-sale",
  },
  {
    id: 3,
    title: "Product Showcase Displays",
    description:
      "Innovative product showcase displays that highlight features and benefits to drive purchasing decisions.",
    bgColor: "bg-[#118D8B]",
    link: "/services/point-of-sale",
  },
  {
    id: 4,
    title: "Promotional Stands",
    description:
      "Eye-catching promotional stands and displays for special offers, new products, and seasonal campaigns.",
    bgColor: "bg-[#4D449B]",
    link: "/services/point-of-sale",
  },
  {
    id: 5,
    title: "Interactive POS Displays",
    description:
      "Modern interactive point-of-sale displays with touch screens and digital content for enhanced engagement.",
    bgColor: "bg-[#FAB91B]",
    link: "/services/point-of-sale",
  },
  {
    id: 6,
    title: "Brand Experience Centers",
    description:
      "Comprehensive brand experience centers that create immersive shopping experiences for customers.",
    bgColor: "bg-[#E17932]",
    link: "/services/point-of-sale",
  },
  {
    id: 7,
    title: "Digital Signage Systems",
    description:
      "Dynamic digital signage solutions for retail environments with real-time content updates and analytics.",
    bgColor: "bg-[#6E42F2]",
    link: "/services/point-of-sale",
  },
];

const PointOfSalePage = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#E17932] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Point of Sale Product Solutions
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              Innovative point-of-sale solutions that enhance customer
              experience and drive sales through strategic product placement and
              display design.
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
              src="/point-of-sale.svg"
              alt="Point of Sale Hero"
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
            Our Point of Sale Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {pointOfSaleServicesData.slice(0, 4).map((service) => (
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
              src="/point-of-sale-service.png"
              alt="Point of Sale Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {pointOfSaleServicesData.slice(4).map((service) => (
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

export default PointOfSalePage;
