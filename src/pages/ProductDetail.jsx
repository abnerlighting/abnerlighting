import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, Truck, Shield, Clock } from 'lucide-react'

const ProductDetail = () => {
  const { id } = useParams()

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: 'Concrete Pendant Light',
    image: 'https://ik.imagekit.io/abnerlighting/concrete-series/product1.jpg',
    description: 'Modern concrete pendant with warm LED lighting, perfect for contemporary spaces. This handcrafted piece combines the raw beauty of concrete with sophisticated lighting technology.',
    price: '₹12,500',
    category: 'Pendant',
    series: 'Concrete Series',
    specifications: {
      'Material': 'Premium concrete, LED',
      'Dimensions': '30cm x 30cm x 40cm',
      'Power': '15W LED',
      'Color Temperature': '3000K (Warm White)',
      'Finish': 'Natural concrete',
      'Warranty': '2 years'
    },
    features: [
      'Handcrafted concrete construction',
      'Energy-efficient LED lighting',
      'Dimmable functionality',
      'Natural texture variations',
      'Easy installation',
      'Modern minimalist design'
    ]
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to={`/${product.series.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-primary">{product.series}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-bold text-primary mb-6">{product.price}</p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link 
                  to="/contact"
                  className="w-full btn-primary text-center block"
                >
                  Get Quote
                </Link>
                <Link 
                  to="/contact"
                  className="w-full btn-secondary text-center block"
                >
                  Contact Sales Team
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Truck size={24} className="text-primary mb-2" />
                    <span className="text-sm text-gray-600">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Shield size={24} className="text-primary mb-2" />
                    <span className="text-sm text-gray-600">2 Year Warranty</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock size={24} className="text-primary mb-2" />
                    <span className="text-sm text-gray-600">Fast Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Related Products</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Add related products here */}
          </div>
        </div>
      </section>

      {/* Back to Series */}
      <section className="py-12">
        <div className="container-custom text-center">
          <Link 
            to={`/${product.series.toLowerCase().replace(' ', '-')}`}
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to {product.series}</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
