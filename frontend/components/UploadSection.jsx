function UploadSection({ previewUrl, handleImageSelect, handleUpload, handleReset, fileInputRef, disabled, error }) {
    return (
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Upload Brain MRI Scan</h2>
          <p className="text-gray-600 text-center mb-8">
            Upload your MRI scan image for instant AI-powered analysis and classification
          </p>
          
          <div className="card p-8">
            <div className="upload-area">
              {!previewUrl ? (
                <div className="space-y-6">
                  <div className="w-20 h-20 rounded-full gradient-bg mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Drag & Drop your MRI scan or
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Support formats: JPEG, PNG, JPG (max 5MB)
                    </p>
                    
                    <button 
                      className="btn-primary"
                      onClick={() => fileInputRef.current.click()}
                      disabled={disabled}
                    >
                      Browse Files
                    </button>
                  </div>
                  
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageSelect} 
                    className="hidden" 
                    accept="image/*"
                    disabled={disabled}
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative max-w-md mx-auto">
                    <img 
                      src={previewUrl} 
                      alt="MRI Scan Preview" 
                      className="max-h-80 mx-auto rounded-lg object-contain"
                    />
                    <button 
                      onClick={handleReset}
                      className="absolute top-3 right-3 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 focus:outline-none"
                      disabled={disabled}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => fileInputRef.current.click()}
                      className="btn-secondary"
                      disabled={disabled}
                    >
                      Change Image
                    </button>
                    <button
                      onClick={handleUpload}
                      className="btn-primary flex items-center"
                      disabled={disabled}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Analyze Scan
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
  
  export default UploadSection