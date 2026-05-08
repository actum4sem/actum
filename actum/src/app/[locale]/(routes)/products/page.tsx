import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

type Product = {
  id: number;
  name: string;
  description: string;
};

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("id, name, description");

  if (error) {
    console.error(error);
    return <p>Kunne ikke hente produkter.</p>;
  }

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
