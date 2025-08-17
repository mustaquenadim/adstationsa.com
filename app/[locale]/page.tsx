import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import type { SupportedLocale } from "@/lib/seo/types";

// Generate metadata for the home page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return await generatePageMetadata("home", locale as SupportedLocale);
}

export default function HomePage() {
  const locale = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        className={`absolute -bottom-10 md:-top-10 z-10 ${isRTL ? "-left-10" : "-right-10"
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
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 capitalize">
          {t("title")}
        </h2>
        <p className="text-xl text-white mb-8">{t("description")}</p>
        <Link href="/why-adstation">
          <Button
            size="xl"
            className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
          >
            {t("cta")}
          </Button>
        </Link>
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
        fill
        quality={90}
        className={`z-0 object-cover ${isRTL ? "scale-x-[-1]" : ""}`}
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left rtl:text-right text-white p-8 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg capitalize">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Link href="/services">
          <Button
            size="xl"
            className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
          >
            {t("cta")}
          </Button>
        </Link>
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
          fill
          quality={90}
          className="object-cover object-left-bottom"
          priority
        />
      </div>

      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={isRTL ? "/bg-four-ar.png" : "/bg-four-en.png"}
          alt="Hero Background Desktop"
          fill
          quality={90}
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-left rtl:text-right text-white p-8 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg capitalize">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Link href="/services/creative-design">
          <Button
            size="xl"
            className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
          >
            {t("cta")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

const Five = ({ isRTL }: SectionProps) => {
  const t = useTranslations("home.section5");

  return (
    <section className="relative w-full min-h-screen md:h-screen flex flex-col md:flex-row items-center md:justify-between overflow-hidden bg-[#027dc3] py-10 md:py-0">
      {/* Content */}
      <div className={`relative z-20 text-left rtl:text-right text-white p-8 max-w-sm sm:max-w-2xl`}>
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg capitalize">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Link href="/services/point-of-sale">
          <Button
            size="xl"
            className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
          >
            {t("cta")}
          </Button>
        </Link>
      </div>

      {/* Image */}
      <div className={`m-auto relative w-full h-[32rem] sm:h-[36rem] md:flex-1 md:h-full md:max-w-lg`}>
        <Image
          src='/point-of-sale.png'
          alt='Point of Sale Image'
          fill
          className="object-contain"
          priority
        />
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
        fill
        quality={90}
        className="z-0 object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-left rtl:text-right text-dark p-8 max-w-xl space-y-8">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 drop-shadow-lg capitalize">
          {t("title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6 drop-shadow">
          {t("description")}
        </p>
        <Link href="/services/outdoor-advertising">
          <Button
            size="xl"
            className="rounded-full bg-white hover:bg-primary/80 text-black font-semibold py-3 px-8 shadow-lg transition"
          >
            {t("cta")}
          </Button>
        </Link>
      </div>
    </section>
  );
};
