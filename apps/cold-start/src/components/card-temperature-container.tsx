import React from "react";
import CardTemperature from "./temperature-view";
import { getContainer } from "@/server/actions";

export default async function CardTemperatureContainer({ id }: { id: number }) {
  const container = await getContainer(id);
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-8 py-10 px-6">
        <CardTemperature
          temperature={container.temperatures[0]?.room_temperature}
          card_title="Temperatura Ambiente"
        />
        <CardTemperature
          temperature={container.temperatures[0]?.temperature_1}
          card_title="Posição 1"
        />
        <CardTemperature
          temperature={container.temperatures[0]?.temperature_2}
          card_title="Posição 2"
        />
      </div>
    </>
  );
}
