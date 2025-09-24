import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'

const ProjectDetail = () => {
  const { category, projectSlug } = useParams()
  const [projectData, setProjectData] = useState(null)
  const [categoryData, setCategoryData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjectData = async () => {
      try {
        // Load category data
        const categoryResponse = await fetch(`/projects/${category}.json`)
        if (!categoryResponse.ok) {
          throw new Error('Category not found')
        }
        const categoryData = await categoryResponse.json()
        setCategoryData(categoryData)

        // Find the specific project
        const project = categoryData.projects.find(p => p.slug === projectSlug)
        if (!project) {
          throw new Error('Project not found')
        }
        setProjectData(project)
      } catch (error) {
        console.error('Error loading project data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjectData()
  }, [category, projectSlug])


  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!projectData || !categoryData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600">The requested project could not be found.</p>
        <Link to="/projects" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Image */}
      <HeroBanner 
        image={projectData.images[0]} 
        alt={projectData.name} 
      />

      {/* Breadcrumb - Only show for categories with multiple projects */}
      {categoryData.projects.length > 1 && (
        <section className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/projects" className="text-gray-500 hover:text-gray-700">
                  Projects
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link to={`/projects/${category}`} className="ml-4 text-gray-500 hover:text-gray-700">
                    {categoryData.title}
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-900 font-medium">{projectData.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </section>
      )}

      {/* Project Header */}
      <section className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600 mb-4">
            {projectData.type}
          </div>
          <h1 className="tracking-tight" style={{fontSize: '48px', paddingBottom: '0px'}}>
            {projectData.name}
          </h1>
        </div>
      </section>

      {/* Image Gallery - Masonry Grid */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projectData.images.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <img
                src={image}
                alt={`${projectData.name} - Image ${index + 1}`}
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>


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

export default ProjectDetail
