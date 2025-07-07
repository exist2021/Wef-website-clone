import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0A2540] via-[#0D3A5C] to-[#1B4F72] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-100 border border-white/20">
                Annual Meeting 2025 • Davos-Klosters
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Committed to improving
              <br />
              <span className="text-[#FF6B35]">the state of the world</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-xl">
              The World Economic Forum is the International Organization for Public-Private Cooperation. 
              The Forum engages the foremost political, business, cultural and other leaders of society to shape global, regional and industry agendas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3 text-lg font-semibold">
                Explore Our Platform
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-3 text-lg font-semibold">
                Strategic Intelligence
              </Button>
            </div>
            
            {/* Key stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35]">1,000+</div>
                <div className="text-sm text-blue-100">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35]">430+</div>
                <div className="text-sm text-blue-100">Cities Engaged</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35]">100+</div>
                <div className="text-sm text-blue-100">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Visual element */}
          <div className="relative lg:block">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Globe or abstract visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#FF6B35]/30 to-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#FF6B35]/40 to-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#FF6B35]/60 backdrop-blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-pulse"></div>
              <div className="absolute bottom-12 left-8 w-12 h-12 rounded-full bg-[#FF6B35]/40 backdrop-blur-sm animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-12 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}