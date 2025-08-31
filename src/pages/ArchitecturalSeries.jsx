import { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import Toast from '../components/Toast'
import useProducts from '../hooks/useProducts'

const ArchitecturalSeries = () => {
  const { products, loading, error } = useProducts('architectural-series')
  const [toastMessage, setToastMessage] = useState('')
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const handleProductClick = (product) => {
    setToastMessage(product.toastMessage || 'Contact us to know more details')
    setIsToastVisible(true)
  }

  const closeToast = () => {
    setIsToastVisible(false)
  }

  if (error) {
    return (
      <div>
        <HeroBanner 
          image="https://ik.imagekit.io/abnerlighting/banner/1.png" 
          alt="Architectural Series" 
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
        <img src="https://ik.imagekit.io/abnerlighting/banner/1.png" alt="Architectural Series" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Architectural Series Products</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Premium residency lights can be used both indoors and outdoors and are often designed to complement the aesthetic of modern and luxurious homes. These lights are typically more expensive than standard residential lighting options but offer superior quality and design features.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      {loading ? (
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-slate-600">Loading products...</p>
          </div>
        </section>
      ) : (
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleProductClick(product)
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleProductClick(product)
                  }
                }}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={hoveredProduct === index ? product['hover-image'] : product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
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

export default ArchitecturalSeries
