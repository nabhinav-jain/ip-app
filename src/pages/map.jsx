import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ latitude, longitude }) {
  console.log("prop=", latitude, longitude);
  useEffect(() => {
    const map = L.map("leaflet-map").setView([latitude, longitude], 3);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup("You are here")
      .openPopup();

    return () => map.remove();
  }, [latitude, longitude]);

  return (
    <div className="w-full max-w-3xl mb-6">
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <div id="leaflet-map" className="w-full h-[400px]" />
      </div>
    </div>
  );
}
