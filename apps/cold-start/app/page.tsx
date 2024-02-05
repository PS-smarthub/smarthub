"use client";

import Link from 'next/link'
import { Header } from "@smarthub/ui";
import HomeContainer from "./components/HomeContainer";
import { CardContainerHome } from "./components/CardContainerHome";
import { TContainer } from "../types/container";

const containers: TContainer[] = [
  { id: "0", name: "container_1" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
  { id: "1", name: "container_2" },
];

export default function Page(): JSX.Element {
  return (
    <>
      <HomeContainer>
        <Header app_name="COLD START" />
        <section className="flex justify-center items-center h-full">
          <div className="grid grid-cols-4 gap-10 w-[90%]">
            {containers.map((container) => (
              <CardContainerHome
                key={container.id}
                name={container.name}
                id={container.id}
              />
            ))}
          </div>
        </section>
      </HomeContainer>
    </>
  );
}
