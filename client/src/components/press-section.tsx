import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PressRelease } from "@shared/schema";

interface PressSectionProps {
  pressReleases?: PressRelease[];
}

export default function PressSection({ pressReleases }: PressSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">In the Press</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest news and coverage from global media outlets.
          </p>
        </div>
        
        {!pressReleases ? (
          <p className="text-center text-gray-600">Loading press coverage...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.slice(0, 6).map((press) => (
              <Card key={press.id} className="border-t-4 border-blue-600 rounded-b shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase">
                      {press.source}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">{press.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={press.url || '#'} 
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read Full Article →
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