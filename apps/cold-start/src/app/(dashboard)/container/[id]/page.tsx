"use client";

import { ContainerResponse, Props } from "@/types";
import { BackButton } from "@smarthub/ui";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Chart } from "@/components/chart-container";
import { api } from "@/lib/api";
import CardTemperature from "@/components/temperature-view";
import { successToast } from "@/lib/toast_functions";
import { updateSetpoint, validation } from "@/lib/api/methods";
import { getToken } from "@/lib/session";
import { getContainer } from "@/server/actions";

export default function ContainerDetails({ params }: Props) {
  const { accounts } = useMsal();
  const today = new Date().getDate();
  const token = getToken();
  const queryClient = useQueryClient();
  const [setPoint, setSetPoint] = useState<number | undefined>();
  const [disabled, setDisabled] = useState(true);
  const user = accounts[0];

  const { data: validateSetpointTemperature } = useQuery({
    queryKey: ["get-validation"],
    queryFn: async () => {
      const response = await api.get(`/containers/validate/${params.id}`);

      return response.data;
    },
  });
  console.log(token);
  const {
    data: container,
    error,
    isPending,
  } = useQuery<ContainerResponse>({
    queryKey: ["get-container"],
    queryFn: async () => await getContainer(params.id),

    refetchInterval: 15000,
  });
  // const checkSetPoint = useQuery({
  //   queryKey: ["check-setpoint"],
  //   queryFn: () => {
  //     if(validateSetpointTemperature) {
  //       if(container?.temperatures[0]?.room_temperature == container?.set_point) {
  //         callMsGraph(token, user?.username)

  //       }
  //     }
  //     return null
  //   }
  // });

  const { mutate, isPending: updatingSetpoint } = useMutation({
    mutationFn: updateSetpoint,
    onSuccess: async () => {
      successToast("Set point alterado com sucesso");
      setDisabled(true);

      validation({
        container_id: container?.id,
        token: token,
        in_validation: true,
      });
      setPoint == undefined && setSetPoint(undefined);

      queryClient.invalidateQueries({ queryKey: ["set-point"] });
    },
  });

  if (error) {
    return <p>Erro, nenhum container encontrado</p>;
  }

  if (isPending) {
    return <p>Pending...</p>;
  }

  return (
    <section className="flex-1 max-h-full overflow-y-auto pb-32">
      <BackButton page_name={container.device} />
      <div className="flex w-full gap-20 sm:gap-10">
        {/* left*/}
        <div className="w-full">
          {/* container temperatures */}
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

          {/* Chart */}
          <div className="px-6 flex justify-center">
            <div className="border border-gray-400 w-full rounded">
              <Chart temperatures={container.temperatures} />
            </div>
          </div>
        </div>
        {/* right*/}
        <div className="border border-gray-400 mt-9 w-[40%] rounded mr-16 px-10">
          <h2 className="text-center font-bold p-4">Painel de Controle</h2>

          <div className="flex text-center justify-center gap-20 sm:gap-4">
            <div>
              <h3 className="font-bold">Set Point</h3>
              <input
                type="number"
                defaultValue={container.set_point}
                disabled={
                  accounts[0]?.name ==
                  container.scheduling_container[0]?.user_name_1
                    ? false
                    : true
                }
                step={"0.25"}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  setSetPoint(value);
                  setDisabled(false);
                }}
                className="border border-gray-400 rounded h-20 sm:h-10 sm:w-[150px] text-center"
              />
            </div>
          </div>
          {/* Agendamento*/}
          <div className="flex flex-col items-center pt-8">
            <h2 className="text-center font-bold p-2">Agendamento</h2>
            <div className="font-semibold border border-gray-400 p-4 rounded w-full items-center justify-between sm:p-0">
              <h3 className="sm:py-4 pl-2">
                {today >=
                Number(
                  container.scheduling_container[0]?.initial_date_time.slice(
                    8,
                    10
                  )
                ) ? (
                  container.scheduling_container[0]?.user_name_1 ==
                  container.scheduling_container[0]?.user_name_2 ? (
                    <>
                      <span>
                        {container.scheduling_container[0]?.user_name_1}
                      </span>
                    </>
                  ) : (
                    <div className="flex flex-col">
                      <span>
                        {container.scheduling_container[0]?.user_name_1}
                      </span>
                      <span>
                        {container.scheduling_container[0]?.user_name_2}
                      </span>
                    </div>
                  )
                ) : today ==
                  Number(
                    container.scheduling_container[0]?.ending_date_time.slice(
                      8,
                      10
                    )
                  ) ? (
                  <div className="flex flex-col">
                    <span>
                      {container.scheduling_container[0]?.user_name_1}
                    </span>
                    <span>
                      {container.scheduling_container[0]?.user_name_2}
                    </span>
                  </div>
                ) : (
                  <>Não agendado</>
                )}
              </h3>
            </div>
          </div>

          {/* Setpoints*/}
          <div className="text-center rounded border mt-12 w-full py-32 justify-center items-center border-gray-400 sm:py-10">
            <button
              disabled={updatingSetpoint ? updatingSetpoint : disabled}
              onClick={() =>
                mutate({
                  container_id: container.id,
                  token: token,
                  set_point: setPoint,
                })
              }
              className={`bg-green-400 font-semibold hover:bg-green-500 text-white p-2 rounded disabled:bg-gray-500 disabled:cursor-not-allowed`}
            >
              {updatingSetpoint ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
