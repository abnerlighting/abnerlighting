/**
 * Google Maps embed component for the specific ABNER location
 * Shows the main ABNER office/showroom location in Mumbai
 */
export default function AbnerLocationMap() {
  return (
    <section className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
        <p className="text-gray-600">Experience our lighting solutions at our Mumbai location</p>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120659.03899168146!2d72.81692907246993!3d19.08153764371075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cefdfcf7f0b3%3A0xf65e912ba6aa61d6!2sABNER!5e0!3m2!1sen!2sin!4v1758733292915!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="ABNER Location Map"
          className="w-full"
        />
      </div>

      {/* Our Presence Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Presence Across India</h3>
        <p className="text-gray-600 mb-8">Find us in major cities across the country</p>
        
        {/* City List */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
          {[
            "Mumbai",
            "Pune", 
            "Hyderabad",
            "Ahmedabad",
            "Indore",
            "Nagpur",
            "Raipur",
            "Bengaluru"
          ].map((city) => (
            <div key={city} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="inline-block h-4 w-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 border-2 border-white shadow-sm" />
              <span className="font-medium text-gray-700">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
