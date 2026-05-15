import { Suspense } from "react";
import ProductsContent from "./components/products_content";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";
import { getAspectRatio } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import GlobalH1Section from "../global_components/global-h1-section";
import { getTranslations } from "next-intl/server";

export default async function ProductsPage() {
  const t = await getTranslations("products");
  const locale = (await getLocale()) as "da" | "en";

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content">
        <GlobalH1Section title={t("title")} />
        <Suspense fallback={<p>Loading products...</p>}>
          <ProductsContent />
        </Suspense>
        
        
        <GlobalH1Section title={t("title")} />
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <li className="flex flex-col gap-4">
                <div>[ {product.sort_by} ]</div>
                <p>{product.name[locale]}</p>
                {product.pics?.[0] && product.pics[0] !== "null" ? (
                  <div
                    className={`relative w-full ${getAspectRatio(product.id)} overflow-hidden`}
                  >
                    <Image
                      src={product.pics[0]}
                      alt={product.name[locale]}
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