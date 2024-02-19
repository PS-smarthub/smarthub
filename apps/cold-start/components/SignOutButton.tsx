"use client"
import { useMsal } from "@azure/msal-react";

export default function SignOutButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => instance.logoutRedirect()}
      className="bg-red-500 p-2 text-white font-semibold rounded"
    >
      Logout
    </button>
  );
}
