"use client";

import React, { useState } from "react";

export default function WeatherStationPage() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Supongamos que tienes una lista de estaciones meteorológicas
  const weatherStations = [
    { id: 1, name: "Estación A" },
    { id: 2, name: "Estación B" },
    { id: 3, name: "Estación C" },
    // ... Más estaciones
  ];

  return (
    <div className="flex">
      {/* Columna izquierda con el select */}
      <div className=" p-4">
        <h2 className="text-2xl font-bold mb-4">
          Selecciona una Estación Meteorológica
        </h2>
        <select
          className="w-full p-2 border rounded"
          value={selectedStation}
          onChange={(e) => setSelectedStation(e.target.value)}
        >
          <option value="">-- Selecciona una estación --</option>
          {weatherStations.map((station) => (
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
      </div>

      {/* Columna derecha con el mapa */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Mapa Meteorológico</h2>
        {/* Aquí puedes mostrar tu mapa, por ejemplo */}
        <div className="bg-gray-200 h-80 w-full rounded-lg">
          {/* Contenido del mapa */}
        </div>
      </div>

      {/* Modal para mostrar detalles de la estación seleccionada */}
      {isModalOpen && selectedStation && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Aquí puedes mostrar los detalles de la estación seleccionada */}
            <h3 className="text-xl font-bold mb-2">Detalles de la Estación</h3>
            <p>Nombre: {selectedStation}</p>
            {/* Otros detalles */}
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={closeModal} // Cierra el modal al hacer clic
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
