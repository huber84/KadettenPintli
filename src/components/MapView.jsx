import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Standard-Icons für Leaflet korrigieren (wichtig für Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView() {
  // Koordinaten: Thunstrasse 34, 3612 Steffisburg
  const position = [46.7615, 7.62919];

  return (
    <div className="map-wrapper">
      <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Kadetten-Pintli Thun</strong><br />
            Thunstrasse 34<br />
            3612 Steffisburg<br />
            <em>Geöffnet während dem Ausschiesset</em>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
