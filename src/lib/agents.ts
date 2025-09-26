export interface Agent {
  slug: string;
  name: string;
  title: string;
  imageUrl: string;
  socials: {
    name: 'Facebook' | 'Twitter' | 'LinkedIn' | 'Instagram';
    url: string;
  }[];
  portfolio: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

export const agents: Agent[] = [
  {
    slug: 'ali-ahmadi',
    name: 'Ali Ahmadi',
    title: 'Senior Real Estate Agent',
    imageUrl: '/images/agents/ali-ahmadi.jpg',
    socials: [
      { name: 'Twitter', url: 'https://twitter.com/ali' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/ali' },
    ],
    portfolio: [
      {
        title: 'Luxury Villa in North Tehran',
        description: 'Sold a 5-bedroom luxury villa with a pool.',
        imageUrl: '/images/portfolio/villa1.jpg',
      },
      {
        title: 'Modern Apartment Downtown',
        description: 'Leased a high-end apartment with city views.',
        imageUrl: '/images/portfolio/apartment1.jpg',
      },
    ],
  },
  {
    slug: 'sara-mohammadi',
    name: 'Sara Mohammadi',
    title: 'Commercial Property Specialist',
    imageUrl: '/images/agents/sara-mohammadi.jpg',
    socials: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/sara' },
      { name: 'Instagram', url: 'https://instagram.com/sara' },
    ],
    portfolio: [
      {
        title: 'Office Space in Business Park',
        description: 'Facilitated the sale of a 10,000 sq. ft. office space.',
        imageUrl: '/images/portfolio/office1.jpg',
      },
      {
        title: 'Retail Storefront',
        description: 'Negotiated a long-term lease for a prime retail location.',
        imageUrl: '/images/portfolio/retail1.jpg',
      },
    ],
  },
  {
    slug: 'reza-karimi',
    name: 'Reza Karimi',
    title: 'Residential Agent',
    imageUrl: '/images/agents/reza-karimi.jpg',
    socials: [
      { name: 'Facebook', url: 'https://facebook.com/reza' },
      { name: 'Twitter', url: 'https://twitter.com/reza' },
    ],
    portfolio: [
      {
        title: 'Family Home in the Suburbs',
        description: 'Helped a young family find their dream home.',
        imageUrl: '/images/portfolio/home1.jpg',
      },
    ],
  },
  {
    slug: 'maryam-hashemi',
    name: 'Maryam Hashemi',
    title: 'Investment Advisor',
    imageUrl: '/images/agents/maryam-hashemi.jpg',
    socials: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/maryam' },
    ],
    portfolio: [
      {
        title: 'Real Estate Investment Trust (REIT)',
        description: 'Advised on a multi-million dollar REIT portfolio.',
        imageUrl: '/images/portfolio/investment1.jpg',
      },
      {
        title: 'Development Land',
        description: 'Sourced and negotiated the purchase of land for a new development.',
        imageUrl: '/images/portfolio/land1.jpg',
      },
    ],
  },
];

export const getAgentBySlug = (slug: string) => {
  return agents.find((agent) => agent.slug === slug);
};