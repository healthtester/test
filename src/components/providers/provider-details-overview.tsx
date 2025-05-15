import type { Provider } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { List, BookOpen, Award, Languages, Clock } from 'lucide-react';

interface ProviderDetailsOverviewProps {
  provider: Provider;
}

export default function ProviderDetailsOverview({ provider }: ProviderDetailsOverviewProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <BookOpen className="mr-2 h-6 w-6 text-primary" />
            About {provider.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80 leading-relaxed">{provider.bio}</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <List className="mr-2 h-5 w-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              {provider.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Award className="mr-2 h-5 w-5 text-primary" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {provider.certifications.map((cert, index) => (
                <Badge key={index} variant="secondary">{cert}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Languages className="mr-2 h-5 w-5 text-primary" />
              Languages Spoken
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {provider.languagesSpoken.map((lang, index) => (
                <Badge key={index} variant="outline">{lang}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Office Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-foreground/80">
              {provider.officeHours.map((oh, index) => (
                <li key={index} className="flex justify-between">
                  <span>{oh.day}:</span>
                  <span>{oh.hours}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
