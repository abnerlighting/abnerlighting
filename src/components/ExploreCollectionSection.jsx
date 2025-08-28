import { Link } from 'react-router-dom'

const ExploreCollectionSection = () => {
  return (
    <section id="explore" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold">Explore by Collection</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left: Concrete big */}
          <Link 
            to="/concrete-series"
            className="group relative block h-80 overflow-hidden rounded-2xl md:h-[520px]"
          >
            <img 
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" 
              src="https://ik.imagekit.io/abnerlighting/concrete-series/section.jpg" 
              alt="Concrete" 
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3>Concrete</h3>
              <p className="opacity-90">Rugged, modern, minimal.</p>
            </div>
          </Link>
          {/* Right: split into top/bottom */}
          <div className="grid gap-4">
            <Link 
              to="/stone-series"
              className="group relative block h-40 overflow-hidden rounded-2xl sm:h-60 md:h-[250px]"
            >
              <img 
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" 
                src="https://ik.imagekit.io/abnerlighting/stone-series/section.jpg" 
                alt="Stone" 
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3>Stone</h3>
                <p className="opacity-90">Organic textures and depth.</p>
              </div>
            </Link>
            <Link 
              to="/architectural-series"
              className="group relative block h-40 overflow-hidden rounded-2xl sm:h-60 md:h-[250px]"
            >
              <img 
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" 
                src="https://ik.imagekit.io/abnerlighting/architectural-series/section.jpg" 
                alt="Technical" 
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3>Technical</h3>
                <p className="opacity-90">Engineered for performance.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreCollectionSection
