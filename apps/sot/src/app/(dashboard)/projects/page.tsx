import { BackButton } from "@smarthub/ui";
import Table from "./_components/table";
import { useRouter } from "next/navigation";
import NewProjectButton from "./_components/new-project-button";

export default function Projects() {
  return (
    <>
      <div className="p-6 flex justify-between">
        <BackButton page_name="Projetos" />
        <NewProjectButton />
      </div>
      <div className="flex-1 px-10 h-full">
        <Table />
      </div>
    </>
  );
}
