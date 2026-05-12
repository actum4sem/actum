import { supabase } from "@/lib/supabaseClient";
import { Material } from "./types";

//
export async function getMaterials(): Promise<Material[]> {
  const { data } = await supabase
    .from("materials")
    .select("id, name, price_per_unit, category");
  return data ?? [];
}
