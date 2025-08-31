const FoundersDeskSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 items-stretch">
        {/* Desktop/Tablet Image column */}
        <div className="order-2 lg:order-1 relative overflow-hidden rounded-xl shadow min-h-0 hidden lg:block aspect-[4/3]">
          <img
            src="https://ik.imagekit.io/abnerlighting/branding/founder.jpg"
            alt="Founder's Desk"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
    
        {/* Text column */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <h2 className="text-center lg:text-left font-bold text-4xl">FOUNDER'S DESK</h2>
          
          {/* Mobile Image (hidden on desktop/tablet) */}
          <div className="mt-6 lg:hidden">
            <img
              src="https://ik.imagekit.io/abnerlighting/branding/founder.jpg"
              alt="Founder's Desk"
              className="w-full aspect-[4/3] rounded-xl object-cover shadow"
            />
          </div>
          
          <blockquote className="mt-6 text-lg italic text-slate-600">
            "Lighting isn't just brightness—it's how we shape the feeling of a space."
          </blockquote>
          <p className="mt-6 text-slate-600">
            Shashank Nayak founded Abner in 2015 to meet the growing demand for well-crafted architectural lighting in India. With a focus on technical precision and design integrity, his first breakthrough came via the JW Marriott, Juhu.
          </p>
          <p className="mt-4 text-slate-600">
            Today, Abner partners with brands like Orra, Bluestone, and Stone Ex, delivering adaptable, innovative lighting with an unwavering commitment to quality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FoundersDeskSection
