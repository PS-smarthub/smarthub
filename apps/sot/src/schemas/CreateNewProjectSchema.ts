import { z } from "zod";

export const CreateNewProjectSchema = z.object({
  name: z.string().min(1, "Insira o nome do projeto"),
  number: z.string().min(4, "Insira o número do projeto"),
  desc: z.string().optional(),
  client: z.string().min(1, "Selecione o cliente"),
  motor: z.string().min(1, "Selecione o motor"),
  motorFamily: z.string().min(1, "Selecione a família do motor"),
  injection: z.string().min(1, "Selecione o tipo de injeção"),
  aspiration: z.string().min(1, "Selecione o tipo de aspiração"),
  fuel: z.string().min(1, "Selecione o tipo de combustível"),
  gearBox: z.string().min(1, "Selecione o câmbio"),
  powertrain: z.string().min(1, "Selecione o powertrain"),
  market: z.string().min(1, "Selecione o mercado"),
  legislation: z.string().min(1, "Selecione a legislação"),
  cicle: z.string().min(1, "Selecione o ciclo"),
  diagnose: z.string().min(1, "Selecione a diagnose"),
});

export type projectSchema = z.infer<typeof CreateNewProjectSchema>;
