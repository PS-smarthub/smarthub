"use client";

import LabelForm from "@/components/label-form";
import { useForm } from "react-hook-form";
import { NewProjectSelect } from "./new-project-select";
import { clients } from "@/data/clients";
import { motors } from "@/data/motor";
import { familyMotor } from "@/data/familyMotor";
import {
  CreateNewProjectSchema,
  projectSchema,
} from "@/schemas/CreateNewProjectSchema";
import { createNewProject } from "../../os/actions";
import { successToast } from "@/lib/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { fuels } from "@/data/fuels";
import { powertrains } from "@/data/powertrain";
import { markets } from "@/data/market";
import { legislations } from "@/data/legislation";
import { cicles } from "@/data/cicle";
import { diagnoses } from "@/data/diagnose";

export default function NewProjectForm() {
  const {
    register,
    reset,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<projectSchema>({
    resolver: zodResolver(CreateNewProjectSchema),
  });

  const handleCreateProject = async (data: projectSchema) => {
    try {
      const response = await createNewProject(data);
      successToast("Projeto criado com sucesso");
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreateProject)}>
      <div className="flex gap-12">
        <div className="flex-col flex">
          <LabelForm htmlFor="name">Nome do projeto*</LabelForm>
          <input
            {...register("name", { required: true })}
            id="name"
            name="name"
            type="text"
            className={`border rounded text-[#757575] outline-red p-2 w-[250px] shadow hover:border-gray-400  ${errors.name && "border-red-500 outline-red-500"}`}
          />
          {/* {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}
        </div>
        <div className="flex-col flex">
          <LabelForm htmlFor="number">Número do projeto</LabelForm>
          <input
            {...register("number", { required: true })}
            id="number"
            name="number"
            defaultValue="BM-"
            type="text"
            className="border rounded text-[#757575] p-2 w-[250px] shadow hover:border-gray-400 focus:shadow-outline"
          />
        </div>
      </div>
      <div className="flex-col flex mt-6">
        <LabelForm htmlFor="desc">Descritivo (Opcional)</LabelForm>
        <textarea
          {...register("desc", { required: false })}
          id="desc"
          name="desc"
          className="border rounded text-[#757575] p-2 w-[400px] shadow hover:border-gray-400 focus:shadow-outline"
        />
      </div>
      <div className="flex gap-12 mt-6">
        <div className="flex-col flex">
          <LabelForm htmlFor="client">Cliente</LabelForm>
          <NewProjectSelect
            {...register("client", { required: true })}
            options={clients}
            name="client"
            id="client"
          />
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="motor">Motor</LabelForm>
          <NewProjectSelect
            {...register("motor", { required: true })}
            options={motors}
            name="motor"
            id="motor"
          />
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="motorFamily">Família motor</LabelForm>
          <NewProjectSelect
            {...register("motorFamily", { required: true })}
            options={familyMotor}
            name="motorFamily"
            id="motorFamily"
          />
          {errors.motorFamily && <p>{errors.motorFamily.message}</p>}
        </div>
        <div className="flex-col flex">
          <LabelForm htmlFor="injection">Injeção</LabelForm>
          <NewProjectSelect
            {...register("injection", { required: true })}
            name="injection"
            id="injection"
          >
            <option>DIRETA</option>
            <option>INDIRETA</option>
          </NewProjectSelect>
        </div>
      </div>
      <div className="flex gap-12 mt-6">
        <div className="flex-col flex">
          <LabelForm htmlFor="aspiration">Aspiração</LabelForm>
          <NewProjectSelect
            {...register("aspiration", { required: true })}
            name="aspiration"
            id="aspiration"
          >
            <option>NATURAL</option>
            <option>SOBRE-ALIMENTADO</option>
          </NewProjectSelect>
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="fuel">Combustível</LabelForm>
          <NewProjectSelect
            {...register("fuel", { required: true })}
            name="fuel"
            id="fuel"
            options={fuels}
          />
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="gearBox">Cambio</LabelForm>
          <NewProjectSelect
            {...register("gearBox", { required: true })}
            name="gearBox"
            id="familyMotor"
          >
            <option>Teste</option>
          </NewProjectSelect>
        </div>
        <div className="flex-col flex">
          <LabelForm htmlFor="powertrain">Powertrain</LabelForm>
          <NewProjectSelect
            {...register("powertrain", { required: true })}
            name="powertrain"
            id="powertrain"
            options={powertrains}
          />
        </div>
      </div>
      <div className="flex gap-12 mt-6">
        <div className="flex-col flex">
          <LabelForm htmlFor="market">Mercado</LabelForm>
          <NewProjectSelect
            {...register("market", { required: true })}
            name="market"
            id="market"
            options={markets}
          />
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="legislation">Legislação</LabelForm>
          <NewProjectSelect
            {...register("legislation", { required: true })}
            name="legislation"
            id="legislation"
            options={legislations}
          />
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="cicle">Ciclo</LabelForm>
          <NewProjectSelect
            {...register("cicle", { required: true })}
            name="cicle"
            id="cicle"
            options={cicles}
          />
        </div>
        <div className="flex-col flex">
          <LabelForm htmlFor="diagnose">Diagnose</LabelForm>
          <NewProjectSelect
            {...register("diagnose", { required: true })}
            name="diagnose"
            id="diagnose"
            options={diagnoses}
          />
        </div>
      </div>

      <div className="flex justify-end w-[90%] mt-8">
        <button
          type={"submit"}
          disabled={isSubmitting}
          className="bg-green-400 hover:bg-green-500 rounded py-2 px-6 text-white font-semibold"
        >
          {isSubmitting ? "Criando projeto..." : "Criar projeto"}
        </button>
      </div>
    </form>
  );
}
