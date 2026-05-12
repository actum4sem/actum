import { supabase } from "@/lib/supabaseClient";

export type ContactFormData = {
  email: string;
  name: string;
  phone: string;
  message: string;
};

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const { error } = await supabase.from("contact_submissions").insert([data]);

  if (error) throw error;
}
