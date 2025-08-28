import HeroBanner from '../components/HeroBanner'
import ProductGrid from '../components/ProductGrid'
import useProducts from '../hooks/useProducts'

const ConcreteSeries = () => {
  const { products, loading, error } = useProducts('concrete-series')

  if (error) {
    return (
      <div>
        <HeroBanner 
          image="https://ik.imagekit.io/abnerlighting/banner/1.png" 
          alt="Concrete Series" 
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
        alt="Concrete Series" 
      />
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Concrete Series
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Industrial strength lighting with minimalist design and contemporary appeal
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Minimalist Design, Industrial Strength
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Our Concrete Series combines minimalist design with industrial strength, creating lighting 
              that's as stylish as it is durable. Perfect for both indoor and outdoor spaces, these 
              fixtures seamlessly enhance modern and luxurious homes.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Built to outlast trends, the Concrete Series offers superior quality, bold design, and 
              a refined edge that sets it apart from standard residential lighting.
            </p>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src="https://ik.imagekit.io/abnerlighting/products/concrete-series/1.png" 
              alt="Concrete Series Detail" 
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
        <ProductGrid 
          products={products} 
          uppercaseNames={true} 
        />
      )}
    </div>
  )
}

export default ConcreteSeries
