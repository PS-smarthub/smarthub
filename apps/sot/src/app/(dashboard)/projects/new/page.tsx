import { BackButton } from "@smarthub/ui";
import React from "react";
import NewProjectForm from "../_components/new-project-form";

export default function NewProject() {
  return (
    <>
      <div className="p-4">
        <BackButton page_name="Projetos | Novo projeto" />
      </div>

      <div className="flex-1 pl-14 py-1 pt-6 max-h-[80vh] overflow-y-auto pb-14">
        <NewProjectForm />
      </div>
    </>
  );
}
