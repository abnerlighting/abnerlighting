const WorldShowroomSection = () => {
  const worldShowroomImages = [
    { id: 1, src: 'https://ik.imagekit.io/abnerlighting/branding/worli-showroom-1.jpg', alt: 'World Showroom 1' },
    { id: 2, src: 'https://ik.imagekit.io/abnerlighting/branding/worli-showroom-2.jpg', alt: 'World Showroom 2' },
    { id: 3, src: 'https://ik.imagekit.io/abnerlighting/branding/worli-showroom-3.jpg', alt: 'World Showroom 3' }
  ]

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-center font-bold text-4xl">WORLI SHOWROOM</h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg">
            Experience our lighting solutions in our global showrooms.
          </p>
        </div>
        
        {/* World Showroom Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {worldShowroomImages.map((image) => (
            <div key={image.id} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="h-full w-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorldShowroomSection
