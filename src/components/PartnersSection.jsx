const PartnersSection = () => {
  const partners = [
    { id: 1, logo: '/assets/logos/baps.png', name: 'BAPS' },
    { id: 2, logo: '/assets/logos/bluestone.png', name: 'Bluestone' },
    { id: 3, logo: '/assets/logos/broadway-malyan.png', name: 'Broadway Malyan' },
    { id: 4, logo: '/assets/logos/hdfc.png', name: 'HDFC' },
    { id: 5, logo: '/assets/logos/jw-marriott.png', name: 'JW Marriott' },
    { id: 6, logo: '/assets/logos/kirloskar.png', name: 'Kirloskar' },
    { id: 7, logo: '/assets/logos/orra.png', name: 'Orra' },
    { id: 8, logo: '/assets/logos/stonex.png', name: 'Stonex' },
    { id: 9, logo: '/assets/logos/st-regis.png', name: 'St. Regis' },
    { id: 10, logo: '/assets/logos/partner-6.png', name: 'Partner 6' }
  ]

  // Duplicate partners array for seamless scrolling
  const duplicatedPartners = [...partners, ...partners]

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
            width: calc(200% + 2rem);
          }
          
          .animate-scroll:hover {
            animation-play-state: running;
          }
        `}
      </style>
      
      <section id="partners" className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div className="text-center">
            <div className="inline-block">
              <h2 className="text-4xl">Some of our Marquee Clients</h2>
            </div>
          </div>
          <p className="mt-4 text-center text-lg text-slate-700 max-w-7xl mx-auto">
            At Abner, we are privileged to work with visionary organizations that share our commitment to advancing lighting solutions.<br /> While we've partnered with many, here are a few of our esteemed clients who have trusted us on this journey:
          </p>
        </div>
        
        {/* Scrolling Logos Container - Edge to Edge */}
        <div className="mt-10 w-full overflow-hidden py-8">
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="flex-shrink-0 mx-6 w-32 h-32 border-2 border-slate-200 rounded-lg flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <img 
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105" 
                  src={partner.logo} 
                  alt={partner.name} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 italic">... and many more</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PartnersSection