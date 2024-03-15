"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { ModalDemo } from "./ModalDemo";
import { useQuery } from "@tanstack/react-query";
import { Scheduling, SchedulingResponse } from "@/types";
import { useMsal } from "@azure/msal-react";
import axios from "axios";

export default function Calendar() {
  const schedulings: Scheduling[] = [];
  const { accounts } = useMsal();
  interface Event {}
  const { data, isPending, error } = useQuery({
    queryKey: ["get-schedulings"],
    queryFn: () =>
      axios.get(
        `http://10.234.84.66:8000/api/v1/schedules/?month=false&year=false`,
        {
          headers: {
            token: accounts[0]?.idToken,
          },
        }
      ),
  });

  useEffect(() => {
    if (data) {
      data.data.map((data: SchedulingResponse) => {
        schedulings.push({
          allDay: false,
          date: data.initial_date_time,
          title: "Agendamento",
        });
      });
    }
  }, [data]);

  return (
    <div className="w-[60%] overflow-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "dayGridMonth,timeGridWeek",
          right: "prev,next",
          center: "title",
        }}
        viewClassNames={"rounded-lg border-none"}
        allDaySlot={true}
        height={700}
        dayMaxEventRows={3}
        locale={"br"}
        events={schedulings}
        editable={true}
        selectMirror={true}
        selectable={true}
      />
      <ModalDemo />
    </div>
  );
}
