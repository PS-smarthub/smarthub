import { useForm } from "react-hook-form";
import {
  CreateWorkshopOrderSchema,
  FormData,
} from "@/schemas/CreateWorkshopOrderSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { errorToast } from "@/lib/toast";

export default function OficinaForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(CreateWorkshopOrderSchema),
  });

  const createWorkshopOrder = async (data: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:3030/service-order/workshop",
        {
          automaker: data.automaker,
          project: data.project,
          isIntern: data.isIntern,
          model: data.model,
          chassis: data.chassis,
          fleet: data.fleet,
          vehicleLocation: data.vehicle_location,
          keyLocation: data.key_location,
          deliveryDate: data.delivery_date,
          serviceInformations: data.description,
        }
      );

      reset();
    } catch (err) {
      errorToast("Erro ao criar ordem de serviço");
    }
  };

  return (
    <form onSubmit={handleSubmit(createWorkshopOrder)}>
      <div className="flex gap-12">
        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Montadora
          </label>
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
          <label className="text-[#43464A] font-semibold p-1" htmlFor="project">
            Projeto
          </label>
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
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="isIntern"
          >
            Interno
          </label>
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
          <label className="text-[#43464A] font-semibold p-1" htmlFor="model">
            Modelo
          </label>
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
          <label className="text-[#43464A] font-semibold p-1" htmlFor="chassis">
            Chassi
          </label>
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
          {errors.chassis && <p>{errors.chassis.message}</p>}
        </div>

        <div className="flex-col flex">
          <label className="text-[#43464A] font-semibold p-1" htmlFor="fleet">
            Frota
          </label>
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
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="vehicle_location"
          >
            Localização do veículo
          </label>
          <input
            {...register("vehicle_location", { required: true })}
            id="vehicle_location"
            name="vehicle_location"
            type="text"
            className="border rounded text-[#757575] p-2 w-[400px] shadow hover:border-gray-400 focus:shadow-outline"
            placeholder="Ex: Na oficina"
          />
        </div>

        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="key_location"
          >
            Localização da chave
          </label>
          <input
            {...register("key_location", { required: true })}
            id="key_location"
            name="key_location"
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
            <label
              className="text-[#43464A] font-semibold p-1"
              htmlFor="delivery_date"
            >
              Data de entrega desejada:
            </label>
            <input
              {...register("delivery_date", { required: true })}
              id="delivery_date"
              name="delivery_date"
              className="border rounded text-[#757575] p-2 shadow hover:border-gray-400 focus:shadow-outline"
              type="date"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 rounded py-2 px-4 text-white font-semibold"
            >
              Criar ordem
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
