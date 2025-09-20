import { useState, useEffect } from 'react'
import ProductSeriesNavigation from '../components/ProductSeriesNavigation'

const Surfy = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // For now, we'll use a placeholder since we don't have a specific surfy.json file
        // This can be updated when the actual product data is available
        setProducts([
          {
            id: 'surfy-1',
            name: 'Surfy 10W',
            description: 'Compact architectural lighting solution',
            image: '/assets/products/the-architectural-series/surfy/surfy-10w.jpg',
            features: ['10W Power', 'Modern Design', 'Easy Installation']
          },
          {
            id: 'surfy-2', 
            name: 'Surfy 15W',
            description: 'Mid-range architectural lighting',
            image: '/assets/products/the-architectural-series/surfy/surfy-15w.jpg',
            features: ['15W Power', 'Versatile Application', 'Energy Efficient']
          },
          {
            id: 'surfy-3',
            name: 'Surfy 20W', 
            description: 'High-output architectural lighting',
            image: '/assets/products/the-architectural-series/surfy/surfy-20w.jpg',
            features: ['20W Power', 'High Output', 'Professional Grade']
          },
          {
            id: 'surfy-4',
            name: 'Surfy IP65',
            description: 'Weather-resistant architectural lighting',
            image: '/assets/products/the-architectural-series/surfy/surfy-ip65.jpg',
            features: ['IP65 Rating', 'Outdoor Ready', 'Durable Construction']
          }
        ])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (error) {
    return (
      <div>
        <section className="relative h-[30vh] w-full overflow-hidden">
          <img src="/assets/architectural-series-header.png" alt="Surfy Series" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </section>
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
        <img src="/assets/architectural-series-header.png" alt="Surfy Series" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Surfy Series</h1>
          <p className="mt-4 text-lg text-slate-600">Modern architectural lighting designs for contemporary spaces</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            The Surfy series represents the pinnacle of modern architectural lighting design. 
            These innovative fixtures combine cutting-edge LED technology with sophisticated 
            aesthetics to create stunning visual effects in any contemporary space.
          </p>
        </div>
      </section>

      {/* Product Series Navigation */}
      <ProductSeriesNavigation />

      {/* Product Grid */}
      {loading ? (
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-slate-600">Loading products...</p>
          </div>
        </section>
      ) : (
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/assets/products/the-architectural-series/surfy/kone.jpg'
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Spacing */}
      <div className="pb-20"></div>
    </main>
  )
}

export default Surfy
