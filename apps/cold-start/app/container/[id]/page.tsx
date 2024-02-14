"use client";

// import { SparkIcon } from "@bosch-web-dds/spark-ui-react";
import { Props } from "../../../types/";
import { useContainer } from "../../../stores/useContainer";
import { BackButton } from "@smarthub/ui";
import { useMsal } from "@azure/msal-react";

export default function ContainerDetails({ params }: Props) {
  const { containerList } = useContainer();

  const container = containerList[parseInt(params.id)];

  const {instance} = useMsal()

  return (
    <section>
      <BackButton page_name={container?.name} />
      <div className="flex w-full gap-20">
        {/* left*/}
        <div className="w-full">
          {/* container temperatures */}
          <div className="w-full grid grid-cols-3 gap-8 py-10 px-6">
            <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2 sm:text-xs">
                Temperatura Ambiente
              </h2>
              <p className="font-bold text-2xl ">{container?.t}</p>
            </div>

            <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2">Posição 1</h2>
              <p className="font-bold text-2xl pb-4">{container?.t1}</p>
            </div>

            <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2">Posição 2</h2>
              <p className="font-bold text-2xl pb-4">{container?.t2}</p>
            </div>
          </div>

          {/* Chart */}
          <div className="px-6 flex justify-center h-[70%]">
            <div className=" border border-gray-400 w-full rounded">Chart</div>
          </div>
        </div>
        {/* right*/}
        <div className=" w-[70%] h-full border border-gray-400 mt-9 rounded mr-16">
          <h2 className="text-center font-bold p-4">Painel de Controle</h2>

          <div className="flex text-center justify-center gap-20 sm:gap-2">
            <div>
              <h3 className="font-bold">Posição 1</h3>
              <input
                type="text"
                disabled
                className="border border-gray-400 rounded h-20 sm:h-10"
              />
            </div>
            <div>
              <h3 className="font-bold">Posição 2</h3>
              <input
                type="text"
                disabled
                className="border border-gray-400 rounded h-20 sm:h-10"
              />
            </div>
          </div>
          {/* Agendamento*/}
          <div className="flex flex-col items-center pt-8">
            <h2 className="text-center font-bold">Agendamento</h2>
            <div className="font-semibold border w-[72%] border-gray-400 p-4 rounded flex items-center justify-between sm:p-0">
              <h3 className="sm:py-4 pl-2">Diego Lopes</h3>
              {/* <SparkIcon
                icName="user"
                className="bg-blue-600 rounded-full sm:p-0 sm:h-10 sm:w-10 flex justify-center items-center sm:mr-3"
              /> */}
            </div>
          </div>

          {/* Setpoints*/}
          <div className="flex pt-10 pb-12 justify-center">
            <div className="h-[22rem] w-[72%] text-center rounded border border-gray-400">
              <h1>SET POINTS</h1>
              <button onClick={() => instance.loginPopup()} className="bg-blue-50 p-2 text-white font-semibold rounded">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
