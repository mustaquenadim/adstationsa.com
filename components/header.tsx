"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
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
  SheetHeader,
  SheetTitle,
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
import { Languages, Menu } from "lucide-react";

// Types
interface NavigationLink {
  href: "/" | "/about" | "/services" | "/why-adstation" | "/join-us";
  label: string;
}

interface HeaderStylesConfig {
  header: string;
  navigation: string;
  languageSelector: string;
}

// Custom hooks
const useScrollDetection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

const useNavigationLinks = (t: ReturnType<typeof useTranslations>): NavigationLink[] => {
  return useMemo(() => [
    { href: "/" as const, label: t("navigation.home") },
    { href: "/about" as const, label: t("navigation.about") },
    { href: "/services" as const, label: t("navigation.services") },
    { href: "/why-adstation" as const, label: t("navigation.whyAdstation") },
    { href: "/join-us" as const, label: t("navigation.joinUs") },
  ], [t]);
};

const useHeaderStyles = (isScrolled: boolean): HeaderStylesConfig => {
  return useMemo(() => ({
    header: `fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 pb-4 transition-all duration-300 ${isScrolled ? "bg-black backdrop-blur-sm text-white" : "bg-transparent"
      }`,
    navigation: isScrolled
      ? "text-gray-300 hover:text-white hover:border-b-white data-[active]:border-b-primary data-[active]:text-primary"
      : "text-white hover:text-white hover:border-b-white data-[active]:border-b-white data-[active]:text-white",
    languageSelector: `cursor-pointer rounded-full w-auto border-none bg-transparent text-sm transition-colors duration-300 flex items-center gap-2 max-md:hidden ${isScrolled
      ? "text-gray-300 hover:text-white hover:bg-gray-800"
      : "text-white hover:text-primary hover:bg-white/10"
      }`,
  }), [isScrolled]);
};

// Components
const HeaderLogo = ({ pathname }: { pathname: string }) => {
  const logoVariant = pathname === "/" ? "default" : "white";

  return (
    <Link href="/" className="text-primary hover:text-primary/90">
      <Logo variant={logoVariant} className="!w-40 max-w-40" />
    </Link>
  );
};

const DesktopNavigation = ({
  navigationLinks,
  pathname,
  styles
}: {
  navigationLinks: NavigationLink[];
  pathname: string;
  styles: string;
}) => (
  <NavigationMenu className="h-full *:h-full max-md:hidden">
    <NavigationMenuList className="h-full gap-2">
      {navigationLinks.map((link) => (
        <NavigationMenuItem key={link.href} className="h-full">
          <NavigationMenuLink
            active={pathname === link.href}
            asChild
            className={`h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent transition-colors duration-300 ${styles}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

const LanguageSelector = ({
  locale,
  onLanguageChange,
  styles,
  t,
  className = ""
}: {
  locale: string;
  onLanguageChange: (locale: string) => void;
  styles: string;
  t: ReturnType<typeof useTranslations>;
  className?: string;
}) => (
  <Select value={locale} onValueChange={onLanguageChange}>
    <SelectTrigger className={`${styles} ${className}`}>
      <Languages className="text-white" />
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="ar">{t("language.arabic")}</SelectItem>
      <SelectItem value="en">{t("language.english")}</SelectItem>
    </SelectContent>
  </Select>
);

const MobileNavigation = ({
  navigationLinks,
  pathname,
  locale,
  onLanguageChange,
  onQuoteClick,
  t
}: {
  navigationLinks: NavigationLink[];
  pathname: string;
  locale: string;
  onLanguageChange: (locale: string) => void;
  onQuoteClick: () => void;
  t: ReturnType<typeof useTranslations>;
}) => (
  <div className="flex items-center md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="group size-12 text-white"
          variant="ghost"
          size="icon"
          aria-label="Open mobile menu"
        >
          <Menu className="!w-8 !h-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side={locale === 'ar' ? 'left' : 'right'} className="w-80 p-6">
        <SheetHeader dir="ltr">
          <SheetTitle>
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo variant="green-black" className="!w-32 max-w-32" />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <nav className="flex-1">
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.href}>
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

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("language.label")}
            </label>
            <LanguageSelector
              locale={locale}
              onLanguageChange={onLanguageChange}
              styles="w-full"
              t={t}
              className="max-md:block"
            />
          </div>

          <Button
            size="lg"
            className="w-full rounded-full"
            onClick={onQuoteClick}
          >
            {t("requestQuote")}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  </div>
);

const QuoteDialog = ({
  isOpen,
  onOpenChange,
  onClose,
  t
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  t: ReturnType<typeof useTranslations>;
}) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
        <RequestQuoteForm onSuccess={onClose} />
      </div>
    </DialogContent>
  </Dialog>
);

// Main component
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const { isOpen: isQuoteDialogOpen, openDialog, closeDialog } = useQuoteDialog();
  const t = useTranslations("header");

  const isScrolled = useScrollDetection();
  const navigationLinks = useNavigationLinks(t);
  const styles = useHeaderStyles(isScrolled);

  const handleLanguageChange = useCallback((newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  }, [router, pathname]);

  const handleQuoteDialogChange = useCallback((open: boolean) => {
    if (open) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [openDialog, closeDialog]);

  return (
    <header className={styles.header}>
      <div className="flex h-20 justify-between gap-4 relative">
        <div className="flex gap-2">
          <div className="flex items-center gap-6">
            <HeaderLogo pathname={pathname} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DesktopNavigation
            navigationLinks={navigationLinks}
            pathname={pathname}
            styles={styles.navigation}
          />

          <LanguageSelector
            locale={locale}
            onLanguageChange={handleLanguageChange}
            styles={styles.languageSelector}
            t={t}
          />

          <Button
            size="lg"
            className="rounded-full max-md:hidden"
            onClick={openDialog}
          >
            {t("requestQuote")}
          </Button>

          <MobileNavigation
            navigationLinks={navigationLinks}
            pathname={pathname}
            locale={locale}
            onLanguageChange={handleLanguageChange}
            onQuoteClick={openDialog}
            t={t}
          />
        </div>
      </div>

      <QuoteDialog
        isOpen={isQuoteDialogOpen}
        onOpenChange={handleQuoteDialogChange}
        onClose={closeDialog}
        t={t}
      />
    </header>
  );
}
