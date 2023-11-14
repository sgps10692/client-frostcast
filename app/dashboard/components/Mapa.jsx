import ModalMapa from "./Data/Modal";
import React from "react";

async function getUbicaciones() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/locations/", {
      cache: "no-cache",
    });
    const locations = await res.json();

    return locations.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    // Puedes retornar un valor por defecto o un array vacío en caso de error
    return [];
  }
}
export default async function WeatherStationPage() {
  const weatherStations = await getUbicaciones();

  return <ModalMapa locations={weatherStations} />;
}
