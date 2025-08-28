const HeroBanner = ({ image, alt, height = "h-[30vh]" }) => {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <img 
        src={image} 
        alt={alt} 
        className="absolute inset-0 h-full w-full object-cover" 
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  )
}

export default HeroBanner
