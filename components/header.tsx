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
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${isScrolled ? "bg-black backdrop-blur-sm text-white" : "bg-transparent"
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
                    className={`h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent! transition-colors duration-300 ${isScrolled
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
              className={`cursor-pointer rounded-full w-auto border-none bg-transparent text-sm transition-colors duration-300 flex items-center gap-2 max-md:hidden ${isScrolled
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

          {/* Request Quote Button - Desktop */}
          <Button
            size="lg"
            className="rounded-full max-md:hidden"
            onClick={openDialog}
          >
            {t("requestQuote")}
          </Button>

          <div className="flex items-center md:hidden">
            {/* Mobile menu trigger */}
            <Sheet>
              <SheetTrigger asChild>
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
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-6">
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <div className="mb-8">
                    <Link href="/" className="text-primary hover:text-primary/90">
                      <Logo variant="green-black" className="!w-32 max-w-32" />
                    </Link>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1">
                    <ul className="space-y-4">
                      {navigationLinks.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${pathname === link.href
                              ? "bg-primary text-white"
                              : "text-gray-700 hover:bg-gray-100"
                              }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Language Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("language.label")}
                    </label>
                    <Select value={locale} onValueChange={handleLanguageChange}>
                      <SelectTrigger className="w-full">
                        <Languages className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ar">{t("language.arabic")}</SelectItem>
                        <SelectItem value="en">{t("language.english")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Request Quote Button - Mobile */}
                  <Button
                    size="lg"
                    className="w-full rounded-full"
                    onClick={openDialog}
                  >
                    {t("requestQuote")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Shared Request Quote Dialog */}
      <Dialog
        open={isQuoteDialogOpen}
        onOpenChange={(open) => (open ? openDialog() : closeDialog())}
      >
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
    </header>
  );
}
