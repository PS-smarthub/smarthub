"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Scheduling } from "@/types";
import { useState } from "react";
import EditModalScheduling from "@/app/(dashboard)/agenda/_components/edit-modal-scheduling";

export default function Calendar({
  schedulingList,
}: {
  schedulingList: Scheduling[] | undefined;
}) {
  const schedulings: Scheduling[] = [];
  const [open, setOpen] = useState(false);
  const [scheduling, setScheduling] = useState()

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
        eventClick={({ event }) => {
          setOpen(true);
          schedulingList?.forEach((element: any) => {
            if (element.id == Number(event.id)) {
              setScheduling(element)
            }
          });
        }}
      />
      <EditModalScheduling
        open={open}
        setOpen={setOpen}
        scheduling={scheduling}
      />
    </div>
  );
}
