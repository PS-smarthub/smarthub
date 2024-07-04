"use client";

import { Button } from "@smarthub/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <Button
      onClick={() => {
        setLoading(true);
        router.push("/api/login");
      }}
      disabled={loading}
      className="bg-blue-50 p-2 text-white font-semibold hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-25 dark:bg-blue-950"
    >
      {loading ? (
        <>
          Carregando...
        </>
      ) : (
        "Bosch Login"
      )}
    </Button>
  );
}
