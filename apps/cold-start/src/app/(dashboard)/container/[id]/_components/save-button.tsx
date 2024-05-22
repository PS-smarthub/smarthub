"use client";

import { useState } from "react";

export default function SaveButton() {
  const [updatingSetpoint, setUpdatingSetpoint] = useState(false);
  return (
    <button
      disabled={updatingSetpoint ? updatingSetpoint : true}
      onClick={() => setUpdatingSetpoint}
      className={`bg-green-400 font-semibold hover:bg-green-500 text-white p-2 rounded disabled:bg-gray-500 disabled:cursor-not-allowed`}
    >
      {updatingSetpoint ? "Salvando..." : "Salvar"}
    </button>
  );
}
