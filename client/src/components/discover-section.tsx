import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Article } from "@shared/schema";

interface DiscoverSectionProps {
  articles?: Article[];
}

export default function DiscoverSection({ articles }: DiscoverSectionProps) {
  const nonFeaturedArticles = articles?.filter(article => !article.featured).slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Discover</h2>
          <p className="text-lg text-gray-700">
            Latest insights from our global network
          </p>
        </div>
        
        {!nonFeaturedArticles ? (
          <p className="text-center text-gray-600">Loading content...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonFeaturedArticles.map((article, index) => (
              <Card key={article.id} className={`overflow-hidden rounded-lg shadow-md ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                {article.imageUrl && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded">
                      {article.category}
                    </span>
                    {article.contentType === 'video' && (
                      <span className="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded">
                        Video
                      </span>
                    )}
                    {article.contentType === 'podcast' && (
                      <span className="text-xs px-2 py-0.5 bg-purple-50 text-purple-700 rounded">
                        Podcast
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold leading-tight text-gray-900">{article.title}</CardTitle>
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