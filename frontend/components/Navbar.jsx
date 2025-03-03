function Navbar() {
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-800">NeuraScan</span>
                <span className="ml-2 text-sm font-medium text-blue-600">AI</span>
              </div>
            </div>
            
            {/* Navigation Links - for larger screens */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#" className="px-3 py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">Home</a>
                <a href="#" className="px-3 py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">About</a>
                <a href="#" className="px-3 py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">Technology</a>
                <a href="#" className="px-3 py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors">Research</a>
                <a href="#" className="px-4 py-2 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Contact Us</a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar