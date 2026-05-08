import { supabase } from "@/lib/supabaseClient";
import PriceCalculator from "./components/price_calculator";
import Images from "./components/images";
import { notFound } from "next/navigation";
import Link from "next/link";

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

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content col-span-2 flex flex-col gap-6 lg:flex-row lg:gap-20">
        {/* Breadcrumb — visible on desktop above images, on mobile above images too */}
        <div className="lg:hidden">
          <p className="font-ocr text-xs text-grey">
            <Link
              href="/products"
              className="no-underline transition-opacity duration-200 hover:opacity-70"
            >
              Produkter
            </Link>
            {" / "}
            <span>{product.name}</span>
          </p>
        </div>

        {/* Images — full width on mobile, constrained on desktop */}
        <div className="w-full lg:max-w-xl lg:shrink-0">
          <p className="hidden lg:block font-ocr text-xs text-grey mb-2">
            <Link
              href="/products"
              className="no-underline transition-opacity duration-200 hover:opacity-70"
            >
              Produkter
            </Link>
            {" / "}
            <span>{product.name}</span>
          </p>
          <Images pics={product.pics ?? []} />
        </div>

        {/* Product info + price calculator */}
        <div className="flex flex-col gap-10 justify-stretch lg:max-w-2xl lg:ml-auto w-full">
          <h1>{product.name}</h1>
          <p className="indent-36">{product.description}</p>
          <PriceCalculator materials={materials ?? []} />
        </div>
      </section>
    </main>
  );
}
