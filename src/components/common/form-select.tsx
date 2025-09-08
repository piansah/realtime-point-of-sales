import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

export default function FormSelect<T extends FieldValues>({
  form,
  name,
  label,
  selectItem,
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  selectItem: { value: string; label: string; disable?: boolean }[];
}) {
  return (
    <div className="mb-2">
      {/* Email */}
      <FormField
        control={form.control}
        name={name}
        render={({ field: { onChange, ...rest } }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Select {...rest} onValueChange={onChange}>
                <SelectTrigger
                  className={cn("w-full", {
                    "border-red-500": form.formState.errors[name],
                  })}
                >
                  <SelectValue placeholder={`Select ${label}`}></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {selectItem.map((item) => (
                      <SelectItem
                        key={item.label}
                        value={item.value}
                        disabled={item.disable}
                        className="capitalize"
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </div>
  );
}
