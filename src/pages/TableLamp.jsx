import { useState, useEffect } from 'react'
import HeroBanner from '../components/HeroBanner'
import Toast from '../components/Toast'

const TableLamp = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [toastMessage, setToastMessage] = useState('')
  const [isToastVisible, setIsToastVisible] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/table-lamp.json')
        if (!response.ok) {
          throw new Error('Failed to fetch table lamp products')
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

  const handleProductClick = (product) => {
    setToastMessage('Contact us to know more details about this product')
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
          alt="Table Lamp" 
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
        <img src="https://ik.imagekit.io/abnerlighting/banner/1.png" alt="Table Lamp" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Table Lamp</h1>
          <p className="mt-4 text-lg text-slate-600">Charming stone table lamp collection for intimate spaces</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Our table lamp collection features charming stone designs that create intimate lighting solutions. 
            From nature-inspired pieces to modern geometric forms, each table lamp brings warmth and character.
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={product.image} 
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

export default TableLamp
