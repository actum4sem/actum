import { Link } from "@i18n/navigation";
import Image from "next/image";
import { Product } from "@/lib/types";
import { getAspectRatio } from "@/lib/utils";
import { getLocale } from "next-intl/server";

export default async function ProductGrid({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) {
  const locale = (await getLocale()) as "da" | "en";

  if (products.length === 0) return null;

  return (
    <section className="content">
      <h2>{title}</h2>
      <ul
        className="flex overflow-x-auto gap-4 no-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <li
              className="flex flex-col gap-2 shrink-0 w-70"
              style={{ scrollSnapAlign: "start" }}
            >
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
  );
}
