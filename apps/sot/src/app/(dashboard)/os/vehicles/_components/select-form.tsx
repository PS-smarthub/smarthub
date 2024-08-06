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
  const [query, setQuery] = useState<{ [key: string]: any }>({});

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const { data } = useQuery({
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    queryKey: [`vehicles - ${props.name}`],
    queryFn: async () => await fetchAllField("/projects"),
  });

  console.log(data);
  return (
    <select
      ref={ref}
      onChange={handleChange} 
      {...props}
      className={`border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline ${props.className}`}
    >
      <option value="">Selecione...</option>
      {props.name == "projects" &&
        data?.map((project: { number: string }) => (
          <option>{project.number}</option>
        ))}
      {props.name == "users" &&
        data?.map((user: { name: string }) => <option>{user.name}</option>)}
      {props.name === "automaker" && (
        <>
          <option>Bosch BR</option>
          <option>BYD</option>
          <option>Fiat</option>
          <option>GWM</option>
          <option>Honda</option>
          <option>Nissan</option>
          <option>Renault</option>
          <option>VW</option>
        </>
      )}
    </select>
  );
});
