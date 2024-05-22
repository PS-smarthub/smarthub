"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Scheduling } from "@/types";

export default function Calendar({
  schedulingList,
}: {
  schedulingList: Scheduling[];
}) {
  const schedulings: Scheduling[] = [];

  schedulingList?.forEach((element: any) => {
    schedulings.push({
      start: element.initial_date_time,
      end: element.ending_date_time.slice(0, 10).concat("T01:00"),
      title: `Container ${element.container_id}`,
      id: element.id,
    });
  });

  return (
    <div className="w-[60%] pb-20">
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
        editable={true}
        selectMirror={true}
        selectable={true}
      />
    </div>
  );
}
