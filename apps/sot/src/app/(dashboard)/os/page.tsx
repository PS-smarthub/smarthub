"use client";

import { BackButton } from "@smarthub/ui";
import { useState } from "react";
import OficinaForm from "./_components/oficina-form";

export default function OSPage() {
  const [orderType, setOrderType] = useState("");

  return (
    <>
      <BackButton
        page_name={
          orderType == "LEI"
            ? "Ordem do LEI"
            : orderType == "oficina"
              ? "Ordem da Oficina"
              : "Ordens de Serviço"
        }
      />
      <div className="w-full flex">
        <div className="flex-1 pl-14 py-1 pt-6">
          {orderType == "oficina" && <OficinaForm />}
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
                <option selected>Selecione...</option>
                <option value={"oficina"}>Ordem da Oficina</option>
                <option value={"LEI"}>Ordem do LEI</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
