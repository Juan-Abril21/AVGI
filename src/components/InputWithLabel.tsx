import { Input } from "@/components/ui/input";
import { Label } from "../components/ui/label";

interface InputWithLabelProps {
  label: string;
  type: string;
  hint: string;
  id: string;
}

export function InputWithLabel({ label, type, hint, id }: InputWithLabelProps) {
  return (
    <div className="grid w-full items-center gap-1.5 ">
      <Label>{label}</Label>
      <Input type={type} id={id} placeholder={hint} />
    </div>
  );
}
