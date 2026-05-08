import { supabase } from "@/lib/supabaseClient";
import PriceCalculator from "./components/price_calculator";
import Images from "./components/images";
import { notFound } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  pics: string[];
};

type Material = {
  id: number;
  name: string;
};

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: product, error } = await supabase
    .from("products")
    .select("id, name, description, pics")
    .eq("id", id)
    .single();
  if (error || !product) return notFound();

  const { data: materials } = await supabase.from("materials").select("*");
  console.log("pics type:", typeof product.pics, product.pics);

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content flex gap-20 col-span-2">
        <div className="max-w-xl">
          <Images pics={product.pics ?? []} />
        </div>
        <div className="flex flex-col gap-10 justify-stretch max-w-2xl ml-auto">
          <h1>{product.name}</h1>
          <p className="indent-36">{product.description}</p>
          <PriceCalculator materials={materials ?? []} />
        </div>
      </section>
    </main>
  );
}
