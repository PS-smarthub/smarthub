"use client";
import { SchedulingResponse } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@smarthub/ui";
import FormSchedulingEdit from "./form-scheduling-edit";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/getUser";

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
  const { data: user } = useQuery({
    queryKey: ["get-user"],
    queryFn: async () => {
      return await getUser();
    },
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] rounded border">
        <DialogHeader>
          {user && (
            <DialogTitle className="text-left font-bold text-sm border-b px-2 pb-4">
              {`Container ${scheduling?.container_id}`}
              <FormSchedulingEdit
                scheduling={scheduling}
                user={user}
                setOpen={setOpen}
              />
            </DialogTitle>
          )}
          {!user && <span>Loading...</span>}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
