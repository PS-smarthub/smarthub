"use client";

import Image from "next/image";
import UserIcon from "@/public/user.svg";
import { BackButton } from "@smarthub/ui";
import { useMsal } from "@azure/msal-react";
import { deleteScheduling, getMySchedulings } from "@/lib/api/methods";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SchedulingResponse } from "@/types";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Profile() {
  const { accounts } = useMsal();
  const user = accounts[0];
  const queryClient = useQueryClient();

  const { data, error, isPending } = useQuery({
    queryKey: ["get-my-schedulings"],
    queryFn: () => getMySchedulings(accounts[0]?.idToken),
  });

  const { mutate } = useMutation({
    mutationFn: deleteScheduling,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["get-my-schedulings"] }),
  });

  return (
    <section className="p-6 h-full">
      <BackButton page_name="Perfil" />
      <div className="flex w-full h-full">
        <div className="w-[50%] p-14 flex gap-10">
          <Image
            src={UserIcon}
            alt="User icon"
            className="bg-blue-50 rounded-full w-[100px] p-2 h-[100px]"
          />
          <div>
            <h1 className="font-semibold text-xl">{user?.name}</h1>
            <p>{user?.username}</p>
          </div>
        </div>
        <div className="w-[50%] border rounded py-4 px-6 h-[80%]">
          <h1 className="font-semibold border-b ">Meus Agendamentos</h1>
          <div className="grid grid-cols-2 gap-4 mt-10 max-h-[300px] overflow-auto">
            {data &&
              data.map((schedule: SchedulingResponse) => (
                <div className="flex rounded bg-gray-300 border-l-[7px] font-semibold justify-between p-2 border-blue-600">
                  <div className="flex flex-col">
                    <p>{schedule.initial_date_time.slice(0, 10)}</p>
                    <p>Container {schedule.container_id}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        mutate({ id: schedule.id, token: accounts[0]?.idToken })
                      }
                    >
                      <FaRegTrashAlt color="red" />
                    </button>
                  </div>
                </div>
              ))}
            {isPending && <p>Carregando agendamentos...</p>}
            {error && <p>Erro ao buscar seus agendamentos</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
