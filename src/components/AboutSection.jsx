const AboutSection = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Desktop image (hidden on mobile/tablet) */}
        <div className="order-2 md:order-1 hidden md:block">
          <img 
            src="https://ik.imagekit.io/abnerlighting/branding/abner-logo.jpg" 
            alt="About image" 
            className="aspect-video w-full rounded-xl object-cover shadow" 
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="tracking-tight text-4xl lg:text-7xl md:text-6xl sm:text-5xl text-center md:text-left">
            We're Abner
          </h2>
          {/* Mobile/Tablet image (visible only on mobile/tablet, hidden on desktop) */}
          <div className="mt-6 block md:hidden">
            <img 
              src="https://ik.imagekit.io/abnerlighting/branding/abner-logo.jpg" 
              alt="About image" 
              className="aspect-video w-full rounded-xl object-cover shadow" 
            />
          </div>
          <p className="mt-6 text-slate-600 lg:text-lg">
            We make lights that do their job and look good doing it.
          </p>
          <p className="mt-4 text-slate-600 lg:text-lg">
            No over-the-top designs, no gimmicks. Just clean, well-built lighting that Architects, 
            Interior Designers and our Channel Partners can rely on.
          </p>
          <p className="mt-4 text-slate-600 lg:text-lg">
            We care about the small things: how a step is lit, how a wall feels under soft light, 
            how a space comes together
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
