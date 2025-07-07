import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Centre } from "@shared/schema";

interface CentresSectionProps {
  centres?: Centre[];
}

export default function CentresSection({ centres }: CentresSectionProps) {
  if (!centres) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Platform Centres</h2>
            <p className="text-lg text-gray-600">Loading centres...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Platform Centres</h2>
          <p className="text-lg text-gray-600">
            Explore our centres of expertise driving global change
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centres.map((centre) => (
            <Card key={centre.id} className="hover:shadow-lg transition-shadow">
              {centre.imageUrl && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={centre.imageUrl} 
                    alt={centre.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{centre.name}</CardTitle>
                {centre.description && (
                  <CardDescription>{centre.description}</CardDescription>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
