import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'

const ProjectCategory = () => {
  const { category } = useParams()
  const [categoryData, setCategoryData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCategoryData = async () => {
      try {
        const response = await fetch(`/projects/${category}.json`)
        if (!response.ok) {
          throw new Error('Category not found')
        }
        const data = await response.json()
        setCategoryData(data)
      } catch (error) {
        console.error('Error loading category data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCategoryData()
  }, [category])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!categoryData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p className="text-gray-600">The requested project category could not be found.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Image */}
      <HeroBanner 
        image="/assets/C01_0232.jpg" 
        alt={`${categoryData.title} Projects`} 
      />

      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="tracking-tight" style={{fontSize: '48px', paddingBottom: '0px'}}>
            {categoryData.title} Projects
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${category}/${project.slug}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 mb-3">
                  {project.type}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to All Projects */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProjectCategory
