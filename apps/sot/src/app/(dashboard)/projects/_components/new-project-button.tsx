"use client"

import { useRouter } from "next/navigation";
import React from "react";

export default function NewProjectButton() {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push("/projects/new")}
      className="gap-2 flex items-center border border-blue-50 text-blue-50 rounded px-2 hover:text-white hover:bg-blue-50"
    >
      + Novo projeto
    </button>
  );
}
