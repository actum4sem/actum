import { supabase } from "@/lib/supabaseClient";

export async function getIndexImages(): Promise<string[]> {
  const { data, error } = await supabase.storage.from("index").list();

  if (error) {
    console.error("Fejl ved hentning af billeder:", error);
    return [];
  }

  return data
    .filter((file) => file.name !== ".emptyFolderPlaceholder")
    .map((file) => supabase.storage.from("index").getPublicUrl(file.name).data.publicUrl);
}