import { IFormValues, SelectFormProps } from "@/types/select";
import { useQuery } from "@tanstack/react-query";
import { UseFormRegister } from "react-hook-form";
import React from "react";
import { fetchAllField } from "../actions";

export const SelectForm = React.forwardRef<
  HTMLSelectElement,
  SelectFormProps & ReturnType<UseFormRegister<IFormValues>>
>((props: SelectFormProps, ref) => {
  const { data: options } = useQuery({
    queryKey: ["options"],
    queryFn: async () => await fetchAllField(props.name),
  });

  return (
    <select
      {...props}
      ref={ref}
      className={`border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline ${props.className}`}
    >
      <option value="">Selecione...</option>
      {options?.map((optionString, index) => (
        <option key={index} value={optionString}>
          {optionString}
        </option>
      ))}
    </select>
  );
});
