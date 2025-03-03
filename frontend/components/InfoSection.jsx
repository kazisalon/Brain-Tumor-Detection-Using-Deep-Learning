function InfoSection() {
    return (
      <section className="mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Upload MRI Scan</h3>
              <p className="text-gray-600">
                Upload your patient's brain MRI scan image. Our system accepts standard medical imaging formats.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our deep learning VGG19 model processes the image, identifying patterns associated with tumors.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Instant Results</h3>
              <p className="text-gray-600">
                Receive immediate classification results with confidence level to assist in your diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default InfoSection