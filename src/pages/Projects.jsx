import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'

const Projects = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        // Load category data from JSON files
        const categorySlugs = ['jewellery', 'retail', 'commercial', 'residential']
        const categoryPromises = categorySlugs.map(async (slug) => {
          try {
            const response = await fetch(`/projects/${slug}.json`)
            if (!response.ok) return null
            
            const data = await response.json()
            return data
          } catch (error) {
            console.error(`Error loading category ${slug}:`, error)
            return null
          }
        })
        
        const loadedCategories = (await Promise.all(categoryPromises)).filter(Boolean)
        setCategories(loadedCategories)
      } catch (error) {
        console.error('Error loading categories:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  return (
    <div>
      {/* Hero Image */}
      <HeroBanner 
        image="/assets/C01_0232.jpg" 
        alt="Abner Projects" 
      />

      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="tracking-tight" style={{fontSize: '48px', paddingBottom: '0px'}}>Our Projects</h1>
        </div>
      </section>

      {/* Projects Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categories.map((category, index) => {
            // Determine the link destination based on number of projects
            const linkDestination = category.projects.length === 1 
              ? `/projects/${category.category}/${category.projects[0].slug}`
              : `/projects/${category.category}`
            
            return (
              <div key={category.category} className={`flex flex-col lg:flex-row items-center gap-12 py-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Image */}
                <div className="lg:w-3/5">
                  <Link to={linkDestination}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                      <img 
                        src={category.projects[0]?.images[0] || "/assets/C01_0232.jpg"} 
                        alt={category.title}
                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 px-6 py-3 rounded-lg">
                          <span className="text-gray-800 font-medium">
                            {category.projects.length === 1 ? 'View Project' : 'View Projects'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                
                {/* Content */}
                <div className="lg:w-2/5 space-y-6">
                  <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                    {category.projects.length} Project{category.projects.length !== 1 ? 's' : ''}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Link 
                    to={linkDestination}
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    {category.projects.length === 1 ? 'View Project' : 'View Projects'}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Projects
