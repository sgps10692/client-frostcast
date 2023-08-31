"use client";
import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
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
  BarElement,
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

  const dataExample = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Probabilidad de Heladas",
        data: [10, 15, 8, 12, 5, 20],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };



  const dataBar = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Predicciones de Heladas",
        data: [
          
          [15, 20, 10],
          [10, 5, 8],
          [5, 15, 12],
          [8, 10, 6],
          [12, 18, 10],
          [16, 14, 20],
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
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

      <div className="grid grid-cols-2 gap-8 mt-5">
        <div className="p-8 bg-gray-100">
          <h2 className="text-2xl mb-4">Predicciones por meses</h2>
          <div className="bg-white p-4 rounded-md shadow-md">
            {chartData && <Line data={chartData} options={options} />}
          </div>
        </div>
        <div className="p-8 bg-gray-100">
          <h2 className="text-2xl mb-4">Gráfica de ejemplo</h2>
          <div className="bg-white p-4 rounded-md shadow-md">
            <Line data={dataExample} options={options} />
          </div>
        </div>
        <div className="p-8 bg-gray-100">
          <h2 className="text-2xl mb-4">Gráfica de ejemplo Barras</h2>
          <div className="bg-white p-4 rounded-md shadow-md">
            <Bar data={dataBar}  />
          </div>
        </div>
      </div>

   
    </>
  );
}
