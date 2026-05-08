import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { link } from "fs";

type Product = {
  id: number;
  name: string;
  description: string;
  pics: string[];
};

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("id, name, description, pics");

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

  // Inde i din komponent, over return:
  const getAspectRatio = (id: number) => aspectRatios[id % aspectRatios.length];

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content">
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <li className="flex flex-col gap-2">
                <div>[ {product.id} ]</div>
                <p>{product.name}</p>
                {product.pics?.[0] && product.pics[0] !== "null" && (
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
                )}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}
