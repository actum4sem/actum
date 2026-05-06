import { supabase } from "@/lib/supabaseClient";
import PriceCalculator from "./components/price-calculater";

export default async function Home() {
  const { data: materials } = await supabase.from("materials").select("*");

  return (
    <main>
      <PriceCalculator materials={materials ?? []} />
    </main>
  );
}
