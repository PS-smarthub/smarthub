"use client";

import { MdOutlineLogout } from "react-icons/md";

export function SignOutButton() {
  return (
    <button onClick={() => {}} className="flex justify-center fixed bottom-8">
      <MdOutlineLogout className="w-[40px] h-[40px] fill-red-500" />
    </button>
  );
}
