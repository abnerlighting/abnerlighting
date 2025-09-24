import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Load project data from markdown files
        const projectSlugs = ['restaurants', 'workspaces', 'jewellery-stores', 'residential']
        const projectPromises = projectSlugs.map(async (slug) => {
          try {
            const response = await fetch(`/projects/${slug}.md`)
            if (!response.ok) return null
            
            const markdownText = await response.text()
            
            // Parse frontmatter
            const frontmatterMatch = markdownText.match(/^---\n([\s\S]*?)\n---/)
            if (!frontmatterMatch) return null
            
            const frontmatter = frontmatterMatch[1]
            const frontmatterObj = {}
            
            frontmatter.split('\n').forEach(line => {
              const [key, ...valueParts] = line.split(': ')
              if (key && valueParts.length > 0) {
                const value = valueParts.join(': ').replace(/^"|"$/g, '')
                frontmatterObj[key.trim()] = value
              }
            })
            
            return {
              ...frontmatterObj,
              slug
            }
          } catch (error) {
            console.error(`Error loading project ${slug}:`, error)
            return null
          }
        })
        
        const loadedProjects = (await Promise.all(projectPromises)).filter(Boolean)
        setProjects(loadedProjects)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
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
          {projects.map((project, index) => (
            <div key={project.slug} className={`flex flex-col lg:flex-row items-center gap-12 py-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Image */}
              <div className="lg:w-3/5">
                <img 
                  src={project.image} 
                  alt={project.imageAlt || project.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Content */}
              <div className="lg:w-2/5 space-y-6">
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600">
                  Project {project.number}
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                {/* <Link 
                  to={`/projects/${project.slug}`}
                  className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Read Full Project
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
