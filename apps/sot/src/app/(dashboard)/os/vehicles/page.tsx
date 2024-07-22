"use client";

import React, { useState } from "react";
import RegisterVehicleForm from "./_components/register-vehicle-form";
import { BackButton } from "@smarthub/ui";

export default function Vehicles() {
  const [orderType, setOrderType] = useState("");
  return (
    <>
      <BackButton page_name={"Veículos"} />
      <div className="w-full flex">
        <div className="flex-1 pl-14 py-1 pt-6 max-h-[80vh] overflow-y-auto pb-10">
          {orderType === "register" && <RegisterVehicleForm />}
        </div>
        <div className="fixed right-1">
          {orderType == "" && (
            <div className="flex flex-col gap-1 w-[300px]">
              <label className="text-[#43464A] font-semibold">
                Tipo de ordem
              </label>
              <select
                onChange={(e) => setOrderType(e.target.value)}
                className="border rounded text-[#757575] p-2 w-[60%]"
              >
                <option value={""}>Selecione...</option>
                <option value={"register"}>Cadastrar Veículo</option>
                <option value={"removal"}>Retirada de Veículo</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
