"use server";

import { api } from "@/lib/api";


export const getContainers = async () => {
  const response = await api.get(`${process.env.API_URL}/containers/`);

  return response.data;
};
