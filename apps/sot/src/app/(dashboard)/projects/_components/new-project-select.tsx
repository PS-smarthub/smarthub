import { IFormValues } from "@/types/select";
import React from "react";
import { ComponentProps } from "react";
import { UseFormRegister } from "react-hook-form";

interface NewProjectSelectProps extends ComponentProps<"select"> {
  options?: string[];
}

export const NewProjectSelect = React.forwardRef<
  HTMLSelectElement,
  NewProjectSelectProps
>((props: NewProjectSelectProps, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className={`border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline ${props.className}`}
    >
      <option value="" key="default option">
        Selecione...
      </option>
      {props.options
        ? props.options.map((item) => <option key={item}>{item}</option>)
        : props.children}
    </select>
  );
});
