import { supabase } from "@/lib/supabaseClient";

export async function getFaqImages(): Promise<string[]> {
  const { data, error } = await supabase.storage.from("faq-gallery")
  .list()

 

  if (error) {
    console.error("Fejl ved hentning af billeder:", error);
    return [];
  }

  return data.filter((file) => file.name !== ".emptyFolderPlaceholder").map((file) => supabase.storage.from("faq-gallery").getPublicUrl(file.name).data.publicUrl);
}
