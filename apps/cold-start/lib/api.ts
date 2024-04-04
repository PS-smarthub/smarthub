import {
  CreateSchedulingProps,
  DeleteSchedulingProps,
  SchedulingDTO,
} from "@/types";
import axios from "axios";

const BASE_URL = process.env.API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

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
