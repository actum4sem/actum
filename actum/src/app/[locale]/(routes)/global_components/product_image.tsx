"use client";

import { Link } from "@i18n/navigation";
import Image from "next/image";
import { Product } from "@/lib/types";
import { getAspectRatio } from "@/lib/utils";
import { useState } from "react";

export default function ProductImage({
  product,
  locale,
}: {
  product: Product;
  locale: "da" | "en";
}) {
  const [isHovered, setIsHovered] = useState(false);

  const hasSecondImage = product.pics?.[1] && product.pics[1] !== "null";

  const imageSrc =
    isHovered && hasSecondImage ? product.pics![1] : product.pics?.[0];

  return (
    <Link href={`/products/${product.id}`}>
      <li
        className="flex flex-col gap-2 shrink-0 w-70"
        style={{ scrollSnapAlign: "start" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>[ {product.sort_by} ]</div>
        <p>{product.name[locale]}</p>
        {imageSrc && imageSrc !== "null" ? (
          <div
            className={`relative w-full ${getAspectRatio(product.id)} overflow-hidden`}
          >
            <Image
              src={imageSrc}
              alt={product.name[locale]}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>
        ) : product.editorial_text ? (
          <p>{product.editorial_text}</p>
        ) : null}
      </li>
    </Link>
  );
}
