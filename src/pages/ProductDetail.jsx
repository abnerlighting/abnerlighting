import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        
        // Fetch concrete series data
        const response = await fetch('/concrete-series.json')
        const data = await response.json()
        
        // Find the product by URL slug
        const foundProduct = data.products.find(p => {
          const productSlug = p.name.toLowerCase().replace(/\s+/g, '-')
          return productSlug === id
        })
        
        if (foundProduct) {
          setProduct(foundProduct)
        }
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading product details...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">Product not found</p>
          <p className="text-sm text-gray-600">ID: {id}</p>
          <Link to="/concrete-series" className="text-blue-600 hover:underline">
            Back to Concrete Series
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Custom Black Navbar for Product Detail */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black">
        <div className="mx-auto">
          <div className="relative flex h-16 md:h-20 items-center justify-center">
            {/* DESKTOP/TABLET: hamburger (left) */}
            <button aria-label="Open menu"
                    className="hidden sm:inline-flex absolute left-4 items-center justify-center rounded-md p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>

            {/* DESKTOP/TABLET: centered logo */}
            <Link to="/" className="hidden sm:inline-flex absolute left-1/2 -translate-x-1/2 items-center gap-2 p-2">
              <img src="https://ik.imagekit.io/abnerlighting/branding/abner-lighting-logo-white.png" alt="Abner Lighting" className="h-6 md:h-8 w-auto" />
            </Link>

            {/* DESKTOP/TABLET: contact (right) */}
            <a href="mailto:info@abner.co.in?subject=Inquiry from Website&body=Hello Abner,%0D%0A%0D%0AI saw your website and wanted to know about your lighting solutions.%0D%0A%0D%0APlease provide more information about your products and services.%0D%0A%0D%0ABest regards,"
               className="hidden sm:block absolute right-4 sm:right-6 border px-3 py-1.5 md:px-6 md:py-3 text-xs md:text-base font-medium text-white hover:bg-white hover:text-slate-900 transition-colors"
               style={{borderColor:'rgba(255,255,255,.8)'}}>Contact Us</a>

            {/* MOBILE: logo (left) */}
            <Link to="/" className="sm:hidden inline-flex absolute left-3 top-1 items-center gap-2 px-2 py-4">
              <img src="https://ik.imagekit.io/abnerlighting/branding/abner-lighting-logo-white.png" alt="Abner Lighting" className="h-7 w-auto" />
            </Link>

            {/* MOBILE: hamburger (right) */}
            <button aria-label="Open menu"
                    className="sm:hidden inline-flex absolute right-2 items-center justify-center rounded-md p-1.5 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="relative pt-16 md:pt-20">
        {/* Product Section */}
        <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          
          {/* Left Side: Product Images */}
          <div className="space-y-6 lg:max-h-screen lg:overflow-y-auto lg:pr-4">
            {/* Mobile Product Title (hidden on desktop) */}
            <div className="lg:hidden">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name.toUpperCase()}</h1>
            </div>
            
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
              <img 
                src={product.images && product.images.length > 0 ? product.images[selectedImage] : product.image} 
                alt={`${product.name} - Main View`} 
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(0, 4).map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg shadow cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - View ${index + 1}`} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Right Side: Product Details */}
          <div className="space-y-8 lg:sticky lg:top-20">
            {/* Product Name */}
            <div>
              <h1 className="hidden lg:block text-4xl md:text-5xl font-bold text-slate-900">{product.name.toUpperCase()}</h1>
              <p className="mt-4 text-lg text-slate-600">{product['full-description'] || product.description}</p>
            </div>
            
            {/* Why Choose Us Section */}
            <div className="bg-black p-6 rounded-xl">
              <div className="grid grid-cols-3 gap-4">
                {/* Feature 1 */}
                <div className="text-center">
                  <img src="https://ik.imagekit.io/abnerlighting/why-choose-us/1.png" alt="European Style" className="h-16 w-16 mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-white">High-End European Style, Local Pricing</h4>
                </div>
                {/* Feature 2 */}
                <div className="text-center">
                  <img src="https://ik.imagekit.io/abnerlighting/why-choose-us/3.png" alt="Fast Delivery" className="h-16 w-16 mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-white">Fastest Delivery, OTIF Promise</h4>
                </div>
                {/* Feature 3 */}
                <div className="text-center">
                  <img src="https://ik.imagekit.io/abnerlighting/why-choose-us/2.png" alt="Service That Lasts" className="h-16 w-16 mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-white">Service That Lasts, Guaranteed for Decades</h4>
                </div>
              </div>
            </div>
            
            {/* Dimension Table */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              {Array.isArray(product.dimensions) ? (
                // Multiple dimensions (array)
                <div>
                  {product.dimensions.map((dimension, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {dimension.size ? `Dimensions for ${dimension.size}` : `Dimensions ${index + 1}`}
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-slate-200">
                              <th className="text-left py-2 font-semibold text-slate-900">Specification</th>
                              <th className="text-left py-2 font-semibold text-slate-900">Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(dimension).map(([key, value]) => {
                              if (key === 'size') return null;
                              return (
                                <tr key={key} className="border-b border-slate-100">
                                  <td className="py-2 text-slate-600">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                  <td className="py-2 font-medium">{value}</td>
                                </tr>
                              );
                            })}
                            <tr className="border-b border-slate-100">
                              <td className="py-2 text-slate-600">Material</td>
                              <td className="py-2 font-medium">{product.material}</td>
                            </tr>
                            <tr>
                              <td className="py-2 text-slate-600">Finish</td>
                              <td className="py-2 font-medium">{product.finish}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              ) : product.dimensions ? (
                // Single dimensions object
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Dimensions</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-2 font-semibold text-slate-900">Specification</th>
                          <th className="text-left py-2 font-semibold text-slate-900">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.dimensions).map(([key, value]) => (
                          <tr key={key} className="border-b border-slate-100">
                            <td className="py-2 text-slate-600">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                            <td className="py-2 font-medium">{value}</td>
                          </tr>
                        ))}
                        <tr className="border-b border-slate-100">
                          <td className="py-2 text-slate-600">Material</td>
                          <td className="py-2 font-medium">{product.material}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-slate-600">Finish</td>
                          <td className="py-2 font-medium">{product.finish}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-600">
                  <p>Dimensions information not available</p>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <a 
                href={`mailto:info@abner.co.in?subject=Inquiry for ${product.name}&body=Hello Abner,%0D%0A%0D%0AI am interested in the ${product.name} wall light.%0D%0A%0D%0APlease provide more information about pricing, availability, and specifications.%0D%0A%0D%0ABest regards,`}
                className="block w-full bg-slate-900 text-white text-center py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
              >
                Contact Us
              </a>
              <Link 
                to="/concrete-series"
                className="block w-full bg-white border-2 border-slate-900 text-slate-900 text-center py-4 px-6 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
              >
                View Concrete Series
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default ProductDetail
