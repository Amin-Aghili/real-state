"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { QRCodeCanvas as QRCode } from 'qrcode.react';
import { Facebook, Twitter, Linkedin, Instagram, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/i18n/client';
import type { Agent } from '@/lib/agents';

const socialIcons = {
  Facebook: <Facebook className="h-6 w-6" />,
  Twitter: <Twitter className="h-6 w-6" />,
  LinkedIn: <Linkedin className="h-6 w-6" />,
  Instagram: <Instagram className="h-6 w-6" />,
};

export const AgentProfileCard = ({ agent, lng }: { agent: Agent, lng: string }) => {
  const { t } = useTranslation(lng, 'agent');
  const [pageUrl, setPageUrl] = useState('');
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, []);

  return (
    <Card className="glass sticky top-24">
      <CardContent className="p-6 text-center">
        <div className="relative w-40 h-40 mx-auto mb-4">
          <Image
            src={agent.imageUrl}
            alt={agent.name}
            fill
            className="object-cover rounded-full border-4 border-accent"
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
  );
};