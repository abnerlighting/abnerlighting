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
    <div>
      {/* Hero Image */}
      <HeroBanner 
        image="https://ik.imagekit.io/abnerlighting/banner/1.png" 
        alt="Architectural Series" 
      />
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Architectural Series
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Modern architectural lighting that defines contemporary spaces
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Contemporary Design Excellence
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Our Architectural Series represents the pinnacle of modern lighting design. 
              These pieces combine clean lines, innovative materials, and sophisticated 
              engineering to create lighting that enhances contemporary interiors.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Each fixture is designed with both form and function in mind, providing 
              exceptional illumination while serving as a striking design element.
            </p>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src="https://ik.imagekit.io/abnerlighting/products/architectural-series/1.png" 
              alt="Architectural Series Detail" 
              className="h-full w-full object-cover" 
            />
          </div>
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
                  <h3 className="text-lg font-semibold text-slate-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                  <p className="mt-1 text-xs text-slate-500 italic">Click to learn more</p>
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
    </div>
  )
}

export default ArchitecturalSeries
