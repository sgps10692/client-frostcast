"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DateTime } from "luxon";
import Map from "../Map";
import {
  WiDaySunny,
  WiThermometer,
  WiStrongWind,
  WiFog,
  WiHumidity,
} from "react-icons/wi";
import { FaWind, FaCloudRain } from "react-icons/fa";
import { da } from "date-fns/locale";
export default function ModalMapa({ locations }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  // Supongamos que tienes una lista de estaciones meteorológicas
  return (
    <>
      <div className="container mx-auto p-6 flex">
        {/* Columna izquierda con el select */}
        <div className=" p-4">
          <h2 className="text-2xl font-bold mb-4">
            Selecciona una Estación Meteorológica
          </h2>
          <select
            className="w-full p-2 border rounded"
            onChange={handleLocationChange}
          >
            <option value="">-- Selecciona una estación --</option>
            {locations.map((station) => (
              <option key={station.id} value={station.id}>
                {station.name}
              </option>
            ))}
          </select>
          <button
            className="mt-4 px-4 py-2 rounded text-white bg-green-600 hover:bg-green-500 font-work-sans ml-auto font-w font-bold focus:outline-none focus:shadow-outline "
            onClick={openModal} // Abre el modal al hacer clic
          >
            Ver Detalles
          </button>
          {/* Modal para mostrar detalles de la estación seleccionada */}
          {isModalOpen && data && (
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
              <div className="bg-white w-full max-w-2xl max-h-full rounded-lg shadow-lg p-6">
                {/* Título del modal */}
                <div className="flex items-start justify-between border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-work-sans m-4">
                    Detalles de la Estación
                  </h3>
                  <button
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Cerrar Modal</span>
                  </button>
                </div>
                <div className="space-y-6">
                  {/* Información de la ubicación */}
                  <div className="m-4">
                    <p className="text-lg font-semibold">
                      Nombre De La locación:{" "}
                      {data.location ? data.location.name : "No disponible"}
                    </p>
                    {/* Agrega aquí más detalles si es necesario */}
                  </div>

                  {/* Valores meteorológicos */}
                  {data.valores_meteorologicos ? (
                    <div className="m-4">
                      <h4 className="text-lg font-semibold">
                        Valores Meteorológicos:
                      </h4>
                      {data.valores_meteorologicos.map((valor) => (
                        <div key={valor.id} className="flex items-center">
                          {valor.parameter.variable.name === "Temperatura" && (
                            <WiThermometer
                              className="text-blue-500 mr-2"
                              size={24}
                            />
                          )}
                          {valor.parameter.variable.name === "Humedad" && (
                            <WiHumidity
                              className="text-green-500 mr-2"
                              size={24}
                            />
                          )}
                          {valor.parameter.variable.name ===
                            "Precipitacion" && (
                            <FaCloudRain // Utiliza el icono de precipitación de react-icons
                              className="text-purple-500 mr-2"
                              size={24}
                            />
                          )}
                          {valor.parameter.variable.name ===
                            "Velocidad del Viento" && (
                            <FaWind // Utiliza el icono de velocidad del viento de react-icons
                              className="text-yellow-500 mr-2"
                              size={24}
                            />
                          )}
                          <div>
                            <p className="text-sm">{valor.parameter.name}</p>
                            <p className="font-semibold">{valor.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="m-4">No hay valores meteorológicos</p>
                  )}

                  {/* Predicción de helada */}
                  {data.prediccion_reciente ? (
                    <div className="m-4">
                      <h4 className="text-lg font-semibold">
                        Predicción de Helada:
                      </h4>
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
                          <p className="text-sm">Estado</p>
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
                            Probabilidad: {data.prediccion_reciente.probability}
                            %
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="m-4">No hay predicción de helada</p>
                  )}
                </div>
                <div className="flex items-center justify-between space-x-2 border-t mt-4 border-gray-200 rounded-b m dark:border-gray-600">
                  <Image
                    src="/frostcast.png"
                    alt="Logo Sena"
                    width={200}
                    height={200}
                  />
                  {/* Botón de cierre */}
                  <button
                    className="text-white bg-green-600 hover:bg-green-500 font-work-sans ml-auto font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline"
                    onClick={closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Columna derecha con el mapa */}
        <div className="p-4 w-full">
          <h2 className="text-2xl text-center font-bold mb-4">
            Mapa Meteorológico
          </h2>
          {/* Aquí puedes mostrar tu mapa, por ejemplo */}
          <div className="bg-gray-200 w-full h-full rounded-lg">
            {/* Contenido del mapa */}
            <Map
              latitude={data ? data.location.latitude : 4.570868}
              longitude={data ? data.location.length : -74.297333}
              zoom={data ? 15 : 10}
            />
          </div>
        </div>
      </div>
    </>
  );
}
