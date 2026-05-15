import Link from "next/link";
import { getAllProducts } from "@/lib/products";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import GlobalH1Section from "../../global_components/global-h1-section";
import ProductImage from "../../global_components/product_image";

export default async function ProductsPage() {
  const products = await getAllProducts();
  const t = await getTranslations("products");
  const locale = (await getLocale()) as "da" | "en";

  return (
    <section className="content">
      <GlobalH1Section title={t("title")} />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <li className="flex flex-col gap-4">
              <div>[ {product.sort_by} ]</div>
              <p>{product.name[locale]}</p>
              <ProductImage product={product} locale={locale} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
