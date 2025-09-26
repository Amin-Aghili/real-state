"use client";

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { QRCodeCanvas as QRCode } from 'qrcode.react';
import { Facebook, Twitter, Linkedin, Instagram, Link as LinkIcon, QrCode } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/i18n/client';
import { agents, getAgentBySlug, Agent } from '@/lib/agents';

// This function is commented out because it requires server-side logic in a "use client" component.
// We will fetch the agent data on the client side instead.
// export async function generateStaticParams() {
//   return agents.map((agent) => ({
//     slug: agent.slug,
//   }));
// }

const AgentPage = ({ params: { lng, slug } }: { params: { lng: string, slug:string } }) => {
  const { t } = useTranslation(lng, 'agent');
  const [agent, setAgent] = useState<Agent | undefined>(undefined);
  const [pageUrl, setPageUrl] = useState('');
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    const fetchedAgent = getAgentBySlug(slug);
    setAgent(fetchedAgent);
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, [slug]);

  if (!agent) {
    // Since getAgentBySlug is synchronous, we can decide to show a notFound page
    // almost immediately if the agent isn't in our static list.
    // In a real-world scenario with data fetching, you'd have a loading state.
    return notFound();
  }

  const socialIcons = {
    Facebook: <Facebook className="h-6 w-6" />,
    Twitter: <Twitter className="h-6 w-6" />,
    LinkedIn: <Linkedin className="h-6 w-6" />,
    Instagram: <Instagram className="h-6 w-6" />,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lng={lng} />

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column: Profile Card */}
          <div className="md:col-span-1">
            <Card className="glass sticky top-24">
              <CardContent className="p-6 text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={agent.imageUrl}
                    alt={agent.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-accent"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gradient">{agent.name}</h1>
                <p className="text-muted-foreground text-lg mb-4">{agent.title}</p>

                <div className="flex justify-center space-x-4 mb-6">
                  {agent.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label={social.name}
                    >
                      {socialIcons[social.name]}
                    </a>
                  ))}
                </div>

                <Button onClick={() => setShowQr(!showQr)} className="w-full">
                  <QrCode className="mr-2 h-5 w-5" />
                  {showQr ? t('hideQr') : t('showQr')}
                </Button>

                {showQr && pageUrl && (
                  <div className="mt-6 p-4 bg-white rounded-lg inline-block">
                    <QRCode value={pageUrl} size={160} />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Portfolio */}
          <div className="md:col-span-2">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gradient">{t('portfolioTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {agent.portfolio.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                      <div className="sm:col-span-1">
                        <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgentPage;