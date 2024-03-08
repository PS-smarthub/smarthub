"use client";
import { useMsal } from "@azure/msal-react";

export default function SignInButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => instance.loginPopup()}
      className="bg-blue-50 p-2 text-white font-semibold rounded hover:bg-blue-600 dark:bg-blue-950"
    >
      Bosch Login
    </button>
  );
}
