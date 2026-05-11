import { supabase } from "@/lib/supabaseClient";

export async function getPopularProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_popular", true)
    .order("sort_by");

  if (error) throw error;
  return data;
}

export async function getRelatedProducts(currentId: number, category: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .neq("id", currentId)
    .order("sort_by");

  if (error) throw error;
  return data;
}
