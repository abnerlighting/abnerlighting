import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogPost = () => {
  const { slug } = useParams()

  // Mock blog data - in a real app, this would come from an API or CMS
  const blogPost = {
    slug: 'lighting-trends-2024',
    title: 'Lighting Trends 2024: What\'s Hot in Interior Design',
    excerpt: 'Discover the latest lighting trends that are shaping modern interior design and transforming spaces.',
    content: `
# Lighting Trends 2024: What's Hot in Interior Design

The world of interior lighting is constantly evolving, with new technologies and design philosophies emerging each year. As we move through 2024, several key trends are shaping how we think about and implement lighting in our spaces.

## 1. Smart Lighting Integration

Smart lighting has moved beyond simple convenience to become an integral part of modern home design. With the rise of IoT (Internet of Things) technology, homeowners are increasingly looking for lighting solutions that can be controlled remotely and integrated with other smart home systems.

### Key Features:
- **Voice Control**: Integration with Alexa, Google Assistant, and Siri
- **App Control**: Remote management through smartphone applications
- **Automation**: Scheduled lighting changes based on time, occupancy, or natural light levels
- **Energy Efficiency**: Smart sensors that adjust lighting based on natural light availability

## 2. Sustainable and Eco-Friendly Options

Sustainability continues to be a major driving force in lighting design. Consumers are increasingly conscious of their environmental impact and are seeking lighting solutions that are both beautiful and eco-friendly.

### Sustainable Lighting Features:
- **LED Technology**: Energy-efficient lighting that lasts longer and uses less power
- **Recycled Materials**: Fixtures made from recycled or sustainable materials
- **Solar Integration**: Outdoor lighting powered by solar energy
- **Circular Design**: Products designed for easy disassembly and recycling

## 3. Minimalist and Clean Designs

The minimalist trend shows no signs of slowing down. Clean lines, simple forms, and uncluttered designs are dominating the lighting market.

### Design Principles:
- **Geometric Shapes**: Simple, clean geometric forms
- **Neutral Colors**: Whites, blacks, and natural materials
- **Hidden Technology**: Discreet integration of smart features
- **Floating Elements**: Fixtures that appear to float or have minimal visible support

## 4. Biophilic Design Integration

Biophilic design, which incorporates natural elements into interior spaces, is influencing lighting design in significant ways.

### Natural Elements:
- **Organic Shapes**: Fixtures inspired by natural forms
- **Natural Materials**: Wood, stone, and other natural materials
- **Dynamic Lighting**: Systems that mimic natural light patterns
- **Living Elements**: Integration with plants and natural elements

## 5. Color Temperature Control

The ability to control color temperature is becoming increasingly important, allowing users to create different moods and atmospheres throughout the day.

### Benefits:
- **Circadian Rhythm Support**: Lighting that supports natural sleep-wake cycles
- **Mood Enhancement**: Different color temperatures for different activities
- **Energy Management**: Cooler light for focus, warmer light for relaxation

## 6. Statement Pieces and Artistic Lighting

While minimalism is popular, there's also a growing trend toward statement lighting pieces that serve as works of art.

### Artistic Elements:
- **Sculptural Forms**: Lighting as sculpture
- **Custom Designs**: Bespoke lighting solutions
- **Interactive Elements**: Lighting that responds to movement or touch
- **Color Changing**: Dynamic color options for dramatic effect

## 7. Outdoor Lighting Innovation

Outdoor lighting is becoming more sophisticated, with a focus on creating seamless indoor-outdoor living experiences.

### Outdoor Trends:
- **Integrated Systems**: Seamless connection between indoor and outdoor lighting
- **Landscape Integration**: Lighting that enhances natural landscape features
- **Security Features**: Smart outdoor lighting with security integration
- **Weather Resistance**: Durable materials and construction for outdoor use

## Conclusion

The lighting trends of 2024 reflect a broader shift toward technology integration, sustainability, and thoughtful design. Whether you're renovating an existing space or building new, these trends offer exciting opportunities to create lighting solutions that are both functional and beautiful.

The key is to choose lighting that not only meets your practical needs but also reflects your personal style and values. With so many innovative options available, there's never been a better time to explore the possibilities of modern lighting design.

---

*For more information about implementing these trends in your space, contact our team of lighting experts. We're here to help you create the perfect lighting solution for your needs.*
    `,
    image: 'https://ik.imagekit.io/abnerlighting/blogs/blog1.jpg',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Trends',
    author: 'Abner Lighting Team',
    tags: ['Lighting Trends', 'Interior Design', 'Smart Lighting', 'Sustainability']
  }

  const relatedPosts = [
    {
      id: 2,
      slug: 'choosing-right-lighting',
      title: 'Choosing the Right Lighting for Your Space',
      image: 'https://ik.imagekit.io/abnerlighting/blogs/blog2.jpg',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      slug: 'art-of-ambient-lighting',
      title: 'The Art of Ambient Lighting',
      image: 'https://ik.imagekit.io/abnerlighting/blogs/blog3.jpg',
      date: 'March 5, 2024'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src={blogPost.image} 
          alt={blogPost.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-6">
            <div className="mb-4">
              <span className="px-4 py-2 bg-primary text-white text-sm rounded-full">
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogPost.title}</h1>
            <p className="text-xl opacity-90">{blogPost.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/blogs" className="text-gray-500 hover:text-primary">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{blogPost.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>By {blogPost.author}</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold mb-6">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 mt-8">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold mb-3 mt-6">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-600 leading-relaxed mb-4">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-600">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-6">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  )
                }}
              >
                {blogPost.content}
              </ReactMarkdown>
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center space-x-4">
                <Tag size={20} className="text-gray-600" />
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link 
                to="/blogs"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back to Blog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link 
                      to={`/blogs/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <Link 
                    to={`/blogs/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowLeft size={16} className="rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
