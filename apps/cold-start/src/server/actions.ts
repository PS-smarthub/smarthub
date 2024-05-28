"use server";

import { getToken } from "@/lib/session";
import { Scheduling, SchedulingDTO, SchedulingResponse } from "@/types";

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

export async function deleteScheduling(id: number) {
  const token = await getToken();

  try {
    await fetch(`http://10.234.83.16:8000/api/v1/schedules/${id.toString()}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
// export const updateSetpoint = async ({
//   set_point,
//   token,
//   container_id,
// }: {
//   set_point: number | undefined;
//   token: string | undefined;
//   container_id: number | undefined;
// }) => {
//   return await api.patch(
//     `/containers/setpoint/${container_id}`,
//     { set_point: set_point },
//     {
//       headers: {
//         token: token,
//       },
//     },
//   );
// };

export async function updateSetPoint({
  set_point,
  container_id,
}: {
  set_point: number | undefined;
  container_id: number | undefined;
}) {
  const token = await getToken();
  console.log(set_point, container_id);
  try {
    const response = await fetch(
      `http://10.234.83.16:8000/api/v1/containers/setpoint/${container_id?.toString()}`,
      {
        method: "PATCH",
        body: JSON.stringify({ set_point: set_point }),
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
