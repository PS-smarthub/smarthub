"use client";

// import { SparkIcon } from "@bosch-web-dds/spark-ui-react";
import { Container, Props } from "@/types";
import { BackButton } from "@smarthub/ui";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { handleSetPoint } from "@/lib/api";
import { useState } from "react";

export default function ContainerDetails({ params }: Props) {
  const { data, error, isPending } = useQuery<Container>({
    queryKey: ["get-temperatures"],
    queryFn: () =>
      fetch(`http://10.234.84.66:8000/api/v1/containers/${params.id}`).then(
        (res) => res.json()
      ),
  });
  const queryClient = useQueryClient();
  const [setPoint1, setSetPoint1] = useState("")

  const mutation = useMutation({
    mutationFn: handleSetPoint,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["set-point"] });
    },
  });

  if (error) {
    return <p>Erro, nenhum container encontrado</p>;
  }
  return (
    <section>
      <BackButton page_name={`Container ${data?.device}`} />
      <div className="flex w-full gap-20">
        {/* left*/}
        <div className="w-full">
          {/* container temperatures */}
          <div className="w-full grid grid-cols-3 gap-8 py-10 px-6">
            <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2 sm:text-[14px]">
                Temperatura Ambiente
              </h2>
              <p className="font-bold text-2xl ">
                {data?.temperatures[0]?.room_temperature} °C
              </p>
            </div>

            <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2">Posição 1</h2>
              <p className="font-bold text-2xl pb-4">
                {data?.temperatures[0]?.temperature_1} °C
              </p>
            </div>

            <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2">Posição 2</h2>
              <p className="font-bold text-2xl pb-4">
                {data?.temperatures[0]?.temperature_2} °C
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="px-6 flex justify-center h-[70%] sm:h-[70%]">
            <div className=" border border-gray-400 w-full rounded">Chart</div>
          </div>
        </div>
        {/* right*/}
        <div className=" w-[70%] h-full border border-gray-400 mt-9 rounded mr-16">
          <h2 className="text-center font-bold p-4">Painel de Controle</h2>

          <div className="flex text-center justify-center gap-20 sm:gap-4">
            <div>
              <h3 className="font-bold">Posição 1</h3>
              <input
                type="number"
                value={data?.set_point_1}
                className="border border-gray-400 rounded h-20 sm:h-10 sm:w-[150px] text-center"
              />
            </div>
            <div>
              <h3 className="font-bold">Posição 2</h3>
              <input
                type="number"
                value={setPoint1}
                onChange={(e) => setSetPoint1(e.target.value)}
                className="border border-gray-400 rounded h-20 sm:h-10 sm:w-[150px] text-center"
              />
            </div>
          </div>
          {/* Agendamento*/}
          <div className="flex flex-col items-center pt-8">
            <h2 className="text-center font-bold p-2">Agendamento</h2>
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
            <div className="w-[72%] h-[22rem] text-center rounded border border-gray-400 sm:w-[72%] sm:h-[11rem]">
              <h1>SET POINTS</h1>
              <button className="bg-green-500 rounded p-2">On</button>
              <button className="bg-red-500 rounded p-2">Off</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
