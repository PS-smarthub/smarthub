import Image from "next/image";
import UserIcon from "@/public/user.svg";
import { BackButton } from "@smarthub/ui";

import MySchedulings from "./_components/my-schedulings";
import { getUser } from "@/lib/getUser";

export default async function Profile() {
  const user = getUser();

  return (
    <section className="p-6 w-full">
      <BackButton page_name="Perfil" />
      <div className="flex w-full">
        <div className="w-[50%] p-14 flex gap-10">
          <Image
            src={UserIcon}
            alt="User icon"
            className="bg-blue-50 rounded-full w-[100px] p-2 h-[100px]"
          />
          <div>
            <h1 className="font-semibold text-xl">{user?.name}</h1>
            <p>{user?.unique_name}</p>
          </div>
        </div>
        <div className="w-[50%] border rounded py-4 px-6">
          <h1 className="font-semibold border-b ">Meus Agendamentos</h1>
          <MySchedulings />
        </div>
      </div>
    </section>
  );
}
