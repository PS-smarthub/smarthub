import React from "react";

export default function OficinaForm() {
  return (
    <form className="max-h-[450px] overflow-y-auto pb-10">
      <div className="flex gap-12">
        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Montadora
          </label>
          <select className="border rounded text-[#757575] p-2 w-[200px]">
            <option>Selecione...</option>
            <option>Fiat</option>
            <option>Toyota</option>
            <option>Honda</option>
          </select>
        </div>

        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Projeto
          </label>
          <select className="border rounded text-[#757575] p-2 w-[450px]">
            <option>Projeto 1</option>
            <option>Projeto 2</option>
            <option>Projeto 3</option>
          </select>
        </div>

        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Interno
          </label>
          <select className="border rounded text-[#757575] p-2  w-[150px]">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>

      <div className="flex gap-12 mt-8">
        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Modelo
          </label>
          <select className="border rounded text-[#757575] p-2 w-[200px]">
            <option>Fiat</option>
            <option>Toyota</option>
            <option>Honda</option>
          </select>
        </div>

        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Chassi
          </label>
          <select className="border rounded text-[#757575] p-2 w-[200px]">
            <option>Projeto 1</option>
            <option>Projeto 2</option>
            <option>Projeto 3</option>
          </select>
        </div>

        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Frota
          </label>
          <select className="border rounded text-[#757575] p-2 w-[200px]">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Localização do veículo
          </label>
          <input
            type="text"
            className="border rounded text-[#757575] p-2 w-[400px]"
            placeholder="Ex: Na oficina"
          />
        </div>

        <div className="flex-col flex">
          <label
            className="text-[#43464A] font-semibold p-1"
            htmlFor="automaker"
          >
            Localização da chave
          </label>
          <input
            type="text"
            className="border rounded text-[#757575] p-2 w-[400px]"
            placeholder="Ex: No carro"
          />
        </div>
        <textarea
          placeholder="Informações do serviço"
          className="mt-6 border rounded text-[#757575] w-[60%] h-[150px] p-2"
        />
        <div className="flex items-center space-x-28">
          <div className="flex gap-4 items-center">
            <label className="text-[#43464A] font-semibold p-1">Data de entrega desejada:</label>
            <input className="border rounded text-[#757575] p-2" type="date"/>
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
