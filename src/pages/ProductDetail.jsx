import { useParams, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProductDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        
        // Determine which JSON file to fetch based on the current path
        let jsonFile = '/concrete-series.json'
        let backLink = '/concrete-series'
        
        if (location.pathname.includes('/wall-lights/')) {
          jsonFile = '/wall-lights.json'
          backLink = '/concrete-series/wall-lights'
        } else if (location.pathname.includes('/floor-lights/')) {
          jsonFile = '/floor-lights.json'
          backLink = '/concrete-series/floor-lights'
        } else if (location.pathname.includes('/path-lights/')) {
          jsonFile = '/path-lights.json'
          backLink = '/concrete-series/path-lights'
        } else if (location.pathname.includes('/step-lights/')) {
          jsonFile = '/step-lights.json'
          backLink = '/concrete-series/step-lights'
        }
        
        // Fetch the appropriate JSON data
        const response = await fetch(jsonFile)
        const data = await response.json()
        
        // Find the product by URL slug
        const foundProduct = data.products.find(p => {
          // Try matching by URL first (for step lights, etc.)
          const urlSlug = p.url.replace('./', '').replace('.html', '')
          if (urlSlug === id) {
            return true
          }
          // Fallback to name-based matching
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
  }, [id, location.pathname])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading product details...</p>
      </div>
    )
  }

  if (!product) {
    // Determine back link based on current path
    let backLink = '/concrete-series'
    if (location.pathname.includes('/wall-lights/')) {
      backLink = '/concrete-series/wall-lights'
    } else if (location.pathname.includes('/floor-lights/')) {
      backLink = '/concrete-series/floor-lights'
    } else if (location.pathname.includes('/path-lights/')) {
      backLink = '/concrete-series/path-lights'
    } else if (location.pathname.includes('/step-lights/')) {
      backLink = '/concrete-series/step-lights'
    }

    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">Product not found</p>
          <p className="text-sm text-gray-600">ID: {id}</p>
          <Link to={backLink} className="text-blue-600 hover:underline">
            Back to Products
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
          <div className="space-y-6 lg:sticky lg:top-20">
            {/* Mobile Product Title (hidden on desktop) */}
            <div className="lg:hidden">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name.toUpperCase()}</h1>
            </div>
            
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-xl shadow-lg bg-gray-100">
              <img 
                src={product.images && product.images.length > 0 ? product.images[selectedImage] : product.image} 
                alt={`${product.name} - Main View`} 
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {product.images.slice(0, 3).map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg shadow cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - View ${index + 1}`} 
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
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

            
            {/* Dimension Table */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              {Array.isArray(product.dimensions) ? (
                // Multiple dimensions (array)
                <div>
                  {product.dimensions.map((dimension, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {dimension.type ? dimension.type.charAt(0).toUpperCase() + dimension.type.slice(1) : `Dimensions ${index + 1}`}
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
                              if (key === 'size' || key === 'type') return null;
                              return (
                                <tr key={key} className="border-b border-slate-100">
                                  <td className="py-2 text-slate-600">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                  <td className="py-2 font-medium">{value}</td>
                                </tr>
                              );
                            })}
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
            
            {/* Shades Section */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Available Shades</h3>
              
              {/* Regular Shared Shades */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-slate-800 mb-3">Regular Shared Shades</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/natural_concrete.png" 
                      alt="Natural Concrete" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">Natural Concrete</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/travertine.png" 
                      alt="Travertine" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">Travertine</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/stone_pattern.png" 
                      alt="Stone Pattern" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">Stone Pattern</p>
                  </div>
                </div>
              </div>
              
              {/* Custom Order Shades */}
              <div>
                <h4 className="text-lg font-medium text-slate-800 mb-3">Custom Order Shades</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/black_granite.png" 
                      alt="Black Granite" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">Black Granite</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/black_sandstone.png" 
                      alt="Black Sandstone" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">Black Sandstone</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/red_granite.png" 
                      alt="Red Granite" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">Red Granite</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/yellow_granite.png" 
                      alt="Yellow Granite" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">Yellow Granite</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/white_sandstone.png" 
                      alt="White Sandstone" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">White Sandstone</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/assets/products/concrete-series/shades/white_granite.png" 
                      alt="White Granite" 
                      className="w-16 h-16 mx-auto mb-2 rounded-lg object-cover border-2 border-gray-200"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-sm font-medium text-slate-700">White Granite</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Custom order shades require minimum quantity and may have longer lead times.
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <Link 
                to="/contact"
                className="block w-full bg-slate-900 text-white text-center py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
              >
                Contact Us
              </Link>
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
