// File: components/Header.jsx
function Header() {
    return (
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <h1 className="text-2xl font-bold">MedScan AI</h1>
            </div>
            <div>
              <span className="text-sm md:text-base">Advanced Brain Tumor Classification System</span>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header
  