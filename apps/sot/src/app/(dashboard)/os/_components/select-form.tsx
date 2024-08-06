"use client";

import { IFormValues, SelectFormProps } from "@/types/select";
import { useQuery } from "@tanstack/react-query";
import { UseFormRegister } from "react-hook-form";
import React, { useState } from "react";
import { fetchByQuery } from "../actions";

export const SelectForm = React.forwardRef<
  HTMLSelectElement,
  SelectFormProps & ReturnType<UseFormRegister<IFormValues>>
>((props: SelectFormProps, ref) => {
  const [query, setQuery] = useState<{ [key: string]: any }>({});

  const { data: vehicles } = useQuery({
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    queryKey: [`${props.name}`],
    queryFn: async () =>
      await fetchByQuery(`?automaker=Bosch BR`),
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  console.log("query: ", query);
  console.log(vehicles)

  return (
    <select
      ref={ref}
      {...props}
      onChange={handleChange}
      className={`border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline ${props.className}`}
    >
      <option value="">Selecione...</option>
      {props.name !== "automaker" &&
        vehicles?.map((vehicle: any , index: number) => (
          <option key={index}>
            {vehicle.project}
          </option>
        ))}
      {props.name === "automaker" && (<>
        <option>Bosch BR</option>
        <option>BYD</option>
        <option>Fiat</option>
        <option>GWM</option>
        <option>Honda</option>
        <option>Nissan</option>
        <option>Renault</option>
        <option>VW</option>
      </>)}
    </select>
  );
});
