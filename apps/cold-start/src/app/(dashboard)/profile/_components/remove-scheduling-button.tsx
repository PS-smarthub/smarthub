"use client";

import { FaRegTrashAlt } from "react-icons/fa";

export default function RemoveSchedulingButton() {
  return (
    <div className="flex items-center">
      <button type="button" onClick={() => console.log("click")}>
        <FaRegTrashAlt color="red" />
      </button>
    </div>
  );
}
