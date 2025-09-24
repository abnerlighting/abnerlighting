import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Invi50 = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch('/invi-50.json')
        const data = await response.json()
        setProduct(data.products[0])
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [])

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
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
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
                  src={product.images[selectedImage]} 
                  alt={`${product.name} - Main View`} 
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((image, index) => (
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
            </div>
            
            {/* Right Side: Product Details */}
            <div className="space-y-8 lg:sticky lg:top-20">
              {/* Product Name */}
              <div>
                <h1 className="hidden lg:block text-4xl md:text-5xl font-bold text-slate-900">{product.name.toUpperCase()}</h1>
                <p className="mt-4 text-lg text-slate-600">{product['full-description']}</p>
              </div>
              
              
              {/* Technical Specifications */}
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Technical Specifications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Power (W)</h4>
                    <p className="text-slate-600">{product.specifications.power.values.join('W/')}W</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">CCT (K)</h4>
                    <p className="text-slate-600">{product.specifications.cct.values.join('K/')}K</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">CRI</h4>
                    <p className="text-slate-600">{product.specifications.cri} (97 on request)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Distribution</h4>
                    <p className="text-slate-600">{product.specifications.distribution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Input Voltage (V)</h4>
                    <p className="text-slate-600">{product.specifications.input_voltage}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Special CCT</h4>
                    <p className="text-slate-600">{product.specifications.special_cct}</p>
                  </div>
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
                  to="/"
                  className="block w-full bg-white border-2 border-slate-900 text-slate-900 text-center py-4 px-6 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Invi50
