"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Hero = ({ isRTL }: { isRTL?: boolean }) => {
  const t = useTranslations("home.hero");

  return (
    <section className="relative w-full h-screen flex sm:items-center items-end justify-start overflow-hidden bg-gray-900 py-20">
      {/* Spotlight */}
      <Spotlight
        className={`h-full hidden lg:block -top-40 md:bottom-0 ${isRTL
          ? "right-0 md:right-[28rem] rotate-220"
          : "left-0 md:left-[28rem] rotate-250"
          }`}
        fill="white"
      />
      {/* Logo */}
      <div
        className={`absolute top-28 lg:top-40 z-20 ${isRTL ? "left-4 lg:left-90" : "right-4 lg:right-60"
          }`}
      >
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
        className={`z-0 ${isRTL ? "" : "scale-x-[-1]"}`}
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-white px-8 max-w-2xl text-left rtl:text-right">
        <h1 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg capitalize">
          {t("title")}
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Link href="/about">
          <Button
            size="xl"
            className="rounded-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 shadow-lg transition"
          >
            {t("cta")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
