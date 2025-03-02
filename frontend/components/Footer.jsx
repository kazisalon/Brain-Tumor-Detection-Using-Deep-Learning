// File: components/Footer.jsx
function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© {new Date().getFullYear()} MedScan AI. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <span className="text-sm">Powered by AI and Medical Expertise</span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer