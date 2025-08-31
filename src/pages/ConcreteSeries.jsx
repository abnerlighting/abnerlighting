import { useState } from 'react'
import { Link } from 'react-router-dom'
import useProducts from '../hooks/useProducts'

const ConcreteSeries = () => {
  const { products, loading, error } = useProducts('concrete-series')
  const [hoveredProduct, setHoveredProduct] = useState(null)

  if (error) {
    return (
      <main className="relative">
        <section className="relative h-[30vh] w-full overflow-hidden">
          <img src="https://ik.imagekit.io/abnerlighting/banner/1.png" alt="Concrete Series" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </section>
        <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-red-600">Error loading products: {error}</p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="relative">
      {/* Hero Image */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        <img src="https://ik.imagekit.io/abnerlighting/banner/1.png" alt="Concrete Series" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Concrete Series Products</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Abner Lighting's Concrete Series combines minimalist design with industrial strength, creating lighting that's as stylish as it is durable. Perfect for both indoor and outdoor spaces, these fixtures seamlessly enhance modern and luxurious homes with their raw textures and contemporary appeal. Built to outlast trends, the Concrete Series offers superior quality, bold design, and a refined edge that sets it apart from standard residential lighting.
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
              <Link 
                key={index}
                to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group cursor-pointer"
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
              </Link>
            ))}
          </div>
        </section>
      )}

    </main>
  )
}

export default ConcreteSeries
