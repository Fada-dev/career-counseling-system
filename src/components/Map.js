import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix marker icon issue with Leaflet
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

const Map = () => {
  // Coordinates for the unit's location (replace with actual latitude and longitude)
  const unitCoordinates = [5.64948, -0.19038]; // Example: Accra, Ghana

  // Custom icon for the marker
  const markerIcon = L.icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <section className="map-section">
      <h2>Our Location</h2>
      <p>Find us here! We're conveniently located to serve you better.</p>

      <MapContainer
  center={unitCoordinates} // Set the center of the map
  zoom={16} // Adjust the zoom level
  style={{ height: '300px', width: '400px', margin: '0 auto', borderRadius: '10px' }} // Smaller map size
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  <Marker position={unitCoordinates} icon={markerIcon}>
    <Popup>
      <strong>Our Unit</strong>
      <br />
      Visit us here for personalized support and guidance!
    </Popup>
  </Marker>
</MapContainer>
    </section>
  );
};

export default Map;
