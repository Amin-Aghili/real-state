"use client";

import Link from 'next/link';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';

const Footer = () => {
  const params = useParams();
  const lng = params.lng as string;
  const { t } = useTranslation(lng);
  
  return (
    <footer className="bg-card/30 border-t border-border/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href={`/${lng}`} className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold text-gradient">EliteProperties</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${lng}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lng}/listings`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('nav.properties')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lng}/contact`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lng}/agent`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {t('nav.ourTeam')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.services')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t('footer.servicesList.sales')}</li>
              <li>{t('footer.servicesList.rentals')}</li>
              <li>{t('footer.servicesList.management')}</li>
              <li>{t('footer.servicesList.consulting')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>{t('contact.info.phone')}</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>{t('contact.info.email')}</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{t('contact.info.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;