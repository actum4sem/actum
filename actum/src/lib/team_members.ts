import { supabase } from "@/lib/supabaseClient";
import { TeamMember } from "@/lib/types";

// bruges i team-sektion på /about
export async function getTeamMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from("team_members")
    .select("id, name, title, description, image_url, display_order")
    .order("display_order");

  if (error) throw error;
  return data ?? [];
}
