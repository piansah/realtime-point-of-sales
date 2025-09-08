import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

export default function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="mb-2">
      {/* Email */}
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              {type === "textarea" ? (
                <Textarea
                  {...field}
                  placeholder={placeholder}
                  autoComplete="off"
                />
              ) : (
                <Input
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  autoComplete="off"
                  className="resize-none"
                />
              )}
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </div>
  );
}
