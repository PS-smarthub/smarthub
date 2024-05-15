import { DeleteSchedulingProps, CreateSchedulingProps } from "@/types";
import { api } from "../api";

export const deleteScheduling = async (props: DeleteSchedulingProps) => {
  return await api.delete(`/schedules/${props.id}`, {
    headers: {
      token: props.token,
    },
  });
};

export const getMySchedulings = async (token: string | undefined) => {
  const response = await api.get("/schedules", {
    headers: {
      token: token,
    },
    params: { my_schedulings: true },
  });

  return response.data;
};

export const createNewScheduling = async (props: CreateSchedulingProps) => {
  return await api.post(`/schedules`, props.newSheduling, {
    headers: {
      token: props.token,
    },
  });
};

export const alocateCar = async ({
  position_1,
  position_2,
  scheduling_id,
  token,
}: {
  position_1: boolean;
  position_2: boolean;
  scheduling_id: number | undefined;
  token: string | undefined;
}) => {
  const response = await api.patch(
    `/schedules/loan/${scheduling_id}/`,
    {
      position_1: position_1,
      position_2: position_2,
    },
    {
      headers: {
        token: token,
      },
    }
  );

  return response.data;
};

export const updateSetpoint = async ({
  set_point_1,
  set_point_2,
  token,
  container_id,
}: {
  set_point_1: number | undefined;
  set_point_2: number | undefined;
  token: string | undefined;
  container_id: number | undefined;
}) => {
  return await api.patch(
    `/containers/setpoint/${container_id}`,
    { set_point_1, set_point_2 },
    {
      headers: {
        token: token,
      },
    }
  );
};

export const validation = async ({
  container_id,
  in_validation_1,
  in_validation_2,
  token,
}: {
  container_id: number | undefined;
  in_validation_1: boolean;
  in_validation_2: boolean;
  token: string | undefined;
}) => {
  return await api.patch(
    `/containers/validation/${container_id}`,
    {
      in_validation_1: in_validation_1,
      in_validation_2: in_validation_2,
    },
    {
      headers: {
        token: token,
      },
    }
  );
};
