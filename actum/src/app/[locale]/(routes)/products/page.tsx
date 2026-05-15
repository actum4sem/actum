import { Suspense } from "react";
import ProductsContent from "./components/products_content";
import Link from "next/link";
import { getAllProducts } from "@/lib/products";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import GlobalH1Section from "../global_components/global-h1-section";
import ProductImage from "../global_components/product_image";

export default async function ProductsPage() {
  const t = await getTranslations("products");
  const locale = (await getLocale()) as "da" | "en";

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductsContent />
      </Suspense>
    </main>
  );
}
