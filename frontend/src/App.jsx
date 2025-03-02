import { useState, useRef } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Result from "../components/Result"
import LoadingSpinner from "../components/LoadingSpinner"
import UploadArea from "../components/UploadArea"


function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

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
      
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError('Error processing image. Please try again.')
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
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Brain Tumor Detection
            </h2>
            
            <UploadArea
              previewUrl={previewUrl}
              handleImageSelect={handleImageSelect}
              handleUpload={handleUpload}
              handleReset={handleReset}
              fileInputRef={fileInputRef}
              disabled={loading}
            />
            
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            
            {loading ? (
              <div className="mt-8 flex justify-center">
                <LoadingSpinner />
              </div>
            ) : result && (
              <Result result={result} />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App