const WhyChooseUsSection = () => {
  return (
    <section id="choose" className="py-10" style={{ backgroundColor: '#013f88' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-center text-4xl">Why Choose Us</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* card 1: Customization */}
          <div className="text-center">
            <img 
              src="https://ik.imagekit.io/abnerlighting/why-choose-us/1.png" 
              alt="Customization" 
              className="h-32 w-32 mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-white mb-2">Customization</h3>
            <p className="text-white/80 text-sm">Bespoke lighting that adapts to you.</p>
          </div>
          {/* card 2: Premium Materials */}
          <div className="text-center">
            <img 
              src="https://ik.imagekit.io/abnerlighting/why-choose-us/3.png" 
              alt="Premium Materials" 
              className="h-32 w-32 mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-white mb-2">Premium Materials</h3>
            <p className="text-white/80 text-sm">Crafted with premium materials, <br></br>designed to last.</p>
          </div>
          {/* card 3: Expertise and Infrastructure */}
          <div className="text-center">
            <img 
              src="/assets/expertise-2.png" 
              alt="Expertise and Infrastructure" 
              className="h-32 w-32 mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-white mb-2">Expertise & Infrastructure</h3>
            <p className="text-white/80 text-sm">A decade of credibility <br></br>backed by strong infrastructure.</p>
          </div>
          {/* card 4: Service and Easy Returns */}
          <div className="text-center">
            <img 
              src="https://ik.imagekit.io/abnerlighting/why-choose-us/2.png" 
              alt="Service and Easy Returns" 
              className="h-32 w-32 mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-white mb-2">Service & Easy Returns</h3>
            <p className="text-white/80 text-sm">Hassle-free support and returns <br></br>for complete peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
