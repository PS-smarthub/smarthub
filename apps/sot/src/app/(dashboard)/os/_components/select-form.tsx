"use client";

import { IFormValues, SelectFormProps } from "@/types/select";
import { useQuery } from "@tanstack/react-query";
import { UseFormRegister } from "react-hook-form";
import React, { useState } from "react";
import { fetchAllField } from "../actions";

export const SelectForm = React.forwardRef<
  HTMLSelectElement,
  SelectFormProps & ReturnType<UseFormRegister<IFormValues>>
>((props: SelectFormProps, ref) => {
  const [value, setValue] = useState("");

  const { data: options } = useQuery({
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    queryKey: [`${props.name}`],
    queryFn: async () => await fetchAllField(props.name),
  });

  return (
    <select
      ref={ref}
      {...props}
      className={`border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline ${props.className}`}
    >
      <option value="">Selecione...</option>
      {options?.map((optionString: string, index: number) => (
        <option key={index} value={optionString}>
          {optionString}
        </option>
      ))}
    </select>
  );
});
