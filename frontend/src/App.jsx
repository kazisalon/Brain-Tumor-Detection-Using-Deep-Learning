import { useState, useRef } from 'react'


function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)
  const resultSectionRef = useRef(null)

  const handleImageSelect = (e) => {
    setError(null)
    setResult(null)
    
    const file = e.target.files[0]
    if (file) {
      // Validate file is an image
      if (!file.type.match('image.*')) {
        setError('Please select an image file (jpg, png, etc.)')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit. Please choose a smaller file.')
        return
      }
      
      setSelectedImage(file)
      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)
    }
  }

  const handleUpload = async () => {
    if (!selectedImage) {
      setError('Please select an image first')
      return
    }

    setLoading(true)
    setError(null)
    
    try {
      const formData = new FormData()
      formData.append('file', selectedImage)
      
      // Make sure the URL matches your backend server
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Error: ${response.status}`)
      }
      
      const data = await response.json()
      setResult(data)
      
      // Scroll to result section after a short delay
      setTimeout(() => {
        if (resultSectionRef.current) {
          resultSectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }
      }, 500)
    } catch (err) {
      setError(`Error processing image: ${err.message}. Please try again.`)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSelectedImage(null)
    setPreviewUrl(null)
    setResult(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = null
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {loading && <LoadingOverlay />}
      
      <Navbar />
      
      <Hero />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <UploadSection 
            previewUrl={previewUrl}
            handleImageSelect={handleImageSelect}
            handleUpload={handleUpload}
            handleReset={handleReset}
            fileInputRef={fileInputRef}
            disabled={loading}
            error={error}
          />
          
          {result && (
            <div ref={resultSectionRef}>
              <ResultSection result={result} />
            </div>
          )}
          
          <InfoSection />
          
          <Statistics />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App