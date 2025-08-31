import { useEffect, useRef } from "react";

/**
 * Static-friendly Leaflet map:
 * - No react-leaflet
 * - Loads Leaflet CSS & JS from CDN at runtime
 * - Auto fits markers for: Mumbai, Pune, Hyderabad, Delhi, Ahmedabad, Chennai
 */
export default function LocationsSection() {
  const mapEl = useRef(null);
  const mapInstance = useRef(null);

  // your locations
  const LOCATIONS = [
    { name: "Mumbai",     lat: 19.0760, lng: 72.8777 },
    { name: "Pune",       lat: 18.5204, lng: 73.8567 },
    { name: "Hyderabad",  lat: 17.3850, lng: 78.4867 },
    { name: "Delhi",      lat: 28.6139, lng: 77.2090 },
    { name: "Ahmedabad",  lat: 23.0225, lng: 72.5714 },
    { name: "Chennai",    lat: 13.0827, lng: 80.2707 },
  ];

  // helper: inject a <link> once
  function ensureLeafletCSS() {
    if (document.querySelector('link[data-leaflet]')) return;
    const link = document.createElement("link");
    link.setAttribute("data-leaflet", "1");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
  }

  // helper: inject a <script> once and return a promise when loaded
  function ensureLeafletScript() {
    const existing = document.querySelector('script[data-leaflet]');
    if (existing && window.L) return Promise.resolve(window.L);

    return new Promise((resolve, reject) => {
      if (existing) {
        existing.addEventListener("load", () => resolve(window.L));
        existing.addEventListener("error", reject);
        return;
      }
      const script = document.createElement("script");
      script.setAttribute("data-leaflet", "1");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = () => resolve(window.L);
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  useEffect(() => {
    let cancelled = false;
    ensureLeafletCSS();
    ensureLeafletScript()
      .then((L) => {
        if (cancelled || !mapEl.current) return;

        // avoid double init
        if (mapInstance.current) {
          mapInstance.current.remove();
          mapInstance.current = null;
        }

        // create map
        const map = L.map(mapEl.current, {
          center: [20.5937, 78.9629], // India
          zoom: 5,
          scrollWheelZoom: false,
        });
        mapInstance.current = map;

        // tiles (OSM)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
          maxZoom: 19,
        }).addTo(map);

        // custom black marker icon
        const icon = L.divIcon({
          className: 'custom-marker',
          html: '<div style="background-color: black; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        });

        // add markers
        const bounds = L.latLngBounds([]);
        LOCATIONS.forEach((loc) => {
          const m = L.marker([loc.lat, loc.lng], { icon })
            .addTo(map)
            .bindPopup(`<strong>${loc.name}</strong><br/>Abner Lighting`);
          bounds.extend(m.getLatLng());
        });

        // fit all markers nicely
        if (bounds.isValid()) map.fitBounds(bounds, { padding: [40, 40] });

        // handle container resize (optional)
        const resize = () => map.invalidateSize();
        window.addEventListener("resize", resize);

        return () => {
          window.removeEventListener("resize", resize);
        };
      })
      .catch((err) => {
        console.error("Leaflet failed to load:", err);
      });

    // cleanup on unmount
    return () => {
      cancelled = true;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Presence Across India</h2>
        <p className="text-gray-600">Find us in major cities across the country</p>
      </div>

      {/* MAP */}
      <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-lg relative z-10">
        {/* fixed height is essential for Leaflet */}
        <div
          ref={mapEl}
          style={{ height: "420px", width: "100%" }}
          className="bg-gray-100"
          aria-label="Abner Lighting locations map"
        />
      </div>

      {/* Accessible list (and SEO) */}
      <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-base text-gray-700">
        {[
          "Mumbai",
          "Pune",
          "Hyderabad",
          "Delhi",
          "Ahmedabad",
          "Chennai",
        ].map((city) => (
          <li key={city} className="flex items-center gap-3">
            <span className="inline-block h-3 w-3 rounded-full bg-black" />
            <span className="font-medium">{city}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
