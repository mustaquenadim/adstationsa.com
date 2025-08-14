"use client";

import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function HomePage() {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <>
      <Hero isRTL={isRTL} />
      <Two isRTL={isRTL} />
      <Three isRTL={isRTL} />
      <Four isRTL={isRTL} />
      <Five isRTL={isRTL} />
      <Six isRTL={isRTL} />
    </>
  );
}

interface SectionProps {
  isRTL: boolean;
}

const Two = ({ isRTL }: SectionProps) => {
  const t = useTranslations("home.section2");

  return (
    <section className="relative w-full h-screen flex items-start md:items-center justify-start overflow-hidden bg-[#8dc73f]">
      {/* Watermark Logo */}
      <div
        className={`absolute -bottom-10 md:-top-10 z-10 ${
          isRTL ? "-left-10" : "-right-10"
        }`}
      >
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
      <div className="relative max-w-2xl text-left rtl:text-right z-20 p-8">
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">
          {t("title")}
        </h2>
        <p className="text-xl text-white mb-8">{t("description")}</p>
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
        >
          {t("cta")}
        </Button>
      </div>
    </section>
  );
};

const Three = ({ isRTL }: SectionProps) => {
  const t = useTranslations("home.section3");

  return (
    <section className="relative w-full h-screen flex items-end md:items-center justify-start overflow-hidden bg-[#8dc73f] py-16">
      {/* Background Image */}
      <Image
        src="/bg-three.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className={`z-0 object-cover ${isRTL ? "scale-x-[-1]" : ""}`}
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left rtl:text-right text-white p-8 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
        >
          {t("cta")}
        </Button>
      </div>
    </section>
  );
};

const Four = ({ isRTL }: SectionProps) => {
  const t = useTranslations("home.section4");

  return (
    <section className="relative w-full min-h-screen sm:max-h-screen flex items-start md:items-center justify-start overflow-hidden bg-[#967b60] py-10 sm:py-0">
      {/* Mobile Background Image */}
      <div className="block md:hidden absolute bottom-10 right-0 w-3/4 h-1/2 z-0">
        <Image
          src="/bg-four-mobile.png"
          alt="Hero Background Mobile"
          layout="fill"
          objectFit="cover"
          objectPosition="left bottom"
          quality={90}
          priority
        />
      </div>

      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={isRTL ? "/bg-four-ar.png" : "/bg-four-en.png"}
          alt="Hero Background Desktop"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-left rtl:text-right text-white p-8 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
        >
          {t("cta")}
        </Button>
      </div>
    </section>
  );
};

const Five = ({ isRTL }: SectionProps) => {
  const t = useTranslations("home.section5");

  return (
    <section className="relative w-full h-screen flex items-start md:items-center justify-start overflow-hidden bg-[#027dc3] py-10 sm:py-0">
      {/* Background Image */}
      <Image
        src={isRTL ? "/bg-five-ar.png" : "/bg-five-en.png"}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left rtl:text-right text-white p-8 max-w-sm sm:max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
        >
          {t("cta")}
        </Button>
      </div>
    </section>
  );
};

const Six = ({ isRTL }: SectionProps) => {
  const t = useTranslations("home.section6");

  return (
    <section className="relative w-full h-screen flex items-start md:items-center justify-start overflow-hidden bg-[#fff]">
      {/* Background Image */}
      <Image
        src={isRTL ? "/bg-six-ar.png" : "/bg-six-en.png"}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left rtl:text-right text-dark p-8 max-w-xl space-y-8">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Button
          size="xl"
          className="rounded-full bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 shadow-lg transition"
        >
          {t("cta")}
        </Button>
      </div>
    </section>
  );
};
