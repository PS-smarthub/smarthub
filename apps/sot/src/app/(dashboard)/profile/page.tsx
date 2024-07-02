import { getUser } from "@/data/user";
import { BackButton } from "@smarthub/ui";

export default async function Profile() {
  const user = await getUser();
  
  return (
    <section className="p-6 w-full">
      <BackButton page_name="Perfil" />
      <div className="flex w-full">
        <div className="w-[50%] p-14 flex gap-10">
          <div>
            <h1 className="font-semibold text-xl">{user?.name}</h1>
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="w-[50%] border rounded py-4 px-6">
          <h1 className="font-semibold border-b ">Minhas Ordens</h1>
        </div>
      </div>
    </section>
  );
}
