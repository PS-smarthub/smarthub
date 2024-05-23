"use server";

import { getToken } from "@/lib/session";
import { Scheduling, SchedulingDTO, SchedulingResponse, User } from "@/types";
import { jwtDecode } from "jwt-decode";

export async function getContainerList() {
  const token = await getToken();

  try {
    const response = await fetch(
      "http://10.234.83.16:8000/api/v1/containers/",
      {
        method: "GET",
        headers: {
          token: String(token),
        },
      }
    );
    if (response.status === 403) {
      return null;
    } else {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getContainer(container_id: number) {
  const token = await getToken();
  try {
    const response = await fetch(
      `http://10.234.83.16:8000/api/v1/containers/${container_id}`,
      {
        method: "GET",
        headers: {
          token: String(token),
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getSchedules(): Promise<Scheduling[] | undefined> {
  const token = await getToken();
  try {
    const response = await fetch(
      `http://10.234.83.16:8000/api/v1/schedules/?month=false&year=false`,
      {
        method: "GET",
        headers: {
          token: String(token),
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(): Promise<User | undefined> {
  try {
    const token = await getToken();
    const user: User = jwtDecode(String(token));

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewScheduling({
  newScheduling,
}: {
  newScheduling: SchedulingDTO;
}) {
  try {
    const token = await getToken();
    const response = await fetch("http://10.234.83.16:8000/api/v1/schedules/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(newScheduling),
    });

    return response.json();
  } catch (error) {
    return { error: error };
  }
}

export async function getMySchedulings(): Promise<
  SchedulingResponse[] | undefined
> {
  const token = await getToken();
  const params = new URLSearchParams({
    my_schedulings: "true",
    mounth: "false",
    year: "false",
  });

  try {
    const response = await fetch(
      `http://10.234.83.16:8000/api/v1/schedules/?${params.toString()}`,
      {
        method: "GET",
        headers: {
          token: token,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
