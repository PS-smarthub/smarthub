"use server";

import { cookies } from "next/headers";

export const getToken = async () => {
  const token = cookies().get("session");
  return token
};
