import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

const BlogPost = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/blogs/${slug}.md`)
        if (!response.ok) {
          throw new Error('Blog not found')
        }
        
        const markdownText = await response.text()
        console.log('Markdown content loaded:', markdownText.substring(0, 200)) // Debug log
        
        // Parse frontmatter
        const frontmatterMatch = markdownText.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
        if (!frontmatterMatch) {
          throw new Error('Invalid markdown format')
        }
        
        const frontmatter = frontmatterMatch[1]
        const content = frontmatterMatch[2]
        
        console.log('Frontmatter:', frontmatter) // Debug log
        console.log('Content length:', content.length) // Debug log
        
        // Parse frontmatter properties
        const frontmatterObj = {}
        frontmatter.split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(': ')
          if (key && valueParts.length > 0) {
            let value = valueParts.join(': ').trim()
            
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.slice(1, -1)
            }
            
            // Handle arrays (like tags)
            if (value.startsWith('[') && value.endsWith(']')) {
              try {
                value = JSON.parse(value)
              } catch (e) {
                // If JSON parsing fails, treat as string
                console.warn('Failed to parse array:', value)
              }
            }
            
            // Handle boolean values
            if (value === 'true') value = true
            if (value === 'false') value = false
            
            frontmatterObj[key.trim()] = value
          }
        })
        
        console.log('Parsed frontmatter:', frontmatterObj) // Debug log
        
        setBlog({
          ...frontmatterObj,
          content: content.trim()
        })
      } catch (err) {
        console.error('Error loading blog:', err) // Debug log
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadBlog()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link 
            to="/blogs" 
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">No blog data available</p>
          <Link 
            to="/blogs" 
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.imageAlt || blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{blog.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">{blog.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta Information */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          {blog.category && (
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600 mb-4">
              {blog.category}
            </div>
          )}
          {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {blog.tags.map((tag, index) => (
                <span key={index} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Markdown Content */}
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={blog.content} />
        </div>

        {/* Back to Blogs Button */}
        <div className="text-center mt-12">
          <Link 
            to="/blogs" 
            className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors text-lg"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
