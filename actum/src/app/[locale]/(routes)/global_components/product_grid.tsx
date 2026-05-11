// components/ProductGrid.tsx

import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  description: string;
  pics: string[];
  editorial_text: string | null;
  sort_by: number;
};

const aspectRatios = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[2/3]",
  "aspect-[16/9]",
];

const getAspectRatio = (id: number) => aspectRatios[id % aspectRatios.length];
export default function ProductGrid({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) {
  if (products.length === 0) return null;

  return (
    <section className="content">
      <h2>{title}</h2>
      <ul
        className="flex overflow-x-auto gap-4 no-scrollbar "
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
              <p>{product.name}</p>
              {product.pics?.[0] && product.pics[0] !== "null" ? (
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
