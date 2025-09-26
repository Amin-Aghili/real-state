"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/i18n/client';
import { agents } from '@/lib/agents';
import { Calendar } from 'lucide-react';

const AgentsListPage = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, 'agent');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(lng, {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lng={lng} />

      <main className="container mx-auto px-4 py-28 md:py-32">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            {t('ourTeam')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('ourTeamSubtitle')}
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <Link href={`/${lng}/agent/${agent.slug}`} key={agent.slug}>
              <Card className="group overflow-hidden glass transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={agent.imageUrl}
                      alt={agent.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-foreground">{agent.name}</h2>
                    <div className="flex items-center justify-center text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{t('joined')}: {formatDate(agent.startDate)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgentsListPage;