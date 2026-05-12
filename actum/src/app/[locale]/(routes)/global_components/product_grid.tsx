import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { getAspectRatio } from "@/lib/utils";

// aspect ratios der roteres igennem baseret på produkt-id. Skaber visuel variation i gridden uden manuel konfiguration

export default function ProductGrid({
  products,
  title,
}: {
  products: Product[];
  title: string;
}) {
  // Render ikke sektionen overhovedet, hvis der ikke er nogle produkter
  if (products.length === 0) return null;

  return (
    <section className="content">
      <h2>{title}</h2>

      {/* Horisontal scrollbar liste med snap-adfærd til touch og trackpad */}
      <ul
        className="flex overflow-x-auto gap-4 no-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch", // Smooth momentum-scroll på iOS
        }}
      >
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            {/* shrink-0 forhindrer items i at kollapse inde i flex-containeren */}
            <li
              className="flex flex-col gap-2 shrink-0 w-70"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>[ {product.sort_by} ]</div>
              <p>{product.name}</p>

              {/*
                Billedvisning med fallback-logik:
                1. Hvis der findes en gyldig billed-URL → vis billede med dynamisk aspect ratio
                2. Hvis intet billede, men editorial_text findes → vis tekst i stedet
                3. Hvis ingen af delene → render ingenting
                Tjekket for string "null" håndterer tilfælde hvor Supabase returnerer strengen "null"
              */}
              {product.pics?.[0] && product.pics[0] !== "null" ? (
                <div
                  //her kalder vi getAspectRatio for at få en CSS-klasse baseret på produkt-id, hvilket skaber variationen i billedstørrelserne
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
