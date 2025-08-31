import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

const ProjectBlog = () => {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/projects/${slug}.md`)
        if (!response.ok) {
          throw new Error('Project not found')
        }
        
        const markdownText = await response.text()
        
        // Parse frontmatter
        const frontmatterMatch = markdownText.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
        if (!frontmatterMatch) {
          throw new Error('Invalid markdown format')
        }
        
        const frontmatter = frontmatterMatch[1]
        const content = frontmatterMatch[2]
        
        // Parse frontmatter properties
        const frontmatterObj = {}
        frontmatter.split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(': ')
          if (key && valueParts.length > 0) {
            const value = valueParts.join(': ').replace(/^"|"$/g, '')
            frontmatterObj[key.trim()] = value
          }
        })
        
        setProject({
          ...frontmatterObj,
          content
        })
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProject()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link 
            to="/projects" 
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.imageAlt || project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta Information */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600 mb-4">
            Project {project.number}
          </div>
          <div className="text-gray-500 text-sm">
            {project.date} • {project.readTime}
          </div>
        </div>

        {/* Markdown Content */}
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={project.content} />
        </div>

        {/* Back to Projects Button */}
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors text-lg"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectBlog
