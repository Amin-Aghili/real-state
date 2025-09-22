"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Menu, X, Home, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Header = ({ lng }: { lng: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation(lng);

  const navigation = [
    { name: t("nav.home"), href: `/${lng}`, icon: Home },
    { name: t("nav.properties"), href: `/${lng}/listings`, icon: Building2 },
    { name: t("nav.contact"), href: `/${lng}/contact`, icon: Phone },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lng}`} className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-gradient">
              Persian Riba
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-accent/20 text-accent"
                    : "text-foreground hover:text-accent hover:bg-accent/10"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageSwitcher lng={lng} />
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 glass rounded-lg p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-accent/20 text-accent"
                    : "text-foreground hover:text-accent hover:bg-accent/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="pt-2 border-t border-border/20 flex items-center justify-between">
              <LanguageSwitcher lng={lng} />
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
