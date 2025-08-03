import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

// Exhibitions and events services data structure
const exhibitionsEventsServicesData = [
  {
    id: 1,
    title: "Renting all kinds of advertising stands",
    description:
      "ADSTATION, in collaboration with its partners, seeks to offer pop-up and roll-up stand rental services with printing, aiming to provide economical and effective solutions for clients attending small or limited-capacity events.",
    bgColor: "bg-black",
    link: "/services/exhibitions-events",
  },
  {
    id: 2,
    title: "Rental of screens and interactive devices",
    description:
      "At ADSTATION, we aim to facilitate our clients' access to professional advertising screen booking and installation services, as well as interactive devices with audiences, from specialized providers, to ensure a comprehensive service for your event.",
    bgColor: "bg-[#11ABC4]",
    link: "/services/exhibitions-events",
  },
  {
    id: 3,
    title: "Design and implementation of Suites and booths",
    description:
      "According to your budgets and marketing goals, our partners transform them into designs specific to you with innovative options, and we negotiate with them to provide a comprehensive service with minimal effort.",
    bgColor: "bg-[#118D8B]",
    link: "/services/exhibitions-events",
  },
  {
    id: 4,
    title: "Event and conference theatre design",
    description:
      "We provide experts and specialists in designing and equipping theaters and facades for events and activities according to the type and purpose of the event.",
    bgColor: "bg-[#4D449B]",
    link: "/services/exhibitions-events",
  },
  {
    id: 5,
    title: "Photographing and documenting events",
    description:
      "Through our partners, we guarantee that you will receive professional photography and editing of events and activities.",
    bgColor: "bg-[#FAB91B]",
    link: "/services/exhibitions-events",
  },
];

const ExhibitionsEventsPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FAB91B] text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-screen px-10">
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-2xl mb-6">Our Services</h1>
            <div className="text-3xl md:text-4xl lg:text-6xl font-normal text-white">
              Exhibition and Event Services and Solutions
            </div>
            <p className="mt-6 text-base md:text-lg lg:text-xl font-light leading-6 text-white">
              Professional partners from freelancers and agencies in{" "}
              <span className="block font-medium text-4xl md:text-5xl lg:text-6xl py-2">
                adstation
              </span>{" "}
              We are ready to provide quality event services that achieve your
              goals with unforgettable participation and make an impact.
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
              src="/exhibitions-events.svg"
              alt="Exhibitions and Events Hero"
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
            Our list of services and solutions for exhibitions and events
            includes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {exhibitionsEventsServicesData.slice(0, 4).map((service) => (
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
          <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 lg:col-span-2 bg-gray-800 overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/exhibitions-events.png"
              alt="Exhibitions and Events Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {exhibitionsEventsServicesData.slice(4).map((service) => (
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

export default ExhibitionsEventsPage;
