import CalendarComponent from "@/components/calendar";
import ModalScheduling from "./_components/modal-scheduling";
import { getSchedules } from "@/server/actions";

export default async function Agenda() {
  const scheduling = await getSchedules();
  return (
    <div className="py-20 max-h-full overflow-y-auto w-full flex flex-col items-center">
      <CalendarComponent schedulingList={scheduling} />
      <ModalScheduling />
    </div>
  );
}
