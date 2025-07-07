import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Article } from "@shared/schema";

interface DiscoverSectionProps {
  articles?: Article[];
}

export default function DiscoverSection({ articles }: DiscoverSectionProps) {
  const nonFeaturedArticles = articles?.filter(article => !article.featured).slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover</h2>
          <p className="text-lg text-gray-600">
            Latest insights from our global network
          </p>
        </div>
        
        {!nonFeaturedArticles ? (
          <p className="text-center text-gray-600">Loading content...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonFeaturedArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                {article.imageUrl && (
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {article.category}
                    </span>
                    {article.contentType === 'video' && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                        Video
                      </span>
                    )}
                    {article.contentType === 'podcast' && (
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                        Podcast
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
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