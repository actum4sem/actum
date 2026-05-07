import { supabase } from "@/lib/supabaseClient";
import FullBleedTest from "./fullbleed_test";
import Hero from "./components_index/hero_section";

export default async function Home() {
  // Hent data fra din nye tabel
  // const { data, error } = await supabase.from("personel").select("*");

  // if (error) return <div>Fejl: {error.message}</div>;

  return (
    <main className="full-bleed grid grid-cols-subgrid">
        <Hero />
      <FullBleedTest />
  
    </main>
  );
}