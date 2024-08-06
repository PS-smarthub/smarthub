import LabelForm from "@/components/label-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { SelectForm } from "../_components/select-form";

export default function RegisterVehicleForm() {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm({
    // resolver: zodResolver(),
  });

  return (
    <>
      <form onSubmit={handleSubmit(() => console.log("Hello"))} className="">
        <div className="flex gap-12">
          <div className="flex-col flex">
            <LabelForm htmlFor="automaker">Montadora</LabelForm>
            <select
              {...register("isIntern", {
                required: true,
                setValueAs: (v) => v === "true",
              })}
              className="border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline w-[250px]"
              name="isIntern"
              id="isIntern"
            >
              <option value={""}>Selecione...</option>
              <option>Bosch BR</option>
              <option>Toyota</option>
            </select>
          </div>
          <div className="flex-col flex">
            <LabelForm htmlFor="project">Projeto</LabelForm>
            <SelectForm
              {...register("projects", { required: true })}
              id="projects"
              name="projects"
              className="sm:w-[450px]"
            />
          </div>

          <div className="flex-col flex">
            <LabelForm htmlFor="isIntern">Responsável</LabelForm>
            <select
              className="border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline w-[150px]"
              name="isIntern"
              id="isIntern"
            >
              <option value={""}>Selecione...</option>
              <option>Ângelo Carnevale</option>
              <option>Marcelo Evangelista</option>
            </select>
          </div>
        </div>

        <div className="flex gap-12 mt-8">
          <div className="flex-col flex">
            <LabelForm htmlFor="model">Modelo</LabelForm>
            <input
              {...register("model", { required: true })}
              id="model"
              name="model"
              type="text"
              className="border rounded text-[#757575] p-2 w-[150px] shadow hover:border-gray-400 focus:shadow-outline"
            />
          </div>

          <div className="flex-col flex">
            <LabelForm htmlFor="color">Cor</LabelForm>
            <input
              {...register("color", { required: true })}
              id="color"
              name="color"
              type="text"
              className="border rounded text-[#757575] p-2 w-[150px] shadow hover:border-gray-400 focus:shadow-outline"
            />
          </div>

          <div className="flex-col flex">
            <LabelForm htmlFor="fleet">Chassi</LabelForm>
            <input
              {...register("vehicleLocation", { required: true })}
              id="chassis"
              name="chassis"
              type="text"
              className="border rounded text-[#757575] p-2 w-[150px] shadow hover:border-gray-400 focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <LabelForm htmlFor="vehicleLocation">Observações</LabelForm>
            <textarea
              {...register("vehicleLocation", { required: true })}
              id="vehicleLocation"
              name="vehicleLocation"
              className="border rounded text-[#757575] p-2 w-[400px] shadow hover:border-gray-400 focus:shadow-outline"
            />
          </div>

          <div className="flex items-center gap-2">
            <LabelForm htmlFor="keyLocation">Imagem do veículo:</LabelForm>
            <input
              {...register("keyLocation", { required: true })}
              id="keyLocation"
              name="keyLocation"
              type="text"
              className="border rounded text-[#757575] p-2 w-[400px] shadow hover:border-gray-400 focus:shadow-outline"
              placeholder="Ex: No carro"
            />
          </div>
          <div className="flex-col flex">
            <LabelForm>Número da NF</LabelForm>
            <input
              {...register("keyLocation", { required: true })}
              id="keyLocation"
              name="keyLocation"
              type="text"
              className="border rounded text-[#757575] p-2 w-[400px] shadow hover:border-gray-400 focus:shadow-outline"
              placeholder="Ex: No carro"
            />
          </div>
          <div className="flex justify-center flex-col gap-4">
            <div className="flex gap-4 items-center">
              <LabelForm htmlFor="deliveryDate">
                Data de emissão da NF:
              </LabelForm>
              <input
                {...register("deliveryDate", { required: true })}
                id="deliveryDate"
                name="deliveryDate"
                className="border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:shadow-outline"
                type="date"
              />
            </div>
            <div className="flex gap-4 items-center">
              <LabelForm htmlFor="deliveryDate">Vencimento comodato:</LabelForm>
              <input
                {...register("deliveryDate", { required: true })}
                id="deliveryDate"
                name="deliveryDate"
                className="border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:shadow-outline"
                type="date"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <LabelForm htmlFor="deliveryDate">
              Arquivo da nota fiscal:
            </LabelForm>
            <input
              {...register("deliveryDate", { required: true })}
              id="deliveryDate"
              name="deliveryDate"
              className="border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:shadow-outline"
              type="text"
            />
          </div>
          <div>
            <button
              type={"submit"}
              disabled={isSubmitting}
              className="bg-green-400 hover:bg-green-500 rounded py-2 px-4 text-white font-semibold"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
