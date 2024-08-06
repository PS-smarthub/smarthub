import { MdMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { getUser } from "@/data/user";

export default async function Home() {

  return (
    <section className="pl-10 w-full min-h-full flex flex-col gap-4 pt-6">
      <div className="grid grid-cols-2 max-w-xl gap-4">
        <div className="border border-gray-300 px-2 py-2 rounded w-72 text-gray-500">
          <MdMiscellaneousServices className="w-8 h-8" />
          <span className="font-semibold">Ordens de Serviço</span>
        </div>
        <div className="border border-gray-300 px-2 py-2 rounded w-72 text-gray-500">
          <GrProjects className="w-8 h-8" />
          <span className="font-semibold">Projetos</span>
        </div>
      </div>
    </section>
  );
}
