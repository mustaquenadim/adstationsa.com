import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

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
        <div className="text-white text-center text-md font-normal mb-20">
          <h2 className="text-4xl sm:text-6xl font-medium">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-full w-full bg-[#F3746F] text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
              Creative Design Solutions
            </h3>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
              Identity design offering a wide range of professional design
              solutions with more than 20 services
            </p>
            <Button
              size="lg"
              className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              Learn More{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="h-full w-full bg-[#11ABC4] text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
              Printing Solutions
            </h3>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
              We provide all types of printing methods in implementing various
              types of printing
            </p>
            <Button
              size="lg"
              className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              Learn More{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="h-full w-full bg-[#118D8B] text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
              Outdoor Advertising Solutions
            </h3>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
              An integrated network of distinguished advertising service
              locations capable of providing everything related to outdoor
              signage work
            </p>
            <Button
              size="lg"
              className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              Learn More{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="h-full w-full bg-[#4D449B] text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
              Indoor Signage Solutions
            </h3>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
              We excel in implementing all forms of indoor signage with the
              highest quality standards
            </p>
            <Button
              size="lg"
              className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              Learn More{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
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
          <div className="h-full w-full bg-[#FAB91B] text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
              Exhibitions and Events
            </h3>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
              Our expertise extends to implementing exhibition wings, designing
              display platforms, and various events, providing necessary
              services for our clients commercial participations
            </p>
            <Button
              size="lg"
              className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              Learn More{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="h-full w-full bg-[#E17932] text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
              Point of Sale Product Solutions
            </h3>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
              We have extensive experience in designing and implementing
              high-end promotional models with integrated solutions for product
              marketing within malls and commercial centers
            </p>
            <Button
              size="lg"
              className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              Learn More{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="h-full w-full bg-[#6E42F2] text-white p-6 sm:p-8 aspect-square flex flex-col justify-center overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-medium">
              Advertising Campaign Solutions
            </h3>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light leading-6 mt-4">
              Organization and booking of outdoor advertising campaigns with
              strategic locations to ensure maximum spread and effectiveness
            </p>
            <Button
              size="lg"
              className="mt-4 px-4 sm:px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 w-fit cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              Learn More{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
