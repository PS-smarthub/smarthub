import { User } from "@/types";
import { jwtDecode } from "jwt-decode";
import { getToken } from "./session";

export async function getUser() {
    try {
      const token = await getToken();
      const user: User = jwtDecode(String(token));
  
      return user;
    } catch (error) {
      console.log(error);
    }
  }