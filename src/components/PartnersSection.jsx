const PartnersSection = () => {
  const partners = [
    { id: 1, logo: 'https://ik.imagekit.io/abnerlighting/logos/1.png', name: 'Partner 1' },
    { id: 2, logo: 'https://ik.imagekit.io/abnerlighting/logos/2.png', name: 'Partner 2' },
    { id: 3, logo: 'https://ik.imagekit.io/abnerlighting/logos/3.png', name: 'Partner 3' },
    { id: 4, logo: 'https://ik.imagekit.io/abnerlighting/logos/4.png', name: 'Partner 4' },
    { id: 5, logo: 'https://ik.imagekit.io/abnerlighting/logos/5.png', name: 'Partner 5' },
    { id: 6, logo: 'https://ik.imagekit.io/abnerlighting/logos/6.png', name: 'Partner 6' },
    { id: 7, logo: 'https://ik.imagekit.io/abnerlighting/logos/7.png', name: 'Partner 7' },
    { id: 8, logo: 'https://ik.imagekit.io/abnerlighting/logos/8.png', name: 'Partner 8' }
  ]

  return (
    <section id="partners" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <h2 className="text-center text-4xl">Some of our Marquee Clients</h2>
        <div className="w-72 h-0.5 bg-black mx-auto mt-4"></div>
        <p className="mt-4 text-center text-lg text-slate-700 max-w-7xl mx-auto">
          At Abner, we are privileged to work with visionary organizations that share our commitment to advancing lighting solutions.<br /> While we've partnered with many, here are a few of our esteemed clients who have trusted us on this journey:
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.id} className="aspect-square border-2 border-slate-200 rounded-lg flex items-center justify-center p-2">
              <img 
                className="h-full w-full object-contain" 
                src={partner.logo} 
                alt={partner.name} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
