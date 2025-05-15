'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, BriefcaseMedical, MapPin, ShieldCheck } from 'lucide-react';
import { specialties, insurancePlans } from '@/lib/types';

export interface SearchFilters {
  specialty: string;
  location: string;
  insurance: string;
}

interface ProviderSearchFormProps {
  onSearch: (filters: SearchFilters) => void;
  initialFilters?: Partial<SearchFilters>;
}

export default function ProviderSearchForm({ onSearch, initialFilters = {} }: ProviderSearchFormProps) {
  const [specialty, setSpecialty] = useState(initialFilters.specialty || '');
  const [location, setLocation] = useState(initialFilters.location || '');
  const [insurance, setInsurance] = useState(initialFilters.insurance || '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch({ specialty, location, insurance });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
        <div>
          <Label htmlFor="specialty" className="flex items-center mb-2">
            <BriefcaseMedical className="mr-2 h-5 w-5 text-primary" />
            Specialty
          </Label>
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger id="specialty">
              <SelectValue placeholder="Any Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Specialty</SelectItem>
              {specialties.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="location" className="flex items-center mb-2">
            <MapPin className="mr-2 h-5 w-5 text-primary" />
            Location (City or Zip)
          </Label>
          <Input
            id="location"
            type="text"
            placeholder="e.g., San Francisco or 94107"
            value={location}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="insurance" className="flex items-center mb-2">
            <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
            Insurance Plan
          </Label>
          <Select value={insurance} onValueChange={setInsurance}>
            <SelectTrigger id="insurance">
              <SelectValue placeholder="Any Insurance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Insurance</SelectItem>
              {insurancePlans.map((plan) => (
                <SelectItem key={plan} value={plan}>{plan}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full md:w-auto lg:self-end h-10">
          <Search className="mr-2 h-5 w-5" />
          Search Providers
        </Button>
      </div>
    </form>
  );
}
