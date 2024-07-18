import { LabelFormProps } from "@/types/label";

export default function LabelForm(props: LabelFormProps) {
  return (
    <label {...props} className={`text-[#43464A] font-semibold p-1`}>
      {props.children}
    </label>
  );
}
