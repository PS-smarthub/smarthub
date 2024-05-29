"use client";

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
  Legend,
);

export function Chart({ temperatures }: { temperatures: Temperatures[] }) {
  
  const lista = temperatures;
  const lista_filtrada = lista.length > 20 ? lista.slice(0, 20) : lista;

  lista_filtrada.reverse();
  return (
    <Line
      data={{
        labels: lista_filtrada.map((temperature) =>
          temperature.date_time.slice(11, 16),
        ),
        datasets: [
          {
            label: "Temperatura ambiente",
            data: lista_filtrada.map(
              (temperature) => temperature.room_temperature,
            ),
            backgroundColor: "#007bc0",
            borderColor: "#007bc0",
          },
          {
            label: "Posição 1",
            data: lista_filtrada.map(
              (temperature) => temperature.temperature_1,
            ),
            backgroundColor: "#ED0007",
            borderColor: "#ED0007",
          },
          {
            label: "Posição 2",
            data: lista_filtrada.map(
              (temperature) => temperature.temperature_2,
            ),
            backgroundColor: "#00884A",
            borderColor: "#00884A",
          },
        ],
      }}
    />
  );
}
