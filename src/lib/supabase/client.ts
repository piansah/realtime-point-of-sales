import { createBrowserClient } from "@supabase/ssr";
import { environment } from "@/configs/environment";

export default function createClient() {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = environment;
  return createBrowserClient(SUPABASE_URL!, SUPABASE_ANON_KEY);
}
