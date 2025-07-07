import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Article } from "@shared/schema";

interface SpotlightSectionProps {
  articles?: Article[];
}

export default function SpotlightSection({ articles }: SpotlightSectionProps) {
  const featuredArticles = articles?.filter(article => article.featured).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">In the Spotlight</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Featured insights and analysis from our global community of leaders, 
            driving conversations that shape the future
          </p>
        </div>
        
        {!featuredArticles ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading featured content...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Featured articles grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {featuredArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className={`group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden ${
                    index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                  }`}
                >
                  {article.imageUrl && (
                    <div className={`relative overflow-hidden ${index === 0 ? 'h-80' : 'h-48'}`}>
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Category and content type badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0A2540] text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                        {article.contentType === 'video' && (
                          <span className="px-3 py-1 bg-[#FF6B35] text-white text-sm font-medium rounded-full flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                            Video
                          </span>
                        )}
                        {article.contentType === 'podcast' && (
                          <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2h2v2a5 5 0 0010 0v-2h2zM11 16h2v4h-2v-4z"/>
                            </svg>
                            Podcast
                          </span>
                        )}
                      </div>
                      
                      {/* Title overlay for main article */}
                      {index === 0 && (
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                            {article.title}
                          </h3>
                          <p className="text-gray-200 text-lg mb-4 line-clamp-2">
                            {article.description}
                          </p>
                          <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">
                            Read Full Article
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Content for smaller cards */}
                  {index !== 0 && (
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl font-bold text-[#0A2540] leading-tight mb-3 group-hover:text-[#FF6B35] transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-3">
                        {article.description}
                      </CardDescription>
                      <div className="pt-4">
                        <Button variant="outline" size="sm" className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white">
                          Read More
                        </Button>
                      </div>
                    </CardHeader>
                  )}
                </Card>
              ))}
            </div>
            
            {/* Call to action */}
            <div className="text-center bg-gradient-to-r from-[#0A2540] to-[#1B4F72] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Explore More Insights</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Access our complete library of reports, articles, and multimedia content 
                from thought leaders across industries and sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">
                  View All Articles
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A2540]">
                  Strategic Intelligence
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}