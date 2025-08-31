import { useEffect, useRef } from 'react'

const ContactMap = ({ partners }) => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap()
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`
      script.async = true
      script.defer = true
      script.onload = initializeMap
      document.head.appendChild(script)
    }

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return

      const mapOptions = {
        center: { lat: 23.5937, lng: 78.9629 }, // Center of India
        zoom: 5,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }]
          }
        ]
      }

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions)

      // Add markers for each partner
      partners.forEach(partner => {
        const marker = new window.google.maps.Marker({
          position: partner.coordinate,
          map: mapInstanceRef.current,
          title: partner.name,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#013f88" stroke="white" stroke-width="2"/>
                <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(24, 24),
            anchor: new window.google.maps.Point(12, 12)
          }
        })

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; min-width: 200px;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">${partner.name}</h3>
              <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">
                <strong>Email:</strong> ${partner.email}
              </p>
              <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">
                <strong>Phone:</strong> ${partner.phone}
              </p>
              <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">
                <strong>Address:</strong> ${partner.address}
              </p>
            </div>
          `
        })

        marker.addListener('click', () => {
          infoWindow.open(mapInstanceRef.current, marker)
        })

        markersRef.current.push(marker)
      })

      // Fit bounds to show all markers
      if (markersRef.current.length > 0) {
        const bounds = new window.google.maps.LatLngBounds()
        markersRef.current.forEach(marker => {
          bounds.extend(marker.getPosition())
        })
        mapInstanceRef.current.fitBounds(bounds)
      }
    }

    loadGoogleMaps()

    return () => {
      // Cleanup markers
      markersRef.current.forEach(marker => {
        marker.setMap(null)
      })
      markersRef.current = []
    }
  }, [partners])

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="w-full h-96 rounded-lg shadow-lg"
        style={{ backgroundColor: '#e5e7eb' }}
      >
        {/* Fallback content when Google Maps is loading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      </div>
      
      {/* Note about API key */}
      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800 text-sm">
          <strong>Note:</strong> To enable the interactive map, please add your Google Maps API key to the ContactMap component.
        </p>
      </div>
    </div>
  )
}

export default ContactMap
