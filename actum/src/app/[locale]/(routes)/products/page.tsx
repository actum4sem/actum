import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { Fragment } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  pics: string[];
  editorial_text: string | null;
  sort_by: number;
};

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("id, name, description, pics, editorial_text, sort_by")
    .order("sort_by");

  if (error) {
    console.error(error);
    return <p>Kunne ikke hente produkter.</p>;
  }

  const aspectRatios = [
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-square",
    "aspect-[2/3]",
    "aspect-[16/9]",
  ];

  const getAspectRatio = (id: number) => aspectRatios[id % aspectRatios.length];

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content">
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <li className="flex flex-col gap-2">
                <div>[ {product.sort_by} ]</div>
                <p>{product.name}</p>
                {product.pics?.[0] && product.pics[0] !== "null" ? (
                  <div
                    className={`relative w-full ${getAspectRatio(product.id)} overflow-hidden`}
                  >
                    <Image
                      src={product.pics[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : product.editorial_text ? (
                  <p>{product.editorial_text}</p>
                ) : null}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}
