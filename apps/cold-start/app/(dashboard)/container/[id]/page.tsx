"use client";

import { ContainerResponse, Props } from "@/types";
import { callMsGraph } from "@/lib/teams";
import { BackButton } from "@smarthub/ui";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { Chart } from "@/components/chart-container";
import { api } from "@/lib/api";
import CardTemperature from "@/components/temperature-view";

export default function ContainerDetails({ params }: Props) {
  const { accounts, instance } = useMsal();
  const today = new Date().getDay();
  const queryClient = useQueryClient();
  const [setPoint1, setSetPoint1] = useState<number | undefined>();
  const [setPoint2, setSetPoint2] = useState<number | undefined>();
  const [disabled, setDisabled] = useState(true);

  const handleSendEmail = (position: string) => {
    instance
      .acquireTokenSilent({
        account: accounts[0],
        scopes: [],
      })
      .then((response: any) => {
        //@ts-ignore
        callMsGraph(response.accessToken, accounts[0].username, position);
      });
  };

  const {
    data: container,
    error,
    isPending,
  } = useQuery<ContainerResponse>({
    queryKey: ["get-container"],
    queryFn: async () => {
      const response = await api.get(`/containers/${params.id}`, {
        headers: {
          token: accounts[0]?.idToken,
        },
      });

      return response.data;
    },
    refetchInterval: 15000,
  });

  const { data: validate } = useQuery({
    queryKey: ["validate"],
    queryFn: async () => {
      const response = await api.get(`/containers/validate/${1}`, {
        headers: {
          token: accounts[0]?.idToken,
        },
      });
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async ({
      set_point_1,
      set_point_2,
    }: {
      set_point_1: number | undefined;
      set_point_2: number | undefined;
    }) => {
      return await api.patch(
        `/containers/setpoint/${container?.id}`,
        { set_point_1, set_point_2 },
        {
          headers: {
            token: accounts[0]?.idToken,
          },
        }
      );
    },
    onSuccess: async () => {
      await api.patch(
        `/containers/validation/${container?.id}`,
        {
          in_validation: true,
        },
        {
          headers: {
            token: accounts[0]?.idToken,
          },
        }
      );
      queryClient.invalidateQueries({ queryKey: ["set-point"] });
      setDisabled(true);
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
      <BackButton page_name={container.device} />
      <div className="flex w-full gap-20">
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
          <div className="px-6 flex justify-center h-[70%] sm:h-[56%]">
            <div className=" border border-gray-400 w-full rounded">
              <Chart temperatures={container.temperatures} />
            </div>
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
                defaultValue={container.set_point_1}
                disabled={
                  accounts[0]?.name !=
                    container.scheduling_container[0]?.user_name && true
                }
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
                disabled={
                  accounts[0]?.name !=
                  container.scheduling_container[0]?.user_name
                    ? true
                    : container.scheduling_container[0]?.position_2 == false
                      ? true
                      : false
                }
                onChange={(e) => {
                  const number = parseFloat(e.target.value);
                  setSetPoint2(number);
                  setDisabled(false);
                }}
                defaultValue={container.set_point_2}
                className="border border-gray-400 rounded h-20 sm:h-10 sm:w-[150px] text-center"
              />
            </div>
          </div>
          {/* Agendamento*/}
          <div className="flex flex-col items-center pt-8">
            <h2 className="text-center font-bold p-2">Agendamento</h2>
            <div className="font-semibold border w-[72%] border-gray-400 p-4 rounded flex items-center justify-between sm:p-0">
              <h3 className="sm:py-4 pl-2">
                {today >=
                Number(
                  container.scheduling_container[0]?.initial_date_time.slice(
                    9,
                    10
                  )
                ) ? (
                  <>{container.scheduling_container[0]?.user_name}</>
                ) : today ==
                  Number(
                    container.scheduling_container[0]?.ending_date_time.slice(
                      9,
                      10
                    )
                  ) ? (
                  <>{container.scheduling_container[0]?.user_name}</>
                ) : (
                  <>Não agendado</>
                )}
              </h3>
            </div>
          </div>

          {/* Setpoints*/}
          <div className="flex pt-10 pb-12 sm:pb-6 justify-center">
            <div className="w-[72%] h-[22rem] text-center rounded border flex justify-center items-center border-gray-400 sm:w-[72%] sm:h-[11rem]">
              <button
                disabled={disabled}
                onClick={() => {
                  console.log(setPoint1, setPoint2);
                  mutation.mutate({
                    set_point_1:
                      setPoint1 != undefined
                        ? setPoint1
                        : container.set_point_1,
                    set_point_2:
                      setPoint2 != undefined
                        ? setPoint2
                        : container.set_point_2,
                  });
                }}
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
