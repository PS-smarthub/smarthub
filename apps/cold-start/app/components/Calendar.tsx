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

  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  useEffect(() => {
    let draggableElement = document.getElementById("draggable-el");

    if (draggableElement) {
      new Draggable(draggableElement, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          let start = eventEl.getAttribute("start");

          return { title, id, start };
        },
      });
    }
  }, []);

  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  }

  function addEvent(data: DropArg) {
    const event = {
      ...newEvent,
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
    };

    setAllEvents([...allEvents, event]);
  }

  function handleDeleteModal(data: { event: { id: string } }) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
    setShowModal(false);
    setNewEvent({
      title: "",
      allDay: false,
      start: "",
      id: 0,
    });
  }

  const eventList = [
    {
      duration: "02:00",
      date: "2024-02-08",
      title: "test",
      allDay: false,
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
    },
    {
      duration: "02:00",
      date: "2024-02-21",
      title: "test",
      allDay: false,
    },
    {
      duration: "02:00",
      date: "2024-02-21",
      title: "test",
      allDay: false,
      start: new Date(),
    },
    {
      duration: "02:00",
      date: "2024-02-21",
      title: "test",
      allDay: false,
    },
    {
      duration: "02:00",
      date: "2024-02-21",
      title: "test",
      allDay: false,
    },
    {
      duration: "02:00",
      date: "2024-02-21",
      title: "test",
      allDay: false,
    },
  ];
  return (
    <div className="w-[90%] h-full">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "resourceTimelineWeek,dayGridMonth,timeGridWeek",
          right: "prev, next",
        }}
        buttonText={{ next: ">", prev: "<" }}
        dayMaxEventRows={3}
        dayCellClassNames={"h-[90px]"}
        events={eventList}
        editable={true}
        selectMirror={true}
        selectable={true}
        dateClick={handleDateClick}
        eventClick={(data) => handleDeleteModal(data)}
        height={"100%"}
      />
      <ModalDemo
        button={
          <button className="bg-blue-50 hover:bg-blue-600 rounded-full p-4 text-white w-[50px] h-[50px] flex items-center justify-center absolute bottom-10 right-14 font-semibold">
            +
          </button>
        }
      />
    </div>
  );
}
