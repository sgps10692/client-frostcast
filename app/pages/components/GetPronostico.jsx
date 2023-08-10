import { useState } from "react";

export default function GetPronosticos({ locations }) {
  const [data, setData] = useState(null);

  return (
    <>
      <div className="bg-white w-1/3 flex flex-col p-6 rounded-md mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ¡CONSULTA PRONOSTICOS Y PREDICIONES AHORA!
        </h1>
        <div className="relative w-full">
          <select className="bg-transparent border border-transparent text-blue-500 rounded-lg w-full text-left text-xl">
            <option>--- SELECCIONE UNA UBICACIÓN ----</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-blue-400 w-full h-20 mt-4 rounded-lg"></div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg self-center mt-4 text-xl font-work-sans font-bold">
          ¡Mas Información!
        </button>
      </div>
    </>
  );
}
