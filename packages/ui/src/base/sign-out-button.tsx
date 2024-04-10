"use client";
import { useMsal } from "@azure/msal-react";
import { MdOutlineLogout } from "react-icons/md";

export default function SignOutButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => instance.logoutRedirect()}
      className="w-full flex justify-center "
    >
      <MdOutlineLogout color="red"/>
    </button>
  );
}
