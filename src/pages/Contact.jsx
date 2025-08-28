import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import ContactMap from '../components/ContactMap'

const Contact = () => {
  const partners = [
    {
      id: 1,
      name: 'Mumbai',
      email: 'mumbai@abnerlighting.com',
      phone: '+91 22 1234 5678',
      address: 'Mumbai, Maharashtra',
      coordinate: { lat: 19.0760, lng: 72.8777 }
    },
    {
      id: 2,
      name: 'Delhi',
      email: 'delhi@abnerlighting.com',
      phone: '+91 11 1234 5678',
      address: 'Delhi, India',
      coordinate: { lat: 28.7041, lng: 77.1025 }
    },
    {
      id: 3,
      name: 'Bangalore',
      email: 'bangalore@abnerlighting.com',
      phone: '+91 80 1234 5678',
      address: 'Bangalore, Karnataka',
      coordinate: { lat: 12.9716, lng: 77.5946 }
    },
    {
      id: 4,
      name: 'Chennai',
      email: 'chennai@abnerlighting.com',
      phone: '+91 44 1234 5678',
      address: 'Chennai, Tamil Nadu',
      coordinate: { lat: 13.0827, lng: 80.2707 }
    },
    {
      id: 5,
      name: 'Hyderabad',
      email: 'hyderabad@abnerlighting.com',
      phone: '+91 40 1234 5678',
      address: 'Hyderabad, Telangana',
      coordinate: { lat: 17.3850, lng: 78.4867 }
    },
    {
      id: 6,
      name: 'Pune',
      email: 'pune@abnerlighting.com',
      phone: '+91 20 1234 5678',
      address: 'Pune, Maharashtra',
      coordinate: { lat: 18.5204, lng: 73.8567 }
    }
  ]

  return (
    <div>
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Logo Section */}
            <div className="hidden lg:block">
              <img 
                src="https://ik.imagekit.io/abnerlighting/branding/abner-logo.jpg" 
                alt="Abner Lighting" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Channel Partners Are All Over India</h2>
            <p className="text-gray-600">Find our partners in your city</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Map */}
            <div className="lg:col-span-3">
              <ContactMap partners={partners} />
            </div>
            
            {/* Partner List */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Our Partners</h3>
                <div className="space-y-4">
                  {partners.map((partner) => (
                    <div 
                      key={partner.id}
                      className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors cursor-pointer"
                      data-city={partner.name}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <MapPin size={16} className="text-primary" />
                        <h4 className="font-semibold">{partner.name}</h4>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Mail size={14} />
                          <span>{partner.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone size={14} />
                          <span>{partner.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
