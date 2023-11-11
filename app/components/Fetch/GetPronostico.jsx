"use client";
import { DateTime } from "luxon";
import { useState } from "react";
import {
  WiDaySunny,
  WiThermometer,
  WiStrongWind,
  WiFog,
  WiHumidity,
} from "react-icons/wi";

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

  const fechaActual = DateTime.now().setLocale("es");

  // Formatea la fecha en el estilo deseado
  const fechaFormateada = fechaActual.toFormat("'Hoy' d 'de,' LLLL");

  return (
    <>
      <div className="bg-white w-full md:w-1/3 flex flex-col p-6 rounded-md mt-8">
        <h1 className="text-xl font-bold mb-4 text-center">
          CONSULTAR PRONOSTICOS
        </h1>
        <div className="relative w-full">
          <select
            className="bg-transparent border border-transparent text-blue-500 rounded-lg w-full text-left text-xl"
            onChange={handleLocationChange}
          >
            <option>Selecciona una ubicación</option>
            {locations && locations.length > 0 ? (
              locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {`${location.name} ${location.city}`.toUpperCase()}
                </option>
              ))
            ) : (
              <option>No hay locaciones disponibles</option>
            )}
          </select>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {data ? (
            <div className="grid grid-cols-2 gap-4">
              {data.valores_meteorologicos ? (
                data.valores_meteorologicos.map((valor) => (
                  <div key={valor.id} className="flex items-center">
                    {valor.parameter.variable.name === "Temperatura" && (
                      <WiThermometer className="text-blue-500 mr-2" size={24} />
                    )}
                    {valor.parameter.variable.name === "Humedad" && (
                      <WiHumidity className="text-green-500 mr-2" size={24} />
                    )}
                    <div>
                      <p className="text-sm">{valor.parameter.name}</p>
                      <p className="font-semibold">{valor.value}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay valores meteorológicos</p>
              )}
              {data.prediccion_reciente ? (
                <div className="flex items-center">
                  <WiDaySunny
                    className={`${
                      data.prediccion_reciente.probability > 50
                        ? "text-red-500"
                        : "text-green-500"
                    } mr-2`}
                    size={24}
                  />
                  <div>
                    <p className="text-sm">Predicción de Helada</p>
                    <p
                      className={`font-semibold ${
                        data.prediccion_reciente.probability > 50
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {data.prediccion_reciente.probability > 50
                        ? "¡Helada!"
                        : "Sin Helada"}
                    </p>
                    <p className="text-xs">
                      Probabilidad: {data.prediccion_reciente.probability}%
                    </p>
                  </div>
                </div>
              ) : (
                <p>No hay predicción de helada</p>
              )}
            </div>
          ) : (
            <p className="text-center pt-4">
              No hay datos de predicción disponibles.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
