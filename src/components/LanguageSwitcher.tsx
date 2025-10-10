"use client";

import { useState } from 'react';
import { useTranslation } from '@/i18n/client';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter, usePathname } from 'next/navigation';
import { languages } from '@/i18n/settings';

const LanguageSwitcher = ({ lng }: { lng: string }) => {
  const { i18n } = useTranslation(lng);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const languageOptions = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];

  const currentLanguage = languageOptions.find(lang => lang.code === lng) || languageOptions[0];

  const changeLanguage = (newLng: string) => {
    const newPath = pathname.replace(`/${lng}`, `/${newLng}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center space-x-2 text-foreground hover:text-accent hover:bg-accent/10"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass border-border/20">
        {languageOptions.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center space-x-2 cursor-pointer hover:bg-accent/10"
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;