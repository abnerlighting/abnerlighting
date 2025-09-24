import { Link, useLocation } from 'react-router-dom'

const ProductSeriesNavigation = () => {
  const location = useLocation()

  const series = [
    {
      name: 'Concrete Series',
      href: '/concrete-series',
      description: 'Industrial strength with minimalist design'
    },
    {
      name: 'Architectural Series',
      href: '/architectural-series',
      description: 'Premium architectural lighting solutions'
    },
    {
      name: 'Stone Series',
      href: '/stone-series',
      description: 'Natural stone lighting elegance'
    }
  ]

  return (
    <>
      <nav className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 py-3">
              {series.map((item) => {
                const isActive = location.pathname === item.href || 
                                location.pathname.startsWith(item.href + '/')
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      relative px-4 sm:px-6 py-4 text-sm font-medium rounded-full transition-all duration-200 flex flex-col items-center justify-center
                      ${isActive 
                        ? 'bg-gray-900 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }
                    `}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span className="block leading-tight">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
      {/* Add spacing below navigation */}
      <div className="h-8"></div>
    </>
  )
}

export default ProductSeriesNavigation
