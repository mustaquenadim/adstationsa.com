"use client";

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useQuoteDialog } from "@/contexts/quote-dialog-context";

// Point of sale services data structure
const pointOfSaleServicesData = [
  {
    id: 1,
    title: "Brand Ambassadors and Promotion Team Management",
    description:
      "Managing merchandising teams and promoting them as brand ambassadors at points of sale are services that Adstation coordinates with partners specialized in this type of field.",
    bgColor: "bg-black",
    link: "/services/point-of-sale",
  },
  {
    id: 2,
    title: "Promote products on store shelves",
    description:
      "Enhance your shelf presence with AdStation and integrated visual Branding Shelf solutions! Through customized, engaging designs, we motivate shoppers, enhance your brand's presence, and increase in-store sales.",
    bgColor: "bg-[#11ABC4]",
    link: "/services/point-of-sale",
  },
  {
    id: 3,
    title: "Design and implementation of product display systems",
    description:
      "To enhance brand presence and increase sales by designing and implementing floor display stands, which are stand-alone units such as kiosks or stands, attractively designed to highlight new products in the main aisles.",
    bgColor: "bg-[#118D8B]",
    link: "/services/point-of-sale",
  },
  {
    id: 4,
    title: "Shopper Research",
    description:
      "Design and conduct studies on products and shopper audiences, and identify opportunities and threats.",
    bgColor: "bg-[#4D449B]",
    link: "/services/point-of-sale",
  },
  {
    id: 5,
    title: "Management and design of tasting campaigns",
    description:
      "To have an online presence, we offer you designers specialized in this type of digital design solutions efficiently and quickly according to your marketing goals.",
    bgColor: "bg-[#FAB91B]",
    link: "/services/point-of-sale",
  },
];

const PointOfSalePage = () => {
  const { openDialog } = useQuoteDialog();

  return (
    <section className="relative w-full min-h-screen bg-[#E17932] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Point-of-Sale Product Services
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              In cooperation with professional partners in{" "}
              <span className="block font-medium text-4xl md:text-5xl lg:text-6xl py-2">
                adstation
              </span>{" "}
              We strive to provide unique point-of-sale product display
              solutions, aimed at enhancing the presence of your brand's
              products in the customer's shopping experience and increasing
              sales. From interior design and visual creativity to creating an
              attractive shopping environment, we save you a lot of time
              searching for specialized suppliers who can make a difference in
              your success in the market.
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
            Our list of services and product solutions includes
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
              src="/point-of-sale.jpg"
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

export default PointOfSalePage;
