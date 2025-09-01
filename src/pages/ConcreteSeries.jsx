import { Link } from 'react-router-dom'

const ConcreteSeries = () => {
  const categories = [
    {
      name: 'Wall Lights',
      description: 'Elegant wall illumination solutions designed to enhance any space with sophisticated lighting. Our wall lights combine modern aesthetics with practical functionality, perfect for both indoor and outdoor applications.',
      image: '/assets/products/concrete-series/wall_lights/header.png',
      href: '/concrete-series/wall-lights',
      features: ['Modern Design', 'Outdoor Ready', 'Easy Installation']
    },
    {
      name: 'Floor Lights',
      description: 'Ground-level illumination excellence for pathways, gardens, and outdoor spaces. Our floor lights provide essential lighting while maintaining elegant design and robust construction for long-lasting performance.',
      image: '/assets/products/concrete-series/floor_lights/header.png',
      href: '/concrete-series/floor-lights',
      features: ['Ground Level', 'Weather Resistant', 'Pathway Lighting']
    },
    {
      name: 'Path Lights',
      description: 'Illuminate your journey with style through our comprehensive range of pathway lighting solutions. Designed to guide and enhance outdoor spaces with elegant illumination and sophisticated design.',
      image: '/assets/products/concrete-series/path_lights/header.png',
      href: '/concrete-series/path-lights',
      features: ['Multiple Sizes', 'Guiding Light', 'Landscape Integration']
    },
    {
      name: 'Step Lights',
      description: 'Safe and elegant stair illumination designed to enhance stair safety and aesthetics. Our step lighting solutions provide essential illumination while maintaining elegant design for both indoor and outdoor applications.',
      image: '/assets/products/concrete-series/step_lights/header.png',
      href: '/concrete-series/step-lights',
      features: ['Safety First', 'Stair Integration', 'Elegant Design']
    }
  ]

  return (
    <main className="relative">
      {/* Hero Image */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        <img src="https://ik.imagekit.io/abnerlighting/banner/1.png" alt="Concrete Series" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      
      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Concrete Series Products</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Abner Lighting's Concrete Series combines minimalist design with industrial strength, creating lighting that's as stylish as it is durable. Perfect for both indoor and outdoor spaces, these fixtures seamlessly enhance modern and luxurious homes with their raw textures and contemporary appeal. Built to outlast trends, the Concrete Series offers superior quality, bold design, and a refined edge that sets it apart from standard residential lighting.
          </p>
        </div>
      </section>

      {/* Categories Grid - Alternating Layout */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {categories.map((category, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 py-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {/* Image */}
            <div className="lg:w-1/2">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                {index + 1} of {categories.length}
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                    {feature}
                  </span>
                ))}
              </div>
              
              <Link 
                to={category.href}
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                View {category.name}
              </Link>
            </div>
          </div>
        ))}
      </section>

    </main>
  )
}

export default ConcreteSeries
