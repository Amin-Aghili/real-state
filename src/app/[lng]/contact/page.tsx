"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/i18n/client';

const Contact = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng);
  
  return (
    <div className="min-h-screen bg-background">
      <Header lng={lng} />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Our experienced real estate professionals are here to help you navigate the property market. 
                  Whether you're buying, selling, or just exploring your options, we're committed to providing 
                  personalized service and expert guidance every step of the way.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 glass rounded-lg">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">{t('contact.info.phone')}</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 glass rounded-lg">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">{t('contact.info.email')}</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 glass rounded-lg">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground">{t('contact.info.address')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 glass rounded-lg">
                  <Clock className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{t('footer.services')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-card/30 rounded-lg border border-border/20">
                    <p className="text-muted-foreground">✓ {t('footer.servicesList.sales')}</p>
                  </div>
                  <div className="p-3 bg-card/30 rounded-lg border border-border/20">
                    <p className="text-muted-foreground">✓ {t('footer.servicesList.rentals')}</p>
                  </div>
                  <div className="p-3 bg-card/30 rounded-lg border border-border/20">
                    <p className="text-muted-foreground">✓ {t('footer.servicesList.consulting')}</p>
                  </div>
                  <div className="p-3 bg-card/30 rounded-lg border border-border/20">
                    <p className="text-muted-foreground">✓ {t('footer.servicesList.management')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer lng={lng} />
    </div>
  );
};

export default Contact;
