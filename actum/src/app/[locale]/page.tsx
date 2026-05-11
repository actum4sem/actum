import { getPopularProducts } from "@/lib/products";
import ProductGrid from "@/app/[locale]/(routes)/global_components/product_grid";
import FullBleedTest from "./fullbleed_test";
import Hero from "./components_index/hero_section";

export default async function Home() {
  const popularProducts = await getPopularProducts();

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <Hero />
      <FullBleedTest />
      <ProductGrid
        products={popularProducts ?? []}
        title="Populære produkter"
      />
    </main>
  );
}
