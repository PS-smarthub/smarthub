"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieINstance = cookies();

  cookieINstance.delete("cold-start-user-token");

  return redirect("/auth/signin");
}
