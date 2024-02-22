"use client";

import { CardContainerHome } from "@/components/CardContainerHome";
import { useContainer } from "@/stores/useContainer";
import { Container } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Suspense, useEffect } from "react";

export default function Home(): JSX.Element {
  const { containerList, setContainer } = useContainer();

  const { data, error, isPending } = useQuery<Container[]>({
    queryKey: ["get-container-list"],
    queryFn: () =>
      fetch("http://10.234.84.66:8000/api/v1/containers/").then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    if (data) {
      setContainer(data);
    }
  }, [data]);

  return (
    <section className="flex justify-center items-center h-[90%] sm:h-[100%]">
      <div className="grid grid-cols-4 gap-16 sm:gap-12 w-[90%]">
        {containerList?.map((container: Container) => (
          <CardContainerHome key={container.id} container={container} />
        ))}
      </div>
    </section>
  );
}
