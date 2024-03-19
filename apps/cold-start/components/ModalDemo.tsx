"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Modal";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useToast } from "@/lib/use-toast";
import { Scheduling, SchedulingResponse } from "@/types";
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export function ModalDemo() {
  const [open, setOpen] = useState(false);
  const { accounts } = useMsal();
  const username = accounts[0]?.username;

  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = axios.post(
        "http://10.234.84.66:8000/api/v1/schedules",
        {
          ending_date_time: getValues("startDate"),
          initial_date_time: getValues("finalDate"),
          container_id: getValues("container"),
        },
        {
          headers: {
            token: accounts[0]?.idToken,
          },
        }
      );

      reset();
      toast({
        duration: 1500,
        variant: "success",
        title: "Sucesso",
        description: "Container agendado com sucesso",
      });
      setOpen(false);
    } catch {
      toast({
        duration: 1500,
        variant: "destructive",
        title: "Error",
        description: "Erro para agendar o container",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-50 hover:bg-blue-600 rounded-full p-4 text-white w-[50px] h-[50px] flex items-center justify-center fixed bottom-10 right-14 font-semibold"
        >
          +
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded border">
        <DialogHeader>
          <DialogTitle className="text-left font-bold text-sm border-b  px-2 pb-4">
            Agendamento
          </DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col justify-start gap-4 py-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 items-center">
            <label htmlFor="startDate" className="text-right">
              De
            </label>
            <input
              {...register("startDate", { required: "Informe a data inicial" })}
              type="date"
              className="border border-gray-400 rounded p-2"
            />
            {errors.startDate?.message && (
              <p className="text-red-500">{`${errors.startDate.message}`}</p>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="username" className="text-right">
              Até
            </label>
            <input
              {...register("finalDate", { required: "Informe a data final" })}
              type="date"
              className="border border-gray-400 rounded p-2"
            />
            {errors.finalDate?.message && (
              <p className="text-red-500">{`${errors.finalDate.message}`}</p>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <select
              {...register("container", { required: "Informe o container" })}
              className="border border-gray-400 rounded p-2"
            >
              <option value="" disabled selected>
                Container...
              </option>
              <option value="1">Container 1</option>
              <option value="2">Container 2</option>
              <option value="3">Container 3</option>
              <option value="4">Container 4</option>
              <option value="5">Container 5</option>
              <option value="6">Container 6</option>
              <option value="7">Container 7</option>
              <option value="8">Container 8</option>
              <option value="9">Container 9</option>
              <option value="10">Container 10</option>
              <option value="11">Container 11</option>
              <option value="12">Container 12</option>
            </select>
            {errors.container?.message && (
              <p className="text-red-500">{`${errors.container.message}`}</p>
            )}
          </div>
          <textarea
            {...register("description")}
            cols={30}
            rows={7}
            className="resize-none w-full rounded border border-gray-400 p-2 focus:border-gray-400"
            placeholder="Informações adicionais"
          />
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 rounded text-white font-semibold p-1 w-[40%] disabled:bg-gray-600"
            >
              Confirmar
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
