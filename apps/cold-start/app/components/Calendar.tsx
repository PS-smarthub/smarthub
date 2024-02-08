"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import { useEffect, useState } from "react";

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
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev, next today",
          center: "title",
          right: "resourceTimelineWook, dayGridMonth, timeGridWeek",
        }}
        events={[{ duration: "02:00", date: "2024-02-08", title: 'test'}]}
        nowIndicator={true}
        editable={true}
        droppable={true}
        selectMirror={true}
        selectable={true}
        // dateClieck={handleDateClick}
        drop={(data) => addEvent(data)}
        eventClick={(data) => handleDeleteModal(data)}
        height={800}
      />
      {/* <div id="draggable-el" className="ml-8 border-2 p-2 rounded mt-16">
        <h1>Drag Event</h1>
        {events.map((event) => (
          <div
            className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
            title={event.title}
            key={event.id}
          >
            {event.title}
          </div>
        ))}
      </div> */}
    </>
  );
}
