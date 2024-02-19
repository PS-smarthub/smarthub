"use client"
import { useMsal } from "@azure/msal-react";

export default function SignInButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => instance.loginPopup()}
      className="bg-blue-50 p-2 text-white font-semibold rounded"
    >
      Click
    </button>
  );
}
