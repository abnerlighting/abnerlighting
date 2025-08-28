const ProjectSection = ({ 
  number, 
  title, 
  description, 
  image, 
  imageAlt, 
  imageFirst = true 
}) => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-10 items-stretch">
        
        {/* Desktop Image (70%) */}
        {imageFirst && (
          <div className="hidden md:block md:col-span-7">
            <img 
              src={image} 
              alt={imageAlt} 
              className="h-full w-full rounded-xl object-cover shadow" 
            />
          </div>
        )}

        {/* Text (30%) */}
        <div className="md:col-span-3 flex flex-col justify-center">
          <h2 className="font-bold text-4xl">
            {number}. <br/>{title}
          </h2>
          
          {/* Mobile Image (hidden on desktop) */}
          <div className="mt-4 md:hidden">
            <img 
              src={image} 
              alt={imageAlt} 
              className="aspect-video w-full rounded-xl object-cover shadow" 
            />
          </div>

          <p className="mt-6 text-slate-600">
            {description}
          </p>
        </div>

        {/* Desktop Image (70%) - when image is second */}
        {!imageFirst && (
          <div className="hidden md:block md:col-span-7">
            <img 
              src={image} 
              alt={imageAlt} 
              className="h-full w-full rounded-xl object-cover shadow" 
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectSection
