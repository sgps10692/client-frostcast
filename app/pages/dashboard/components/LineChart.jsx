import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

var beneficios = ["50", "60"];
var meses = ["Enero", "Febrero"];

var miData = {
  labels: meses,
  datasets: [
    {
      label: "Beneficios",
      data: beneficios,
      tension: 0.5,
      fill: true,
    },
  ],
};

var miOptions = {};

export default function LinesChart() {
  return <Line data={miData} options={miOptions}></Line>;
}
