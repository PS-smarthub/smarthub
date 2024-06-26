"use client";

import { useRouter } from "next/navigation";
import { MdOutlineLogout } from "react-icons/md";

export function SignOutButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/api/logout")}
      className="flex justify-center fixed bottom-8"
    >
      <MdOutlineLogout className="w-[40px] h-[40px] fill-red-500" />
    </button>
  );
}
