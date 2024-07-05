import { SelectFormProps } from "@/types/select";
import { fetchAllField } from "../actions";

export default async function SelectForm(props: SelectFormProps) {
  const options = await fetchAllField(props.name);

  return (
    <select
      {...props}
      className={`border rounded text-[#757575] p-2 w-[200px] shadow hover:border-gray-400 focus:border-blue-500 focus:shadow-outline ${props.className}`}
    >
      <option value="">Selecione...</option>
      {options?.map((optionString) => <option>{optionString}</option>)}
    </select>
  );
}
