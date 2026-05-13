"use client";

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

  if (!imageSrc || imageSrc === "null") {
    return product.editorial_text ? <p>{product.editorial_text}</p> : null;
  }

  return (
    <div
      className={`relative w-full ${getAspectRatio(product.id)} overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageSrc}
        alt={product.name[locale]}
        fill
        className="object-cover"
      />
    </div>
  );
}
