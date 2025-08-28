const TeamGridSection = () => {
  const teamImages = [
    { id: 1, src: 'https://ik.imagekit.io/abnerlighting/team/1.png', alt: 'Team Member 1' },
    { id: 2, src: 'https://ik.imagekit.io/abnerlighting/team/2.png', alt: 'Team Member 2' },
    { id: 3, src: 'https://ik.imagekit.io/abnerlighting/team/3.png', alt: 'Team Member 3' },
    { id: 4, src: 'https://ik.imagekit.io/abnerlighting/team/4.png', alt: 'Team Member 4' }
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
        
        {/* 2x2 Grid of Team Images */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {teamImages.map((member) => (
            <div key={member.id} className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img 
                src={member.src} 
                alt={member.alt} 
                className="h-full w-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamGridSection
