import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-[#0A2B58] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Committed to improving<br />the state of the world
          </h1>
          <p className="text-xl md:text-xl mb-8 max-w-2xl">
            The World Economic Forum is the International Organization for Public-Private Cooperation
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#FF0000] hover:bg-[#CC0000] text-white">
              Explore Platform
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A2B58]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}