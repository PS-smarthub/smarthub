"use client";

import { BackButton } from "@smarthub/ui";
import { useState } from "react";
import SelectForm from "./_components/select-form";

export default function OSPage() {
  const [orderType, setOrderType] = useState("");

  return (
    <div>
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
        <div className="w-[70%]">{orderType}</div>
        <div className=" w-[30%]">
          <div className="flex flex-col gap-1">
            <label className="text-[#43464A] font-semibold">
              Tipo de ordem
            </label>
            <SelectForm
              options={[{ title: "Ordem da Oficina", value: "oficina" }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
