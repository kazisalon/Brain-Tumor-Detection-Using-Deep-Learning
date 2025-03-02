function Result({ result }) {
    const isTumor = result.class_id === 1
    
    return (
      <div className={`mt-8 p-6 rounded-lg border ${isTumor ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
        <h3 className="text-xl font-bold mb-4">Analysis Result</h3>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-medium mb-2">Diagnosis:</p>
            <div className={`text-xl font-bold ${isTumor ? 'text-red-600' : 'text-green-600'}`}>
              {result.prediction}
            </div>
            <p className="mt-2 text-gray-600">
              Confidence: {result.confidence.toFixed(2)}%
            </p>
          </div>
          
          <div className={`w-24 h-24 flex items-center justify-center rounded-full ${isTumor ? 'bg-red-100' : 'bg-green-100'}`}>
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
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            {isTumor ? 
              "This scan shows indications of a brain tumor. Please consult with a healthcare professional for a proper diagnosis and treatment options." : 
              "No indications of a brain tumor were found in this scan. Remember that this is an AI-assisted analysis and not a replacement for professional medical advice."
            }
          </p>
        </div>
      </div>
    )
  }
  
  export default Result