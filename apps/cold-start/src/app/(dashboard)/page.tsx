import { CardContainerHome } from "@/components/card-container-home";
import { getContainerList } from "@/server/actions";
import { Container } from "@/types";
import { Suspense } from "react";

export default async function Home() {
  const containerList = await getContainerList();
  // const user = await getUser();
  // const setUser = useUserStore((state: any) => state.setUser);
  // setUser(user);

  return (
    <section className="w-full justify-center items-center ">
      <div className="flex-1 grid grid-cols-4 gap-16 sm:gap-12 w-full max-h-full py-10 overflow-y-auto px-32 sm:px-16 pb-40">
        <Suspense fallback={<div>Loading...</div>}>
          {containerList &&
            containerList.map((container: Container) => (
              <CardContainerHome key={container.id} container={container} />
            ))}
        </Suspense>
      </div>
    </section>
  );
}
