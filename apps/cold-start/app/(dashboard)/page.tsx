"use client";

import { CardContainerHome } from "@/components/CardContainerHome";
import { useContainer } from "@/stores/useContainer";

export default function Page(): JSX.Element {
  const { containerList } = useContainer();

  return (
    <section className="flex justify-center items-center h-[90%] sm:h-100%">
      <div className="grid grid-cols-4 gap-16 sm:gap-12 w-[90%]">
        {containerList.map((container) => (
          <CardContainerHome key={container.id} container={container} />
        ))}
      </div>
    </section>
  );
}
