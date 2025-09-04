import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [hoveredBlog, setHoveredBlog] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Load blog data from markdown files
        const blogSlugs = ['led-lighting-future', 'concrete-lighting-architecture']
        const blogPromises = blogSlugs.map(async (slug) => {
          try {
            const response = await fetch(`/blogs/${slug}.md`)
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
            
            return {
              ...frontmatterObj,
              slug,
              url: `/blogs/${slug}`,
              // Use hoverImage from frontmatter if available, otherwise fallback to main image
              hoverImage: frontmatterObj.hoverImage || frontmatterObj.image
            }
          } catch (error) {
            console.error(`Error loading blog ${slug}:`, error)
            return null
          }
        })
        
        const loadedBlogs = (await Promise.all(blogPromises)).filter(Boolean)
        setBlogs(loadedBlogs)
      } catch (error) {
        console.error('Error loading blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div>
      {/* Hero Image */}
      <HeroBanner 
        image="/assets/C01_0232.jpg" 
        alt="Abner Blogs" 
      />

      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="tracking-tight" style={{fontSize: '48px', paddingBottom: '0px'}}>Our Blogs</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover insights, trends, and expert knowledge about lighting design, technology, and industry innovations. Our blog features articles on architectural lighting, sustainable solutions, design trends, and practical tips for creating beautiful, functional spaces.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-lg text-slate-600">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-slate-600">No blogs found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredBlog(blog.slug)}
                onMouseLeave={() => setHoveredBlog(null)}
                onClick={() => {
                  // Navigate to the blog URL
                  if (blog.url) {
                    window.location.href = blog.url
                  }
                }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md relative">
                  {/* Default Image */}
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className={`h-full w-full object-cover transition-all duration-500 ${
                      hoveredBlog === blog.slug ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                    }`}
                  />
                  
                  {/* Hover Image */}
                  <img 
                    src={blog.hoverImage} 
                    alt={blog.title} 
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                      hoveredBlog === blog.slug ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-slate-900">{blog.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{blog.excerpt}</p>
                  <div className="mt-3 flex items-center text-xs text-slate-500">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Blogs
