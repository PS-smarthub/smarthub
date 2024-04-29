"use client";
import { useMsal } from "@azure/msal-react";
import { MdOutlineLogout } from "react-icons/md";
import Cookie from "js-cookie";

export function SignOutButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => {
        Cookie.set("token", "");
        instance.loginRedirect();
      }}
      className="flex justify-center fixed bottom-8"
    >
      <MdOutlineLogout className="w-[40px] h-[40px] fill-red-500" />
    </button>
  );
}
