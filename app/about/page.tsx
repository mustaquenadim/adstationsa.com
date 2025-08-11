import Image from "next/image";
import * as motion from "motion/react-client";
import { Be_Vietnam_Pro } from "next/font/google";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function AboutPage() {
  return (
    <>
      {/* Top Section - Green Background */}
      <section className="relative w-full min-h-screen bg-[#8dc73f] overflow-hidden">
        {/* Large Text Overlay */}
        <div className="hidden md:block absolute right-10 top-40">
          <Image
            src="/adstation-watermark.svg"
            alt="About Hero"
            width={600}
            height={800}
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex items-center justify-start h-screen pl-16">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-4xl mb-6">Who We Are</h1>
            <div className="text-6xl font-normal text-black">
              The smart future of{" "}
              <span className="relative">
                traditional
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
              </span>{" "}
              advertising
            </div>
            <p className="mt-8 text-xl font-normal leading-relaxed text-black">
              The first Saudi platform to bring together the best traditional
              advertising service providers under one digital roof, making your
              advertising experience simpler and faster.
            </p>
          </div>
        </div>

        <div className="text-center py-20 space-y-7">
          <h2
            className={`text-6xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[160px] font-semibold text-white ${beVietnamPro.className}`}
          >
            <span className="text-black">ad</span>station
          </h2>
          <p className="text-xl font-normal leading-relaxed max-w-3xl mx-auto px-8">
            It&apos;s your smart choice for managing and implementing everything
            related to traditional advertising—from logo design to achieving
            widespread distribution across all applications and advertising and
            promotion solutions with high quality, ease, and greater
            professionalism.
          </p>
        </div>
      </section>

      {/* Middle Section - Purple Background */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#6b46c1]">
        {/* Background Image */}
        <Image
          src="/about-bg-two.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-0 scale-x-[-1]"
          priority
        />

        {/* Content */}
        <div className="relative z-20 text-left text-white px-8 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 drop-shadow-lg">
            Adstation Story
          </h2>
          <p className="text-lg md:text-xl font-light mb-6 drop-shadow leading-relaxed">
            At the heart of the Kingdom&apos;s evolving business environment, among
            the challenges facing many business owners, marketing and
            advertising managers is the difficulty in obtaining reliable
            traditional advertising services that support their business growth.
            AdStation was born: a platform that combines expertise,
            professionalism, and technical solutions, providing easy access to
            the best traditional advertising providers in all cities of the
            Kingdom.
          </p>
        </div>
      </section>

      <section className="container mx-auto relative py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          {/* Vision */}
          <AboutCard
            imageSrc="/hands-together.jpg"
            imageAlt="Doesn't Know the Impossible"
            overlayText="Doesn't Know the Impossible"
            title="Our Vision"
            description="Our vision is to be the leading platform for traditional advertising solutions in the Kingdom within the next four years, expanding from the Gulf to the world."
            overlayColor="#4a8f6b"
            titleColor="#4a8f6b"
          />
          {/* Mission */}
          <AboutCard
            imageSrc="/teamwork.jpg"
            imageAlt="Changing the Future of Advertising"
            overlayText="Changing the Future of Advertising"
            title="Our Mission"
            description="Our mission is to enable small and medium-sized companies to reach their audience through well-planned, high-quality traditional advertisements at fair prices, with simple digital execution."
            overlayColor="#c1423d"
            titleColor="#c1423d"
          />
          {/* Values */}
          <AboutCard
            imageSrc="/paper-boat.jpg"
            imageAlt="Our Values"
            overlayText="Our Values"
            title="Our Values"
            description={
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span>
                    <strong>Experience:</strong> We have a dedicated team that
                    combines market knowledge and forward-looking vision.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span>
                    <strong>Innovation:</strong> We use technology to create
                    advanced and accessible advertising solutions.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span>
                    <strong>Transparency and Collaboration:</strong> We
                    guarantee a clear experience, fair prices, and measurable
                    results.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span>
                    <strong>Client-centric:</strong> We design our services
                    based on our clients&apos; needs, enabling them to achieve their
                    advertising goals.
                  </span>
                </div>
              </div>
            }
            overlayColor="#818181"
            titleColor="#818181"
          />
        </div>
      </section>
    </>
  );
}

interface AboutCardProps {
  imageSrc: string;
  imageAlt: string;
  overlayText: string;
  title: string;
  description: React.ReactNode;
  className?: string;
  overlayColor?: string;
  titleColor?: string;
}

const AboutCard = ({
  imageSrc,
  imageAlt,
  overlayText,
  title,
  description,
  overlayColor,
  className,
  titleColor,
}: AboutCardProps) => {
  return (
    <Card className={cn("w-full shadow-none border-none pt-0", className)}>
      <CardContent className="px-0">
        <div className="relative aspect-video">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={280}
            className="w-full h-full rounded-xl object-cover grayscale"
          />
          <div
            className="absolute inset-0 flex items-end justify-center bg-opacity-40 rounded-xl pb-10"
            style={{ backgroundColor: `${overlayColor}80` }}
          >
            <h3 className="text-white text-2xl font-medium text-center">
              {overlayText}
            </h3>
          </div>
        </div>
      </CardContent>
      <CardHeader className="p-0">
        <CardTitle
          className={cn("text-2xl font-bold")}
          style={{ color: titleColor }}
        >
          {title}
        </CardTitle>
        <CardDescription className="text-lg text-black font-light">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
