"use server";

import { redirect } from "next/navigation";


export const handleLogin = async () => {
  try {
    redirect("/api/login");
    // const response = await axios.get("/api/login")
    // console.log(response)
  } catch (error) {
    console.error(error);
  }
}
