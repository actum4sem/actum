import { supabase } from "@/lib/supabaseClient";
import FullBleedTest from "./fullbleed_test";
import Hero from "./components_index/hero_section";
import AboutSection from "./components_index/about_section";
import FaqSection from "./components_index/faq_section";

export default function Home() {
  // Hent data fra din nye tabel
  // const { data, error } = await supabase.from("personel").select("*");

  // if (error) return <div>Fejl: {error.message}</div>;

  return (
    <main className="full-bleed grid grid-cols-subgrid">
        <Hero />
      <FullBleedTest />
        <AboutSection />
        <FaqSection />
    </main>
  );
}