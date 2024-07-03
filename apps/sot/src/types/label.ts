import { ComponentProps } from "react";

export interface LabelFormProps extends ComponentProps<"label"> {
    children: string
}