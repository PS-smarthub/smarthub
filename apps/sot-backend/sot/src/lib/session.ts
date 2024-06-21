"use server";

import { cookies } from "next/headers";

export const getToken = async () => {
  const token = cookies().get("session")?.value;
  return token;
};
