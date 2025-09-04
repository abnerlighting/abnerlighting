import { useState, useEffect, useRef } from 'react'

const AbnerNumbersSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ years: 0, customers: 0, projects: 0 })
  const sectionRef = useRef(null)

  const abnerNumbers = [
    { key: 'years', target: 18, suffix: '+', label: 'Years of Lighting' },
    { key: 'customers', target: 700, suffix: '+', label: 'Happy Customers' },
    { key: 'projects', target: 1000, suffix: '+', label: 'Projects Delivered' }
  ]

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    const stepDuration = duration / steps

    const animateCounter = (key, target) => {
      let current = 0
      const increment = target / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }))
      }, stepDuration)
    }

    // Start animations with slight delays for staggered effect
    setTimeout(() => animateCounter('years', 10), 100)
    setTimeout(() => animateCounter('customers', 500), 200)
    setTimeout(() => animateCounter('projects', 1000), 300)
  }, [isVisible])

  return (
    <section ref={sectionRef} id="numbers" className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-center text-4xl">Abner in Numbers</h2>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {abnerNumbers.map((item, index) => (
            <div key={index} className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div 
                className="font-normal transition-all duration-300 ease-out" 
                style={{ fontSize: '56px', lineHeight: '1.2', minWidth: '110px', display: 'inline-block' }}
              >
                {counters[item.key]}{item.suffix}
              </div>
              <div className="mt-2 text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AbnerNumbersSection