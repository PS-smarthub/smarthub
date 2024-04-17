import React from "react";

export default function SelectForm({ options }: { options: string[] }) {
  return (
    <select className="border rounded text-[#757575] p-2 w-[60%]">
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
}
