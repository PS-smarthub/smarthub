import { ComponentProps } from "react";

export interface IFormValues {
  automaker: string;
  project: string;
  isIntern: boolean;
  model: string;
  chassis: string;
  fleet: string;
  vehicleLocation: string;
  keyLocation: string;
  deliveryDate: Date;
}

export interface SelectFormProps extends ComponentProps<"select"> {}
