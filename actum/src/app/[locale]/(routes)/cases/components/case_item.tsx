"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Type der matcher cases tabellen i Supabase
type Case = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  orientation: string;
  order: number;
};

// Props for CaseItem komponenten — modtager et caseItem af typen Case
type Props = {
  caseItem: Case;
};

export default function CaseItem({ caseItem }: Props) {
  // useRef bruges til at måle scroll-progress relativt til dette element
  const ref = useRef(null);

  // useScroll måler hvor langt man har scrollet relativt til elementet
  // start end = når elementets top rammer viewport bund (elementet er lige ved at komme ind)
  // center center = når elementets midte rammer viewport midte
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // useTransform konverterer scroll-progress (0 til 1) til en clip-path værdi
  // Ved 0% scroll er billedet skjult — clip-path skjuler alt fra midten
  // Ved 100% scroll er billedet fuldt synligt — clip-path er væk
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <>
      <div
        id={`case-${caseItem.order}`}
        className="col-span-3 flex flex-col items-end md:items-center"
      >
        {caseItem.image_url && (
          // motion.div håndterer clip-path animationen
          // ref er sat her så useScroll kan måle scroll-progress relativt til billedet
          <motion.div
            ref={ref}
            style={{ clipPath }}
            className="w-full flex justify-center"
          >
            <Image
              src={caseItem.image_url.trim()}
              alt={caseItem.title}
              width={800}
              height={900}
              className="w-full h-auto"
            />
          </motion.div>
        )}
        <p className="md:hidden">{caseItem.description}</p>
      </div>

      <div className="hidden md:flex justify-center items-center">
        <p>{caseItem.description}</p>
      </div>
    </>
  );
}
