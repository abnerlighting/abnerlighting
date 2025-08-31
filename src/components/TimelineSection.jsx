const TimelineSection = () => {
  const timelineData = [
    {
      year: '2015',
      description: 'Abner launches; office & assembly line begin operations.',
      position: 'left'
    },
    {
      year: '2018',
      description: 'First use of Bridgelux Dim-to-Warm (97 CRI) at Ruia House; expansion to Ahmedabad.',
      position: 'right'
    },
    {
      year: '2021',
      description: 'Crossed 500 projects & 1M sq. ft.; Marble Italia (30K sq. ft.) with scallop-less wall washing.',
      position: 'left'
    },
    {
      year: '2022',
      description: 'New Bhiwandi facility; Executed 100+ Bluestone stores; High-CRI jewellery lighting launched.',
      position: 'right'
    },
    {
      year: '2024',
      description: 'Hit 1000+ projects; Expanded One Series; debuted Concrete Lights and in-house ERP.',
      position: 'left'
    },
    {
      year: '2025',
      description: 'Launched Stone Series Gen 2; enhanced ERP; new Concrete Light innovations.',
      position: 'right'
    }
  ]

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-center font-bold text-4xl">CHRONOSCAPE</h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base">A brief history of Abner</p>
        </div>
    
        <div className="relative">
          {/* center line: full height so it reaches the last (2025) item */}
          <div className="pointer-events-none hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-0 w-px bg-slate-300" />
    
          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 md:items-start">
                <span className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-white ring-4 ring-white shadow">
                  <span className="absolute inset-1 rounded-full bg-slate-900"></span>
                </span>
                {item.position === 'left' ? (
                  <>
                    <div className="md:pr-10">
                      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">{item.year}</h3>
                        <p className="text-slate-600 text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="md:pl-10">
                      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">{item.year}</h3>
                        <p className="text-slate-600 text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
