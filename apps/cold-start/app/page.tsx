"use client";

import { CardContainerHome } from "../components/CardContainerHome";
import { useContainer } from "../stores/useContainer";

export default function Page(): JSX.Element {
  const { containerList } = useContainer();
  
  return (
    <section className="flex justify-center items-center h-full">
      <div className="grid grid-cols-4 gap-16 sm:gap-10 w-[90%]">
        {containerList.map((container) => (
          <CardContainerHome key={container.id} container={container} />
        ))}
      </div>
    </section>
  );
}
