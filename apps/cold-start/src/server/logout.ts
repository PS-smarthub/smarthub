"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieINstance = cookies();

  cookieINstance.set("cold-start-user-token", "", { expires: new Date(0) });

  return redirect("/auth/signin");
}
