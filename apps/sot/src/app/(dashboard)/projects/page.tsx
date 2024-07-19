import { BackButton } from "@smarthub/ui";
import React from "react";
import Table from "./_components/table";

export default function Projects() {
  return (
    <>
      <div className="p-6 flex gap-4">
        <BackButton page_name="Projetos" />
        <button className="gap-2 flex items-center border border-blue-50 text-blue-50 rounded px-2 hover:text-white hover:bg-blue-50">
          + Novo projeto
        </button>
      </div>
      <div className="flex-1 px-10">
        <Table />
      </div>
    </>
  );
}
