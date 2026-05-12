// lib/faq.ts
import { supabase } from "@/lib/supabaseClient";

type FaqTranslations = {
  da: string;
  en: string;
};

export type Faq = {
  id: number;
  created_at: string;
  question: FaqTranslations;
  answer: FaqTranslations;
};

export async function getFaqs(limit?: number): Promise<Faq[]> {
  let query = supabase.from("faq").select("*").order("created_at", { ascending: true });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Fejl ved hentning af FAQs:", error);
    return [];
  }

  return data as Faq[];
}
