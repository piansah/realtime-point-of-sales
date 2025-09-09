import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FileImage } from "lucide-react";
import { Input } from "../ui/input";
import { getImageData } from "@/lib/utils";
import { Preview } from "@/types/general";

export default function FormImage<T extends FieldValues>({
  form,
  name,
  label,
  preview,
  setPreview,
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  preview?: Preview;
  setPreview?: (preview: Preview) => void;
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
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10 rounded-full">
                <AvatarImage
                  src={preview?.displayUrl}
                  alt="preview"
                  className="object-cover"
                />
                <AvatarFallback className="rounded-lg">
                  <FileImage className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <Input
                type="file"
                name={rest.name}
                ref={rest.ref}
                onBlur={rest.onBlur}
                disabled={rest.disabled}
                onChange={async (e) => {
                  onChange(e);
                  const { file, displayUrl } = getImageData(e);
                  if (file) {
                    setPreview?.({ file, displayUrl });
                  }
                }}
              />
            </div>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </div>
  );
}
