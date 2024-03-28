"use server";

import { api } from "@/lib/api";

export const handleSetPoint = async ({
  container_id,
  set_point_1,
  set_point_2
}: {
  container_id: number | undefined;
  set_point_1: number | undefined;
  set_point_2: number | undefined;
}) => {
    
  const response = await api.patch(
    `/containers/setpoint/${container_id}`,
    {
      set_point_1: set_point_1,
      set_point_2: set_point_2
    }, {}
  );
  console.log(response.data);
};
