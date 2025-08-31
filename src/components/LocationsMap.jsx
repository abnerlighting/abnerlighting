import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Fix default marker icons in bundlers
const icon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LOCATIONS = [
  { name: "Mumbai",     lat: 19.0760, lng: 72.8777 },
  { name: "Pune",       lat: 18.5204, lng: 73.8567 },
  { name: "Hyderabad",  lat: 17.3850, lng: 78.4867 },
  { name: "Delhi",      lat: 28.6139, lng: 77.2090 },
  { name: "Ahmedabad",  lat: 23.0225, lng: 72.5714 },
  { name: "Chennai",    lat: 13.0827, lng: 80.2707 },
];

function FitBoundsOnMount({ points }) {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(points.map(p => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, points]);
  return null;
}

export default function LocationsMap() {
  const [isClient, setIsClient] = useState(false);
  const center = { lat: 20.5937, lng: 78.9629 }; // India

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Locations</h2>
        </div>
        <div className="w-full h-[380px] md:h-[500px] rounded-xl overflow-hidden border border-slate-200 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Title row */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Locations</h2>
      </div>

      {/* Map container */}
      <div className="w-full h-[380px] md:h-[500px] rounded-xl overflow-hidden border border-slate-200">
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={5}
          scrollWheelZoom={false}
          className="h-full w-full"
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBoundsOnMount points={LOCATIONS} />

          {LOCATIONS.map((loc) => (
            <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={icon}>
              <Popup>
                <div className="font-medium">{loc.name}</div>
                <div className="text-xs text-slate-600">Abner Lighting</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
