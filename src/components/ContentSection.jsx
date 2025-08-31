const ContentSection = ({ 
  title, 
  content, 
  image, 
  imageAlt, 
  imageOrder = "right", 
  children 
}) => {
  const isImageLeft = imageOrder === "left"
  
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 items-stretch">
        {/* Desktop/Tablet Image column */}
        <div className={`order-2 lg:order-${isImageLeft ? '1' : '2'} relative overflow-hidden rounded-xl shadow min-h-0 hidden lg:block`}>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        
        {/* Text column */}
        <div className={`order-1 lg:order-${isImageLeft ? '2' : '1'} flex flex-col justify-center`}>
          <h2 className="text-center lg:text-left font-bold text-4xl">{title}</h2>
          
          {/* Mobile Image (hidden on desktop/tablet) */}
          <div className="mt-6 lg:hidden">
            <img
              src={image}
              alt={imageAlt}
              className="w-full aspect-[4/3] rounded-xl object-cover shadow"
            />
          </div>
          
          <div className="mt-6 space-y-4 text-slate-600">
            {content}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection
