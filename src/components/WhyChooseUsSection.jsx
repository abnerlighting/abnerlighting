const WhyChooseUsSection = () => {
  return (
    <section id="choose" className="py-10" style={{ backgroundColor: '#013f88' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-center text-4xl">Why Choose Us</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* card 1 */}
          <div className="text-center">
            <img 
              src="https://ik.imagekit.io/abnerlighting/why-choose-us/1.png" 
              alt="European Style" 
              className="h-32 w-32 mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-white mb-2">High-End European Style,<br/>Local Pricing</h3>
            <p className="text-white/80 text-sm">EU-standard finishes, <br/>affordable without compromise.</p>
          </div>
          {/* card 2 */}
          <div className="text-center">
            <img 
              src="https://ik.imagekit.io/abnerlighting/why-choose-us/3.png" 
              alt="Fast Delivery" 
              className="h-32 w-32 mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-white mb-2">Fastest Delivery,<br/>OTIF Promise</h3>
            <p className="text-white/80 text-sm">On-time. In-full. Every time.<br/>No excuses.</p>
          </div>
          {/* card 3 */}
          <div className="text-center sm:col-span-2 sm:mx-auto sm:max-w-sm lg:col-span-1 lg:max-w-none">
            <img 
              src="https://ik.imagekit.io/abnerlighting/why-choose-us/2.png" 
              alt="Service That Lasts" 
              className="h-32 w-32 mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-white mb-2">Service That Lasts,<br/>Easy Returns</h3>
            <p className="text-white/80 text-sm">Guaranteed support and serviceability<br/>for up-to 10 years.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
