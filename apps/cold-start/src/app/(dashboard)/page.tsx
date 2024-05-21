"use client";

import { CardContainerHome } from "@/components/card-container-home";
import { api } from "@/lib/api";
import { Container } from "@/types";
import { useMsal } from "@azure/msal-react";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { accounts } = useMsal();

  const { data, isPending } = useQuery<Container[]>({
    queryKey: ["get-container-list"],
    queryFn: async () => {
      const response = await api.get(`/containers/`, {
        headers: {
          token: accounts[0]?.idToken,
        },
      });
      return response.data;
    },
  });

  console.log(accounts[0]?.idToken);
  if (isPending) {
    return <p className="p-2">Pending...</p>;
  }

  return (
    <section className="w-full justify-center items-center ">
      <div className="flex-1 grid grid-cols-4 gap-16 sm:gap-12 w-full max-h-full py-10 overflow-y-auto px-32 sm:px-16 pb-40">
        {data &&
          data.map((container: Container) => (
            <CardContainerHome key={container.id} container={container} />
          ))}
      </div>
    </section>
  );
}
