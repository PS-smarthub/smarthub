"use client";

import { useRouter } from "next/navigation";

export default function SignInButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/api/login")}
      className="bg-blue-50 p-2 text-white font-semibold rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-25 dark:bg-blue-950"
    >
      Bosch Login
    </button>
  );
}
