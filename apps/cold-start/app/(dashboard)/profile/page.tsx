"use client";

import Image from "next/image";
import UserIcon from "@/public/user.svg";
import { BackButton } from "@smarthub/ui";
import { useMsal } from "@azure/msal-react";

export default function Profile() {
  const { accounts } = useMsal();
  const user = accounts[0];
  console.log(user);

  const agendamentos: any = [];

  return (
    <section className="p-6">
      <BackButton page_name="Perfil" />
      <div className="flex w-full">
        <div className="w-[50%] p-14 flex gap-10">
          <Image
            src={UserIcon}
            alt="User icon"
            className="bg-blue-50 rounded-full w-[100px] p-2"
          />
          <div>
            <h1 className="font-semibold text-xl">{user?.name}</h1>
            <p>{user?.username}</p>
          </div>
        </div>
        <div className="w-[50%] border rounded py-4 px-6">
          <h1 className="font-semibold border-b ">
            Meus Agendamentos
          </h1>
          <div> 
            {agendamentos.lenght > 0 ? (
              agendamentos.map(() => <div key={1}></div>)
            ) : (
              <p className="p-8 text-center">Nenhum agendamento encontrado</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
