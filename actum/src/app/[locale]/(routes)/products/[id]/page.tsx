import PriceCalculator from "./components/price_calculator";
import Images from "./components/images";
import ProductGrid from "../../global_components/product_grid";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById } from "@/lib/products";
import { getRelatedProducts } from "@/lib/products";
import { getMaterials } from "@/lib/materials";

export default async function SingleProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await getProductById(id);
  if (!product) return notFound();
  if (!product.category) return notFound();

  const [materials, relatedProducts] = await Promise.all([getMaterials(), getRelatedProducts(product.id, product.category)]);

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
        {/* Venstre kolonne – billeder */}
        <div>
          <p className="font-ocr text-xs text-grey mb-2">
            <Link href="/products" className="no-underline transition-opacity duration-200 hover:opacity-70">
              Produkter
            </Link>
            {" / "}
            <span>{product.name}</span>
          </p>
          <Images pics={product.pics ?? []} />
        </div>

        {/* Højre kolonne – titel, beskrivelse og prisberegner */}
        <div className="flex flex-col gap-10">
          <h1>{product.name}</h1>
          <p className="">{product.description}</p>
          <PriceCalculator materials={materials ?? []} />
        </div>
      </section>
      <ProductGrid products={relatedProducts ?? []} title="Relaterede produkter" />
    </main>
  );
}
