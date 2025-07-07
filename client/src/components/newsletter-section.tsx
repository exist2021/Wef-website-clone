import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-[#0a2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay informed with our weekly intelligence brief
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on global trends, policy developments, and emerging technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                Subscribe
              </Button>
            </div>{/* Remove the misplaced closing tags and fix the div nesting */}
        </div>
      </div> {/* This closes the div with class "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" */}
    </section>
  );
}