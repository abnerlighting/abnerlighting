const TeamGridSection = () => {
  const worliShowroomImages = [
    { id: 1, src: 'https://ik.imagekit.io/abnerlighting/branding/worli-showroom-1.jpg', alt: 'Worli Showroom 1' },
    { id: 2, src: 'https://ik.imagekit.io/abnerlighting/branding/worli-showroom-2.jpg', alt: 'Worli Showroom 2' },
    { id: 3, src: 'https://ik.imagekit.io/abnerlighting/branding/worli-showroom-3.jpg', alt: 'Worli Showroom 3' }
  ]

  const teamImages = [
    { id: 1, src: 'https://ik.imagekit.io/abnerlighting/team/1.png', alt: 'Team Member 1' },
    { id: 2, src: 'https://ik.imagekit.io/abnerlighting/team/2.png', alt: 'Team Member 2' },
    { id: 3, src: 'https://ik.imagekit.io/abnerlighting/team/3.png', alt: 'Team Member 3' }
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
        
        {/* Worli Showroom Images - Dynamic Layout */}
        <div className="relative mb-16">
          {/* Mobile Layout - Uniform Grid */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {worliShowroomImages.map((image, index) => (
              <div key={image.id} className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-105 transform-gpu">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-white font-bold text-xl mb-2">Worli Showroom</h3>
                  <p className="text-white/90 text-sm">Experience our premium lighting solutions</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  {index === 0 ? 'Featured' : 'Showroom'}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Dynamic Grid */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 md:gap-6 h-[500px] lg:h-[600px]">
            {/* Large center image */}
            <div className="md:col-span-6 md:col-start-4 group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-105 transform-gpu">
              <img 
                src={worliShowroomImages[0].src} 
                alt={worliShowroomImages[0].alt} 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <h3 className="text-white font-bold text-2xl mb-2">Worli Showroom</h3>
                <p className="text-white/90 text-base">Experience our premium lighting solutions</p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">Visit our flagship showroom</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Featured
              </div>
            </div>
            
            {/* Top left image */}
            <div className="md:col-span-3 md:col-start-1 md:row-start-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 transform-gpu">
              <img 
                src={worliShowroomImages[1].src} 
                alt={worliShowroomImages[1].alt} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Showroom
              </div>
            </div>
            
            {/* Top right image */}
            <div className="md:col-span-3 md:col-start-10 md:row-start-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 transform-gpu">
              <img 
                src={worliShowroomImages[2].src} 
                alt={worliShowroomImages[2].alt} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Experience
              </div>
            </div>
          </div>
        </div>

        {/* Team Images - Enhanced Layout */}
        <div className="relative">
          {/* Mobile Layout - Uniform Grid */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {teamImages.map((member, index) => (
              <div key={member.id} className="group relative aspect-square overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-105 transform-gpu">
                <img 
                  src={member.src} 
                  alt={member.alt} 
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <h3 className="text-white font-bold text-xl">Team Member</h3>
                  </div>
                  <p className="text-white/90 text-base mb-4">Professional expertise & dedication</p>
                </div>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  Expert
                </div>
                <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  {index + 1}/3
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Masonry Style */}
          <div className="hidden md:block">
            <div className="columns-1 md:columns-3 gap-8 space-y-8">
              {teamImages.map((member, index) => (
                <div key={member.id} className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-105 break-inside-avoid transform-gpu ${index === 1 ? 'md:mt-16' : ''} ${index === 2 ? 'md:mt-8' : ''}`}>
                  <img 
                    src={member.src} 
                    alt={member.alt} 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <h3 className="text-white font-bold text-xl">Team Member</h3>
                    </div>
                    <p className="text-white/90 text-base mb-4">Professional expertise & dedication</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <span className="text-white/70 text-sm">Design & Engineering</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Expert
                  </div>
                  <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {index + 1}/3
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamGridSection
