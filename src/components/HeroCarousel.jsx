import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const trackRef = useRef(null)
  const intervalRef = useRef(null)

  const slides = [
    {
      id: 1,
      desktopImage: 'https://ik.imagekit.io/abnerlighting/concrete-series/banner-desktop.jpg?tr=f-auto,q-auto',
      mobileImage: 'https://ik.imagekit.io/abnerlighting/concrete-series/banner-mobile.jpg?tr=f-auto,q-auto',
      title: 'Concrete Series',
      subtitle: 'Exquisite Collection',
      link: '/concrete-series'
    },
    {
      id: 2,
      desktopImage: 'https://ik.imagekit.io/abnerlighting/stone-series/banner-desktop.jpg?tr=f-auto,q-auto',
      mobileImage: 'https://ik.imagekit.io/abnerlighting/stone-series/banner-mobile.jpg?tr=f-auto,q-auto',
      title: 'Stone Series',
      subtitle: 'Exquisite Collection',
      link: '/stone-series'
    },
    {
      id: 3,
      desktopImage: 'https://ik.imagekit.io/abnerlighting/architectural-series/banner-desktop.jpg?tr=f-auto,q-auto',
      mobileImage: 'https://ik.imagekit.io/abnerlighting/architectural-series/banner-mobile.jpg?tr=f-auto,q-auto',
      title: 'Architectural Series',
      subtitle: 'Exquisite Collection',
      link: '/architectural-series'
    },
    {
      id: 4,
      desktopImage: '/assets/carousel/durban-desktop.jpg',
      mobileImage: '/assets/carousel/durban-mobile.jpg',
      title: 'Explore the Texture',
      subtitle: 'Concrete Series',
      link: '/concrete-series'
    },
    {
      id: 5,
      desktopImage: '/assets/carousel/tanzanite-desktop.jpg',
      mobileImage: '/assets/carousel/tanzanite-mobile.jpg',
      title: 'Stone Series',
      subtitle: 'Exquisite Collection',
      link: '/stone-series'
    },
    {
      id: 6,
      desktopImage: '/assets/carousel/fluid-bar-desktop.jpg',
      mobileImage: '/assets/carousel/fluid-bar-mobile.jpg',
      title: 'Architectural Series',
      subtitle: 'Exquisite Collection',
      link: '/architectural-series'
    },
    {
      id: 7,
      desktopImage: '/assets/carousel/studio-desktop.jpg',
      mobileImage: '/assets/carousel/studio-mobile.jpg',
      title: 'Worli Studio',
      subtitle: 'Unveiling Soon',
      link: '/about'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    intervalRef.current = interval

    return () => clearInterval(interval)
  }, [slides.length])

  const applyTransform = (smooth = true) => {
    if (trackRef.current) {
      trackRef.current.style.transition = smooth ? 'transform 600ms ease' : 'none'
      trackRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`
    }
  }

  useEffect(() => {
    applyTransform(true)
  }, [currentSlide])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 4000)
    }
  }

  const goToPrevious = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentSlide + 1) % slides.length
    goToSlide(newIndex)
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Arrows */}
      <button 
        onClick={goToPrevious}
        aria-label="Previous slide" 
        className="absolute left-4 md:left-8 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-slate-900 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={goToNext}
        aria-label="Next slide" 
        className="absolute right-4 md:right-8 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-slate-900 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
      >
        <ChevronRight size={20} />
      </button>

      <div 
        ref={trackRef}
        className="flex h-full w-max will-change-transform"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide) => (
          <article key={slide.id} className="relative h-full w-screen flex-shrink-0">
            <picture>
              <source media="(min-width: 768px)" srcSet={slide.desktopImage} />
              <img 
                src={slide.mobileImage} 
                alt={`${slide.title} banner`} 
                className="absolute inset-0 h-full w-full object-cover" 
              />
            </picture>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 flex h-full items-end justify-end md:items-center md:justify-start">
              <div className="w-full px-6 md:px-28 text-white pb-24 md:pb-0">
                <div className="max-w-3xl text-left">
                  <div className="subtitle opacity-90 mb-3">{slide.subtitle}</div>
                  <h2 className="mb-6 banner-heading text-4xl">{slide.title}</h2>
                  <Link 
                    to={slide.link}
                    className="inline-block border px-5 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/70"
                    style={{ backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,.8)' }}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/70 ${
              index === currentSlide 
                ? 'h-3 w-3 bg-white' 
                : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
