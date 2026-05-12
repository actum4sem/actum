import { supabase } from "@/lib/supabaseClient";
import { Product } from "@/lib/types";

// bruges i produktgrid på index
export async function getPopularProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, pics, editorial_text, sort_by")
    .eq("is_popular", true)
    .order("sort_by");

  if (error) throw error;
  return data ?? [];
}

// bruges i single product page
export async function getRelatedProducts(
  currentId: number,
  category: string,
): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, pics, sort_by")
    .eq("category", category)
    .neq("id", currentId)
    .order("sort_by");

  if (error) throw error;
  return data ?? [];
}

// bruges i single product page
export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, pics, category")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data;
}

// bruges i products/page.tsx
export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, pics, editorial_text, sort_by")
    .order("sort_by");

  if (error) throw error;
  return data ?? [];
}
