import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

// Services data structure
const servicesData = [
  {
    id: 1,
    title: "Creative Design Solutions",
    description:
      "Identity design offering a wide range of professional design solutions with more than 20 services",
    bgColor: "bg-[#F3746F]",
    link: "/services/creative-design",
  },
  {
    id: 2,
    title: "Printing Solutions",
    description:
      "We provide all types of printing methods in implementing various types of printing",
    bgColor: "bg-[#11ABC4]",
    link: "/services/printing",
  },
  {
    id: 3,
    title: "Outdoor Advertising Solutions",
    description:
      "An integrated network of distinguished advertising service locations capable of providing everything related to outdoor signage work",
    bgColor: "bg-[#118D8B]",
    link: "/services/outdoor-advertising",
  },
  {
    id: 4,
    title: "Indoor Signage Solutions",
    description:
      "We excel in implementing all forms of indoor signage with the highest quality standards",
    bgColor: "bg-[#4D449B]",
    link: "/services/indoor-signage",
  },
  {
    id: 5,
    title: "Exhibitions and Events",
    description:
      "Our expertise extends to implementing exhibition wings, designing display platforms, and various events, providing necessary services for our clients commercial participations",
    bgColor: "bg-[#FAB91B]",
    link: "/services/exhibitions-events",
  },
  {
    id: 6,
    title: "Point of Sale Product Solutions",
    description:
      "We have extensive experience in designing and implementing high-end promotional models with integrated solutions for product marketing within malls and commercial centers",
    bgColor: "bg-[#E17932]",
    link: "/services/point-of-sale",
  },
  {
    id: 7,
    title: "Advertising Campaign Solutions",
    description:
      "Organization and booking of outdoor advertising campaigns with strategic locations to ensure maximum spread and effectiveness",
    bgColor: "bg-[#6E42F2]",
    link: "/services/advertising-campaigns",
  },
];

const ServicesPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-start h-screen px-10">
        <div className="text-left text-white max-w-2xl">
          <h1 className="text-4xl mb-6">Our Services</h1>
          <div className="text-6xl font-normal text-white">
            Services and solutions of{" "}
            <span className="relative">
              adstation
              <svg
                viewBox="0 0 286 73"
                fill="none"
                className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#fff"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </div>
          <p className="mt-8 text-xl font-light leading-relaxed text-white">
            Integrated advertising solutions with more than 70 services...{" "}
            <br /> and expansion continues
          </p>
        </div>

        {/* Background Image */}
        <div className="absolute right-10 top-40 hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/services-illustration.svg"
              alt="Services Hero"
              width={600}
              height={800}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="max-w-2xl text-white text-center text-md font-normal">
          At Adstation, we offer a variety of advertising and promotional
          services through partnerships with more than 40 professional
          providers, ensuring quality and diversity with the best options from
          design to implementation. We provide innovative solutions to meet your
          advertising needs.
        </p>
      </div>

      <div className="py-20">
        <div className="max-w-3xl mx-auto text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 4 service items */}
          {servicesData.slice(0, 4).map((service) => (
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
              <Link href={service.link}>
                <Button
                  size="lg"
                  className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
                >
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}

          {/* Image spanning from 2nd row 2nd column to 3rd row 2nd column - responsive positioning */}
          <div className="lg:col-start-2 lg:row-start-2 lg:row-span-2 bg-gray-800 overflow-hidden aspect-square lg:aspect-auto">
            <Image
              src="/services-hand.png"
              alt="Services Image"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Last 3 service items */}
          {servicesData.slice(4).map((service) => (
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
              <Link href={service.link}>
                <Button
                  size="lg"
                  className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
                >
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
