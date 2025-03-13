function ResultSection({ result }) {
    const isTumor = result.class_id === 1
    const confidence = result.confidence
    
    return (
      <section className="mb-16 animate-fadeIn">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Analysis Results</h2>
          
          <div className={`card p-8 border-l-8 ${isTumor ? 'border-l-red-500' : 'border-l-green-500'}`}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Status Icon */}
              <div className={`w-24 h-24 flex-shrink-0 rounded-full flex items-center justify-center ${isTumor ? 'bg-red-100' : 'bg-green-100'}`}>
                {isTumor ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              
              {/* Result content */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">
                  {isTumor ? 'Potential Brain Tumor Detected' : 'No Brain Tumor Detected'}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {isTumor 
                    ? "Our AI analysis indicates the potential presence of a brain tumor in the MRI scan. Please consult with a medical professional for a comprehensive diagnosis."
                    : "Our AI analysis does not detect the presence of a brain tumor in this MRI scan. As always, consult with healthcare professionals for proper medical advice."
                  }
                </p>
                
                {/* Confidence bar */}
                <div className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Confidence Level</span>
                    <span className="text-sm font-medium text-gray-700">{confidence.toFixed(2)}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className={`progress-bar-fill ${isTumor ? 'bg-red-500' : 'bg-green-500'}`}
                      style={{ width: `${confidence}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${isTumor ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {result.prediction}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    AI Analysis
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    VGG19 Model
                  </span>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Important:</span> This is an AI-assisted analysis and not a replacement for professional medical diagnosis.
                </p>
                <button className="whitespace-nowrap btn-secondary text-sm py-2 px-4">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ResultSection