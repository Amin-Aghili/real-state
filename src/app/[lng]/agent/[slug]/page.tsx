import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AgentProfileCard } from '@/components/AgentClientPage'; // Importing the new client component
import { useTranslation } from '@/i18n';
import { languages } from '@/i18n/settings';
import { agents, getAgentBySlug } from '@/lib/agents';

// Generate static paths for all agents and languages
export async function generateStaticParams() {
  const params: { lng: string; slug: string }[] = [];
  for (const lng of languages) {
    for (const agent of agents) {
      params.push({ lng, slug: agent.slug });
    }
  }
  return params;
}

// Generate metadata for the page
export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const agent = getAgentBySlug(slug);
  if (!agent) {
    return { title: 'Agent Not Found' };
  }
  return {
    title: `${agent.name} - Real Estate Agent`,
    description: `Business card and portfolio for ${agent.name}, ${agent.title}.`,
  };
}

const AgentPage = async ({ params: { lng, slug } }: { params: { lng: string, slug: string } }) => {
  const agent = getAgentBySlug(slug);
  const { t } = await useTranslation(lng, 'agent');

  if (!agent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lng={lng} />

      <main className="container mx-auto px-4 py-28 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column: Profile Card (Client Component) */}
          <div className="md:col-span-1">
            <AgentProfileCard agent={agent} lng={lng} />
          </div>

          {/* Right Column: Portfolio (Server Component) */}
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
                        <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
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