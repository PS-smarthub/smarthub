"use server";

import { cookies } from "next/headers";

export const getToken = () => {
  const cookieInstance = cookies();
  const token = cookieInstance.get("cold-start-user-token");
  return token?.value;
};


