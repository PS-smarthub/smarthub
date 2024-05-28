"use client"

import { errorToast, successToast } from "@/lib/toast_functions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createNewScheduling } from "@/server/actions";

export default function FormScheduling({setOpen}: {setOpen: any}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createNewScheduling,
    onMutate: () =>
      queryClient.invalidateQueries({ queryKey: ["get-schedulings"] }),
    onSuccess: () => {
      setOpen(false)
      reset();
      successToast("Container agendado com sucesso");
    },
    onError: (err) =>
      errorToast(
        err.message.includes("406") ? "Container indisponível" : err.message
      ),
  });

  return (
    <form
      className="flex flex-col justify-start gap-4 py-4"
      onSubmit={handleSubmit(() => {
        mutate({
          newScheduling: {
            container_id: getValues("container"),
            ending_date_time: getValues("finalDate"),
            initial_date_time: getValues("startDate"),
            position_1: true,
            position_2: getValues("position") == 2 ? true : false,
          },
        });
      })}
    >
      <div className="flex gap-4 items-center">
        <label htmlFor="startDate" className="text-right">
          De
        </label>
        <input
          {...register("startDate", {
            required: "Informe a data inicial",
          })}
          type="date"
          className="border border-gray-400 rounded p-2"
        />
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
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <select
            {...register("container", { required: "Informe o container" })}
            className="border border-gray-400 rounded p-2"
          >
            <option disabled selected>
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
        </div>

        <div>
          <select
            {...register("position", {
              required: "Informe a quantidade de carros",
            })}
            className="border border-gray-400 rounded p-2"
            name="position"
            id="position"
          >
            <option disabled selected>
              Quantidade de carros...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          {errors.position?.message && (
            <p className="text-red-500">{`${errors.position.message}`}</p>
          )}
        </div>
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
          disabled={isPending ? true : false}
          className="bg-green-400 hover:bg-green-500 rounded text-white font-semibold p-1 w-[40%] disabled:bg-gray-600"
        >
          Confirmar
        </button>
      </div>
    </form>
  );
}
