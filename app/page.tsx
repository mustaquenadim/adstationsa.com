import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
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
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">
          Your advertising partner that saves you time, effort and cost
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Adstation helps business owners and marketing and advertising managers
          get all their advertising and publicity work done, from logo design to
          designing and implementing all types of billboards, product stands,
          and everything else they need...
        </p>
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
        >
          See Our Work
        </Button>
      </div>
    </section>
  );
};

const Three = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#8dc73f]">
      {/* Background Image */}
      <Image
        src="/bg-three.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left text-white px-8 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          Explore over 70 advertising services waiting for you
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          Adstation is an integrated platform specializing in advertising
          requests, bringing together the largest group of advertising agencies
          and companies, all in one place, according to professional standards.
        </p>
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
        >
          Explore Services
        </Button>
      </div>
    </section>
  );
};

const Four = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#967b60]">
      {/* Background Image */}
      <Image
        src="/bg-four-en.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left text-white px-8 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          Product and application logo design services
        </h2>
        <p className="text-lg md:text-2xl font-light mb-6 drop-shadow">
          Adstation provides factories and importers with specialized solutions
          in product design and its various applications, from logo to
          distribution. Experienced agencies.
        </p>
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
        >
          Explore Services
        </Button>
      </div>
    </section>
  );
};

const Five = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#027dc3]">
      {/* Background Image */}
      <Image
        src="/bg-five-en.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left text-white px-8 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          Point of Sale Product Display Solutions
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          Adstation has partnerships with companies, factories, and professional
          designers specializing in display system applications and solutions
          that distinguish your products at points of sale in grocery stores,
          supermarkets, and other stores.
        </p>
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
        >
          Get it Now
        </Button>
      </div>
    </section>
  );
};

const Six = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#fff]">
      {/* Background Image */}
      <Image
        src="/bg-six.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left text-dark px-8 max-w-2xl space-y-8">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          Billboards: All types of outdoor advertising and promotional panels
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          At Adstation, you will find the best producers of project fencing
          panels, unipolar panels, wall panels, facade panels, and building roof
          panels.
        </p>
        <Button
          size="xl"
          className="rounded-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 shadow-lg transition"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};
