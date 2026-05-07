import { supabase } from "@/lib/supabaseClient";
import PriceCalculator from "./components/price_calculator";
import Images from "./components/images";

export default async function Home() {
  const { data: materials } = await supabase.from("materials").select("*");

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content flex gap-20 col-span-2">
        <div className=" max-w-xl">
          <Images />
        </div>
        <div className="flex flex-col gap-10 justify-stretch max-w-2xl ml-auto ">
          <PriceCalculator materials={materials ?? []} />
        </div>
      </section>
    </main>
  );
}
