"use client";
import { logout } from "@/server/logout";
import { MdOutlineLogout } from "react-icons/md";

export default function SignOutButton() {
  return (
    <button
      onClick={() => logout()}
      className="flex justify-center fixed bottom-8 p-1"
    >
      <MdOutlineLogout className="fill-red-500 size-9 hover:fill-red-600" />
    </button>
  );
}
