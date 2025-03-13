function Hero() {
    return (
      <section className="relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
          <img 
            src="/api/placeholder/1200/600" 
            alt="Medical Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Advanced Brain Tumor Detection <span className="text-blue-300">Powered by AI</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Our cutting-edge deep learning algorithm provides rapid and accurate brain tumor classification from MRI scans.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Learn More
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 px-6 py-3 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-200">
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2 mr-4">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-blue-600 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-green-600 flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-purple-600 flex items-center justify-center text-white font-bold">
                  KL
                </div>
              </div>
              <p className="text-blue-100 text-sm">
                Trusted by <span className="font-semibold">300+</span> medical professionals worldwide
              </p>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>
    )
  }
  
  export default Hero