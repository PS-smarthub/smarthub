import { z } from "zod";

export const CreateWorkshopOrderSchema = z.object({
  automaker: z.string().min(1),
  project: z.string().min(1),
  isIntern: z.boolean(),
  model: z.string().min(1),
  chassis: z.string().min(1),
  fleet: z.string().min(1),
  vehicleLocation: z.string().min(1).optional(),
  keyLocation: z.string().min(1).optional(),
  description: z.string().min(1),
  deliveryDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" }),
});

export type workshopSchema = z.infer<typeof CreateWorkshopOrderSchema>;
