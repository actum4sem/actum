"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images: string[];
};

function shuffle(array: string[]): string[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const aspectRatios = ["aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[2/3]", "aspect-[16/9]"];

const getAspectRatio = (id: number) => aspectRatios[id % aspectRatios.length];

const VISIBLE_COUNT = 6;
const INTERVAL = 3500;
const getSwapCount = () => Math.floor(Math.random() * 3) + 1;

export default function FaqGallery({ images }: Props) {
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    if (!images || images.length === 0) return;
    setVisible(shuffle(images).slice(0, VISIBLE_COUNT));
  }, [images]);

  useEffect(() => {
    if (!images || images.length === 0 || visible.length === 0) return;

    const interval = setInterval(() => {
      setVisible((prev) => {
        const next = [...prev];
        const pool = images.filter((img) => !next.includes(img));
        if (pool.length === 0) return prev;

        const indicesToReplace = [...Array(next.length).keys()].sort(() => Math.random() - 0.5).slice(0, getSwapCount());

        indicesToReplace.forEach((replaceIndex) => {
          if (pool.length === 0) return;
          const newImage = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
          next[replaceIndex] = newImage;
        });

        return next;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [visible, images]);

  const col1 = visible.filter((_, i) => i % 2 === 0);
  const col2 = visible.filter((_, i) => i % 2 !== 0);

  if (!images || images.length === 0) return null;

  return (
 
<div className="col-[content-start/content-end] md:col-[content-start/4] flex flex-col md:grid md:grid-cols-2 md:order-first gap-2 ">
  {[col1, col2].map((col, colIndex) => (
    <div key={colIndex} className="flex flex-row md:flex-col gap-2">
      {col.map((url, index) => (
        <div key={index} className={`relative w-full overflow-hidden ${getAspectRatio(colIndex * 3 + index)}`}>
              <AnimatePresence mode="wait">
                <motion.div key={url} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute inset-0">
                  <Image src={url} alt="" fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
