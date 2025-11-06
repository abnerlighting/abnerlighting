import { useState, useEffect } from 'react'
import HeroBanner from '../components/HeroBanner'
import ProductSeriesNavigation from '../components/ProductSeriesNavigation'
import ProductGrid from '../components/ProductGrid'

const Play50 = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/play-50.json')
        if (!response.ok) {
          throw new Error('Failed to fetch Play-50 products')
        }
        const data = await response.json()
        setProducts(data.products || [])
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
        <HeroBanner 
          image="https://ik.imagekit.io/abnerlighting/banner/1.png" 
          alt="Play-50 Series" 
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
        <img src="https://ik.imagekit.io/abnerlighting/banner/1.png" alt="Play-50 Series" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Play-50 Series</h1>
          <p className="mt-4 text-lg text-slate-600">50mm architectural lighting solutions for modern spaces</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            The Play-50 series offers premium 50mm architectural lighting solutions designed for modern spaces. 
            These versatile lights provide excellent illumination while maintaining a sleek, contemporary aesthetic 
            that complements any architectural design.
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
        <ProductGrid 
          products={products} 
          routePrefix="/architectural-series/play-50" 
          uppercaseNames={false}
        />
      )}
    </main>
  )
}

export default Play50
