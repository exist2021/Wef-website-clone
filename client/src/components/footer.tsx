export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      {/* Newsletter section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Stay informed with our newsletter</h3>
              <p className="text-gray-300">
                Get the latest insights and updates from the World Economic Forum delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">World Economic Forum</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              The International Organization for Public-Private Cooperation. 
              We believe that progress happens by bringing together people from all walks of life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Platform column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Leadership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Centres</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Initiatives</a></li>
            </ul>
          </div>
          
          {/* Engage column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Engage</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Strategic Intelligence</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Media</a></li>
            </ul>
          </div>
          
          {/* Connect column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Procurement</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2025 World Economic Forum. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-[#FF6B35] transition-colors">Cookie Settings</a>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-gray-500">
                Headquarters: 91-93 route de la Capite, CH-1223 Cologny/Geneva, Switzerland
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}