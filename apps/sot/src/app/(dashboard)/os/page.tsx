"use client";

import { BackButton } from "@smarthub/ui";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const OficinaForm = dynamic(() => import("./_components/oficina-form"), {
  ssr: true,
  loading: () => <p>Loading...</p>,
});

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
        <div className="flex-1 pl-14 py-1 pt-6 max-h-[80vh] overflow-y-auto pb-10">
          {orderType == "LEI" && (
            <div className="flex w-full sm:w-3xl gap-6">
              <Link href={"/os/vehicles"}>Veículos</Link>
            </div>
          )}
          {orderType === "oficina" && <OficinaForm />}
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
