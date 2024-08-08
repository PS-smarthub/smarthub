import LabelForm from "@/components/label-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(() => console.log("Hello"))}>
      <div className="flex gap-12">
        <div className="flex-col flex">
          <LabelForm htmlFor="automaker">Montadora</LabelForm>
        </div>
        <div className="flex-col flex">
          <LabelForm htmlFor="project">Projeto</LabelForm>
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="isIntern">Interno</LabelForm>
          <select
            {...register("isIntern", {
              required: true,
              setValueAs: (v) => v === "true",
            })}
            className="border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline w-[150px]"
            name="isIntern"
            id="isIntern"
          >
            <option value={""}>Selecione...</option>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>

      <div className="flex gap-12 mt-8">
        <div className="flex-col flex">
          <LabelForm htmlFor="model">Modelo</LabelForm>
          {/* <SelectForm
            search_params=""
            {...register("model", { required: true })}
            id="model"
            name="model"
          /> */}
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="chassis">Chassi</LabelForm>
          {/* <SelectForm
            search_params=""
            {...register("chassis", { required: true })}
            id="chassis"
            name="chassis"
          /> */}
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="fleet">Frota</LabelForm>
          {/* <SelectForm
            search_params="automaker"
            {...register("fleet", { required: true })}
            id="fleet"
            name="fleet"
          /> */}
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex-col flex">
          <LabelForm htmlFor="vehicleLocation">
            Localização do veículo
          </LabelForm>
          <input
            {...register("vehicleLocation", { required: true })}
            id="vehicleLocation"
            name="vehicleLocation"
            type="text"
            className="border rounded text-[#757575] p-2 w-[400px] shadow hover:border-gray-400 focus:shadow-outline"
            placeholder="Ex: Na oficina"
          />
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="keyLocation">Localização da chave</LabelForm>
          <input
            {...register("keyLocation", { required: true })}
            id="keyLocation"
            name="keyLocation"
            type="text"
            className="border rounded text-[#757575] p-2 w-[400px] shadow hover:border-gray-400 focus:shadow-outline"
            placeholder="Ex: No carro"
          />
        </div>
        <textarea
          {...register("description")}
          id="description"
          name="description"
          placeholder="Informações do serviço"
          className="mt-6 border rounded text-[#757575] w-[60%] h-[150px] p-2 shadow hover:border-gray-400 focus:shadow-outline"
        />
        <div className="flex items-center space-x-28">
          <div className="flex gap-4 items-center">
            <LabelForm htmlFor="deliveryDate">
              Data de entrega desejada:
            </LabelForm>
            <input
              {...register("deliveryDate", { required: true })}
              id="deliveryDate"
              name="deliveryDate"
              className="border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:shadow-outline"
              type="date"
            />
          </div>
          <div>
            <button
              type={"submit"}
              disabled={isSubmitting}
              className="bg-green-400 hover:bg-green-500 rounded py-2 px-4 text-white font-semibold"
            >
              {isSubmitting ? "Criando ordem..." : "Criar"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
