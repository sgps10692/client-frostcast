"use client";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function SelectLocation({ locations }) {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState(null);

  const fetchPredictionData = async (locationId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/ubicaciones/${locationId}/predicciones`
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  };

  const fetchChartData = async (locationId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/locations/${locationId}/recent-predictions`
      );
      const responseData = await response.json();

      const months = Object.keys(responseData.predictions_by_month);
      const formattedData = {
        labels: months,
        datasets: [
          {
            label: "Probabilidad de Heladas",
            data: months.map((month) => {
              const predictions = responseData.predictions_by_month[month];
              const lastPrediction = predictions[predictions.length - 1];
              return lastPrediction.probability;
            }),
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      };
      setChartData(formattedData);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleLocationChange = async (event) => {
    const selectedLocation = event.target.value;
    await fetchPredictionData(selectedLocation);
    await fetchChartData(selectedLocation);
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="p-4 border rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">
              Selecciona una ubicación
            </h2>
            <select
              onChange={handleLocationChange}
              className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecciona una ubicación</option>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
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
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="p-8 bg-gray-100">
          <h2 className="text-2xl mb-4">Gráfica de Ejemplo</h2>
          <div className="bg-white p-4 rounded-md shadow-md">
            {chartData && <Line data={chartData} />}
          </div>
        </div>
      </div>
    </>
  );
}
