"use client";
import { useState } from "react";

export default function GetPronosticos({ locations }) {
  const [data, setData] = useState(null);

  const fetchPredictions = async (locationId) => {
    if (locationId) {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/ubicaciones/${locationId}/predicciones`
        );
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching predictions:", error);
      }
    }
  };

  const handleLocationChange = async (event) => {
    const newSelectLocation = event.target.value;

    await fetchPredictions(newSelectLocation);
  };

  return (
    <>
      <div className="bg-white w-1/3 flex flex-col p-6 rounded-md mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          ¡CONSULTA PRONOSTICOS Y PREDICIONES AHORA!
        </h1>
        <div className="relative w-full">
          <select
            className="bg-transparent border border-transparent text-blue-500 rounded-lg w-full text-left text-xl"
            onChange={handleLocationChange}
          >
            <option>--- SELECCIONE UNA UBICACIÓN ----</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-blue-400 w-full h-20 mt-4 rounded-lg">
          {data ? (
            <div className="text-center pt-4">
              {data.prediccion_reciente ? (
                <div>
                  <p>
                    Probabilidad de heladas:
                    {data.prediccion_reciente.probability}%
                  </p>
                  <p>Fecha: {data.prediccion_reciente.date}</p>
                </div>
              ) : (
                "No hay predicción de helada"
              )}
              {data.valores_meteorologicos ? (
                <div>
                  {data.valores_meteorologicos.map((valor) => (
                    <p>
                      {valor.parameter.name} : {valor.value}
                    </p>
                  ))}
                </div>
              ) : (
                "No hay valores meteorologicos"
              )}
            </div>
          ) : (
            <p className="text-center pt-4">
              No hay datos de predicción disponibles.
            </p>
          )}
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg self-center mt-4 text-xl font-work-sans font-bold">
          Más información
        </button>
      </div>
    </>
  );
}
