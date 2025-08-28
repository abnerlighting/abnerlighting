const AbnerNumbersSection = () => {
  const abnerNumbers = [
    { number: '10+', label: 'Years of Lighting' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '1000+', label: 'Happy Customers' }
  ]

  return (
    <section id="numbers" className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-center text-4xl">Abner in Numbers</h2>
          <div className="w-72 h-0.5 bg-black mx-auto mt-4"></div>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {abnerNumbers.map((item, index) => (
            <div key={index} className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div 
                className="font-normal" 
                style={{ fontSize: '56px', lineHeight: '1.2', minWidth: '110px', display: 'inline-block' }}
              >
                {item.number}
              </div>
              <div className="mt-2 text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AbnerNumbersSection
