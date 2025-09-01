import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleNavbarScroll)
    handleNavbarScroll()
    return () => window.removeEventListener('scroll', handleNavbarScroll)
  }, [])

  useEffect(() => {
    setIsDrawerOpen(false)
  }, [location])

  const toggleDrawer = (force) => {
    const shouldOpen = (force === true) || (force !== false && !isDrawerOpen)
    setIsDrawerOpen(shouldOpen)
    
    if (shouldOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        toggleDrawer(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Stone Series', href: '/stone-series' },
        { name: 'Architectural Series', href: '/architectural-series' },
        { name: 'Concrete Series', href: '/concrete-series' },
      ]
    },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <div className="min-h-full bg-white text-slate-900">
      <ScrollToTop />
      {/* Header */}
      <header 
        id="navbar" 
        className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
          isScrolled ? 'bg-black/40 backdrop-blur' : ''
        }`}
      >
        <div className="mx-auto">
          <div className="relative flex h-16 md:h-20 items-center justify-center">
            {/* DESKTOP/TABLET: hamburger (left) */}
            <button
              aria-label="Open menu"
              id="btnDesktopHamburger"
              className="hidden sm:inline-flex absolute left-4 items-center justify-center rounded-md p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              onClick={() => toggleDrawer(true)}
            >
              <Menu size={28} />
            </button>

            {/* DESKTOP/TABLET: centered logo */}
            <Link to="/" className="hidden sm:inline-flex absolute left-1/2 -translate-x-1/2 items-center gap-2 p-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://ik.imagekit.io/abnerlighting/branding/abner-lighting-logo-white.png" 
                alt="Abner Lighting" 
                className="h-6 md:h-8 w-auto" 
              />
            </Link>

            {/* DESKTOP/TABLET: contact (right) */}
            <Link
              to="/contact"
              className="hidden sm:block absolute right-4 sm:right-6 border px-3 py-1.5 md:px-6 md:py-3 text-xs md:text-base font-medium text-white hover:bg-white hover:text-slate-900 transition-colors"
              style={{ borderColor: 'rgba(255,255,255,.8)' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contact Us
            </Link>

            {/* MOBILE: logo (left) */}
            <Link to="/" className="sm:hidden inline-flex absolute left-3 top-1 items-center gap-2 px-2 py-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://ik.imagekit.io/abnerlighting/branding/abner-lighting-logo-white.png" 
                alt="Abner Lighting" 
                className="h-7 w-auto" 
              />
            </Link>

            {/* MOBILE: hamburger (right) */}
            <button
              aria-label="Open menu"
              id="btnMobileHamburger"
              className="sm:hidden inline-flex absolute right-2 items-center justify-center rounded-md p-1.5 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              onClick={() => toggleDrawer(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div 
        id="overlay" 
        className={`fixed inset-0 z-40 transition-opacity ${
          isDrawerOpen ? 'bg-black/40 opacity-100' : 'hidden opacity-0'
        }`} 
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer */}
      <aside
        id="drawer"
        className={`fixed inset-y-0 z-50 w-full md:w-80 transform bg-white shadow-xl transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isDrawerOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <span className="text-lg font-semibold">Menu</span>
            <button 
              aria-label="Close menu" 
              className="rounded-md p-2 hover:bg-slate-100" 
              onClick={() => toggleDrawer(false)}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="space-y-0 p-2 text-slate-700">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between rounded-lg px-4 py-3 hover:bg-slate-100 text-left"
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isProductsOpen && (
                      <div className="ml-4 space-y-0">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block rounded-lg px-4 py-3 hover:bg-slate-100"
                            onClick={() => {
                              toggleDrawer(false)
                              setIsProductsOpen(false)
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block rounded-lg px-4 py-3 hover:bg-slate-100"
                    onClick={() => {
                      toggleDrawer(false)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-black py-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="text-center">
            <h3 className="text-white text-2xl">Address</h3>
            <div className="mt-4 space-y-6 text-slate-300">
              <div>
                <p className="text-sm font-medium text-white mb-2">Worli Showroom</p>
                <p className="text-sm">266, 1ST FLR, Kanchwala,<br/>Mansion, Annie Besant RD,<br/>Worli Colony, Mumbai,<br/>Mumbai- 400030, Maharashtra</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-2">Warehouse</p>
                <p className="text-sm">Gala No.6, Ground Floor,<br/>Building No. B-1,<br/>Print World Industrial Complex,<br/>Mankoli Road, Vehele,<br/>Bhiwandi, Thane - 421302</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-white text-2xl">Content</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <p className="text-sm"><Link to="/" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></p>
              <p className="text-sm"><Link to="/about" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link></p>
              <p className="text-sm"><Link to="/projects" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link></p>
              <p className="text-sm"><Link to="/concrete-series" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Concrete Series</Link></p>
              <p className="text-sm"><Link to="/stone-series" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Stone Series</Link></p>
              <p className="text-sm"><Link to="/architectural-series" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Architectural Series</Link></p>
              <p className="text-sm"><Link to="/blogs" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Blogs</Link></p>
              <p className="text-sm"><Link to="/contact" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link></p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-white text-2xl">Contact Us</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <p className="text-sm">
                <a 
                  href="mailto:info@abner.co.in?subject=Inquiry from Website&body=Hello Abner,%0D%0A%0D%0AI saw your website and wanted to know about your lighting solutions.%0D%0A%0D%0APlease provide more information about your products and services.%0D%0A%0D%0ABest regards," 
                  className="hover:underline"
                >
                  info@abner.co.in
                </a>
              </p>
              <p className="text-sm">
                <a href="tel:+918291296000" className="hover:underline">+91 8291296000</a>
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-white text-lg mb-3">Follow us</h4>
            </div>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/worldofabner/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/worldofabner/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/abnerlights/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="text-center subtitle text-slate-400">© 2025 Abner Lighting. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default Layout
