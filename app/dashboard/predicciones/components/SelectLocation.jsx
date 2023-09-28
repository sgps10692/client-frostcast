"use client";
import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { DateTime } from "luxon";
import {
  WiDaySunny,
  WiThermometer,
  WiStrongWind,
  WiFog,
  WiHumidity,
} from "react-icons/wi";

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
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Probabilidad de Heladas",
        data: [15, 14, 3, 5, 0, 0, 0.5, 0, 2, 0, 2, 4],
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
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        data: [15, 14, 3, 5, 0, 0, 0.5, 0, 2, 0, 2, 4],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        data: [
          10, //ene
          7, //feb
          4, //mar
          5, //abril
          3, // may
          0.5, //jun
          0.5, //Jul
          1, //ago
          3, //sep
          0.1, //oc
          0, //nov
          7.5, //dic
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        data: [15, 6, 2.5, 5, 0.5, 0, 0.5, 0, 2, 0.5, 0.5, 13],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const optionsBar = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Porcentaje (%)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
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
          <div className="bg-white p-4 rounded-lg shadow-md">
            {data ? (
              <div className="grid grid-cols-2 gap-4">
                {data.valores_meteorologicos ? (
                  data.valores_meteorologicos.map((valor) => (
                    <div key={valor.id} className="flex items-center">
                      {valor.parameter.variable.name === "Temperatura" && (
                        <WiThermometer
                          className="text-blue-500 mr-2"
                          size={24}
                        />
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
      </div>

      <div className="grid grid-cols-2 gap-8 mt-5">
        <div className="p-8 bg-gray-100">
          <h2 className="text-2xl mb-4">Porcentaje de Ocurrencia de Heladas</h2>
          <small> {data ? data.location.name : "Nueva Generación"}</small>
          <br />
          <div className="bg-white p-2 mt-5 rounded-md shadow-md">
            <Bar data={dataBar} options={optionsBar} />
          </div>
        </div>
        <div className="p-8 bg-gray-100">
          <h2 className="text-2xl mb-4">
            Número de heladas registradas por año
          </h2>
          <small> {data ? data.location.name : "Nueva Generación"}</small>
          <br />
          <div className="bg-white p-2 mt-5 rounded-md shadow-md">
            <Line data={dataExample} options={options} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-5"></div>
    </>
  );
}
