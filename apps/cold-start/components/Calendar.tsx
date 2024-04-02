"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ModalScheduling } from "./modal-scheduling";
import { useQuery } from "@tanstack/react-query";
import { Scheduling, SchedulingResponse } from "@/types";
import { useMsal } from "@azure/msal-react";
import { api } from "@/lib/api";

export default function Calendar() {
  const schedulings: Scheduling[] = [];

  const { accounts } = useMsal();
  const { data, isPending, error } = useQuery<SchedulingResponse[]>({
    queryKey: ["get-schedulings"],
    queryFn: async () => {
      const response = await api.get(
        `${process.env.API_URL}/schedules/?month=false&year=false`,
        {
          headers: {
            token: accounts[0]?.idToken,
          },
        }
      );
      return response.data;
    },
  });

  data?.forEach((element: SchedulingResponse) => {
    schedulings.push({
      start: element.initial_date_time,
      end: element.ending_date_time.slice(0, 10).concat("T01:00"),
      title: `Container ${element.container_id}`,
    });
  });

  return (
    <div className="w-[60%] overflow-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "dayGridMonth,timeGridWeek",
          right: "prev,next",
          center: "title",
        }}
        viewClassNames={"rounded-lg"}
        allDaySlot={true}
        height={700}
        dayMaxEventRows={3}
        locale={"br"}
        events={schedulings}
        eventChange={() => console.log("click")}
        editable={true}
        selectMirror={true}
        selectable={true}
      />
      <ModalScheduling />
    </div>
  );
}
