import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import Toast from '../components/Toast'

const ArchitecturalSeries = () => {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [toastMessage, setToastMessage] = useState('')
  const [isToastVisible, setIsToastVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch('/architectural-series.json')
        if (!response.ok) {
          throw new Error('Failed to fetch architectural series')
        }
        const data = await response.json()
        
        // Define the desired order for architectural series (user requested)
        const seriesOrder = [
          'play-50',
          'play-70',
          'play-100',
          'play-me',
          'surfy'
        ]
        
        // Sort series by the defined order
        const orderedSeries = seriesOrder
          .map(seriesId => data.series.find(series => series.id === seriesId))
          .filter(Boolean)
        
        // Add any remaining series that weren't in the order
        const remainingSeries = data.series.filter(
          series => !seriesOrder.includes(series.id)
        )
        
        setSeries([...orderedSeries, ...remainingSeries])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSeries()
  }, [])

  const handleSeriesClick = (seriesItem) => {
    // Navigate to the specific series page
    navigate(`/architectural-series/${seriesItem.id}`)
    // Scroll to top when navigating to series
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeToast = () => {
    setIsToastVisible(false)
  }

  if (error) {
    return (
      <div>
        <HeroBanner 
          image="https://ik.imagekit.io/abnerlighting/architectural-series/header.jpg" 
          alt="Architectural Series" 
        />
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-red-600">Error loading series: {error}</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <main className="relative">
      {/* Hero Image */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        <img src="/assets/architectural-series-header.png" alt="Architectural Series" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Architectural Series</h1>
          <p className="mt-4 text-lg text-slate-600">Premium architectural lighting solutions for modern spaces</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover our comprehensive range of architectural lighting solutions designed for modern spaces. 
            Each series offers unique features and applications, from compact mini lights to powerful 
            architectural fixtures that transform any environment.
          </p>
        </div>
      </section>

      {/* Series Grid - Desktop: Grid with Hover, Mobile: Alternating */}
      {loading ? (
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-slate-600">Loading series...</p>
          </div>
        </section>
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop: Grid Layout with Hover Text */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {series.map((seriesItem, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={seriesItem.image} 
                  alt={seriesItem.name} 
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-4">
                      Series {index + 1}
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{seriesItem.name}</h2>
                    
                    <p className="text-lg leading-relaxed mb-6 max-w-md">
                      {seriesItem.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm mb-6 justify-center">
                      <span className="bg-white/20 px-3 py-1 rounded-full">{seriesItem.products} products</span>
                      <span>•</span>
                      <span>Architectural Lighting</span>
                    </div>
                    
                    <button 
                      onClick={() => handleSeriesClick(seriesItem)}
                      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                    >
                      View Products
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Alternating Layout */}
          <div className="lg:hidden">
            {series.map((seriesItem, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center gap-12 py-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <div 
                    className="cursor-pointer group"
                    onClick={() => handleSeriesClick(seriesItem)}
                  >
                    <img 
                      src={seriesItem.image} 
                      alt={seriesItem.name} 
                      className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 space-y-6">
                  <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                    Series {index + 1}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900">{seriesItem.name}</h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {seriesItem.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{seriesItem.products} products</span>
                    <span>•</span>
                    <span>Architectural Lighting</span>
                  </div>
                  
                  <button 
                    onClick={() => handleSeriesClick(seriesItem)}
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    View Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Spacing */}
      <div className="pb-20"></div>

      {/* Toast */}
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={closeToast} 
      />
    </main>
  )
}

export default ArchitecturalSeries
