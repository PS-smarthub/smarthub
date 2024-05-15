"use client";
import { useMsal } from "@azure/msal-react";
import { MdOutlineLogout } from "react-icons/md";

export default function SignOutButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => instance.logoutRedirect()}
      className="flex justify-center fixed bottom-8 p-1"
    >
      <MdOutlineLogout className="fill-red-500 size-9 hover:fill-red-600" />
    </button>
  );
}
