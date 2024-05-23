"use client";
import { SchedulingResponse } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@smarthub/ui";
import FormSchedulingEdit from "./form-scheduling-edit";

export default function EditModalSchedling({
  scheduling,
  open,
  setOpen,
}: {
  scheduling?: SchedulingResponse;
  open: boolean;
  setOpen: any;
}) {
  //   const queryClient = useQueryClient();
  //   const { mutate } = useMutation({
  //     mutationFn: deleteScheduling,
  //     onSuccess: () => {
  //       successToast("Agendamento excluído com sucesso");
  //       queryClient.invalidateQueries({ queryKey: ["get-schedulings"] });
  //     },
  //     onError: () => errorToast("Erro ao agendar o container"),
  //   });
  //   const { mutate: handleAlocateCar } = useMutation({
  //     mutationFn: () =>
  //       alocateCar({
  //         position_1: scheduling?.position_1 ? false : true,
  //         position_2: true,
  //         scheduling_id: scheduling?.id,
  //         token: accounts[0]?.idToken,
  //       }),
  //     onSuccess: () => successToast("Posição alocada com sucesso"),
  //     onError: () => errorToast("Erro ao alocar posição"),
  //   });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] rounded border">
        <DialogHeader>
          <DialogTitle className="text-left font-bold text-sm border-b px-2 pb-4">
            {`Container ${scheduling?.container_id}`}
            <FormSchedulingEdit />
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
