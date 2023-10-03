import Image from "next/image";
import ModalMapa from "./Data/Modal";

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

  return (
    <div className="container mx-auto p-6 flex">
      {/* Columna izquierda con el select */}
      <div className=" p-4">
        <h2 className="text-2xl font-bold mb-4">
          Selecciona una Estación Meteorológica
        </h2>
        <ModalMapa locations={weatherStations} />
      </div>

      {/* Columna derecha con el mapa */}
      <div className="p-4 w-full">
        <h2 className="text-2xl text-center font-bold mb-4">
          Mapa Meteorológico
        </h2>
        {/* Aquí puedes mostrar tu mapa, por ejemplo */}
        <div className="bg-gray-200 w-full h-full rounded-lg">
          {/* Contenido del mapa */}
          <Image
            src="/MapaEstaciones2.png"
            className="w-full h-full object-cover"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
