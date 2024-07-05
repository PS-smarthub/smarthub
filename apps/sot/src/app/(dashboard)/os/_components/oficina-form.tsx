import { useForm } from "react-hook-form";
import {
  CreateWorkshopOrderSchema,
  formSchema,
} from "@/schemas/CreateWorkshopOrderSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { errorToast, successToast } from "@/lib/toast";
import { createNewWorkshopServiceOrder } from "../actions";
import LabelForm from "./label-form";

export default function OficinaForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<formSchema>({
    resolver: zodResolver(CreateWorkshopOrderSchema),
  });

  const createWorkshopOrder = async (data: formSchema) => {
    try {
      const result = await createNewWorkshopServiceOrder(data);
      console.log(result);
      successToast("Ordem de serviço criada com sucesso.");
      reset();
    } catch (err) {
      errorToast("Erro ao criar ordem de serviço.");
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(createWorkshopOrder)}>
      <div className="flex gap-12">
        <div className="flex-col flex">
          <LabelForm htmlFor="automaker">Montadora</LabelForm>
          <select
            {...register("automaker", { required: true })}
            id="automaker"
            name="automaker"
            className={`border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline`}
          >
            <option value="">Selecione...</option>
            <option>Fiat</option>
            <option>Toyota</option>
            <option>Honda</option>
          </select>
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="project">Projeto</LabelForm>
          <select
            {...register("project", { required: true })}
            id="project"
            name="project"
            className="border rounded text-[#757575] p-2 w-[450px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline"
          >
            <option value="">Selecione...</option>
            <option>Projeto 1</option>
            <option>Projeto 2</option>
            <option>Projeto 3</option>
          </select>
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="isInter">Interno</LabelForm>
          <select
            {...register("isIntern", {
              required: true,
              setValueAs: (v) => v === "true",
            })}
            className="border rounded text-[#757575] p-2  w-[150px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline"
            name="isIntern"
            id="isIntern"
          >
            <option value="">Selecione...</option>
            <option value={"true"}>Sim</option>
            <option value={"false"}>Não</option>
          </select>
        </div>
      </div>

      <div className="flex gap-12 mt-8">
        <div className="flex-col flex">
          <LabelForm htmlFor="model">Modelo</LabelForm>
          <select
            {...register("model", { required: true })}
            className="border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline"
            id="model"
            name="model"
          >
            <option value="">Selecione...</option>
            <option>Fiat</option>
            <option>Toyota</option>
            <option>Honda</option>
          </select>
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="chassis">Chassi</LabelForm>
          <select
            {...register("chassis", { required: true })}
            id="chassis"
            name="chassis"
            className="border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline"
          >
            <option value="">Selecione...</option>
            <option>Chassi 1</option>
            <option>123132</option>
            <option>984873945</option>
          </select>
        </div>

        <div className="flex-col flex">
          <LabelForm htmlFor="fleet">Frota</LabelForm>
          <select
            {...register("fleet", { required: true })}
            id="fleet"
            name="fleet"
            className="border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline"
          >
            <option value="">Selecione...</option>
            <option>Sim</option>
            <option>Não</option>
          </select>
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
          <LabelForm htmlFor="project">Localização da chave</LabelForm>
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
              type="submit"
              disabled={isSubmitting}
              className="bg-green-400 hover:bg-green-500 rounded py-2 px-4 text-white font-semibold"
            >
              {isSubmitting ? "Criando ordem..." : "Criar ordem"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
