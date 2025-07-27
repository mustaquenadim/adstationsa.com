import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Two />
    </>
  );
}

const Two = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#8dc73f]">
      {/* Watermark Image */}
      <div className="absolute -top-10 -right-10 z-10">
        <Image
          src="/watermark-logo.svg"
          alt="Logo Watermark"
          width={800}
          height={800}
          className="object-cover rounded-lg opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative max-w-2xl text-left z-20 px-8">
        <h1 className="text-4xl font-bold text-white mb-6">
          Your advertising partner that saves you time, effort and cost
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Adstation helps business owners and marketing and advertising managers
          get all their advertising and publicity work done, from logo design to
          designing and implementing all types of billboards, product stands,
          and everything else they need...
        </p>
        <Button className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
          See Our Work
        </Button>
      </div>
    </section>
  );
};
