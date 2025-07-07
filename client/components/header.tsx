import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">
              World Economic Forum
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Platform</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Engage</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Intelligence</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Events</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Join
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}