"use client"

import { SchedulingResponse } from "@/types";
import AlocateCarButton from "./alocate-car-button";
import { getUser } from "@/server/actions";
import UpdateAndDelete from "./edit-buttons";

export default function FormSchedulingEdit({
  scheduling,
}: {
  scheduling?: SchedulingResponse;
}) {

  const user = getUser()
  console.log(user)
  
  return (
    
    <div>
      <div className="flex gap-2 flex-col">
        <h2>Agendado por: </h2>
        {scheduling?.user_name_1 == scheduling?.user_name_2 ? (
          <span className="font-semibold">{scheduling?.user_name_1}</span>
        ) : (
          <>
            <span>{scheduling?.user_name_1}</span>
            <span>{scheduling?.user_name_2}</span>
          </>
        )}
      </div>
      <div className="flex flex-col justify-start gap-4 py-4">
        <div className="flex gap-4 items-center">
          <label>De:</label>
          <input
            type="date"
            disabled={scheduling?.user_name_1 != user?.unique_name}
            className="border border-gray-400 rounded p-2"
            defaultValue={scheduling?.initial_date_time.slice(0, 10)}
          />
        </div>
        <div className="flex gap-4 items-center">
          <label>Até:</label>
          <input
            type="date"
            disabled={scheduling?.user_name_1 != user?.unique_name}
            className="border border-gray-400 rounded p-2"
            defaultValue={scheduling?.ending_date_time.slice(0, 10)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Posição 1:{" "}
            <span
              className={`${scheduling?.position_1 ? "text-red-500" : "text-green-500"}`}
            >
              {scheduling?.position_1 ? "Ocupada" : "Livre"}
            </span>
          </p>
          <p>
            Posição 2:{" "}
            <span
              className={`${scheduling?.position_2 ? "text-red-500" : "text-green-500"}`}
            >
              {scheduling?.position_2 ? "Ocupada" : "Livre"}
            </span>
          </p>
        </div>
        {scheduling?.user_name_1 == user.name && <UpdateAndDelete />}
        {scheduling?.user_name_1 != user.name && !scheduling?.position_2 && (
          <AlocateCarButton />
        )}
      </div>
    </div>
  );
}
