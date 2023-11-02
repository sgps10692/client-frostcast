"use client";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

export const metadata = {
  stylesheet: "https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",
};
const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieWF2aWFoIiwiYSI6ImNsb2dtaWp1cDAwN2syamxtcGdxazU0NXcifQ.iUgUGsb5NnV2c9kr3xCWVA"; // Reemplaza con tu token de Mapbox

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // Estilo de mapa
      center: [-74.297333, 4.570868], // Coordenadas iniciales
      zoom: 6, // Nivel de zoom
    });

    // Agrega marcadores, capas, etc., según tus necesidades

    return () => {
      map.remove(); // Limpia el mapa cuando el componente se desmonta
    };
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "1000px" }} />;
};

export default Map;
