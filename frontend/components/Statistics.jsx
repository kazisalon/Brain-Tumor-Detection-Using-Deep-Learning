// File: components/Statistics.jsx
function Statistics() {
    return (
      <section className="mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="card">
            <div className="p-8 gradient-bg rounded-t-xl">
              <h2 className="text-2xl font-bold text-white mb-2">NeuraScan AI in Numbers</h2>
              <p className="text-blue-100">Our technology is trusted by medical professionals worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Stat 1 */}
              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">98.2%</p>
                <p className="text-gray-600 font-medium">Accuracy Rate</p>
              </div>
              
              {/* Stat 2 */}
              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">120k+</p>
                <p className="text-gray-600 font-medium">Scans Analyzed</p>
              </div>
              
              {/* Stat 3 */}
              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">300+</p>
                <p className="text-gray-600 font-medium">Medical Institutions</p>
              </div>
              
              {/* Stat 4 */}
              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
                <p className="text-gray-600 font-medium">AI-Powered Diagnoses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Statistics;
  