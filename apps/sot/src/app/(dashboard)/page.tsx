"use client"

import { msalInstance } from "@/src/services/msal/msalService"; 
import LoginButton from "../_component/login-button";

export default function Home() {


  return (
    <main>
      <LoginButton />
    </main>
  );
}
