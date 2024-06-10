"use client";

import { useState } from "react";
import { ContainerResponse } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateSetPoint } from "@/server/actions";
import { successToast } from "@/lib/toast_functions";
import { getUser } from "@/lib/getUser";

export default function ControlPainel({
  container,
}: {
  container: ContainerResponse;
}) {
  const today = new Date().getDate();
  const [value, setValue] = useState<number>();
  const [updatingSetPoint, setUpdatingSetPoint] = useState(false);
  const [setPointChanged, setSetPointChanged] = useState(false);
  const { mutate } = useMutation({
    mutationKey: ["set-point"],
    mutationFn: updateSetPoint,
    onSuccess: () => {
      successToast("Set point alterado com sucesso");
      setUpdatingSetPoint(false);
    },
    onMutate: () => {
      setSetPointChanged(false);
    },
  });

  const { data: user } = useQuery({
    queryKey: ["get-user"],
    queryFn: async () => {
      return await getUser();
    },
  });

  return (
    <div className="border border-gray-400 mt-9 w-[40%] rounded mr-16 px-10">
      <h2 className="text-center font-bold p-4">Painel de Controle</h2>

      <div className="flex text-center justify-center gap-20 sm:gap-4">
        <div>
          <h3 className="font-bold">Set Point</h3>
          <input
            type="number"
            defaultValue={container.set_point}
            disabled={
              user?.name == container.scheduling_container[0]?.user_name_1
                ? false
                : true
            }
            step={"0.25"}
            onChange={(e) => {
              setSetPointChanged(true);
              const value = parseFloat(e.target.value);
              setValue(value);
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
              container.scheduling_container[0]?.initial_date_time.slice(8, 10),
            ) ? (
              container.scheduling_container[0]?.user_name_1 ==
              container.scheduling_container[0]?.user_name_2 ? (
                <>
                  <span>{container.scheduling_container[0]?.user_name_1}</span>
                </>
              ) : (
                <div className="flex flex-col">
                  <span>{container.scheduling_container[0]?.user_name_1}</span>
                  <span>{container.scheduling_container[0]?.user_name_2}</span>
                </div>
              )
            ) : today ==
              Number(
                container.scheduling_container[0]?.ending_date_time.slice(
                  8,
                  10,
                ),
              ) ? (
              <div className="flex flex-col">
                <span>{container.scheduling_container[0]?.user_name_1}</span>
                <span>{container.scheduling_container[0]?.user_name_2}</span>
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
          disabled={setPointChanged ? false : true}
          onClick={() => {
            setUpdatingSetPoint(true);
            mutate({
              container_id: container.id,
              set_point: value,
            });
          }}
          className={`bg-green-400 font-semibold hover:bg-green-500 text-white p-2 rounded disabled:bg-gray-500 disabled:cursor-not-allowed`}
        >
          {updatingSetPoint ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
