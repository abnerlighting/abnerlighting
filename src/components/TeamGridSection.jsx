const TeamGridSection = () => {
  // Using infra images copied from /Volumes/offload
  const worliShowroomImages = [
    // Top 3 (commented out in markup per request)
    { id: 1, src: '/assets/infra/infra-1.jpg', alt: 'Infra 1' },
    { id: 2, src: '/assets/infra/infra-2.jpg', alt: 'Infra 2' },
    { id: 3, src: '/assets/infra/infra-3.jpg', alt: 'Infra 3' }
  ]

  // Use the three infra images for the bottom three as requested
  const teamImages = [
    { id: 1, src: '/assets/infra/infra-1.jpg', alt: 'Infra 1' },
    { id: 2, src: '/assets/infra/infra-2.jpg', alt: 'Infra 2' },
    { id: 3, src: '/assets/infra/infra-3.jpg', alt: 'Infra 3' }
  ]

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-center font-bold text-4xl">COMPANY INFRASTRUCTURE</h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg">
            Abner's core team of 70+ professionals works across design, engineering, and client strategy.
          </p>
        </div>
        
        {/* Worli Showroom Images removed per user request; using infra images in bottom sections */}

        {/* Team Images - Enhanced Layout */}
        <div className="relative">
          {/* Mobile Layout - Uniform Grid */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {teamImages.map((member, index) => (
              <div key={member.id} className="group relative aspect-square overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-105 transform-gpu">
                <img 
                  src={member.src} 
                  alt={member.alt} 
                  className={`h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 ${index === 2 ? 'object-top' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700"></div>

              </div>
            ))}
          </div>

          {/* Desktop Layout - Uniform Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {teamImages.map((member, index) => (
              <div key={member.id} className="group relative aspect-square overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-105 transform-gpu">
                <img 
                  src={member.src} 
                  alt={member.alt} 
                  className={`h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 ${index === 2 ? 'object-top' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamGridSection
