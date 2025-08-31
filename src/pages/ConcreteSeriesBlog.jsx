import { Link } from 'react-router-dom'

const ConcreteSeriesBlog = () => {
  const products = [
    {
      name: "Disc",
      image: "https://ik.imagekit.io/abnerlighting/products/concrete-series/wall-lights/disc/2.png",
      description: "Indirect and calm. Light spills behind the form, leaving the front surface in quiet shadow. Ideal for garden walls or balcony corners.",
      url: "/product/disc"
    },
    {
      name: "Curvy UD",
      image: "https://ik.imagekit.io/abnerlighting/products/concrete-series/wall-lights/curvy/1.png",
      description: "A sculpted curve that sends beams up and down. Place it at an entrance gate for a subtle sense of arrival.",
      url: "/product/curvy-ud"
    },
    {
      name: "Veno UD",
      image: "https://ik.imagekit.io/abnerlighting/products/concrete-series/wall-lights/veno-ud/1.png",
      description: "Adjustable beams on both ends allow you to experiment with geometry. Perfect for a façade that changes character from day to night.",
      url: "/product/veno-ud"
    },
    {
      name: "Cairo UD",
      image: "https://ik.imagekit.io/abnerlighting/products/concrete-series/wall-lights/cairo/1.png",
      description: "Circular and strong, this design throws symmetrical up-down light. Works beautifully on columns or repeating along a boundary wall.",
      url: "/product/cairo-ud"
    },
    {
      name: "Blanca",
      image: "https://ik.imagekit.io/abnerlighting/products/concrete-series/wall-lights/blanca/1.png",
      description: "An elegant cube softened with modern lines, Blanca accentuates walls with subtle refinement.",
      url: "/product/blanca"
    },
    {
      name: "Casa",
      image: "https://ik.imagekit.io/abnerlighting/products/concrete-series/wall-lights/casa/1.png",
      description: "Minimal and modern, Casa brings timeless sophistication to verandas, cafés, and side passages.",
      url: "/product/casa"
    }
  ]

  return (
    <div className="blog-container max-w-6xl mx-auto px-5 py-10 mt-20 leading-relaxed text-gray-800">
      <div className="blog-header text-center mb-12">
        <h1 className="blog-title text-4xl font-bold mb-5 text-black">
          Concrete Lighting: Architecture Carved in Stone and Light
        </h1>
        <div className="blog-meta text-gray-600 text-sm mb-8">
          <span>January 25, 2025</span> • <span>5 min read</span>
        </div>
      </div>
      
      {/* Large screen image (hidden on small screens) */}
      <img 
        src="https://ik.imagekit.io/abnerlighting/products/concrete-series/wall-lights/disc/1.png" 
        alt="Concrete Lighting Banner" 
        className="blog-banner-large hidden lg:block w-full h-96 object-cover rounded-lg mb-10"
      />
      
      {/* Small screen image (hidden on large screens) */}
      <img 
        src="https://ik.imagekit.io/abnerlighting/products/concrete-series/wall-lights/disc/1.png" 
        alt="Concrete Lighting Banner" 
        className="blog-banner-small lg:hidden w-full h-64 object-cover rounded-lg my-5"
      />
      
      <div className="blog-content">
        <h3 className="text-2xl text-gray-800 mt-10 mb-5">Light that breathes with the wall</h3>
        <p className="mb-5 text-lg text-gray-800">
          Concrete is not polished. It doesn't pretend. It holds marks of casting, the faint lines of formwork, the small pores that catch shadows. When this material meets light, something poetic happens: walls are no longer just boundaries; they become storytellers.
        </p>
        
        <p className="mb-5 text-lg text-gray-800">
          Outdoor concrete lighting captures this poetry. It shapes courtyards, villa entrances, and garden walls with a glow that feels grounded. In India, where the weather moves fast from dry heat to monsoon rains, these fixtures endure. They don't rust, they don't fade; instead, they age into their surroundings.
        </p>
        
        <h2 className="text-3xl text-black mt-10 mb-5 border-b-2 border-gray-800 pb-3">Why architects are turning to concrete lighting</h2>
        <ul className="my-5 pl-8">
          <li className="mb-3 text-lg text-gray-800">
            <strong>Texture as design:</strong> The grain and surface of concrete make every lamp unique. No two pieces are identical, giving walls a living character.
          </li>
          <li className="mb-3 text-lg text-gray-800">
            <strong>Strength with subtlety:</strong> While metals can be shiny and attention-grabbing, concrete quietly fits in with stone, plaster, or brick. This way, your eyes are drawn to the warm glow of the light, not the fixture itself.
          </li>
          <li className="mb-3 text-lg text-gray-800">
            <strong>Weather resistance:</strong> Ideal for Indian homes, concrete stands strong where metal might rust and wood could warp, handling rain and sun with ease.
          </li>
        </ul>
        
        <h2 className="text-3xl text-black mt-10 mb-5 border-b-2 border-gray-800 pb-3">Shapes in the Abner Concrete Series</h2>
        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {products.map((product, index) => (
            <div key={index} className="product-card bg-gray-100 rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-300">
              <img 
                src={product.image} 
                alt={`${product.name} Wall Light`} 
                className="product-image w-full h-48 object-cover rounded-lg mb-5"
              />
              <h3 className="product-name text-xl font-semibold text-black mb-4">{product.name}</h3>
              <p className="product-description text-gray-600 leading-relaxed mb-5">{product.description}</p>
              <Link to={product.url} className="product-link inline-block bg-gray-800 text-white px-5 py-3 rounded-lg transition-colors hover:bg-black">
                View Product
              </Link>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl text-black mt-10 mb-5 border-b-2 border-gray-800 pb-3">Living with concrete lights</h2>
        <p className="mb-5 text-lg text-gray-800">
          Think of a warm evening on a terrace. The Disc glows softly on the wall, lighting up the jasmine without glare. During Diwali, the Curvy UD frames the entrance with golden beams while diyas flicker below. On monsoon nights, water runs over Cairo UD, but its glow remains steady, more beautiful for the rain.
        </p>
        
        <p className="mb-5 text-lg text-gray-800">
          Concrete doesn't demand attention; it lets life happen around it. Yet, when you pause, the play of shadow and texture rewards you.
        </p>
        
        <h2 className="text-3xl text-black mt-10 mb-5 border-b-2 border-gray-800 pb-3">Care and maintenance</h2>
        <ul className="my-5 pl-8">
          <li className="mb-3 text-lg text-gray-800">Just wipe them gently with a soft, damp cloth. There's no need for strong cleaners.</li>
          <li className="mb-3 text-lg text-gray-800">Let the patina develop naturally. That gentle darkening over time gives your lights a unique character.</li>
          <li className="mb-3 text-lg text-gray-800">For the warmest, most inviting glow, use warm LED bulbs.</li>
        </ul>
        
        <div className="highlight-box bg-gray-800 text-white p-8 rounded-xl my-10 text-center">
          <h3 className="text-white mb-4">The Abner approach</h3>
          <p className="text-white mb-4">
            Abner Lighting treats concrete not as a rough leftover of construction but as a medium of craft. Each mold is studied, and each surface is allowed to express itself. The series respects both the durability of the material and the sensitivity of architectural light.
          </p>
          <p className="text-white">
            For modern Indian homes, outdoor concrete lighting offers a balance, solid as stone, soft as evening.
          </p>
        </div>
        
        <div className="faq-section bg-gray-100 p-10 rounded-xl my-10 border border-gray-300">
          <h2 className="text-3xl text-black mb-8 border-b-2 border-gray-800 pb-3">FAQs</h2>
          <div className="faq-item mb-6">
            <div className="faq-question font-semibold text-black mb-3 text-lg">Does concrete lighting work in coastal areas?</div>
            <div className="faq-answer text-gray-600 leading-relaxed">
              Yes, absolutely! Concrete lights don't mind salty air; they won't rust or corrode, so they work wonderfully in seaside homes.
            </div>
          </div>
          
          <div className="faq-item mb-6">
            <div className="faq-question font-semibold text-black mb-3 text-lg">Will they chip easily?</div>
            <div className="faq-answer text-gray-600 leading-relaxed">
              Not at all. Concrete is strong and built to last. If you ever notice a tiny mark, just think of it as a bit of character that makes each light unique.
            </div>
          </div>
          
          <div className="faq-item mb-6">
            <div className="faq-question font-semibold text-black mb-3 text-lg">Can I use them indoors?</div>
            <div className="faq-answer text-gray-600 leading-relaxed">
              Definitely! Many architects love using them in hallways and lobbies to add a stylish, sculptural touch to indoor spaces.
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl text-gray-800 mt-10 mb-5">Final thought</h3>
        <p className="mb-5 text-lg text-gray-800">
          Concrete remembers the hand of its maker. When paired with light, it remembers the story of the space it touches. These wall fixtures do not just illuminate; they enhance the relationship between architecture, material, and the people who inhabit them.
        </p>
        
        <Link to="/blogs" className="back-to-blogs inline-block bg-gray-800 text-white px-6 py-3 rounded-lg mt-10 transition-colors hover:bg-black">
          ← Back to All Blogs
        </Link>
      </div>
    </div>
  )
}

export default ConcreteSeriesBlog
