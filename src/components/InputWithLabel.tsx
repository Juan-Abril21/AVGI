import { Input } from "@/components/ui/input";
import { Label } from "../components/ui/label";

interface InputWithLabelProps {
  label: string;
  type: string;
  hint: string;
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputWithLabel({ 
  label, 
  type, 
  hint, 
  id, 
  value, 
  onChange 
}: InputWithLabelProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input 
        type={type} 
        id={id} 
        placeholder={hint}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}