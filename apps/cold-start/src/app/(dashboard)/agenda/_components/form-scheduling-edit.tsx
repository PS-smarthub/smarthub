"use client";

import { SchedulingResponse, User } from "@/types";
import AlocateCarButton from "./alocate-car-button";
import { useMutation } from "@tanstack/react-query";
import { deleteScheduling } from "@/server/actions";
import { errorToast, successToast } from "@/lib/toast_functions";

export default function FormSchedulingEdit({
  scheduling,
  user,
  setOpen,
}: {
  scheduling?: SchedulingResponse;
  user: User | undefined;
  setOpen: any;
}) {
  const { mutate: handleDelete, isPending } = useMutation({
    mutationKey: ["delete-scheduling"],
    mutationFn: deleteScheduling,
    onSuccess: () => {
      setOpen(false);
      successToast("Agendamento excluído com sucesso");
    },
    onError: (err) => {
      errorToast(err.message);
    },
  });

  return (
    <>
      {user && (
        <div>
          <div className="flex gap-2 flex-col">
            <h2>Agendado por: </h2>
            {scheduling?.user_name_1 == scheduling?.user_name_2 ? (
              <span className="font-semibold">{scheduling?.user_name_1}</span>
            ) : (
              <>
                <span>{scheduling?.user_name_1}</span>
                <span>{scheduling?.user_name_2}</span>
              </>
            )}
          </div>
          <div className="flex flex-col justify-start gap-4 py-4">
            <div className="flex gap-4 items-center">
              <label>De:</label>
              <input
                type="date"
                disabled={scheduling?.user_name_1 != user.name}
                className="border border-gray-400 rounded p-2"
                defaultValue={scheduling?.initial_date_time.slice(0, 10)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label>Até:</label>
              <input
                type="date"
                disabled={scheduling?.user_name_1 != user?.unique_name}
                className="border border-gray-400 rounded p-2"
                defaultValue={scheduling?.ending_date_time.slice(0, 10)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Posição 1:{" "}
                <span
                  className={`${scheduling?.position_1 ? "text-red-500" : "text-green-500"}`}
                >
                  {scheduling?.position_1 ? "Ocupada" : "Livre"}
                </span>
              </p>
              <p>
                Posição 2:{" "}
                <span
                  className={`${scheduling?.position_2 ? "text-red-500" : "text-green-500"}`}
                >
                  {scheduling?.position_2 ? "Ocupada" : "Livre"}
                </span>
              </p>
            </div>
            {scheduling?.user_name_1 == user?.name && (
              <div className="flex justify-center gap-6 mt-6">
                <button
                  disabled={isPending ? true : false}
                  onClick={() => handleDelete(scheduling.id)}
                  className="bg-red-500 hover:bg-red-600 rounded text-white font-semibold p-1 w-[30%] disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  Excluir
                </button>
                <button
                  disabled
                  className="bg-green-400 hover:bg-green-500 rounded text-white font-semibold p-1 w-[30%] disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  Atualizar
                </button>
              </div>
            )}
            {scheduling?.user_name_1 != user?.name &&
              !scheduling?.position_2 && <AlocateCarButton />}
          </div>
        </div>
      )}
    </>
  );
}
