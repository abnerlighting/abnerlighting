import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import Toast from '../components/Toast'

const StoneSeries = () => {
  const [seriesData, setSeriesData] = useState([])
  const [multiProductSeries, setMultiProductSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [toastMessage, setToastMessage] = useState('')
  const [isToastVisible, setIsToastVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        // Fetch all series data
        const response = await fetch('/stone-series.json')
        if (!response.ok) {
          throw new Error('Failed to fetch stone series')
        }
        const data = await response.json()
        
        // Fetch products from each series
        const seriesPromises = data.series.map(async (series) => {
          try {
            const seriesResponse = await fetch(`/${series.id}.json`)
            if (seriesResponse.ok) {
              const seriesData = await seriesResponse.json()
              return {
                ...series,
                products: seriesData.products
              }
            }
            return { ...series, products: [] }
          } catch (err) {
            console.error(`Error fetching ${series.id}:`, err)
            return { ...series, products: [] }
          }
        })
        
        const allSeries = await Promise.all(seriesPromises)
        
  // Define the desired order for main categories (removed pendant & wall per request)
  const categoryOrder = ['table-lamp', 'floor-lamp']
        
        // Separate series by type
        const singleProductSeries = allSeries.filter(series => series.products.length === 1 && series.id !== 'pearl-family')
        const multiProductSeriesData = allSeries.filter(series => series.products.length > 1)
        
        // Sort multi-product series by the defined order
        const orderedMultiProductSeries = categoryOrder
          .map(categoryId => multiProductSeriesData.find(series => series.id === categoryId))
          .filter(Boolean)
        
        // Add any remaining multi-product series that weren't in the order
        const remainingMultiProductSeries = multiProductSeriesData.filter(
          series => !categoryOrder.includes(series.id)
        )
        
        setSeriesData(singleProductSeries)
        setMultiProductSeries([...orderedMultiProductSeries, ...remainingMultiProductSeries])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSeriesData()
  }, [])

  const handleProductClick = (product) => {
    setToastMessage('Contact us to know more details about this product')
    setIsToastVisible(true)
    // Scroll to top when viewing product
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeToast = () => {
    setIsToastVisible(false)
  }

  if (error) {
    return (
      <div>
        <HeroBanner 
          image="https://ik.imagekit.io/abnerlighting/stone-series/header.jpg" 
          alt="Stone Series" 
        />
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-red-600">Error loading products: {error}</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <main className="relative">
      {/* Hero Image */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        <img src="/assets/products/stone-series/pearl-family/pearl-family.png" alt="Stone Series" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Stone Series</h1>
          <p className="mt-4 text-lg text-slate-600">Premium stone lighting solutions for elegant spaces</p>
        </div>
      </section>

  {/* Content Section */}
  <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover our comprehensive collection of stone lighting solutions crafted from natural materials. 
            Each piece brings the beauty of stone into your living spaces, creating warm, inviting atmospheres 
            with timeless elegance and sophisticated design.
          </p>
        </div>
      </section>

      {loading ? (
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-slate-600">Loading products...</p>
          </div>
        </section>
      ) : (
        <>
          {/* More Products Section - Single Product Families (moved to top) */}
          {seriesData.length > 0 && (
            <section className="relative mx-auto max-w-7xl px-4 pt-8 pb-20 sm:px-6 lg:px-8">
              {/* Section Title */}
              <div className="text-center mb-12">
                <p className="text-lg text-gray-600">Explore our family of stone lighting collections</p>
              </div>

              {/* Family Products Grid */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {seriesData.map((series, index) => (
                  <div 
                    key={index}
                    className="group cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleProductClick(series.products[0])
                      // Scroll to top when clicking product
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleProductClick(series.products[0])
                        // Scroll to top when navigating with keyboard
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    }}
                  >
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={series.products[0].image} 
                        alt={series.products[0].name} 
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-slate-900">{series.products[0].name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{series.description}</p>
                      <p className="mt-2 text-xs text-gray-500">{series.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Multi-Product Series - Desktop: Grid with Hover, Mobile: Alternating */}
          {multiProductSeries.length > 0 && (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Desktop: Grid Layout with Hover Text */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-8">
                {multiProductSeries.map((series, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={series.products[0].image} 
                      alt={series.products[0].name} 
                      className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-4">
                          {series.name}
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-4">{series.name}</h2>
                        
                        <p className="text-lg leading-relaxed mb-6 max-w-md">
                          {series.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm mb-6 justify-center">
                          <span className="bg-white/20 px-3 py-1 rounded-full">{series.products.length} products</span>
                          <span>•</span>
                          <span>Stone Lighting</span>
                        </div>
                        
                        <button 
                          onClick={() => {
                            navigate(`/stone-series/${series.id}`)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                        >
                          View All Products
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet: Alternating Layout */}
              <div className="lg:hidden">
                {multiProductSeries.map((series, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center gap-12 py-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Image */}
                    <div className="md:w-1/2">
                      <div 
                        className="cursor-pointer group"
                        onClick={() => handleProductClick(series.products[0])}
                      >
                        <img 
                          src={series.products[0].image} 
                          alt={series.products[0].name} 
                          className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-1/2 space-y-6">
                      <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                        {series.name}
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900">{series.name}</h2>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {series.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{series.products.length} products</span>
                        <span>•</span>
                        <span>Stone Lighting</span>
                      </div>
                      
                      <button 
                        onClick={() => {
                          navigate(`/stone-series/${series.id}`)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        View All Products
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* (duplicate More Products section removed) */}
        </>
      )}

      {/* Toast */}
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={closeToast} 
      />
    </main>
  )
}

export default StoneSeries
