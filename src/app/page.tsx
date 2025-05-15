'use client';

import { useState, useEffect } from 'react';
import ProviderSearchForm, { type SearchFilters } from '@/components/providers/provider-search-form';
import ProviderCard from '@/components/providers/provider-card';
import { mockProviders } from '@/data/mock-data';
import type { Provider } from '@/lib/types';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ProviderDirectoryPage() {
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    // Simulate initial load or load all providers by default
    // For now, an empty search shows all providers after initial load
    setFilteredProviders(mockProviders);
    setIsLoading(false);
  }, []);

  const handleSearch = (filters: SearchFilters) => {
    setIsLoading(true);
    setSearchAttempted(true);
    // Simulate API call delay
    setTimeout(() => {
      const results = mockProviders.filter(provider => {
        const specialtyMatch = filters.specialty ? provider.specialty.toLowerCase() === filters.specialty.toLowerCase() : true;
        const locationMatch = filters.location ? 
          provider.city.toLowerCase().includes(filters.location.toLowerCase()) || 
          provider.zipCode.includes(filters.location) ||
          provider.state.toLowerCase().includes(filters.location.toLowerCase())
          : true;
        const insuranceMatch = filters.insurance ? provider.acceptedInsurancePlans.some(plan => plan.toLowerCase() === filters.insurance.toLowerCase()) : true;
        return specialtyMatch && locationMatch && insuranceMatch;
      });
      setFilteredProviders(results);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-card shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-primary">Find Your Healthcare Provider</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Search our directory for trusted doctors, specialists, and clinics.
        </p>
      </section>

      <ProviderSearchForm onSearch={handleSearch} />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow animate-pulse">
              <div className="h-48 bg-muted rounded-t-lg mb-4"></div>
              <div className="h-6 w-3/4 bg-muted rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-muted rounded mb-2"></div>
              <div className="h-4 w-1/3 bg-muted rounded mb-4"></div>
              <div className="h-10 w-full bg-primary/50 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {searchAttempted && filteredProviders.length === 0 && (
             <Alert variant="default" className="border-yellow-500 bg-yellow-50 text-yellow-700">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <AlertTitle className="font-semibold">No Providers Found</AlertTitle>
              <AlertDescription>
                We couldn&apos;t find any providers matching your search criteria. Please try different filters.
              </AlertDescription>
            </Alert>
          )}
          {filteredProviders.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {filteredProviders.map(provider => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
