import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-[#0A2540] text-white text-xs py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <span>The International Organization for Public-Private Cooperation</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">Sign In</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-200">Join</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-[#0A2540] leading-tight">
                World Economic Forum
              </h1>
              <span className="text-xs text-gray-600 tracking-wide">
                COMMITTED TO IMPROVING THE STATE OF THE WORLD
              </span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0A2540] font-medium">
                Platform
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0A2540] font-medium">
                Engage
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0A2540] font-medium">
                Intelligence
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0A2540] font-medium">
                Events
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-[#0A2540] font-medium">About</a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white">
              Strategic Intelligence
            </Button>
            <Button size="sm" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">
              Join the Forum
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}