"use client";

import { CardContainerHome } from "@/components/CardContainerHome";
import { useContainer } from "@/stores/useContainer";
import { Container } from "@/types";
import { useMsal } from "@azure/msal-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const { containerList, setContainer } = useContainer();
  const { accounts } = useMsal();

  const jwt = accounts[0]?.idToken;
  console.log(jwt);

  const { data, isPending } = useQuery<Container[]>({
    queryKey: ["get-container-list"],
    queryFn: () =>
      axios.get(`http://10.234.84.66:8000/api/v1/containers/`, {
        headers: {
          token: jwt,
        },
      }),
  });

  useEffect(() => {
    //@ts-ignore
    if (data) setContainer(data.data);
  }, [data]);

  if (isPending) {
    return <p>Pending...</p>;
  }
  console.log(containerList);
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
