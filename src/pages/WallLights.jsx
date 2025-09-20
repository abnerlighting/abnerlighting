import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import ProductSeriesNavigation from '../components/ProductSeriesNavigation'

const WallLights = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/wall-lights.json')
        const data = await response.json()
        setProducts(data.products || [])
      } catch (error) {
        console.error('Error fetching wall lights:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }



  return (
    <main className="relative">


      {/* Hero Section */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        <img
          src="/assets/products/concrete-series/wall_lights/header.png"
          alt="Wall Lights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Wall Lights</h1>
            <p className="text-xl md:text-2xl">Elegant wall illumination solutions</p>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Wall Lights Collection</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover our range of sophisticated wall lights designed to enhance any space with elegant illumination. 
            From modern minimalism to classic sophistication, our wall lights combine functionality with timeless design.
          </p>
        </div>
      </section>

      {/* Product Series Navigation */}
      <ProductSeriesNavigation />

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {products && products.length > 0 ? (
            <ProductGrid products={products} routePrefix="/concrete-series/wall-lights" />
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">No products found</p>
              <p className="text-sm text-gray-500">Products array: {JSON.stringify(products)}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Illuminate Your Space?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to discuss your wall lighting requirements and get expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Contact Us
              </Link>
              <Link
                to="/concrete-series"
                className="inline-flex items-center px-8 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                View All Concrete Series
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WallLights
