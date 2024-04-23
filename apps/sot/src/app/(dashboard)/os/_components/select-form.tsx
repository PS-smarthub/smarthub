import React from "react";

<<<<<<< HEAD
export default function SelectForm({ options }: { options: string[] }) {
  return (
    <select className="border rounded text-[#757575] p-2 w-[60%]">
      {options.map((option) => (
        <option>{option}</option>
=======
type Option = {
  title: string;
  value: string;
};

export default function SelectForm({ options }: { options: Option[] }) {
  return (
    <select className="border rounded text-[#757575] p-2 w-[60%]">
      <option selected>Selecione...</option>
      {options.map((option: Option) => (
        <option value={option.value}>{option.title}</option>
>>>>>>> refs/remotes/origin/dev
      ))}
    </select>
  );
}
