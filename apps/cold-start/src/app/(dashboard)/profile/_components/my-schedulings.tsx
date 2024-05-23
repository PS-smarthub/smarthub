import { getMySchedulings } from "@/server/actions";
import { SchedulingResponse } from "@/types";
import RemoveSchedulingButton from "./remove-scheduling-button";

export default async function MySchedulings() {
  const mySchedulings = await getMySchedulings();

  return (
    <div className="grid grid-cols-2 gap-4 mt-10 max-h-[300px] overflow-auto">
      {mySchedulings &&
        mySchedulings.map((schedule: SchedulingResponse) => (
          <div
            className="flex rounded bg-gray-300 border-l-[7px] font-semibold justify-between p-2 border-blue-600"
            key={schedule.id}
          >
            <div className="flex flex-col">
              <p>{schedule.initial_date_time.slice(0, 10)}</p>
              <p>Container {schedule.container_id}</p>
            </div>
            <RemoveSchedulingButton />
          </div>
        ))}
      {/* {isPending && <p>Carregando agendamentos...</p>}
      {error && <p>Erro ao buscar seus agendamentos</p>} */}
    </div>
  );
}
