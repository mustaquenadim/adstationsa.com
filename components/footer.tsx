import Image from "next/image";
import {
  Facebook,
  Instagram,
  X,
  Pinterest,
  TikTok,
  YouTube,
  SaudiBusinessCenter,
} from "./icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Navigation and Calls to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 rtl:sm:space-x-reverse">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            Why Adstation
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            Contact Us
          </a>
        </div>

        {/* Calls to Action */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 rtl:sm:space-x-reverse">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            Become a Partner
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-center sm:text-left"
          >
            Get a Quote
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 rtl:space-x-reverse">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Facebook size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Instagram size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Pinterest size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <TikTok size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <YouTube size="20" className="sm:w-6 sm:h-6" color="white" />
          </a>
        </div>

        {/* Business Logos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pt-6 sm:pt-8">
          {/* Saudi Business Center Logo */}
          <SaudiBusinessCenter
            size="80"
            className="sm:w-24 sm:h-24 lg:w-25 lg:h-25"
            color="white"
          />

          {/* Ameyez Logo */}
          <Image
            src="/images/ameyez.png"
            alt="Ameyez"
            width={120}
            height={120}
            className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
