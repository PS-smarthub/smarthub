"use client";

import InputSetPoint from "./input-set-point";
import SaveButton from "./save-button";
import { ContainerResponse } from "@/types";

export default function ControlPainel({ container }: { container: ContainerResponse }) {
  const today = new Date().getDate();
  return (
    <div className="border border-gray-400 mt-9 w-[40%] rounded mr-16 px-10">
      <h2 className="text-center font-bold p-4">Painel de Controle</h2>

      <div className="flex text-center justify-center gap-20 sm:gap-4">
        <div>
          <h3 className="font-bold">Set Point</h3>
          <InputSetPoint value={container.set_point} />
        </div>
      </div>
      {/* Agendamento*/}
      <div className="flex flex-col items-center pt-8">
        <h2 className="text-center font-bold p-2">Agendamento</h2>
        <div className="font-semibold border border-gray-400 p-4 rounded w-full items-center justify-between sm:p-0">
          <h3 className="sm:py-4 pl-2">
            {today >=
            Number(
              container.scheduling_container[0]?.initial_date_time.slice(8, 10)
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
                container.scheduling_container[0]?.ending_date_time.slice(8, 10)
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
        <SaveButton />
      </div>
    </div>
  );
}
