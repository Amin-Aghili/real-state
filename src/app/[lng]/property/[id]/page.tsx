"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bed, Bath, Square, MapPin, Calendar, Home } from 'lucide-react';

// Sample data - replace with Supabase data
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const sampleProperty = {
  id: '1',
  title: 'Modern Downtown Apartment',
  location: 'Downtown District, City Center',
  price: 750000,
  image_url: property1,
  bedrooms: 2,
  bathrooms: 2,
  area: 1200,
  description: `This stunning modern apartment offers the perfect blend of luxury and convenience in the heart of downtown. 
  With floor-to-ceiling windows, you'll enjoy breathtaking city views from every room. The open-concept design creates 
  a seamless flow between the living, dining, and kitchen areas, making it perfect for both relaxing and entertaining.

  The gourmet kitchen features high-end stainless steel appliances, quartz countertops, and custom cabinetry. 
  Both bedrooms offer ample space and natural light, with the master bedroom including an en-suite bathroom with 
  premium fixtures and finishes.

  Building amenities include a state-of-the-art fitness center, rooftop terrace with city views, concierge service, 
  and secure underground parking. Located within walking distance of the city's best restaurants, shopping, and 
  entertainment venues.`,
  yearBuilt: 2021,
  propertyType: 'Apartment',
  parkingSpaces: 1,
};

const PropertyDetails = ({ params: { lng } }: { params: { lng: string } }) => {
  const params = useParams();
  const id = params.id;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link href={`/${lng}/listings`}>
              <Button variant="ghost" className="text-accent hover:bg-accent/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Properties
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Property Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={sampleProperty.image_url.src}
                  alt={sampleProperty.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Property Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {sampleProperty.title}
                  </h1>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">{sampleProperty.location}</span>
                  </div>
                  <div className="text-3xl font-bold text-accent">
                    {formatPrice(sampleProperty.price)}
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-card/50 rounded-xl border border-border/20">
                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-foreground">{sampleProperty.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-foreground">{sampleProperty.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-foreground">{sampleProperty.area}</div>
                    <div className="text-sm text-muted-foreground">Sqft</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-6 w-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-foreground">{sampleProperty.yearBuilt}</div>
                    <div className="text-sm text-muted-foreground">Year Built</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About This Property</h2>
                  <div className="prose prose-invert max-w-none">
                    {sampleProperty.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Property Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between py-2 border-b border-border/20">
                      <span className="text-muted-foreground">Property Type:</span>
                      <span className="text-foreground font-medium">{sampleProperty.propertyType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/20">
                      <span className="text-muted-foreground">Parking Spaces:</span>
                      <span className="text-foreground font-medium">{sampleProperty.parkingSpaces}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/20">
                      <span className="text-muted-foreground">Year Built:</span>
                      <span className="text-foreground font-medium">{sampleProperty.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/20">
                      <span className="text-muted-foreground">Property ID:</span>
                      <span className="text-foreground font-medium">EP-{sampleProperty.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
