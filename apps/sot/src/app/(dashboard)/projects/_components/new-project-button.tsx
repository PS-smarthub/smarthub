"use client"

import { useRouter } from "next/navigation";
import React, { ComponentProps } from "react";

interface NewProjectButton extends ComponentProps<"button"> {}

export default function NewProjectButton(props: NewProjectButton) {
  const {push} = useRouter()
  return (
    <button {...props} onClick={() => push("/projects/new")} className="gap-2 flex items-center border border-blue-50 text-blue-50 rounded px-2 hover:text-white hover:bg-blue-50">
      + Novo projeto
    </button>
  );
}
