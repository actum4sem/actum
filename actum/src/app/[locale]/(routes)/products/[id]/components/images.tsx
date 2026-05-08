"use client";
import { useState } from "react";
import Image from "next/image";

type Props = {
  pics: string[];
};

export default function ImageGallery({ pics }: Props) {
  const [activeImage, setActiveImage] = useState(pics[0]);

  return (
    <div className="flex gap-2 flex-row">
      <figure>
        <Image
          src={activeImage}
          width={800}
          height={600}
          alt="Aktivt billede"
        />
      </figure>
      <div className="flex flex-col gap-2">
        {pics.map((img) => (
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
