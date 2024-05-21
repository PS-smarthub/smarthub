import CalendarComponent from "@/components/calendar";
import ModalScheduling from "@/components/modal-scheduling";
import ModalSchedulingInfos from "@/components/modal-scheduling-edit";
import { getSchedules } from "@/server/actions";

export default async function Agenda() {
  const scheduling = await getSchedules();
  return (
    <div className="py-20 max-h-full overflow-y-auto w-full flex flex-col items-center">
      <CalendarComponent schedulingList={scheduling} />
      <ModalScheduling />
      <ModalSchedulingInfos />
    </div>
  );
}
