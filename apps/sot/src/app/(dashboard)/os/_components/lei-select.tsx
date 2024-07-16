export default function LeiSelect() {
  return (
    <select className="border rounded text-[#757575] p-2 w-[60%]">
      <option value="">Selecione...</option>
      <option value={"oficina"}>Cadastro de Veículo</option>
      <option value={"LEI"}>Retirada de Veículo</option>
      <option value={"LEI"}>Cadastro de Equipamento</option>
    </select>
  );
}
