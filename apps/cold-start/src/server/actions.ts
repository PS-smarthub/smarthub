"use server";

import { getToken } from "@/lib/session";
import { User } from "@/types";
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

export async function getSchedules() {
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

export async function createNewScheduling() {
  try {
    const response = await fetch("http://10.234.83.16:8000/api/v1/schedules/", {
      method: "POST",
      headers: {
        token: "",
      },
    });

    return response.json();
  } catch (error) {
    return { error: error };
  }
}
