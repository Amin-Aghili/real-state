"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard, { Property } from '@/components/PropertyCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, SlidersHorizontal } from 'lucide-react';

// Sample data - replace with Supabase data
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    location: 'Downtown District, City Center',
    price: 750000,
    image_url: property1,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
  },
  {
    id: '2',
    title: 'Luxury Family House',
    location: 'Suburbia Heights, West Side',
    price: 1250000,
    image_url: property2,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
  },
  {
    id: '3',
    title: 'Penthouse with City View',
    location: 'Skyline Tower, Business District',
    price: 2100000,
    image_url: property3,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
  },
  {
    id: '4',
    title: 'Contemporary Villa',
    location: 'Green Valley, North Hills',
    price: 950000,
    image_url: property1,
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
  },
  {
    id: '5',
    title: 'Waterfront Condo',
    location: 'Marina Bay, Waterfront',
    price: 850000,
    image_url: property2,
    bedrooms: 2,
    bathrooms: 1,
    area: 1400,
  },
  {
    id: '6',
    title: 'Executive Estate',
    location: 'Prestige Park, East End',
    price: 3200000,
    image_url: property3,
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
  },
];

const Listings = ({ params: { lng } }: { params: { lng: string } }) => {
  const [properties, setProperties] = useState<Property[]>(sampleProperties);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(sampleProperties);

  useEffect(() => {
    let filtered = properties.filter(property =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort properties
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'bedrooms':
          return b.bedrooms - a.bedrooms;
        case 'area':
          return b.area - a.area;
        default:
          return 0;
      }
    });

    setFilteredProperties(filtered);
  }, [properties, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header lng={lng} />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Available Properties
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your perfect home from our curated collection of premium properties
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card/50 border-border/30"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-card/50 border-border/30">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="bedrooms">Most Bedrooms</SelectItem>
                  <SelectItem value="area">Largest Area</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Listings;
