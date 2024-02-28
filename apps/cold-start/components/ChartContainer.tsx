import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Temperatures } from "@/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chart({temperatures}: {temperatures: Temperatures[]}) {
  console.log(temperatures)
  return (
    <Line
      data={{
        labels: temperatures.map((temperature) => temperature.date_time.slice(11, 16)),
        datasets: [
          {
            label: "Temperatura ambiente",
            data: temperatures.map((temperature) => temperature.room_temperature),
            backgroundColor: "#064FF0",
            borderColor: "#064FF0"
          },
          {
            label: "Posição 1",
            data: temperatures.map((temperature) => temperature.temperature_1),
            backgroundColor: "#00FF00",
            borderColor: "#00FF00"
          },
          {
            label: "Posição 2",
            data: temperatures.map((temperature) => temperature.temperature_2),
            backgroundColor: "#FF0000",
            borderColor: "#FF0000"
          },
        ],
      }}
    />
  );
}
