import { alocateCar, deleteScheduling } from "@/lib/api/methods";
import { SchedulingResponse } from "@/types";
import { useMsal } from "@azure/msal-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@smarthub/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import UpdateAndDelete from "./edit-buttons";
import { errorToast, successToast } from "@/lib/toast_functions";

export default function ModalSchedulingEdit({
  setOpen,
  open,
  scheduling,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  scheduling?: SchedulingResponse;
}) {
  const { accounts } = useMsal();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteScheduling,
    onSuccess: () => {
      successToast("Agendamento excluído com sucesso");
      queryClient.invalidateQueries({ queryKey: ["get-schedulings"] });
    },
    onError: () => errorToast("Erro ao agendar o container"),
  });
  const { mutate: handleAlocateCar } = useMutation({
    mutationFn: () =>
      alocateCar({
        position_1: scheduling?.position_1 ? false : true,
        position_2: true,
        scheduling_id: scheduling?.id,
        token: accounts[0]?.idToken,
      }),
    onSuccess: () => successToast("Posição alocada com sucesso"),
    onError: () => errorToast("Erro ao alocar posição"),
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] rounded border">
        <DialogHeader>
          <DialogTitle className="text-left font-bold text-sm border-b px-2 pb-4">
            {`Container ${scheduling?.container_id}`}
          </DialogTitle>
        </DialogHeader>
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
                disabled={scheduling?.user_name_1 != accounts[0]?.name}
                className="border border-gray-400 rounded p-2"
                defaultValue={scheduling?.initial_date_time.slice(0, 10)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label>Até:</label>
              <input
                type="date"
                disabled={scheduling?.user_name_1 != accounts[0]?.name}
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
            {scheduling?.user_name_1 == accounts[0]?.name && (
              <UpdateAndDelete
                functionOnCLick={() => {
                  setOpen(false);
                  mutate({ id: scheduling?.id, token: accounts[0]?.idToken });
                }}
              />
            )}
            {scheduling?.user_name_1 != accounts[0]?.name &&
              !scheduling?.position_2 && (
                <button
                  className="bg-blue-50 text-white font-semibold py-2 rounded"
                  onClick={() => handleAlocateCar()}
                >
                  Alocar
                </button>
              )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
