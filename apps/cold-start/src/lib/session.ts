"use server";

import { cookies } from "next/headers";

export const getToken = async () => {
  const cookieInstance = cookies();
  const token = cookieInstance.get("cold-start-user-token");
  return String(token?.value);
};
