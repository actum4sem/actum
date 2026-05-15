import { Suspense } from "react";
import ProductsContent from "./components/products_content";
import GlobalH1Section from "../global_components/global-h1-section";
import { getTranslations } from "next-intl/server";

export default async function ProductsPage() {
  const t = await getTranslations("products");

  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <section className="content">
        <GlobalH1Section title={t("titel")} />
        <Suspense fallback={<p>Loading products...</p>}>
          <ProductsContent />
        </Suspense>
      </section>
    </main>
  );
}