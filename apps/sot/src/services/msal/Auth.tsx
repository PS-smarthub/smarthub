"use client";
import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const { accounts } = useMsal();
  const { push } = useRouter();
  const current_user = accounts[0]?.idToken;

  if (!current_user) {
    push("/auth/signin");
  }

  return <></>;
}
