const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: '"Thank you, Abner team, for your good quality products and on-time delivery that helped us complete our project within time."',
      name: 'Mr Ketan Dave',
      title: 'Director, Illumination Genesis'
    },
    {
      id: 2,
      text: '"Abner\'s exceptional customer service and high-quality lighting fixtures exceeded my expectations. Highly recommend!"',
      name: 'Mr Sushant Surve',
      title: 'Principle Designer, Brainwave Designs'
    },
    {
      id: 3,
      text: '"Team Abner has fantastically represented the highest levels of customer service we have experienced."',
      name: 'Mr. Pranav',
      title: 'Principal Designer, Studio Pomegranate'
    }
  ]

  return (
    <section id="testimonials" className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl">Testimonials</h2>
        <div className="carousel mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-[85%] snap-center rounded-xl bg-white p-6 shadow sm:min-w-[45%] lg:min-w-[32%] flex flex-col h-48">
              <p className="text-slate-700 flex-grow">{testimonial.text}</p>
              <div className="mt-auto">
                <div className="text-sm text-slate-500">— {testimonial.name}</div>
                <div className="text-xs text-slate-400">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
