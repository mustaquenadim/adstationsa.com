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
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-6 rtl:space-x-reverse">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Why Adstation
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Calls to Action */}
        <div className="flex justify-center space-x-6 mb-8 rtl:space-x-reverse">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Become a Partner
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Get a Quote
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-12 rtl:space-x-reverse">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Facebook size="24" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Instagram size="24" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X size="24" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Pinterest size="24" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <TikTok size="24" color="white" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <YouTube size="24" color="white" />
          </a>
        </div>

        {/* Business Logos */}
        <div className="flex justify-center items-center gap-10 pt-8">
          {/* Saudi Business Center Logo */}
          <SaudiBusinessCenter size="100" color="white" />

          {/* Ameyez Logo */}
          <Image
            src="/images/ameyez.png"
            alt="Ameyez"
            width={160}
            height={160}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
