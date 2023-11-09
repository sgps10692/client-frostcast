"use client";
import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { DateTime } from "luxon"; // Importa DateTime de luxon
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
import WeatherInfo from "./WeatherInfo";

import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale,
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
  Filler,
  TimeScale
);

export default function SelectLocation({ locations }) {
  const [chartData, setChartData] = useState({});

  const fetchPredictionData = async (locationId) => {
    fetch(`http://127.0.0.1:8000/api/ubicaciones/${locationId}/predicciones`)
      .then((response) => response.json())
      .then((data) => {
        setChartData(data.chart_data);
      });
  };

  const handleLocationChange = async (event) => {
    const selectedLocation = event.target.value;
    await fetchPredictionData(selectedLocation);
  };

  const optionsTemperatura = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        adapters: {
          date: {
            locale: enUS,
          },
        },
        time: {
          unit: "day", // Puedes ajustar la unidad de tiempo según tus datos
        },
        title: {
          display: true,
          text: "Fecha",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperatura (°C)",
        },
      },
    },
  };

  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const weatherData = {
    temperature: 25,
    humidity: 60,
    precipitation: 10,
    windSpeed: 5,
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
      </div>
      <div className="grid grid-cols-1 gap-8 mt-5">
        <div className="p-8 bg-gray-100">
          <WeatherInfo {...weatherData} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-5">
        {chartData.data &&
          Object.keys(chartData.data).map((variableName) => (
            <div className="p-8 bg-gray-100">
              <div
                className="bg-white p-2 m-5 rounded-md shadow-md"
                key={variableName}
              >
                <h3>{variableName}</h3>
                {Object.keys(chartData.data[variableName]).map(
                  (parameterName) => (
                    <div key={parameterName}>
                      <h4>{parameterName}</h4>
                      <Line
                        data={{
                          labels: chartData.data[variableName][
                            parameterName
                          ].map((entry) => entry.date),
                          datasets: [
                            {
                              label: "Valor",
                              data: chartData.data[variableName][
                                parameterName
                              ].map((entry) => entry.value),
                              fill: false,
                              borderColor: "rgb(75, 192, 192)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
