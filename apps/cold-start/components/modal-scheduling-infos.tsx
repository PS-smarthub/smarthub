import { api } from "@/lib/api";
import { Scheduling } from "@/types";
import { useMsal } from "@azure/msal-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@smarthub/ui";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";

export default function ModalSchedulingInfos({
  setOpen,
  open,
  id,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  id?: string;
}) {
  const { accounts } = useMsal();
  const { data: scheduling } = useQuery<Scheduling>({
    queryKey: ["get-scheduling-of-schedule"],
    queryFn: async () => {
      const response = await api.get(`/schedules/${id}`, {
        headers: {
          token: accounts[0]?.idToken,
        },
      });

      return response.data;
    },
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded border">
        <DialogHeader>
          <DialogTitle className="text-left font-bold text-sm border-b  px-2 pb-4">
            Agendamento
          </DialogTitle>
        </DialogHeader>

        <div>{id}</div>
      </DialogContent>
    </Dialog>
  );
}
