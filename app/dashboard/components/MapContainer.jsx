"use client";
import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MyMapContainer = () => {
  const mapRef = useRef(null);

  // Coordenadas del marcador
  const markerCoordinates = [4.570868, -74.297333];

  useEffect(() => {
    if (mapRef.current) {
      // Crea un marcador personalizado
      const customMarker = L.divIcon({
        className: "custom-marker",
        iconSize: [30, 30],
        html: '<div class="custom-marker-pin"></div><div class="custom-marker-pin-shadow"></div>',
      });

      const map = mapRef.current.leafletElement;

      // Agrega un control de zoom personalizado
      map.addControl(L.control.zoom({ position: "topright" }));

      // Añade una capa personalizada (puedes personalizarla según tus necesidades)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      // Añade el marcador a las coordenadas especificadas
      L.marker(markerCoordinates, { icon: customMarker })
        .addTo(map)
        .bindPopup("Ubicación personalizada")
        .openPopup();
    }
  }, []);

  return (
    <MapContainer
      center={markerCoordinates}
      zoom={13}
      style={{ width: "100%", height: "500px" }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MyMapContainer;
