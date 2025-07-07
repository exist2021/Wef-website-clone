import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PressRelease } from "@shared/schema";

interface PressSectionProps {
  pressReleases?: PressRelease[];
}

export default function PressSection({ pressReleases }: PressSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">In the Press</h2>
          <p className="text-lg text-gray-600">
            What the media is saying about the World Economic Forum
          </p>
        </div>
        
        {!pressReleases ? (
          <p className="text-center text-gray-600">Loading press coverage...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.slice(0, 3).map((press) => (
              <Card key={press.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
                      {press.source}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{press.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={press.url || '#'} 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read more →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}