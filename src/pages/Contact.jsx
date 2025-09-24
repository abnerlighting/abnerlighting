import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import LocationsSection from '../components/LocationsSection'
import AbnerLocationMap from '../components/AbnerLocationMap'

const Contact = () => {

  return (
    <main className="relative">
      {/* Hero Image */}
      <section className="relative h-[30vh] w-full overflow-hidden">
        <img src="/assets/C01_0232.jpg" alt="Contact Us" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Image Section */}
            <div className="hidden lg:block">
              <div className="relative h-full min-h-[600px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://ik.imagekit.io/abnerlighting/architectural-series/banner-desktop.jpg?tr=f-auto,q-auto" 
                  alt="Abner Lighting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ABNER Location Section */}
      <section className="py-20">
        <div className="container-custom">
          <AbnerLocationMap />
        </div>
      </section>

      {/* All Locations Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <LocationsSection />
        </div>
      </section> */}


    </main>
  )
}

export default Contact
