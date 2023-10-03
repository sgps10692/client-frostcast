"use client";
import React, { useState } from "react";
import { DateTime } from "luxon";
import {
  WiDaySunny,
  WiThermometer,
  WiStrongWind,
  WiFog,
  WiHumidity,
} from "react-icons/wi";
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
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={openModal} // Abre el modal al hacer clic
      >
        Ver Detalles
      </button>
      {/* Modal para mostrar detalles de la estación seleccionada */}
      {isModalOpen && data && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            {/* Título del modal */}
            <h3 className="text-xl font-bold mb-4">Detalles de la Estación</h3>

            {/* Información de la ubicación */}
            <div className="mb-4">
              <p className="text-lg font-semibold">
                Nombre: {data.location ? data.location.name : "No disponible"}
              </p>
              {/* Agrega aquí más detalles si es necesario */}
            </div>

            {/* Valores meteorológicos */}
            {data.valores_meteorologicos ? (
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  Valores Meteorológicos
                </h4>
                {data.valores_meteorologicos.map((valor) => (
                  <div key={valor.id} className="flex items-center mb-2">
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
                ))}
              </div>
            ) : (
              <p className="mb-4">No hay valores meteorológicos</p>
            )}

            {/* Predicción de helada */}
            {data.prediccion_reciente ? (
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Predicción de Helada</h4>
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
                      Probabilidad: {data.prediccion_reciente.probability}%
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p>No hay predicción de helada</p>
            )}

            {/* Botón de cierre */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 ml-auto"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
