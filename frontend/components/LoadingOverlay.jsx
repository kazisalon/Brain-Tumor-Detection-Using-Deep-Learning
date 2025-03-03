function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Processing your scan
        </h3>
        
        <p className="text-gray-600 mb-6">
          Our AI is analyzing the image. This usually takes 5-10 seconds.
        </p>
        
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingOverlay
