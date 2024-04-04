import { deleteScheduling } from "@/lib/api";
import { SchedulingResponse } from "@/types";
import { useMsal } from "@azure/msal-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  toast,
} from "@smarthub/ui";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";

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
      toast({
        duration: 1500,
        variant: "success",
        title: "Sucesso",
        description: "Agendamento excluído com sucesso",
      });
      queryClient.invalidateQueries({ queryKey: ["get-schedulings"] })
    },
    onError: () =>  toast({
      duration: 1500,
      variant: "destructive",
      title: "Erro",
      description: "Erro ao excluir o agendamento",
    })
      
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded border">
        <DialogHeader>
          <DialogTitle className="text-left font-bold text-sm border-b  px-2 pb-4">
            {`Container ${scheduling?.container_id}`}
          </DialogTitle>
        </DialogHeader>
        <div>
          <h2>Agendado por: {scheduling?.user_name}</h2>
          <div className="flex flex-col justify-start gap-4 py-4">
            <div className="flex gap-4 items-center">
              <label>De:</label>
              <input
                type="date"
                disabled={scheduling?.user_name != accounts[0]?.name}
                className="border border-gray-400 rounded p-2"
                defaultValue={scheduling?.initial_date_time.slice(0, 10)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label>Até:</label>
              <input
                type="date"
                disabled={scheduling?.user_name != accounts[0]?.name}
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
            {scheduling?.user_name == accounts[0]?.name ? (
              <div className="flex justify-center gap-6 mt-6">
                <button
                  onClick={() => {
                    setOpen(false);
                    mutate({ id: scheduling?.id, token: accounts[0]?.idToken });
                  }}
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
            ): <>{!scheduling?.position_2 && <button className="bg-blue-50 text-white font-semibold py-2 rounded">Alocar</button>}</>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
