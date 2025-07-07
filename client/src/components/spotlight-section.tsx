import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Article } from "@shared/schema";

interface SpotlightSectionProps {
  articles?: Article[];
}

export default function SpotlightSection({ articles }: SpotlightSectionProps) {
  const featuredArticles = articles?.filter(article => article.featured).slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Spotlight</h2>
          <p className="text-lg text-gray-600">
            Featured insights and analysis from our global community
          </p>
        </div> {/* Changed text-center to text-left */}
        
        {!featuredArticles ? (
          <p className="text-center text-gray-600">Loading articles...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                {article.imageUrl && (
                  <div className="aspect-video w-full overflow-hidden"> {/* Removed rounded-t-lg */}
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700"> {/* Adjusted category style */}
                      {article.category}
                    </span>
                    {article.contentType === 'video' && (
                      <span className="text-xs px-2 py-1 bg-red-600 text-white"> {/* Adjusted video tag style */}
                        Video
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold leading-tight">{article.title}</CardTitle> {/* Adjusted title style */}
                  {article.description && (
                    <CardDescription>{article.description}</CardDescription>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}