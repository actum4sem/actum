"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/product_images/pic1.png",
  "/product_images/pic2.png",
  "/product_images/pic3.png",
];

export default function ImageGallery() {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex gap-2 flex-row">
      {/* Stort aktivt billede */}
      <figure>
        <Image
          src={activeImage}
          width={800}
          height={600}
          alt="Aktivt billede"
        />
      </figure>

      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActiveImage(img)}
            className={activeImage === img ? "opacity-100" : "opacity-75"}
          >
            <Image src={img} width={150} height={100} alt="Thumbnail" />
          </button>
        ))}
      </div>
    </div>
  );
}
