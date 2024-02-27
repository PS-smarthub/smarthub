"use client";

// import { SparkIcon } from "@bosch-web-dds/spark-ui-react";
import { Container, Props } from "@/types";
import { BackButton } from "@smarthub/ui";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { handleSetPoint } from "@/server/actions";

export default function ContainerDetails({ params }: Props) {
  async function getTemperatures(): Promise<Container> {
    const response = await axios.get(
      `http://10.234.84.66:8000/api/v1/containers/${params.id}`
    );
    return response.data;
  }
  const { data, error, isPending } = useQuery<Container>({
    queryKey: ["get-temperatures"],
    queryFn: getTemperatures,
    refetchInterval: 15000,
  });
  const queryClient = useQueryClient();
  const [setPoint1, setSetPoint1] = useState<number>();
  const [setPoint2, setSetPoint2] = useState<number>();
  const [disabled, setDisabled] = useState(true);

  const mutation = useMutation({
    mutationFn: handleSetPoint,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["set-point"] });
      setDisabled(true)
    },
  });

  if (error) {
    return <p>Erro, nenhum container encontrado</p>;
  }

  if (isPending) {
    return <p>Pending...</p>;
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
                {data.temperatures[0] ? data.temperatures[0].room_temperature : "undefined"} °C
              </p>
            </div>

            <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2">Posição 1</h2>
              <p className="font-bold text-2xl pb-4">
              {data.temperatures[0] ? data.temperatures[0].temperature_1 : "undefined"} °C
              </p>
            </div>

            <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
              <h2 className="font-semibold p-2">Posição 2</h2>
              <p className="font-bold text-2xl pb-4">
              {data.temperatures[0] ? data.temperatures[0].temperature_2 : "undefined"} °C
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="px-6 flex justify-center h-[70%] sm:h-[56%]">
            <div className=" border border-gray-400 w-full rounded">Chart</div>
          </div>
        </div>
        {/* right*/}
        <div className=" w-[70%] h-full border border-gray-400 mt-9 rounded mr-16">
          <h2 className="text-center font-bold p-4">Painel de Controle</h2>

          <div className="flex text-center justify-center gap-20 sm:gap-4">
            <div>
              <h3 className="font-bold">Set Point 1</h3>
              <input
                type="number"
                defaultValue={data.set_point_1}
                step={"0.25"}
                onChange={(e) => {
                  const number = parseFloat(e.target.value);
                  setSetPoint1(number);
                  setDisabled(false);
                }}
                className="border border-gray-400 rounded h-20 sm:h-10 sm:w-[150px] text-center"
              />
            </div>
            <div>
              <h3 className="font-bold">Set Point 2</h3>
              <input
                type="number"
                step={"0.25"}
                onChange={(e) => {
                  const number = parseFloat(e.target.value);
                  setSetPoint2(number);
                  setDisabled(false);
                }}
                defaultValue={data.set_point_2}
                className="border border-gray-400 rounded h-20 sm:h-10 sm:w-[150px] text-center"
              />
            </div>
          </div>
          {/* Agendamento*/}
          <div className="flex flex-col items-center pt-8">
            <h2 className="text-center font-bold p-2">Agendamento</h2>
            <div className="font-semibold border w-[72%] border-gray-400 p-4 rounded flex items-center justify-between sm:p-0">
              <h3 className="sm:py-4 pl-2">Diego Lopes</h3>
            </div>
          </div>

          {/* Setpoints*/}
          <div className="flex pt-10 pb-12 sm:pb-6 justify-center">
            <div className="w-[72%] h-[22rem] text-center rounded border flex justify-center items-center border-gray-400 sm:w-[72%] sm:h-[11rem]">
              <button
                disabled={disabled}
                onClick={() =>
                  mutation.mutate({
                    container_id: data?.id,
                    set_point_1: setPoint1 ? setPoint1 : data.set_point_1,
                    set_point_2: setPoint2 ? setPoint2 : data.set_point_2,
                  })
                }
                className="bg-green-400 font-semibold hover:bg-green-500 text-white p-2 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
