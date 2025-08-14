"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import Logo from "@/components/logo";
import { useQuoteDialog } from "@/contexts/quote-dialog-context";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RequestQuoteForm from "@/components/forms/request-quote-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Languages } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const {
    isOpen: isQuoteDialogOpen,
    openDialog,
    closeDialog,
  } = useQuoteDialog();
  const t = useTranslations("header");

  const handleLanguageChange = (newLocale: string) => {
    // Use the next-intl router to navigate to the same page with different locale
    router.replace(pathname, { locale: newLocale });
  };

  // Navigation links array using translations
  const navigationLinks = [
    { href: "/" as const, label: t("navigation.home") },
    { href: "/about" as const, label: t("navigation.about") },
    { href: "/services" as const, label: t("navigation.services") },
    { href: "/why-adstation" as const, label: t("navigation.whyAdstation") },
    { href: "/join-us" as const, label: t("navigation.joinUs") },
  ];

  // Show default logo only on home page, white logo everywhere else
  const logoVariant = pathname === "/" ? "default" : "white";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${
        isScrolled ? "bg-black backdrop-blur-sm text-white" : "bg-transparent"
      }`}
    >
      <div className="flex h-20 justify-between gap-4">
        {/* Left side */}
        <div className="flex gap-2">
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo variant={logoVariant} />
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Navigation menu */}
          <NavigationMenu className="h-full *:h-full max-md:hidden">
            <NavigationMenuList className="h-full gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index} className="h-full">
                  <NavigationMenuLink
                    active={pathname === link.href}
                    asChild
                    className={`h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent! transition-colors duration-300 ${
                      isScrolled
                        ? "text-gray-300 hover:text-white hover:border-b-white data-[active]:border-b-primary data-[active]:text-primary"
                        : "text-white hover:text-white hover:border-b-white data-[active]:border-b-white data-[active]:text-white"
                    }`}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Select value={locale} onValueChange={handleLanguageChange}>
            <SelectTrigger
              className={`cursor-pointer rounded-full w-auto border-none bg-transparent text-sm transition-colors duration-300 flex items-center gap-2 ${
                isScrolled
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-white hover:text-primary hover:bg-white/10"
              }`}
            >
              <Languages className="text-white" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ar">{t("language.arabic")}</SelectItem>
              <SelectItem value="en">{t("language.english")}</SelectItem>
            </SelectContent>
          </Select>

          {/* Request Quote Dialog */}
          <Dialog
            open={isQuoteDialogOpen}
            onOpenChange={(open) => (open ? openDialog() : closeDialog())}
          >
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-full">
                {t("requestQuote")}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">
                  {t("requestQuoteDialog.title")}
                </DialogTitle>
                <DialogDescription className="text-center">
                  {t("requestQuoteDialog.description")}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <RequestQuoteForm onSuccess={closeDialog} />
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex items-center md:hidden">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 text-white"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          asChild
                          className="py-1.5"
                          active={pathname === link.href}
                        >
                          <Link href={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
