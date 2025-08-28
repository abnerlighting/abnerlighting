import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      slug: 'lighting-trends-2024',
      title: 'Lighting Trends 2024: What\'s Hot in Interior Design',
      excerpt: 'Discover the latest lighting trends that are shaping modern interior design and transforming spaces.',
      image: 'https://ik.imagekit.io/abnerlighting/blogs/blog1.jpg',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Trends'
    },
    {
      id: 2,
      slug: 'choosing-right-lighting',
      title: 'Choosing the Right Lighting for Your Space: A Complete Guide',
      excerpt: 'A comprehensive guide to selecting the perfect lighting solutions for different rooms and purposes.',
      image: 'https://ik.imagekit.io/abnerlighting/blogs/blog2.jpg',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'Guide'
    },
    {
      id: 3,
      slug: 'art-of-ambient-lighting',
      title: 'The Art of Ambient Lighting: Creating the Perfect Atmosphere',
      excerpt: 'Learn how to create the perfect ambiance with strategic lighting placement and design principles.',
      image: 'https://ik.imagekit.io/abnerlighting/blogs/blog3.jpg',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Design'
    },
    {
      id: 4,
      slug: 'led-vs-traditional-lighting',
      title: 'LED vs Traditional Lighting: Making the Right Choice',
      excerpt: 'Compare the benefits and drawbacks of LED and traditional lighting options for your projects.',
      image: 'https://ik.imagekit.io/abnerlighting/blogs/blog4.jpg',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Technology'
    },
    {
      id: 5,
      slug: 'sustainable-lighting-solutions',
      title: 'Sustainable Lighting Solutions for Modern Buildings',
      excerpt: 'Explore eco-friendly lighting options that reduce energy consumption while maintaining aesthetics.',
      image: 'https://ik.imagekit.io/abnerlighting/blogs/blog5.jpg',
      date: 'February 20, 2024',
      readTime: '6 min read',
      category: 'Sustainability'
    },
    {
      id: 6,
      slug: 'commercial-lighting-design',
      title: 'Commercial Lighting Design: Best Practices for Success',
      excerpt: 'Essential tips and best practices for designing effective lighting solutions in commercial spaces.',
      image: 'https://ik.imagekit.io/abnerlighting/blogs/blog6.jpg',
      date: 'February 15, 2024',
      readTime: '9 min read',
      category: 'Commercial'
    }
  ]

  const categories = ['All', 'Trends', 'Guide', 'Design', 'Technology', 'Sustainability', 'Commercial']

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and trends in lighting design. Stay updated with the latest in lighting technology and design principles.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container-custom">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link 
                      to={`/blogs/${blog.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest lighting trends, tips, and insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
