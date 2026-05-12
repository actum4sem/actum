import PriceCalculator from "./components/price_calculator";
import Images from "./components/images";
import ProductGrid from "../../global_components/product_grid";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById } from "@/lib/products";
import { getRelatedProducts } from "@/lib/products";
import { getMaterials } from "@/lib/materials";

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProductById(id);
  if (!product) return notFound();
  if (!product.category) return notFound(); // ← tilføj denne linje

  const [materials, relatedProducts] = await Promise.all([
    getMaterials(),
    getRelatedProducts(product.id, product.category),
  ]);

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content col-span-2 flex flex-col gap-6 lg:flex-row lg:gap-20">
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

        <div className="flex flex-col gap-10 justify-stretch lg:max-w-2xl lg:ml-auto w-full">
          <h1>{product.name}</h1>
          <p className="indent-36">{product.description}</p>
          <PriceCalculator materials={materials ?? []} />
        </div>
      </section>
      <ProductGrid
        products={relatedProducts ?? []}
        title="Relaterede produkter"
      />
    </main>
  );
}
