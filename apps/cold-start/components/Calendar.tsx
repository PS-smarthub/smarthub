"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { ModalDemo } from "./ModalDemo";

interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

export default function Calendar() {
  const [events, setEvents] = useState([
    { title: "event 1", id: 1, date: "2024-02-08" },
    { title: "event 2", id: 2, date: "2024-04-01" },
    { title: "event 3", id: 3, date: "2024-04-01" },
    { title: "event 4", id: 4, date: "2024-04-01" },
  ]);

  const eventList = [
    {
      duration: "02:00",
      date: "2024-02-08",
      title: "google",
      allDay: true,
      start: new Date(),
    },
    {
      duration: "02:00",
      date: "2024-02-08",
      title: "test",
      allDay: false,
    },
    {
      duration: "02:00",
      date: "2024-02-08",
      title: "test",
      allDay: false,
    },
    {
      duration: "02:00",
      date: "2024-02-28",
      title: "test",
      allDay: false,
    },
    {
      duration: "02:00",
      date: "2024-02-28",
      title: "test",
      allDay: false,
      start: new Date(),
    },
    {
      duration: "02:00",
      date: "2024-02-28",
      title: "test",
      allDay: false,
      start: new Date(),
    },
    {
      duration: "02:00",
      date: "2024-02-28",
      title: "test",
      allDay: true,
      start: new Date(),
    },
  ];
  return (
    <div className="w-[70%] h-full">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "dayGridMonth,timeGridWeek",
          right: "prev,next",
          center: "title",
        }}
        viewClassNames={"bg-red-300 rounded-lg border-none"}
        allDaySlot={true}
        dayMaxEventRows={3}
        events={eventList}
        locale={"br"}
        editable={true}
        selectMirror={true}
        selectable={true}
      />
      <ModalDemo />
    </div>
  );
}
