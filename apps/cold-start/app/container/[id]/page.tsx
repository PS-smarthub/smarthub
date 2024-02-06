"use client";

import { Props } from "../../../interfaces";
import { useContainer } from "../../../stores/useContainer";
import { BackButton } from "@smarthub/ui";

export default function ContainerDetails({ params }: Props) {
  const { containerList } = useContainer();

  const container = containerList[parseInt(params.id)];

  return (
    <section>
      <BackButton page_name={container?.name} />
      <div className="flex w-full">
        {/* left*/}
        <div className="w-full">
          {/* container temperatures */}
          <div className="w-[50%] grid grid-cols-3 gap-8">
            <div className="border border-gray-400 gap-7 rounded flex flex-col items-center h-[8rem]">
              <h2 className="font-semibold p-2">Temperatura Ambiente</h2>
              <p className="font-bold text-2xl">{container?.t}</p>
            </div>

            <div className="border border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2">Posição 1</h2>
              <p className="font-bold text-2xl">{container?.t1}</p>
            </div>

            <div className="border border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2">Posição 2</h2>
              <p className="font-bold text-2xl">{container?.t2}</p>
            </div>
          </div>
        </div>
        {/* right*/}
        <div>
          <h2>Painel de Controle</h2>

          <div>
            <h3>Posição 1</h3>
            <input type="text" disabled className="bg-red-300" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
