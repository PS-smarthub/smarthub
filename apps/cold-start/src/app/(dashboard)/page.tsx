import { CardContainerHome } from "@/components/card-container-home";
import { api } from "@/lib/api";
import { getToken } from "@/lib/session";
import { getContainerList } from "@/server/actions";
import { Container } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default async function Home() {
  const containerList = await getContainerList();
  console.log(containerList);

  return (
    <section className="w-full justify-center items-center ">
      <div className="flex-1 grid grid-cols-4 gap-16 sm:gap-12 w-full max-h-full py-10 overflow-y-auto px-32 sm:px-16 pb-40">
        {containerList &&
          containerList.map((container: Container) => (
            <CardContainerHome key={container.id} container={container} />
          ))}
      </div>
    </section>
  );
}
