import { CardContainerHome } from "@/components/card-container-home";
import { getContainerList } from "@/server/actions";
import { Container } from "@/types";

export default async function ContainerList() {
  const data = await getContainerList();

  if (data)
    return (
      <div className="flex-1 grid grid-cols-4 gap-16 sm:gap-12 w-full max-h-full py-10 overflow-y-auto px-32 sm:px-16 pb-40">
        {data &&
          data.map((container: Container) => (
            <CardContainerHome key={container.id} container={container} />
          ))}
      </div>
    );
}
