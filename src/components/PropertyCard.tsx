"use client";

import Link from 'next/link';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/i18n/client';
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image_url: any;
  bedrooms: number;
  bathrooms: number;
  area: number;
}

interface PropertyCardProps {
  property: Property;
  lng: string;
}

const PropertyCard = ({ property, lng }: PropertyCardProps) => {
  const { t } = useTranslation(lng);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/${lng}/property/${property.id}`}>
      <Card className="property-card overflow-hidden border-border/20 bg-card/50 backdrop-blur-sm">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.image_url.src}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <div className="glass px-3 py-1 rounded-full">
              <span className="text-sm font-semibold text-accent">
                {formatPrice(property.price)}
              </span>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1 line-clamp-1">
                {property.title}
              </h3>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm line-clamp-1">{property.location}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-border/20">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  <span>{property.area} {t('listings.area')}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;