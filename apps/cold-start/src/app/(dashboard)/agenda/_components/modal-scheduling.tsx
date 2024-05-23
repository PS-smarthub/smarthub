"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@smarthub/ui";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import FormScheduling from "./form-scheduling";

export default function ModalScheduling() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-50 hover:bg-blue-600 rounded-full p-4 text-white w-[50px] h-[50px] flex items-center justify-center fixed bottom-10 right-14 font-semibold"
        >
          <IoMdAdd color="white" size={40} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded border">
        <DialogHeader>
          <DialogTitle className="text-left font-bold text-sm border-b  px-2 pb-4">
            Agendamento
          </DialogTitle>
        </DialogHeader>
        <FormScheduling />
      </DialogContent>
    </Dialog>
  );
}
