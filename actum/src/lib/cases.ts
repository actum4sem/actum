import { supabase } from "@/lib/supabaseClient";
import { Case } from "@/lib/types";

// Henter alle cases fra Supabase sorteret efter order
export async function getCases(): Promise<Case[]> {
  const { data, error } = await supabase
    .from("cases")
    .select("*")
    .order("order", { ascending: true });

  if (error) {
    console.error("Fejl ved hentning af cases:", error);
    return [];
  }

  return data ?? [];
}
