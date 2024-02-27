"use client";

import { CardContainerHome } from "@/components/CardContainerHome";
import { api } from "@/services/axios";
import { useContainer } from "@/stores/useContainer";
import { Container } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
  const { containerList, setContainer } = useContainer();

  const { data, error, isPending, isLoading } = useQuery<Container[]>({
    queryKey: ["get-container-list"],
    queryFn: () => api.get(`http://10.234.84.66:8000/api/v1/containers/`),
  });

  useEffect(() => {
    const sessionInformation = sessionStorage.getItem(
      "f42a212d-6ace-4027-aa6d-36767126575b.0ae51e19-07c8-4e4b-bb6d-648ee58410f4-login.windows.net-idtoken-d3e5ad7f-3183-4811-a01c-b1ad27a3736d-0ae51e19-07c8-4e4b-bb6d-648ee58410f4---"
    );
    const sessioObject = JSON.parse(sessionInformation as string);
    const jwt = sessioObject.secret;
    api.defaults.headers["Authorization"] = `Bearer ${jwt}`;

    if (data) {
      setContainer(data);
    }
  }, [data]);

  if (isPending) {
    return <p>Pending...</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
