"use server";

import { getToken } from "@/lib/session";

export async function getContainerList() {
  const token = await getToken();
  try {
    const response = fetch("http://10.234.83.16:8000/api/v1/containers/", {
      method: "GET",
      headers: {
        token: String(token),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => data);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getContainer(container_id: number) {
  const token = await getToken();
  try {
    const response = fetch(
      `http://10.234.83.16:8000/api/v1/containers/${container_id}`,
      {
        method: "GET",
        headers: {
          token: String(token),
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => data);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getSchedules () {
 

  const token = await getToken();
  try {
    const response = fetch(
      `http://10.234.83.16:8000/api/v1/schedules/?month=false&year=false`,
      {
        method: "GET",
        headers: {
          token: String(token),
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => data);

    return response;
  } catch (error) {
    console.error(error);
  }
}
