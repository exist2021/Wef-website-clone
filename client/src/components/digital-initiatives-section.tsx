import { Button } from "@/components/ui/button";

export default function DigitalInitiativesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Digital Initiatives</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shaping the digital transformation for a more inclusive future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Economy</h3>
            <p className="text-gray-600 mb-4">
              Building frameworks for sustainable digital growth
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-gray-600 mb-4">
              Securing the digital infrastructure of tomorrow
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
            <p className="text-gray-600 mb-4">
              Ensuring AI benefits all of humanity
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}