"use client";

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useQuoteDialog } from "@/contexts/quote-dialog-context";

// Services data structure
const creativeDesignServicesData = [
  {
    id: 1,
    title: "3D design for facades and display platforms",
    description:
      "We employ designers specialized in this type of design for products and services, to achieve speed and efficiency according to the latest practices.",
    bgColor: "bg-black",
    link: "/services/creative-design",
  },
  {
    id: 2,
    title: "Product design, packaging, and display applications",
    description:
      "We employ designers and agencies specialized in this type of design for the products and applications you need, according to the latest practical and professional practices.",
    bgColor: "bg-[#11ABC4]",
    link: "/services/printing",
  },
  {
    id: 3,
    title: "Logo Design (Projects, Companies, Events)",
    description:
      "We offer you the opportunity to obtain the best sources, whether from creative independent designers or from specialized advertising agencies, and you can get to know their work in advance.",
    bgColor: "bg-[#118D8B]",
    link: "/services/outdoor-advertising",
  },
  {
    id: 4,
    title: "3D design for commemorative shields and gifts",
    description:
      "We know the needs of institutions and companies to excel in their activities and we provide specialized providers in designing this type of design.",
    bgColor: "bg-[#4D449B]",
    link: "/services/indoor-signage",
  },
  {
    id: 5,
    title: "Design of commercial prints and corporate brochures",
    description:
      "From our list of partners specializing in designing and creating advertising print designs with new and traditional templates that suit your aspirations",
    bgColor: "bg-[#FAB91B]",
    link: "/services/exhibitions-events",
  },
  {
    id: 6,
    title:
      "Interior design for restaurant branches and points of sale and retail stores",
    description:
      "We have expert partners who design branches and points of sale, such as restaurants and retail stores, to suit your brand and applications.",
    bgColor: "bg-[#E17932]",
    link: "/services/point-of-sale",
  },
  {
    id: 7,
    title: "Digital Brand Identity Design and Development",
    description:
      "To have an online presence, we offer you designers specialized in this type of digital design solutions efficiently and quickly according to your marketing goals.",
    bgColor: "bg-[#6E42F2]",
    link: "/services/advertising-campaigns",
  },
];

const CreativeDesignPage = () => {
  const { openDialog } = useQuoteDialog();

  return (
    <section className="relative w-full min-h-screen bg-[#F3746F] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Creative Design Services
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              We offer you a comprehensive variety of creative design services,
              from logos to prints, digital applications, product design
              solutions, and more.
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
              src="/creative-design.svg"
              alt="Services Hero"
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
            The list of design services and solutions includes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {creativeDesignServicesData.slice(0, 4).map((service) => (
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
              src="/creative-design-service.png"
              alt="Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {creativeDesignServicesData.slice(4).map((service) => (
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

export default CreativeDesignPage;
