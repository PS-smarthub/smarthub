import CalendarComponent from "@/components/calendar";

export default function Agenda() {
  return (
    <div className="py-20 max-h-full overflow-y-auto w-full flex flex-col items-center">
      <CalendarComponent />
    </div>
  );
}
