import { BackButton } from "@smarthub/ui";
import React, { useState } from "react";
import Table from "./_components/table";
import NewProjectButton from "./_components/new-project-button";

export default function Projects() {
  return (
    <>
      <div className="p-6 flex justify-between">
        <BackButton page_name="Projects"/>
        <NewProjectButton />
      </div>
      <div className="flex-1 px-10">
        <Table />
      </div>
    </>
  );
}
