"use client";
import { useMsal } from "@azure/msal-react";
import { MdOutlineLogout } from "react-icons/md";

export function SignOutButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => instance.logoutRedirect()}
      className="w-full flex justify-center fixed bottom-8"
    >
      <MdOutlineLogout className="w-[40px] h-[40px] fill-red-500"/>
    </button>
  );
}
