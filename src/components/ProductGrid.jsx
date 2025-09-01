import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Card component for products with valid URLs (navigation)
const NavigableProductCard = ({ product, index, hoveredProduct, setHoveredProduct, uppercaseNames, routePrefix = '/product' }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Navigating to product:', product.name, 'URL:', product.url)
    try {
      const productName = product.url.replace('./', '').replace('.html', '')
      navigate(`${routePrefix}/${productName}`)
      // Scroll to top when navigating to product detail
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.log('Navigation failed:', error)
    }
  }

  return (
    <div 
      className="group cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleClick()
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
      onMouseEnter={() => setHoveredProduct(index)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <div className="aspect-square overflow-hidden rounded-lg shadow-md bg-gray-100">
        <img 
          src={hoveredProduct === index ? product['hover-image'] : product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">
          {uppercaseNames ? product.name.toUpperCase() : product.name}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{product.description}</p>
      </div>
    </div>
  )
}

// Card component for products without URLs (toast)
const ToastProductCard = ({ product, index, hoveredProduct, setHoveredProduct, uppercaseNames, onProductClick }) => {
  const handleClick = () => {
    console.log('Showing toast for product:', product.name)
    if (onProductClick) {
      onProductClick(product, product.toastMessage)
    }
  }

  return (
    <div 
      className="group cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleClick()
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
      onMouseEnter={() => setHoveredProduct(index)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <div className="aspect-square overflow-hidden rounded-lg shadow-md bg-gray-100">
        <img 
          src={hoveredProduct === index ? product['hover-image'] : product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">
          {uppercaseNames ? product.name.toUpperCase() : product.name}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{product.description}</p>
        <p className="mt-1 text-xs text-slate-500 italic">Click to learn more</p>
      </div>
    </div>
  )
}

const ProductGrid = ({ products, uppercaseNames = true, onProductClick, routePrefix = '/product' }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null)



  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {products.map((product, index) => {
          // Choose card type based on whether product has a URL
          const hasUrl = Boolean(product.url)
          console.log(`Product ${product.name}: URL = ${product.url}, hasUrl = ${hasUrl}`)
          
          if (hasUrl) {
            return (
              <NavigableProductCard
                key={index}
                product={product}
                index={index}
                hoveredProduct={hoveredProduct}
                setHoveredProduct={setHoveredProduct}
                uppercaseNames={uppercaseNames}
                routePrefix={routePrefix}
              />
            )
          } else {
            return (
              <ToastProductCard
                key={index}
                product={product}
                index={index}
                hoveredProduct={hoveredProduct}
                setHoveredProduct={setHoveredProduct}
                uppercaseNames={uppercaseNames}
                onProductClick={onProductClick}
              />
            )
          }
        })}
      </div>
    </section>
  )
}

export default ProductGrid
