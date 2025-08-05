import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex sm:items-center items-end justify-start overflow-hidden bg-gray-900 py-20">
      {/* Spotlight */}
      <Spotlight
        className="h-full hidden lg:block -top-40 left-0 md:bottom-0 md:left-[28rem] rotate-250"
        fill="white"
      />
      {/* Logo */}
      <div className="absolute top-36 right-4 lg:top-40 lg:right-60 z-20">
        <Image
          src="/hero-logo.svg"
          alt="Adstation Logo"
          width={150}
          height={150}
          className="drop-shadow-lg lg:w-[250px] lg:h-[250px]"
          priority
        />
      </div>
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0 scale-x-[-1]"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-left text-white px-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          The first Saudi platform for advertising and advertising services
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          Adstation is an integrated platform specializing in advertising
          requests, bringing together the largest group of advertising agencies
          and companies, all in one place, according to professional standards.
        </p>
        <Button
          size="xl"
          className="rounded-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 shadow-lg transition"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
