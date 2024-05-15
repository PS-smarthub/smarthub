"use client";
import { useMsal } from "@azure/msal-react";
import LogoutRed from "@/public/logout-red.svg";
import Image from "next/image";

export default function SignOutButton() {
  const { instance } = useMsal();
  return (
    <button
      onClick={() => instance.logoutRedirect()}
      className="w-full flex justify-center "
    >
      <Image
        src={LogoutRed}
        alt="Logout icon"
        className="w-[35px] fixed bottom-8 p-1"
      />
    </button>
  );
}
