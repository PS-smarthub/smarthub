import ContainerList from "@/components/container-list";
import { Suspense } from "react";

export default async function Home() {
  return (
    <section className="w-full justify-center items-center h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <ContainerList />
      </Suspense>
    </section>
  );
}
