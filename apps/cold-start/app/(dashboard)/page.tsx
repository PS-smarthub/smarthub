"use client";

import { CardContainerHome } from "@/components/card-container-home";
import { api } from "@/lib/api";
import { useContainer } from "@/stores/useContainer";
import { Container } from "@/types";
import { useMsal } from "@azure/msal-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
  const { containerList, setContainer } = useContainer();
  const { instance, accounts } = useMsal();

  console.log(accounts[0]?.idToken);
  const { data, isPending, error } = useQuery<Container[]>({
    queryKey: ["get-container-list"],
    queryFn: () =>
      api.get(`${process.env.API_URL}/containers/`, {
        headers: {
          token: accounts[0]?.idToken,
        },
      }),
  });

  useEffect(() => {
    //@ts-ignore
    if (data) setContainer(data.data);
  }, [data]);

  if (isPending) {
    return <p className="p-2">Pending...</p>;
  }

  return (
    <section className="flex justify-center items-center h-[90%] sm:h-[100%]">
      <div className="grid grid-cols-4 gap-16 sm:gap-12 w-[90%]">
        {containerList.map((container: Container) => (
          <CardContainerHome key={container.id} container={container} />
        ))}
      </div>
    </section>
  );
}
