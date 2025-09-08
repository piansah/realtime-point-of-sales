"use server";

import { environment } from "@/configs/environment";
import { createClient } from "@/lib/supabase/server";

export async function UploadFile(
  bucket: string,
  file: File,
  path: string,
  prevPath?: string
) {
  const supabase = await createClient();

  const newPath = `${path}/${Date.now()}-${file.name}`;

  if (prevPath) {
    const { error } = await supabase.storage.from(bucket).remove([prevPath]);
    if (error) {
      return {
        status: "error",
        errors: {
          _form: [error.message],
        },
      };
    }
  }

  const { error } = await supabase.storage.from(bucket).upload(newPath, file, {
    cacheControl: "3600",
    upsert: true,
  });
  if (error) {
    return {
      status: "error",
      errors: {
        _form: [error.message],
      },
    };
  }
  return {
    status: "success",
    data: {
      url: `${environment.SUPABASE_URL}/storage/v1/object/public/${bucket}/${newPath}`,
      path: newPath,
    },
  };
}

export async function DeleteFile(bucket: string, path: string) {
  const supabase = await createClient();

  const { error } = await supabase.storage.from(bucket).remove([path]);
  if (error) {
    return {
      status: "error",
      errors: {
        _form: [error.message],
      },
    };
  }
  return { status: "success" };
}
