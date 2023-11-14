"use client";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

export const metadata = {
  stylesheet: "https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css",
};
const Map = ({ latitude, longitude, zoom }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieWF2aWFoIiwiYSI6ImNsb2dtaWp1cDAwN2syamxtcGdxazU0NXcifQ.iUgUGsb5NnV2c9kr3xCWVA"; // Reemplaza con tu token de Mapbox

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude || -74.297333, latitude || 4.570868],
      zoom: zoom || 10,
    });

    return () => {
      map.remove();
    };
  }, [latitude, longitude, zoom]);

  return <div ref={mapContainer} style={{ width: "100%", height: "800px" }} />;
};

export default Map;
