"use client";

import { useMsal } from "@azure/msal-react";
import LoginButton from "./_component/login-button";

export default function Home() {
  const { accounts } = useMsal();

  console.log(accounts[0]);

  return (
    <main>
      <LoginButton />
    </main>
  );
}
