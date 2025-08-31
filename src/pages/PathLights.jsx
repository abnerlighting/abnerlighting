import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'

const PathLights = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/path-lights.json')
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.error('Error fetching path lights:', error)
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
          src="/assets/products/concrete-series/path_lights/header.png"
          alt="Path Lights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Path Lights</h1>
            <p className="text-xl md:text-2xl">Illuminate your journey with style</p>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Our Path Lights Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of pathway lighting solutions designed to guide and enhance 
              outdoor spaces with elegant illumination and sophisticated design.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <ProductGrid products={products} routePrefix="/concrete-series/path-lights" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Light Up Your Pathways
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to discuss your path lighting requirements and get expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/concrete-series"
                className="inline-flex items-center px-8 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors"
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

export default PathLights
