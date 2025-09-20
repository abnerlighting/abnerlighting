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
  ];

  // simple renderer so we can reuse for both tracks
  const Logos = () => (
    <>
      {partners.map((p) => (
        <div
          key={p.id}
          className="flex-shrink-0 h-[144px] md:h-[132px] mx-3 rounded-xl border border-slate-200/70 bg-white/60 backdrop-blur flex items-center justify-center p-3
                     transition-transform duration-300 hover:scale-[1.04] hover:shadow-md"
        >
          <img
            src={p.logo}
            alt={p.name}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </>
  );

  return (
    <>
      <style>{`
        /* Two-track marquee */
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes marquee-left-2 {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .marquee-track {
          animation: marquee-left var(--duration,20s) linear infinite;
          will-change: transform;
        }
        .marquee-track-2 {
          animation: marquee-left-2 var(--duration,20s) linear infinite;
          will-change: transform;
        }
        /* Pause on hover and when user is interacting */
        .marquee:hover .marquee-track,
        .marquee:hover .marquee-track-2,
        .marquee.user-scrolling .marquee-track,
        .marquee.user-scrolling .marquee-track-2 {
          animation-play-state: paused;
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track, .marquee-track-2 { animation: none; }
        }
        /* Speed up a bit on mobile */
        @media (max-width: 768px) {
          .marquee { --duration: 12s; }
        }
        /* Hide scrollbars */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section id="partners" className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div className="text-center">
            <h2 className="text-4xl">Some of our Marquee Clients</h2>
          </div>
          <p className="mt-4 text-center text-lg text-slate-700 max-w-7xl mx-auto">
            At Abner, we are privileged to work with visionary organizations that share our commitment to advancing lighting solutions.<br />
            While we've partnered with many, here are a few of our esteemed clients who have trusted us on this journey:
          </p>
        </div>

        {/* TRUE infinite marquee */}
        <div className="mt-10 w-full overflow-hidden py-6">
          <div 
            className="relative marquee select-none overflow-x-auto scrollbar-hide"
            onWheel={(e) => {
              e.currentTarget.classList.add('user-scrolling');
              setTimeout(() => {
                e.currentTarget.classList.remove('user-scrolling');
              }, 2000);
            }}
            onTouchStart={(e) => {
              e.currentTarget.classList.add('user-scrolling');
            }}
            onTouchEnd={(e) => {
              setTimeout(() => {
                e.currentTarget.classList.remove('user-scrolling');
              }, 2000);
            }}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Track A */}
            <div className="marquee-track absolute left-0 top-0 flex gap-2 items-center w-max">
              <Logos />
            </div>
            {/* Track B (starts just off-screen to the right) */}
            <div
              className="marquee-track-2 absolute left-0 top-0 flex gap-2 items-center w-max"
              aria-hidden="true"
            >
              <Logos />
            </div>

            {/* Spacing box to give the container height */}
            <div className="invisible">
              <div className="flex gap-2">
                <Logos />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 italic">... and many more</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection